import type { Firestore } from 'firebase-admin/firestore'

const TERMINAL_STATUSES = new Set(['completed', 'failed', 'unavailable', 'auth-failed'])

export async function refreshAuditJobStatus(db: Firestore, jobId: string): Promise<void> {
  const jobRef = db.collection('audit_jobs').doc(jobId)
  const snapshot = await jobRef.get()
  if (!snapshot.exists) return

  const summaries = snapshot.data()?.summaries ?? {}
  const statuses = [summaries.seo?.status, summaries.security?.status, summaries.performance?.status]
  if (!statuses.every(status => TERMINAL_STATUSES.has(status))) return

  const hasFailure = statuses.some(status => status === 'failed' || status === 'auth-failed')
  await jobRef.update({ status: hasFailure ? 'partial-failed' : 'completed' })
}
