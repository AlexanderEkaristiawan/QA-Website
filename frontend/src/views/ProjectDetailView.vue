<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useProjectStore, useAuditStore } from '@/composables/useFirestore'
import { useAudit } from '@/composables/useAudit'
import { useAuthStore } from '@/composables/useAuth'
import ReportExporter from '@/components/reports/ReportExporter.vue'
import type { Project, AuditJob, CrawlMode } from '@/types'
import { getBotStatusColor, formatTimestampFull } from '@/types'

const route = useRoute()
const router = useRouter()
const projectStore = useProjectStore()
const auditStore = useAuditStore()
const authStore = useAuthStore()
const { startAudit, issueExtensionToken, startZapPolling, stopZapPolling, starting, error: auditError } = useAudit()

const project = ref<Project | null>(null)
const auditJobs = ref<AuditJob[]>([])
const loading = ref(true)
const showReport = ref(false)
const showModeModal = ref(false)
const showSettingsModal = ref(false)
const zapPolling = ref(false)
const selectedCrawlMode = ref<CrawlMode>('server')

// Extension token states
const generatedToken = ref<string | null>(null)
const tokenCopied = ref(false)
const generatingToken = ref(false)
const projectIdCopied = ref(false)

function copyProjectId() {
  if (!project.value) return
  navigator.clipboard.writeText(project.value.id)
  projectIdCopied.value = true
  setTimeout(() => { projectIdCopied.value = false }, 2500)
}

// Extension / Crawl Settings Form
const settingsForm = ref({
  crawlPageLimit: 25,
  crawlMaxDurationMin: 15,
  performanceThresholdMs: 2000,
  titleMin: 30,
  titleMax: 65,
  descMin: 120,
  descMax: 320,
})

let unsubscribeAudits: (() => void) | null = null
let stopPoll: (() => void) | null = null

const recentResult = computed(() => auditJobs.value[0] ?? null)

const botIcons: Record<string, string> = { seo: '🔍', security: '🛡️', performance: '⚡' }
const botLabels: Record<string, string> = { seo: 'SEO Crawl', security: 'Security Scan', performance: 'Performance' }

onMounted(async () => {
  const id = route.params.id as string
  try {
    project.value = await projectStore.getProject(id)
    if (project.value) {
      // Initialize settings form from project
      settingsForm.value = {
        crawlPageLimit: project.value.crawlPageLimit ?? 25,
        crawlMaxDurationMin: project.value.crawlMaxDurationMin ?? 15,
        performanceThresholdMs: project.value.performanceThresholdMs ?? 2000,
        titleMin: project.value.titleLengthRange?.min ?? 30,
        titleMax: project.value.titleLengthRange?.max ?? 65,
        descMin: project.value.descriptionLengthRange?.min ?? 120,
        descMax: project.value.descriptionLengthRange?.max ?? 320,
      }

      unsubscribeAudits = auditStore.subscribeAuditJobs(
        id,
        (jobs) => {
          auditJobs.value = jobs
          loading.value = false

          // Resume ZAP polling if a running job has a zapScanId
          const runningJob = jobs.find(j => j.status === 'running' && j.zapScanId)
          if (runningJob && !zapPolling.value) {
            zapPolling.value = true
            stopPoll = startZapPolling(
              runningJob.id,
              runningJob.projectId,
              () => { zapPolling.value = false },
              () => { zapPolling.value = false }
            )
          }
        },
        () => { loading.value = false }
      )
    } else {
      loading.value = false
    }
  } catch (err) {
    console.error('Failed to load project:', err)
    loading.value = false
  }
})

onUnmounted(() => {
  unsubscribeAudits?.()
  stopPoll?.()
  stopZapPolling()
})

function openAuditModal() {
  if (!project.value) return
  if (!project.value.ownershipVerified) {
    alert('Please verify domain ownership in project settings before running an audit.')
    return
  }
  showModeModal.value = true
}

