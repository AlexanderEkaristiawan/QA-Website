<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useAuthStore } from '@/composables/useAuth'
import { useProjectStore } from '@/composables/useFirestore'
import {
  collection, query, where, getDocs, orderBy, limit,
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

let unsubscribe: (() => void) | null = null
let statsLoaded = false

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
          where('projectId', '==', pid),
          where('status', '!=', 'Resolved')
        )
      )
      openCount += bugsSnap.size
    }
    openBugsCount.value = openCount
  } catch (err) {
    console.warn('Dashboard stats load error:', err)
    // Leave values as null — the template will gracefully show '—'
  }
}

onMounted(() => {
  if (!authStore.currentUser.value) return

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
    <div class="mb-8">
      <h1 class="text-2xl font-bold text-gray-900">Dashboard</h1>
      <p class="mt-1 text-gray-500">Overview of your QA projects and recent audits</p>
    </div>

    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <!-- Total Projects -->
      <div class="card p-6">
        <div class="flex items-center gap-4">
          <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">📁</div>
          <div>
            <p class="text-sm text-gray-500">Total Projects</p>
            <p class="text-2xl font-bold text-gray-900">{{ projects.length }}</p>
          </div>
        </div>
      </div>

      <!-- Recent Audits (last 7 days) -->
      <div class="card p-6">
        <div class="flex items-center gap-4">
          <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-600">✅</div>
          <div>
            <p class="text-sm text-gray-500">Audits (7d)</p>
            <p class="text-2xl font-bold text-gray-900 tabular-nums">{{ displayStat(recentAuditsCount) }}</p>
          </div>
        </div>
      </div>

      <!-- Open Bugs -->
      <div class="card p-6">
        <div class="flex items-center gap-4">
          <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-100 text-yellow-600">🐛</div>
          <div>
            <p class="text-sm text-gray-500">Open Bugs</p>
            <p class="text-2xl font-bold text-gray-900 tabular-nums">{{ displayStat(openBugsCount) }}</p>
          </div>
        </div>
      </div>

      <!-- Avg Performance Score -->
      <div class="card p-6">
        <div class="flex items-center gap-4">
          <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600">📊</div>
          <div>
            <p class="text-sm text-gray-500">Avg Performance</p>
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

    <div class="mt-8">
      <div class="mb-4 flex items-center justify-between">
        <h2 class="text-lg font-semibold text-gray-900">Recent Projects</h2>
        <router-link to="/projects" class="btn-primary text-sm">View All</router-link>
      </div>

      <div v-if="loading" class="flex items-center justify-center py-12">
        <span class="animate-spin text-2xl">⟳</span>
      </div>

      <div v-else-if="projects.length === 0" class="card p-12 text-center">
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
          class="card p-6 hover:shadow-md transition-shadow"
        >
          <h3 class="font-semibold text-gray-900 truncate">{{ project.name }}</h3>
          <p class="mt-1 text-sm text-gray-500 truncate">{{ project.targetUrl }}</p>
          <div class="mt-4 flex items-center gap-2 text-sm text-gray-500">
            <span>{{ formatDate(project.createdAt) }}</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

