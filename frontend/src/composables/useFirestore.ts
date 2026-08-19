import {
  collection,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  getDoc,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  onSnapshot,
  runTransaction,
  type DocumentData,
  Timestamp,
  increment,
} from 'firebase/firestore'
import { db } from '@/firebase/config'
import type {
  Project,
  AuditJob,
  BugItem,
  TestCase,
  Comment,
  Notification,
  TestRun,
  MemberRole,
} from '@/types'

function colRef(path: string) {
  return collection(db, path)
}
function docRef(path: string) {
  return doc(db, path)
}

function toBugItem(id: string, data: DocumentData): BugItem {
  return { id, ...data, screenshotUrls: data.screenshotUrls ?? [] } as BugItem
}

// === Projects ===
export function useProjectStore() {
  async function getProjects(userId: string): Promise<Project[]> {
    // Query by ownerId (new schema) or userId (legacy)
    const q = query(
      colRef('projects'),
      where('ownerId', '==', userId),
      orderBy('createdAt', 'desc')
    )
    const snap = await getDocs(q)
    return snap.docs.map(d => ({ id: d.id, ...d.data() } as Project))
  }

  function subscribeProjects(userId: string, callback: (projects: Project[]) => void) {
    const q = query(
      colRef('projects'),
      where('ownerId', '==', userId),
      orderBy('createdAt', 'desc')
    )
    return onSnapshot(q, snap => {
      callback(snap.docs.map(d => ({ id: d.id, ...d.data() } as Project)))
    }, async (err) => {
      // Fallback for index miss or legacy userId field
      console.warn('subscribeProjects error, falling back:', err.message)
      const fallback = query(colRef('projects'), where('ownerId', '==', userId))
      onSnapshot(fallback, snap => {
        callback(snap.docs.map(d => ({ id: d.id, ...d.data() } as Project)))
      })
    })
  }

  async function getProject(id: string): Promise<Project | null> {
    const snap = await getDoc(docRef(`projects/${id}`))
    if (!snap.exists()) return null
    return { id: snap.id, ...snap.data() } as Project
  }

  async function createProject(
    project: Omit<Project, 'id' | 'createdAt' | 'bugCounter' | 'members'>
  ): Promise<string> {
    const docR = await addDoc(colRef('projects'), {
      ...project,
      ownerId: project.ownerId,
      members: { [project.ownerId]: 'owner' as MemberRole },
      bugCounter: 0,
      ownershipVerified: project.ownershipVerified ?? false,
      createdAt: Timestamp.now(),
    })
    return docR.id
  }

  async function updateProject(id: string, data: Partial<Project>): Promise<void> {
    await updateDoc(docRef(`projects/${id}`), data as DocumentData)
  }

  async function deleteProject(id: string): Promise<void> {
    await deleteDoc(docRef(`projects/${id}`))
  }

  async function verifyOwnership(id: string): Promise<void> {
    await updateDoc(docRef(`projects/${id}`), { ownershipVerified: true })
  }

  async function addMember(projectId: string, userId: string, role: MemberRole): Promise<void> {
    await updateDoc(docRef(`projects/${projectId}`), {
      [`members.${userId}`]: role,
    } as DocumentData)
  }

  return {
    getProjects,
    subscribeProjects,
    getProject,
    createProject,
    updateProject,
    deleteProject,
    verifyOwnership,
    addMember,
  }
}