async function triggerAudit() {
  if (!project.value || !authStore.currentUser.value) return
  showModeModal.value = false

  const jobId = await startAudit(project.value.id, authStore.currentUser.value.uid, selectedCrawlMode.value)
  if (!jobId) {
    alert(auditError.value || 'Failed to start audit')
    return
  }

  // Start ZAP polling immediately
  zapPolling.value = true
  stopPoll = startZapPolling(
    jobId,
    project.value.id,
    () => { zapPolling.value = false },
    (msg) => { zapPolling.value = false; console.error('ZAP error:', msg) }
  )
}

async function handleGenerateToken() {
  if (!project.value || !authStore.currentUser.value) return
  generatingToken.value = true
  const token = await issueExtensionToken(project.value.id, authStore.currentUser.value.uid)
  generatingToken.value = false
  if (token) {
    generatedToken.value = token
    tokenCopied.value = false
  } else {
    alert('Failed to generate extension API token')
  }
}

function copyToken() {
  if (!generatedToken.value) return
  navigator.clipboard.writeText(generatedToken.value)
  tokenCopied.value = true
  setTimeout(() => { tokenCopied.value = false }, 2500)
}

async function saveSettings() {
  if (!project.value) return
  try {
    await projectStore.updateProject(project.value.id, {
      crawlPageLimit: settingsForm.value.crawlPageLimit,
      crawlMaxDurationMin: settingsForm.value.crawlMaxDurationMin,
      performanceThresholdMs: settingsForm.value.performanceThresholdMs,
      titleLengthRange: { min: settingsForm.value.titleMin, max: settingsForm.value.titleMax },
      descriptionLengthRange: { min: settingsForm.value.descMin, max: settingsForm.value.descMax },
    })
    showSettingsModal.value = false
    alert('Settings updated successfully!')
  } catch (err: any) {
    alert('Failed to save settings: ' + err.message)
  }
}

function getScoreColor(score: number): string {
  if (score >= 90) return '#22c55e'
  if (score >= 50) return '#f59e0b'
  return '#ef4444'
}

function getStatusDot(status: string): string {
  switch (status) {
    case 'completed': return 'bg-green-500'
    case 'running': case 'scanning': return 'bg-yellow-400 animate-pulse'
    case 'failed': case 'auth-failed': return 'bg-red-500'
    case 'partial-failed': return 'bg-orange-400'
    default: return 'bg-gray-300'
  }
}

function getStatusLabel(status: string): string {
  const labels: Record<string, string> = {
    pending: 'Queued',
    running: 'Running',
    completed: 'Completed',
    failed: 'Failed',
    'auth-failed': 'Auth Failed',
    'partial-failed': 'Partial Failure',
    scanning: 'ZAP Scanning...',
    unavailable: 'ZAP Unavailable',
  }
  return labels[status] || status
}

function viewAuditDetails(auditId: string) {
  router.push(`/projects/${project.value?.id}/audit/${auditId}`)
}
</script>

