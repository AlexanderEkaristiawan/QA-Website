<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useAuthStore } from '@/composables/useAuth'
import { useProjectStore } from '@/composables/useFirestore'
import {
  collection, query, where, getDocs, getDoc, setDoc, doc, orderBy, limit,
} from 'firebase/firestore'
import { db } from '@/firebase/config'
import type { Project, AuditJob, BugItem } from '@/types'

const authStore = useAuthStore()
const projectStore = useProjectStore()

const projects = ref<Project[]>([])
const loading = ref(true)

// Derived stats — fetched lazily via getDocs (not onSnapshot, per cost-optimization spec)
const recentAuditsCount = ref<number | null>(null)
const openBugsCount = ref<number | null>(null)
const avgPerformance = ref<number | null>(null)

interface DashboardNote {
  id: string
  text: string
  done: boolean
}

const notesByDate = ref<Record<string, DashboardNote[]>>({})
const selectedDate = ref(toDateKey(new Date()))
const displayedMonth = ref(new Date(new Date().getFullYear(), new Date().getMonth(), 1))
const noteDraft = ref('')
const notesSaving = ref(false)
const notesLoaded = ref(false)
const notesSyncError = ref(false)
const notesRevision = ref(0)

let unsubscribe: (() => void) | null = null
let statsLoaded = false