// === Audit Jobs ===
export function useAuditStore() {
  function subscribeAuditJobs(
    projectId: string,
    callback: (jobs: AuditJob[]) => void,
    onError?: (err: Error) => void
  ) {
    const q = query(
      colRef('audit_jobs'),
      where('projectId', '==', projectId),
      orderBy('timestamp', 'desc')
    )
    return onSnapshot(
      q,
      snap => callback(snap.docs.map(d => ({ id: d.id, ...d.data() } as AuditJob))),
      err => {
        console.error('Audit jobs snapshot error:', err)
        if (err.code === 'failed-precondition' || err.message?.includes('index')) {
          console.warn('Composite index missing — deploy firestore.indexes.json')
          callback([])
        }
        onError?.(err)
      }
    )
  }

  async function getAuditJobs(projectId: string): Promise<AuditJob[]> {
    const q = query(
      colRef('audit_jobs'),
      where('projectId', '==', projectId),
      orderBy('timestamp', 'desc')
    )
    const snap = await getDocs(q)
    return snap.docs.map(d => ({ id: d.id, ...d.data() } as AuditJob))
  }

  async function getAuditJob(id: string): Promise<AuditJob | null> {
    const snap = await getDoc(docRef(`audit_jobs/${id}`))
    if (!snap.exists()) return null
    return { id: snap.id, ...snap.data() } as AuditJob
  }

  // Sub-collections — lazy loaded (not bound via onSnapshot to save costs)
  async function getAuditPages(jobId: string) {
    const snap = await getDocs(colRef(`audit_jobs/${jobId}/pages`))
    return snap.docs.map(d => d.data())
  }

  async function getVulnerabilities(jobId: string) {
    const snap = await getDocs(colRef(`audit_jobs/${jobId}/vulnerabilities`))
    return snap.docs.map(d => d.data())
  }

  async function getPerformanceMetrics(jobId: string) {
    const snap = await getDocs(colRef(`audit_jobs/${jobId}/performance_metrics`))
    return snap.docs.map(d => d.data())
  }

  return {
    subscribeAuditJobs,
    getAuditJobs,
    getAuditJob,
    getAuditPages,
    getVulnerabilities,
    getPerformanceMetrics,
  }
}

// === Bug List ===
export function useBugStore() {
  function subscribeBugs(
    projectId: string,
    callback: (bugs: BugItem[]) => void,
    onError?: (err: Error) => void
  ) {
    const q = query(
      colRef('bug_list'),
      where('projectId', '==', projectId),
      orderBy('createdAt', 'desc')
    )
    return onSnapshot(
      q,
      snap => callback(snap.docs.map(d => toBugItem(d.id, d.data()))),
      err => {
        console.error('Bug list snapshot error:', err)
        if (err.code === 'failed-precondition' || err.message?.includes('index')) {
          const fallback = query(colRef('bug_list'), where('projectId', '==', projectId))
          onSnapshot(fallback, snap => {
            callback(snap.docs.map(d => toBugItem(d.id, d.data())))
          })
        }
        onError?.(err)
      }
    )
  }

  async function getBugs(projectId: string): Promise<BugItem[]> {
    try {
      const q = query(
        colRef('bug_list'),
        where('projectId', '==', projectId),
        orderBy('createdAt', 'desc')
      )
      const snap = await getDocs(q)
      return snap.docs.map(d => toBugItem(d.id, d.data()))
    } catch {
      const q = query(colRef('bug_list'), where('projectId', '==', projectId))
      const snap = await getDocs(q)
      return snap.docs.map(d => toBugItem(d.id, d.data()))
    }
  }

  async function getBug(id: string): Promise<BugItem | null> {
    const snap = await getDoc(docRef(`bug_list/${id}`))
    if (!snap.exists()) return null
    return toBugItem(snap.id, snap.data())
  }

  /**
   * Creates a bug with an atomic short ID (e.g. QAS-12) via Firestore transaction.
   * bugCounter on the project doc is incremented atomically.
   * Returns both the Firestore doc id and the generated shortId so callers can
   * upload screenshots to projects/{projectId}/bugs/{shortId}/...
   */
  async function createBug(
    bug: Partial<BugItem> & { projectId: string }
  ): Promise<{ id: string; shortId: string }> {
    const projectRef = docRef(`projects/${bug.projectId}`)
    let bugId = ''
    let shortId = ''

    await runTransaction(db, async (tx) => {
      const projSnap = await tx.get(projectRef)
      const counter = (projSnap.data()?.bugCounter || 0) + 1
      shortId = `QAS-${counter}`
      tx.update(projectRef, { bugCounter: counter })

      const newBugRef = doc(colRef('bug_list'))
      bugId = newBugRef.id
      tx.set(newBugRef, {
        status: 'Open',
        severity: 'Medium',
        tags: [],
        assignees: [],
        commentCount: 0,
        remediationGuide: null,
        screenshotUrls: [],
        ...bug,
        shortId,
        createdAt: Timestamp.now(),
        lastEditedTime: Timestamp.now(),
      })
    })

    return { id: bugId, shortId }
  }

  async function updateBug(id: string, data: Partial<BugItem>): Promise<void> {
    await updateDoc(docRef(`bug_list/${id}`), {
      ...data,
      lastEditedTime: Timestamp.now(),
    } as DocumentData)
  }

  async function deleteBug(id: string): Promise<void> {
    await deleteDoc(docRef(`bug_list/${id}`))
  }

  return { subscribeBugs, getBugs, getBug, createBug, updateBug, deleteBug }
}