<template>
  <div v-if="loading" class="flex items-center justify-center py-24">
    <div class="flex flex-col items-center gap-3">
      <div class="h-10 w-10 rounded-full border-4 border-indigo-500 border-t-transparent animate-spin"></div>
      <p class="text-sm text-gray-500">Loading project...</p>
    </div>
  </div>

  <div v-else-if="!project" class="card p-12 text-center">
    <p class="text-5xl mb-4">❌</p>
    <h3 class="text-lg font-semibold text-gray-900">Project not found</h3>
    <router-link to="/projects" class="btn-primary mt-4 inline-block">Back to Projects</router-link>
  </div>

  <div v-else>
    <!-- Header -->
    <div class="mb-8 flex items-start justify-between flex-wrap gap-4">
      <div>
        <div class="flex items-center gap-2 text-sm text-gray-400 mb-1">
          <router-link to="/projects" class="hover:text-indigo-500 transition-colors">Projects</router-link>
          <span>/</span>
          <span class="text-gray-600 font-medium">{{ project.name }}</span>
        </div>
        <h1 class="text-2xl font-bold text-gray-900">{{ project.name }}</h1>
        <div class="mt-1 flex items-center gap-2">
          <p class="text-sm text-gray-500">{{ project.targetUrl }}</p>
          <span
            v-if="project.ownershipVerified"
            class="inline-flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700"
          >
            ✓ Ownership Verified
          </span>
          <span
            v-else
            class="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-700"
          >
            ⚠ Unverified
          </span>
        </div>
      </div>
      <div class="flex items-center gap-3 flex-wrap">
        <button @click="showSettingsModal = true" class="btn-secondary">⚙️ Crawl & Extension Settings</button>
        <button @click="showReport = !showReport" class="btn-secondary">📄 Export Report</button>
        <button
          @click="openAuditModal"
          class="btn-primary"
          :disabled="starting || !project.ownershipVerified"
          :title="!project.ownershipVerified ? 'Verify domain ownership first' : ''"
          id="run-audit-btn"
        >
          <span v-if="starting" class="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
          {{ starting ? 'Starting Audit...' : '▶ Run Audit' }}
        </button>
      </div>
    </div>

    <!-- ZAP Polling Banner -->
    <div v-if="zapPolling" class="mb-6 rounded-xl bg-indigo-50 border border-indigo-200 p-4 flex items-center gap-3">
      <div class="h-5 w-5 rounded-full border-2 border-indigo-500 border-t-transparent animate-spin flex-shrink-0"></div>
      <div>
        <p class="text-sm font-medium text-indigo-800">Security Scan Running</p>
        <p class="text-xs text-indigo-600">OWASP ZAP is scanning your site. Checking status every 30 seconds...</p>
      </div>
    </div>

    <!-- Audit Error Banner -->
    <div v-if="auditError" class="mb-6 rounded-xl bg-red-50 border border-red-200 p-4 flex items-center gap-3">
      <span class="text-red-500 text-lg flex-shrink-0">⚠</span>
      <p class="text-sm text-red-700">{{ auditError }}</p>
    </div>

    <!-- PDF Report -->
    <ReportExporter v-if="showReport" :project="project" :audit="recentResult" @close="showReport = false" />

    <!-- Navigation Tabs -->
    <div class="mb-6 flex gap-1 border-b border-gray-200">
      <router-link
        v-for="tab in [
          { label: '📈 Trends', path: `/projects/${project.id}/history` },
          { label: '🐛 Bug List', path: `/projects/${project.id}/bugs` },
          { label: '✅ Test Cases', path: `/projects/${project.id}/test-cases` },
        ]"
        :key="tab.path"
        :to="tab.path"
        class="px-4 py-2.5 text-sm font-medium text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300 transition-all"
        active-class="text-indigo-600 border-indigo-600 hover:text-indigo-600"
      >
        {{ tab.label }}
      </router-link>
    </div>

    <!-- Recent Audit Results -->
    <div v-if="recentResult" class="space-y-6">

      <!-- Bot Status Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div
          v-for="(botKey) in ['seo', 'security', 'performance'] as const"
          :key="botKey"
          class="card p-5"
        >
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center gap-2">
              <span class="text-2xl">{{ botIcons[botKey] }}</span>
              <span class="text-sm font-semibold text-gray-700">{{ botLabels[botKey] }}</span>
            </div>
            <span
              :class="getBotStatusColor(recentResult.summaries[botKey].status)"
              class="text-xs font-medium capitalize"
            >
              {{ getStatusLabel(recentResult.summaries[botKey].status) }}
            </span>
          </div>

          <!-- SEO summary -->
          <template v-if="botKey === 'seo'">
            <div class="flex items-center gap-2">
              <p class="text-3xl font-bold text-gray-900">{{ recentResult.summaries.seo.pageCount }}</p>
              <span v-if="recentResult.crawlMode === 'extension'" class="rounded bg-purple-100 text-purple-700 text-xs px-2 py-0.5">
                Chrome Ext
              </span>
            </div>
            <p class="text-xs text-gray-500 mt-1">pages crawled</p>
            <p class="mt-1 text-sm" :class="recentResult.summaries.seo.totalErrors > 0 ? 'text-red-600' : 'text-green-600'">
              {{ recentResult.summaries.seo.totalErrors }} issues
            </p>
          </template>

          <!-- Security summary -->
          <template v-else-if="botKey === 'security'">
            <div class="flex items-end gap-2 mt-1">
              <span class="text-2xl font-bold text-red-600">{{ recentResult.summaries.security.highAlerts }}</span>
              <span class="text-sm text-gray-400 pb-0.5">high</span>
              <span class="text-xl font-semibold text-amber-500">{{ recentResult.summaries.security.mediumAlerts }}</span>
              <span class="text-sm text-gray-400 pb-0.5">med</span>
            </div>
            <div v-if="recentResult.summaries.security.missingHeaders?.length" class="mt-2 flex flex-wrap gap-1">
              <span
                v-for="h in recentResult.summaries.security.missingHeaders.slice(0, 2)"
                :key="h"
                class="inline-flex items-center rounded-full bg-red-100 px-2 py-0.5 text-xs text-red-700"
              >
                {{ h }}
              </span>
              <span v-if="recentResult.summaries.security.missingHeaders.length > 2" class="text-xs text-gray-400">
                +{{ recentResult.summaries.security.missingHeaders.length - 2 }} more
              </span>
            </div>
            <p v-if="recentResult.summaries.security.status === 'unavailable'" class="mt-1 text-xs text-amber-600">ZAP not reachable</p>
          </template>

          <!-- Performance summary -->
          <template v-else>
            <div class="flex items-end gap-1 mt-1">
              <span
                class="text-3xl font-bold"
                :style="{ color: getScoreColor(recentResult.summaries.performance.performance) }"
              >{{ recentResult.summaries.performance.performance }}</span>
              <span class="text-sm text-gray-400 pb-1">/100</span>
            </div>
            <p class="text-xs text-gray-500">Performance score</p>
          </template>
        </div>
      </div>

      <!-- Performance Score Rings -->
      <div class="card p-6">
        <h3 class="text-base font-semibold text-gray-900 mb-5">PageSpeed Scores</h3>
        <div class="grid grid-cols-2 gap-6 sm:grid-cols-4">
          <div
            v-for="(scoreEntry) in [
              { key: 'performance', label: 'Performance' },
              { key: 'accessibility', label: 'Accessibility' },
              { key: 'bestPractices', label: 'Best Practices' },
              { key: 'seo', label: 'SEO' },
            ]"
            :key="scoreEntry.key"
            class="text-center"
          >
            <div class="metric-ring mx-auto" style="width: 90px; height: 90px;">
              <svg class="w-full h-full" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none" stroke="#e5e7eb" stroke-width="3"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  :stroke="getScoreColor((recentResult.summaries.performance as any)[scoreEntry.key] ?? 0)"
                  stroke-width="3"
                  :stroke-dasharray="`${(recentResult.summaries.performance as any)[scoreEntry.key] ?? 0}, 100`"
                  stroke-linecap="round"
                />
              </svg>
              <span
                class="score-label text-xl font-bold"
                :style="{ color: getScoreColor((recentResult.summaries.performance as any)[scoreEntry.key] ?? 0) }"
              >
                {{ (recentResult.summaries.performance as any)[scoreEntry.key] ?? 0 }}
              </span>
            </div>
            <p class="mt-2 text-xs font-medium text-gray-600">{{ scoreEntry.label }}</p>
          </div>
        </div>
      </div>

      <!-- Audit History -->
      <div class="card">
        <div class="card-header">
          <h3 class="text-base font-semibold text-gray-900">Audit History</h3>
        </div>
        <div class="divide-y divide-gray-100">
          <div
            v-for="job in auditJobs.slice(0, 10)"
            :key="job.id"
            class="flex items-center justify-between px-6 py-4 hover:bg-gray-50 cursor-pointer transition-colors"
            @click="viewAuditDetails(job.id)"
          >
            <div class="flex items-center gap-3">
              <span class="inline-flex h-2.5 w-2.5 rounded-full flex-shrink-0" :class="getStatusDot(job.status)" />
              <div>
                <div class="flex items-center gap-2">
                  <p class="text-sm font-medium text-gray-900">{{ getStatusLabel(job.status) }}</p>
                  <span
                    v-if="job.crawlMode"
                    class="rounded px-1.5 py-0.5 text-xs font-medium"
                    :class="job.crawlMode === 'extension' || job.crawlMode === 'extension-instant' ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-600'"
                  >
                    {{ job.crawlMode === 'extension-instant' ? 'Instant' : job.crawlMode === 'extension' ? 'Ext Crawl' : 'Server' }}
                  </span>
                </div>
                <p class="text-xs text-gray-400">
                  {{ job.timestamp?.toDate?.().toLocaleString() || 'Processing...' }}
                </p>
              </div>
            </div>
            <div class="flex items-center gap-4 text-xs text-gray-500">
              <span v-if="job.summaries?.performance?.status === 'completed'">
                Perf: <strong>{{ job.summaries.performance.performance }}</strong>
              </span>
              <span v-if="job.summaries?.seo?.status === 'completed'">
                SEO pages: <strong>{{ job.summaries.seo.pageCount }}</strong>
              </span>
              <span v-if="job.errors?.length" class="text-orange-500">{{ job.errors.length }} error(s)</span>
              <span class="text-gray-300">›</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- No Audits Yet -->
    <div v-else class="card p-16 text-center">
      <p class="text-5xl mb-4">🔍</p>
      <h3 class="text-lg font-semibold text-gray-900">No audits yet</h3>
      <p class="mt-1 text-sm text-gray-500 mb-6">
        Run your first audit to discover SEO issues, security vulnerabilities, and performance bottlenecks.
      </p>
      <div v-if="!project.ownershipVerified" class="mb-4 rounded-lg bg-amber-50 border border-amber-200 p-4 text-sm text-amber-800 text-left max-w-sm mx-auto">
        ⚠ You must verify domain ownership before running an audit. Edit the project to confirm authorization.
      </div>
      <button
        @click="openAuditModal"
        class="btn-primary"
        :disabled="starting || !project.ownershipVerified"
        id="first-audit-btn"
      >
        <span v-if="starting" class="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
        {{ starting ? 'Starting...' : '▶ Run First Audit' }}
      </button>
    </div>

    <!-- Audit Mode Selector Modal -->
    <div v-if="showModeModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div class="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl space-y-5">
        <h3 class="text-lg font-bold text-gray-900">Choose Audit Crawl Mode</h3>
        <p class="text-sm text-gray-500">Select how the target site should be crawled for SEO & asset analysis:</p>

        <div class="space-y-3">
          <label
            class="flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all"
            :class="selectedCrawlMode === 'server' ? 'border-indigo-600 bg-indigo-50/50' : 'border-gray-200 hover:border-gray-300'"
          >
            <input type="radio" v-model="selectedCrawlMode" value="server" class="mt-1 text-indigo-600" />
            <div>
              <p class="font-semibold text-sm text-gray-900">🌐 Server-Side BFS Crawler</p>
              <p class="text-xs text-gray-500 mt-0.5">Automated background crawler. Best for public, unauthenticated pages.</p>
            </div>
          </label>

          <label
            class="flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all"
            :class="selectedCrawlMode === 'extension' ? 'border-indigo-600 bg-indigo-50/50' : 'border-gray-200 hover:border-gray-300'"
          >
            <input type="radio" v-model="selectedCrawlMode" value="extension" class="mt-1 text-indigo-600" />
            <div>
              <p class="font-semibold text-sm text-gray-900">🧩 Chrome Extension (Authenticated Mode)</p>
              <p class="text-xs text-gray-500 mt-0.5">Crawls through your live browser session. Ideal for login-walled dashboards and member areas.</p>
            </div>
          </label>
        </div>

        <div class="flex justify-end gap-3 pt-2">
          <button @click="showModeModal = false" class="btn-secondary">Cancel</button>
          <button @click="triggerAudit" class="btn-primary">Start Audit</button>
        </div>
      </div>
    </div>

    <!-- Crawl & Extension Settings Modal -->
    <div v-if="showSettingsModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div class="bg-white rounded-2xl max-w-lg w-full p-6 shadow-xl space-y-6 max-h-[90vh] overflow-y-auto">
        <div class="flex items-center justify-between border-b pb-3">
          <h3 class="text-lg font-bold text-gray-900">⚙️ Crawl & Extension Settings</h3>
          <button @click="showSettingsModal = false" class="text-gray-400 hover:text-gray-600">✕</button>
        </div>

        <!-- Project ID for Extension -->
        <div class="rounded-xl bg-gray-50 p-4 border border-gray-200 space-y-2">
          <h4 class="text-sm font-semibold text-gray-900">Project ID</h4>
          <p class="text-xs text-gray-500">Paste this into the <strong>Project ID</strong> field in the Chrome Extension popup.</p>
          <div class="flex items-center gap-2">
            <div class="flex-1 bg-white p-2 rounded border font-mono text-xs text-gray-700 select-all truncate">
              {{ project.id }}
            </div>
            <button @click="copyProjectId" class="btn-primary text-xs py-2 px-3 flex-shrink-0">
              {{ projectIdCopied ? '✓ Copied!' : '📋 Copy Project ID' }}
            </button>
          </div>
        </div>

        <!-- Token Management -->
        <div class="rounded-xl bg-gray-50 p-4 border border-gray-200 space-y-3">
          <h4 class="text-sm font-semibold text-gray-900">Chrome Extension API Token</h4>
          <p class="text-xs text-gray-500">Use this token to connect your companion Chrome Extension to this project workspace.</p>
          
          <div v-if="generatedToken" class="space-y-2">
            <div class="flex items-center gap-2 bg-white p-2 rounded border font-mono text-xs text-gray-700 break-all">
              <span>{{ generatedToken }}</span>
            </div>
            <div class="flex items-center gap-2">
              <button @click="copyToken" class="btn-primary text-xs py-1.5 px-3">
                {{ tokenCopied ? '✓ Copied!' : '📋 Copy Token' }}
              </button>
              <span class="text-xs text-amber-600">Store safely — raw token is not displayed again.</span>
            </div>
          </div>

          <div v-else>
            <button @click="handleGenerateToken" :disabled="generatingToken" class="btn-secondary text-xs py-1.5 px-3">
              {{ generatingToken ? 'Generating...' : '🔑 Generate / Rotate Extension Token' }}
            </button>
          </div>
        </div>

        <!-- Crawl & Threshold Settings -->
        <div class="space-y-4">
          <h4 class="text-sm font-semibold text-gray-900">Thresholds & Limits</h4>
          
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-medium text-gray-700 mb-1">Crawl Page Limit</label>
              <input type="number" v-model.number="settingsForm.crawlPageLimit" min="1" max="100" class="input text-sm w-full" />
            </div>
            <div>
              <label class="block text-xs font-medium text-gray-700 mb-1">Max Crawl Duration (min)</label>
              <input type="number" v-model.number="settingsForm.crawlMaxDurationMin" min="1" max="60" class="input text-sm w-full" />
            </div>
          </div>

          <div>
            <label class="block text-xs font-medium text-gray-700 mb-1">Performance Threshold (ms for Auto-Bug)</label>
            <input type="number" v-model.number="settingsForm.performanceThresholdMs" min="500" max="10000" step="100" class="input text-sm w-full" />
            <p class="text-xs text-gray-400 mt-0.5">Pages taking longer than this will automatically draft a bug.</p>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-medium text-gray-700 mb-1">Title Length (Min - Max)</label>
              <div class="flex items-center gap-2">
                <input type="number" v-model.number="settingsForm.titleMin" class="input text-sm w-full" placeholder="30" />
                <span class="text-gray-400">-</span>
                <input type="number" v-model.number="settingsForm.titleMax" class="input text-sm w-full" placeholder="65" />
              </div>
            </div>
            <div>
              <label class="block text-xs font-medium text-gray-700 mb-1">Description Length (Min - Max)</label>
              <div class="flex items-center gap-2">
                <input type="number" v-model.number="settingsForm.descMin" class="input text-sm w-full" placeholder="120" />
                <span class="text-gray-400">-</span>
                <input type="number" v-model.number="settingsForm.descMax" class="input text-sm w-full" placeholder="320" />
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-end gap-3 pt-3 border-t">
          <button @click="showSettingsModal = false" class="btn-secondary">Cancel</button>
          <button @click="saveSettings" class="btn-primary">Save Settings</button>
        </div>
      </div>
    </div>
  </div>
</template>