function toDateKey(date: Date): string {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

function parseDateKey(key: string): Date {
  const [year, month, day] = key.split('-').map(Number)
  return new Date(year, month - 1, day)
}

const monthLabel = computed(() => displayedMonth.value.toLocaleDateString(undefined, { month: 'long', year: 'numeric' }))

const calendarDays = computed(() => {
  const firstDay = new Date(displayedMonth.value.getFullYear(), displayedMonth.value.getMonth(), 1)
  const start = new Date(firstDay)
  start.setDate(firstDay.getDate() - firstDay.getDay())
  return Array.from({ length: 42 }, (_, index) => {
    const date = new Date(start)
    date.setDate(start.getDate() + index)
    const key = toDateKey(date)
    return {
      key,
      day: date.getDate(),
      inMonth: date.getMonth() === displayedMonth.value.getMonth(),
      isToday: key === toDateKey(new Date()),
      noteCount: notesByDate.value[key]?.length || 0,
      completedCount: notesByDate.value[key]?.filter(note => note.done).length || 0,
    }
  })
})

const selectedNotes = computed(() => notesByDate.value[selectedDate.value] || [])
const selectedDateLabel = computed(() => parseDateKey(selectedDate.value).toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' }))

function localNotesKey(uid: string): string {
  return `qa-suite-dashboard-notes:${uid}`
}

function changeMonth(offset: number) {
  displayedMonth.value = new Date(displayedMonth.value.getFullYear(), displayedMonth.value.getMonth() + offset, 1)
}

function selectDate(key: string) {
  selectedDate.value = key
  const date = parseDateKey(key)
  displayedMonth.value = new Date(date.getFullYear(), date.getMonth(), 1)
}

async function persistNotes() {
  const uid = authStore.currentUser.value?.uid
  if (!uid) return
  notesSaving.value = true
  try {
    localStorage.setItem(localNotesKey(uid), JSON.stringify(notesByDate.value))
  } catch (err) {
    console.warn('Dashboard notes local save error:', err)
  }
  try {
    await setDoc(doc(db, 'dashboard_notes', uid), {
      notes: notesByDate.value,
      updatedAt: new Date().toISOString(),
    })
    notesSyncError.value = false
  } catch (err) {
    notesSyncError.value = true
    console.warn('Dashboard notes save error:', err)
  } finally {
    notesSaving.value = false
  }
}

async function loadNotes(uid: string) {
  const revisionAtStart = notesRevision.value
  try {
    const localNotes = localStorage.getItem(localNotesKey(uid))
    if (localNotes) notesByDate.value = JSON.parse(localNotes) as Record<string, DashboardNote[]>
  } catch (err) {
    console.warn('Dashboard notes local load error:', err)
  }

  try {
    const snapshot = await getDoc(doc(db, 'dashboard_notes', uid))
    const storedNotes = snapshot.data()?.notes
    if (revisionAtStart === notesRevision.value && storedNotes && typeof storedNotes === 'object') {
      notesByDate.value = storedNotes as Record<string, DashboardNote[]>
      localStorage.setItem(localNotesKey(uid), JSON.stringify(notesByDate.value))
    }
    notesSyncError.value = false
  } catch (err) {
    notesSyncError.value = true
    console.warn('Dashboard notes load error:', err)
  } finally {
    notesLoaded.value = true
  }
}

async function addNote() {
  const text = noteDraft.value.trim()
  if (!text) return
  const notes = notesByDate.value[selectedDate.value] || []
  notesByDate.value[selectedDate.value] = [...notes, { id: `note-${Date.now()}`, text, done: false }]
  notesRevision.value++
  noteDraft.value = ''
  await persistNotes()
}

async function toggleNote(note: DashboardNote) {
  note.done = !note.done
  notesRevision.value++
  await persistNotes()
}

async function removeNote(noteId: string) {
  notesByDate.value[selectedDate.value] = selectedNotes.value.filter(note => note.id !== noteId)
  notesRevision.value++
  await persistNotes()
}

// ── Lazy stats fetch ─────────────────────────────────────────────────────────
// Runs once when projects first resolve. Uses getDocs (not onSnapshot) to avoid
// expensive listener costs on sub-collection/cross-project queries.
async function loadStats(projectIds: string[]) {
  if (statsLoaded || projectIds.length === 0) return
  statsLoaded = true

  try {
    // 1. Recent audits: completed or partial-failed jobs across all projects in the last 7 days
    const cutoff = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
    let recentCount = 0
    const perfScores: number[] = []

    for (const pid of projectIds) {
      const jobsSnap = await getDocs(
        query(
          collection(db, 'audit_jobs'),
          where('projectId', '==', pid),
          orderBy('timestamp', 'desc'),
          limit(10)
        )
      )
      jobsSnap.forEach(d => {
        const job = d.data() as AuditJob
        const ts = job.timestamp && 'toDate' in job.timestamp ? (job.timestamp as any).toDate() : job.timestamp
        if (ts && ts >= cutoff) recentCount++
        const perf = job.summaries?.performance?.performance
        if (job.status === 'completed' && typeof perf === 'number' && perf > 0) {
          perfScores.push(perf)
        }
      })
    }
    recentAuditsCount.value = recentCount

    // 2. Average performance across all completed jobs
    if (perfScores.length > 0) {
      avgPerformance.value = Math.round(perfScores.reduce((a, b) => a + b, 0) / perfScores.length)
    } else {
      avgPerformance.value = 0
    }

    // 3. Open bugs (status not Resolved) across all projects
    let openCount = 0
    for (const pid of projectIds) {
      const bugsSnap = await getDocs(
        query(
          collection(db, 'bug_list'),
          where('projectId', '==', pid)
        )
      )
      openCount += bugsSnap.docs.filter(d => d.data().status !== 'Resolved').length
    }
    openBugsCount.value = openCount
  } catch (err) {
    console.warn('Dashboard stats load error:', err)
    // Leave values as null — the template will gracefully show '—'
  }
}

onMounted(() => {
  if (!authStore.currentUser.value) return

  void loadNotes(authStore.currentUser.value.uid)

  unsubscribe = projectStore.subscribeProjects(authStore.currentUser.value.uid, (data) => {
    projects.value = data
    loading.value = false
    loadStats(data.map(p => p.id))
  })
})

onUnmounted(() => {
  if (unsubscribe) unsubscribe()
})

function formatDate(ts: any): string {
  if (!ts) return 'Just now'
  if (ts.toDate) return ts.toDate().toLocaleDateString()
  if (ts instanceof Date) return ts.toLocaleDateString()
  return String(ts)
}

function displayStat(val: number | null): string {
  return val === null ? '…' : String(val)
}

function displayPerf(val: number | null): string {
  if (val === null) return '…'
  if (val === 0) return '—'
  return `${val}`
}
</script>

<template>
  <div>
    <div class="mb-6 sm:mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <h1 class="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p class="mt-1 text-gray-500">Overview of your QA projects and recent audits</p>
      </div>

      <!-- Download Extension Button -->
      <a
        href="/qa-suite-extension.zip"
        download="qa-suite-extension.zip"
        class="ext-download-btn"
        title="Download QA-Suite Companion extension and load it in Chrome via chrome://extensions → Load unpacked"
      >
        <span class="ext-download-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
            <path d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z" />
            <path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
          </svg>
        </span>
        <span class="ext-download-label">
          <span class="ext-download-title">Download Extension</span>
          <span class="ext-download-sub">Chrome • Load unpacked</span>
        </span>
      </a>
    </div>

    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
      <!-- Total Projects -->
      <div class="card p-4 sm:p-6">
        <div class="flex items-center gap-4">
          <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">📁</div>
          <div>
            <p class="text-sm text-gray-500">Total Projects</p>
            <p class="text-2xl font-bold text-gray-900">{{ projects.length }}</p>
          </div>
        </div>
      </div>

      <!-- Recent Audits (last 7 days) -->
      <div class="card p-4 sm:p-6">
        <div class="flex items-center gap-4">
          <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-600">✅</div>
          <div>
            <p class="text-sm text-gray-500">Audits (7d)</p>
            <p class="text-2xl font-bold text-gray-900 tabular-nums">{{ displayStat(recentAuditsCount) }}</p>
          </div>
        </div>
      </div>

      <!-- Open Bugs -->
      <div class="card p-4 sm:p-6">
        <div class="flex items-center gap-4">
          <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-100 text-yellow-600">🐛</div>
          <div>
            <p class="text-sm text-gray-500">Open Bugs</p>
            <p class="text-2xl font-bold text-gray-900 tabular-nums">{{ displayStat(openBugsCount) }}</p>
          </div>
        </div>
      </div>

      <!-- Average PageSpeed Score -->
      <div class="card p-4 sm:p-6">
        <div class="flex items-center gap-4">
          <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600">📊</div>
          <div>
            <p class="text-sm text-gray-500">Average PageSpeed Score</p>
            <p
              class="text-2xl font-bold tabular-nums"
              :class="avgPerformance === null || avgPerformance === 0
                ? 'text-gray-900'
                : avgPerformance >= 90 ? 'text-green-600'
                : avgPerformance >= 50 ? 'text-yellow-600'
                : 'text-red-600'"
            >
              {{ displayPerf(avgPerformance) }}<span v-if="avgPerformance && avgPerformance > 0" class="text-base font-normal text-gray-400"> /100</span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-6 sm:mt-8">
      <div class="mb-4 flex items-center justify-between">
        <h2 class="text-lg font-semibold text-gray-900">Recent Projects</h2>
        <router-link to="/projects" class="btn-primary text-sm">View All</router-link>
      </div>

      <div v-if="loading" class="flex items-center justify-center py-12">
        <span class="animate-spin text-2xl">⟳</span>
      </div>

      <div v-else-if="projects.length === 0" class="card p-6 text-center sm:p-12">
        <p class="text-4xl mb-4">🚀</p>
        <h3 class="text-lg font-semibold text-gray-900">No projects yet</h3>
        <p class="mt-1 text-sm text-gray-500">Create your first project to start auditing</p>
        <router-link to="/projects" class="btn-primary mt-4 inline-block">Create Project</router-link>
      </div>

      <div v-else class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <router-link
          v-for="project in projects.slice(0, 6)"
          :key="project.id"
          :to="`/projects/${project.id}`"
          class="card min-w-0 p-4 transition-shadow hover:shadow-md sm:p-6"
        >
          <h3 class="font-semibold text-gray-900 truncate">{{ project.name }}</h3>
          <p class="mt-1 text-sm text-gray-500 truncate">{{ project.targetUrl }}</p>
          <div class="mt-4 flex items-center gap-2 text-sm text-gray-500">
            <span>{{ formatDate(project.createdAt) }}</span>
          </div>
        </router-link>
      </div>
    </div>

    <!-- Daily planning calendar -->
    <section class="mt-8 overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-sm sm:mt-10" aria-labelledby="daily-planner-title">
      <div class="border-b border-slate-100 bg-gradient-to-r from-emerald-50 to-white px-5 py-5 sm:px-7">
        <div class="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div class="flex items-center gap-2">
              <span class="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-lg text-emerald-700">✓</span>
              <div>
                <h2 id="daily-planner-title" class="text-lg font-bold text-slate-900">Daily planner</h2>
                <p class="text-sm text-slate-500">Capture what you finished and what comes next.</p>
              </div>
            </div>
          </div>
          <span v-if="notesSaving" class="text-xs font-medium text-emerald-700">Saving changes...</span>
          <span v-else-if="notesSyncError" class="text-xs font-medium text-amber-600">Saved on this device; cloud sync unavailable</span>
          <span v-else-if="notesLoaded" class="text-xs font-medium text-slate-400">Synced to your account</span>
        </div>
      </div>

      <div class="grid lg:grid-cols-[1.25fr_0.75fr]">
        <div class="border-b border-slate-100 p-5 sm:p-7 lg:border-b-0 lg:border-r">
          <div class="mb-5 flex items-center justify-between">
            <div>
              <p class="text-xs font-bold uppercase tracking-wider text-emerald-700">Your schedule</p>
              <h3 class="mt-1 text-xl font-bold text-slate-900">{{ monthLabel }}</h3>
            </div>
            <div class="flex items-center gap-1">
              <button type="button" class="h-8 w-8 rounded-lg text-lg text-slate-500 hover:bg-emerald-50 hover:text-emerald-700" aria-label="Previous month" @click="changeMonth(-1)">‹</button>
              <button type="button" class="rounded-lg px-2.5 py-1.5 text-xs font-semibold text-emerald-700 hover:bg-emerald-50" @click="selectDate(toDateKey(new Date()))">Today</button>
              <button type="button" class="h-8 w-8 rounded-lg text-lg text-slate-500 hover:bg-emerald-50 hover:text-emerald-700" aria-label="Next month" @click="changeMonth(1)">›</button>
            </div>
          </div>

          <div class="grid grid-cols-7 gap-1 text-center text-[10px] font-bold uppercase tracking-wider text-slate-400 sm:gap-2">
            <span v-for="weekday in ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']" :key="weekday">{{ weekday }}</span>
          </div>
          <div class="mt-2 grid grid-cols-7 gap-1 sm:gap-2">
            <button
              v-for="day in calendarDays"
              :key="day.key"
              type="button"
              class="relative flex min-h-14 flex-col items-center rounded-xl border p-1.5 text-sm transition-colors sm:min-h-16"
              :class="selectedDate === day.key ? 'border-emerald-500 bg-emerald-50 text-emerald-800 shadow-sm' : day.inMonth ? 'border-slate-100 bg-white text-slate-700 hover:border-emerald-200 hover:bg-emerald-50/50' : 'border-transparent bg-slate-50/60 text-slate-300'"
              @click="selectDate(day.key)"
            >
              <span class="flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold" :class="day.isToday ? 'bg-emerald-600 text-white' : ''">{{ day.day }}</span>
              <span v-if="day.noteCount" class="mt-1 flex items-center gap-0.5">
                <i v-for="index in Math.min(day.noteCount, 3)" :key="index" class="h-1.5 w-1.5 rounded-full" :class="index <= day.completedCount ? 'bg-emerald-500' : 'bg-amber-400'"></i>
              </span>
            </button>
          </div>
          <div class="mt-4 flex items-center gap-4 text-[11px] text-slate-400">
            <span class="flex items-center gap-1.5"><i class="h-2 w-2 rounded-full bg-emerald-500"></i>Done</span>
            <span class="flex items-center gap-1.5"><i class="h-2 w-2 rounded-full bg-amber-400"></i>Planned</span>
          </div>
        </div>

        <div class="flex min-h-[360px] flex-col p-5 sm:p-7">
          <div class="mb-4">
            <p class="text-xs font-bold uppercase tracking-wider text-emerald-700">Daily checklist</p>
            <h3 class="mt-1 text-lg font-bold text-slate-900">{{ selectedDateLabel }}</h3>
          </div>

          <div v-if="selectedNotes.length" class="mb-4 flex-1 space-y-2 overflow-y-auto">
            <div v-for="note in selectedNotes" :key="note.id" class="group flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50/70 p-3">
              <input :checked="note.done" type="checkbox" class="mt-0.5 h-4 w-4 rounded border-slate-300 accent-emerald-600 focus:ring-emerald-500" @change="toggleNote(note)" />
              <span class="min-w-0 flex-1 text-sm leading-5" :class="note.done ? 'text-slate-400 line-through' : 'text-slate-700'">{{ note.text }}</span>
              <button type="button" class="rounded-md px-1 text-slate-300 transition-colors hover:bg-rose-50 hover:text-rose-500" aria-label="Delete note" title="Delete note" @click="removeNote(note.id)">
                <i class="fa-solid fa-trash-can text-xs"></i>
              </button>
            </div>
          </div>
          <div v-else class="flex flex-1 flex-col items-center justify-center rounded-xl border border-dashed border-slate-200 bg-slate-50/50 px-4 py-8 text-center">
            <span class="text-2xl">✦</span>
            <p class="mt-2 text-sm font-semibold text-slate-700">Nothing planned yet</p>
            <p class="mt-1 text-xs text-slate-400">Add a task or note for this day.</p>
          </div>

          <form class="mt-4 flex gap-2" @submit.prevent="addNote">
            <input v-model="noteDraft" type="text" maxlength="160" class="input min-w-0 flex-1 text-sm" placeholder="Add a task or note..." aria-label="Add a task or note" />
            <button type="submit" class="btn-primary shrink-0 px-3 text-sm" :disabled="!noteDraft.trim()">Add</button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* ── Extension Download Button ──────────────────────────────────────────── */
.ext-download-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.625rem 1rem;
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  color: #fff;
  border-radius: 0.75rem;
  text-decoration: none;
  font-size: 0.875rem;
  white-space: nowrap;
  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.25);
  transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;
  align-self: flex-start;
}
.ext-download-btn:hover {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.35);
  transform: translateY(-1px);
}
.ext-download-btn:active {
  transform: translateY(0);
  box-shadow: 0 1px 4px rgba(15, 23, 42, 0.2);
}
.ext-download-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  background: rgba(255,255,255,0.12);
  border-radius: 0.5rem;
  flex-shrink: 0;
}
.ext-download-label {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}
.ext-download-title {
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.01em;
}
.ext-download-sub {
  font-size: 0.7rem;
  opacity: 0.65;
  line-height: 1;
}
</style>