// === Comments (sub-collection of bug_list/{bugId}/comments) ===
export function useCommentStore() {
  function subscribeComments(bugId: string, callback: (comments: Comment[]) => void) {
    const q = query(colRef(`bug_list/${bugId}/comments`), orderBy('timestamp', 'asc'))
    return onSnapshot(q, snap => {
      callback(snap.docs.map(d => ({ id: d.id, ...d.data() } as Comment)))
    })
  }

  async function addComment(bugId: string, comment: Omit<Comment, 'id'>): Promise<string> {
    // Increment commentCount atomically
    await updateDoc(docRef(`bug_list/${bugId}`), { commentCount: increment(1) } as DocumentData)
    const ref = await addDoc(colRef(`bug_list/${bugId}/comments`), {
      ...comment,
      timestamp: Timestamp.now(),
    })
    return ref.id
  }

  return { subscribeComments, addComment }
}

// === Test Cases ===
export function useTestCaseStore() {
  function subscribeTestCases(projectId: string, callback: (testCases: TestCase[]) => void) {
    const q = query(
      colRef('test_cases'),
      where('projectId', '==', projectId),
      orderBy('createdAt', 'desc')
    )
    return onSnapshot(q, snap => {
      callback(snap.docs.map(d => ({ id: d.id, ...d.data() } as TestCase)))
    })
  }

  async function getTestCases(projectId: string): Promise<TestCase[]> {
    const q = query(
      colRef('test_cases'),
      where('projectId', '==', projectId),
      orderBy('createdAt', 'desc')
    )
    const snap = await getDocs(q)
    return snap.docs.map(d => ({ id: d.id, ...d.data() } as TestCase))
  }

  async function createTestCase(tc: Partial<TestCase> & { projectId: string }): Promise<string> {
    const ref = await addDoc(colRef('test_cases'), {
      status: 'Untested',
      steps: [],
      tags: [],
      playwrightScript: null,
      lastRun: null,
      ...tc,
      createdAt: Timestamp.now(),
      lastEditedTime: Timestamp.now(),
    })
    return ref.id
  }

  async function updateTestCase(id: string, data: Partial<TestCase>): Promise<void> {
    await updateDoc(docRef(`test_cases/${id}`), {
      ...data,
      lastEditedTime: Timestamp.now(),
    } as DocumentData)
  }

  async function addTestRun(testCaseId: string, run: Omit<TestRun, 'id'>): Promise<string> {
    const ref = await addDoc(colRef(`test_cases/${testCaseId}/test_runs`), {
      ...run,
      runAt: Timestamp.now(),
    })
    await updateDoc(docRef(`test_cases/${testCaseId}`), {
      lastRun: Timestamp.now(),
      status: run.status,
      lastEditedTime: Timestamp.now(),
    } as DocumentData)
    return ref.id
  }

  return { subscribeTestCases, getTestCases, createTestCase, updateTestCase, addTestRun }
}

// === Notifications ===
export function useNotificationStore() {
  function subscribeNotifications(userId: string, callback: (notifications: Notification[]) => void) {
    const q = query(
      colRef('notifications'),
      where('userId', '==', userId),
      orderBy('createdAt', 'desc'),
      limit(50)
    )
    return onSnapshot(q, snap => {
      callback(snap.docs.map(d => ({ id: d.id, ...d.data() } as Notification)))
    })
  }

  async function markAsRead(id: string): Promise<void> {
    await updateDoc(docRef(`notifications/${id}`), { read: true })
  }

  async function markAllAsRead(userId: string): Promise<void> {
    const q = query(colRef('notifications'), where('userId', '==', userId), where('read', '==', false))
    const snap = await getDocs(q)
    const promises = snap.docs.map(d => updateDoc(d.ref, { read: true }))
    await Promise.all(promises)
  }

  return { subscribeNotifications, markAsRead, markAllAsRead }
}
