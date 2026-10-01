<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'
import type { ExtensionConfig, CrawlSession, ExtMessage, RecordedPage, RecordingSession } from '@/types'

const props = defineProps<{
  config: ExtensionConfig
}>()

const activeTab = ref<'record' | 'crawler'>('record')

// ── User Journey Recording State ─────────────────────────────────────────────
const recording = ref(false)
const recordingSession = ref<RecordingSession | null>(null)
const recordedPages = ref<RecordedPage[]>([])
const recordingTabId = ref<number | null>(null)
const recordingCurrentUrl = ref('')
const recordingMsg = ref('')
const projectPages = ref<Array<{
  id: string
  url: string
  path: string
  title: string
  source: string
  statusCode: number | null
  seoScore: number | null
  seoStatus: string
  issueCount: number
  pageSpeedScores: { performance: number | null } | null
  securityAudit: { status: string; highAlerts: number; mediumAlerts: number; lowAlerts: number } | null
}>>([])
const projectPagesLoading = ref(false)
const projectPagesError = ref('')
let projectPagesPoll: ReturnType<typeof setInterval> | null = null

// ── Automated BFS Crawl State ────────────────────────────────────────────────
const startUrl = ref('')
const jobId = ref('')
const pageLimit = ref(25)
const maxDurationMin = ref(15)

const sessionState = ref<CrawlSession | null>(null)
const queueLength = ref(0)
const lastUrl = ref<string | null>(null)
const authLossUrl = ref<string | null>(null)
const errorMsg = ref<string | null>(null)

onMounted(async () => {
  // Pre-fill active tab URL
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
  if (tab?.url && !tab.url.startsWith('chrome://')) {
    startUrl.value = tab.url
    recordingCurrentUrl.value = tab.url
    recordingTabId.value = tab.id ?? null
  }

  // Load existing recording state
  const recData = await chrome.storage.local.get('qas_recording_session')
  if (recData.qas_recording_session) {
    recordingSession.value = recData.qas_recording_session
    recording.value = recData.qas_recording_session.isRecording ?? false
    recordedPages.value = recData.qas_recording_session.recordedUrls ?? []
  }

  // Load existing BFS crawl session state if any
  const data = await chrome.storage.local.get('qas_crawl_session')
  if (data.qas_crawl_session) {
    sessionState.value = data.qas_crawl_session
    queueLength.value = data.qas_crawl_session.queue?.length ?? 0
  }

  chrome.runtime.onMessage.addListener(handleMessage)
  void loadProjectPages()
  projectPagesPoll = setInterval(() => { void loadProjectPages() }, 10000)
})

onUnmounted(() => {
  chrome.runtime.onMessage.removeListener(handleMessage)
  if (projectPagesPoll) clearInterval(projectPagesPoll)
})

watch(() => [props.config.apiBaseUrl, props.config.apiToken, props.config.projectId], () => {
  void loadProjectPages()
})

async function loadProjectPages() {
  if (!props.config.apiBaseUrl || !props.config.apiToken || !props.config.projectId) {
    projectPages.value = []
    projectPagesError.value = ''
    return
  }

  projectPagesLoading.value = projectPages.value.length === 0
  try {
    const url = `${props.config.apiBaseUrl}/list-page-audits?projectId=${encodeURIComponent(props.config.projectId)}`
    const response = await fetch(url, {
      headers: { Authorization: `Bearer ${props.config.apiToken}` },
      cache: 'no-store',
    })
    const result = await response.json().catch(() => ({}))
    if (!response.ok) throw new Error(result.error || `HTTP ${response.status}`)
    projectPages.value = Array.isArray(result.pages) ? result.pages : []
    projectPagesError.value = ''
  } catch (err: any) {
    projectPagesError.value = err.message || 'Could not sync project pages.'
  } finally {
    projectPagesLoading.value = false
  }
}

function handleMessage(msg: ExtMessage) {
  if (msg.type === 'CRAWL_PROGRESS') {
    if (sessionState.value) {
      sessionState.value.crawledCount = msg.crawledCount
      sessionState.value.status = msg.status
      sessionState.value.errors = msg.errors
    }
    queueLength.value = msg.queueLength
    if (msg.lastUrl) lastUrl.value = msg.lastUrl
  } else if (msg.type === 'AUTH_LOSS_DETECTED') {
    authLossUrl.value = msg.redirectUrl
  } else if (msg.type === 'RECORDED_PAGE_ADDED') {
    // Add page to recordedPages list if not already present
    if (!recordedPages.value.some(p => p.url === msg.page.url && Math.abs(p.timestamp - msg.page.timestamp) < 2000)) {
      recordedPages.value = [msg.page, ...recordedPages.value]
    }
    setTimeout(() => { void loadProjectPages() }, 700)
  } else if (msg.type === 'RECORDING_STATE') {
    recordingSession.value = msg.session
    recording.value = msg.session.isRecording
    recordedPages.value = msg.session.recordedUrls || []
  }
}

// ── Recording Actions ────────────────────────────────────────────────────────
async function toggleRecording() {
  if (recording.value) {
    await stopRecording()
  } else {
    await startRecording()
  }
}

async function startRecording() {
  if (!props.config.apiToken || !props.config.projectId) {
    errorMsg.value = 'Please configure your Project ID and API Token in Set up first.'
    return
  }

  errorMsg.value = null
  recordingMsg.value = ''

  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
    recordingTabId.value = tab?.id ?? null
    recordingCurrentUrl.value = tab?.url ?? ''

    const response = await chrome.runtime.sendMessage({
      type: 'START_RECORDING',
      projectId: props.config.projectId,
      apiToken: props.config.apiToken,
      apiBaseUrl: props.config.apiBaseUrl,
      tabId: tab?.id,
    } as ExtMessage)

    if (response?.ok) {
      recording.value = true
      recordingSession.value = response.session
      recordedPages.value = response.session.recordedUrls || []
      recordingMsg.value = '🔴 Recording active! Navigate in your browser to record URLs.'
      setTimeout(() => { recordingMsg.value = '' }, 3500)
    } else {
      throw new Error(response?.error || 'Failed to start recording')
    }
  } catch (err: any) {
    errorMsg.value = err.message || 'Error starting recording'
  }
}

async function stopRecording() {
  try {
    const response = await chrome.runtime.sendMessage({
      type: 'STOP_RECORDING',
    } as ExtMessage)

    if (response?.ok) {
      recording.value = false
      recordingSession.value = response.session
      recordingMsg.value = `✓ Recording stopped. ${recordedPages.value.length} URL(s) tracked in Page Audits.`
    }
  } catch (err: any) {
    errorMsg.value = err.message || 'Error stopping recording'
  }
}

async function clearRecordedHistory() {
  recordedPages.value = []
  const data = await chrome.storage.local.get('qas_recording_session')
  if (data.qas_recording_session) {
    data.qas_recording_session.recordedUrls = []
    await chrome.storage.local.set({ qas_recording_session: data.qas_recording_session })
  }
}

// ── Automated Crawl Actions ──────────────────────────────────────────────────
async function startNewCrawl() {
  if (!startUrl.value.trim()) {
    errorMsg.value = 'Please provide a valid Start URL.'
    return
  }
  if (!props.config.apiToken || !props.config.projectId) {
    errorMsg.value = 'Please configure your Project ID and API Token in Setup first.'
    return
  }

  errorMsg.value = null
  authLossUrl.value = null

  try {
    const parsed = new URL(startUrl.value.trim())
    const baseDomain = parsed.hostname

    const sessionInit = {
      jobId: jobId.value.trim() || undefined,
      projectId: props.config.projectId,
      apiToken: props.config.apiToken,
      apiBaseUrl: props.config.apiBaseUrl,
      startUrl: startUrl.value.trim(),
      baseDomain,
      pageLimit: pageLimit.value,
      maxDurationMin: maxDurationMin.value,
    }

    const response = await chrome.runtime.sendMessage({
      type: 'START_CRAWL',
      session: sessionInit,
    } as ExtMessage)
    if (!response?.ok) throw new Error(response?.error || 'Unable to start crawl')
    sessionState.value = {
      ...sessionInit,
      status: 'running',
      startedAt: Date.now(),
      queue: [sessionInit.startUrl],
      visited: [],
      crawledCount: 0,
      errors: [],
    }
    queueLength.value = 1
  } catch (err: any) {
    errorMsg.value = `Invalid URL: ${err.message}`
  }
}

async function pauseCrawl() {
  const response = await chrome.runtime.sendMessage({ type: 'PAUSE_CRAWL' } as ExtMessage)
  if (response?.ok && sessionState.value) sessionState.value.status = 'paused'
}

async function resumeCrawl() {
  authLossUrl.value = null
  const response = await chrome.runtime.sendMessage({ type: 'RESUME_CRAWL' } as ExtMessage)
  if (response?.ok && sessionState.value) sessionState.value.status = 'running'
}

async function stopCrawl() {
  const response = await chrome.runtime.sendMessage({ type: 'STOP_CRAWL' } as ExtMessage)
  if (response?.ok && sessionState.value) sessionState.value.status = 'stopped'
}
</script>

<template>
  <div class="space-y-3">
    <!-- Sub-tab Selector -->
    <div class="flex items-center gap-1 p-1 bg-gray-100 rounded-lg text-xs font-semibold">
      <button
        type="button"
        @click="activeTab = 'record'"
        class="flex-1 py-1.5 px-2 rounded-md transition-all flex items-center justify-center gap-1.5"
        :class="activeTab === 'record' ? 'bg-white shadow-sm text-indigo-700' : 'text-gray-600 hover:text-gray-900'"
      >
        <span class="w-2 h-2 rounded-full" :class="recording ? 'bg-rose-500 animate-ping' : 'bg-rose-400'"></span>
        <span>Manual Record Redirects</span>
        <span v-if="projectPages.length > 0" class="px-1.5 py-0.2 rounded-full text-[10px] bg-indigo-50 text-indigo-700 font-mono">
          {{ projectPages.length }}
        </span>
      </button>

      <button
        type="button"
        @click="activeTab = 'crawler'"
        class="flex-1 py-1.5 px-2 rounded-md transition-all flex items-center justify-center gap-1.5"
        :class="activeTab === 'crawler' ? 'bg-white shadow-sm text-indigo-700' : 'text-gray-600 hover:text-gray-900'"
      >
        <span>🤖 Auto Crawl</span>
        <span v-if="sessionState?.status === 'running'" class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
      </button>
    </div>

    <!-- Error Banner -->
    <div v-if="errorMsg" class="p-2.5 rounded bg-red-50 border border-red-200 text-xs text-red-700">
      {{ errorMsg }}
    </div>

    <!-- Info Banner -->
    <div v-if="recordingMsg" class="p-2.5 rounded bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-1.5">
      <span>✨</span>
      <span>{{ recordingMsg }}</span>
    </div>

    <!-- ═══════════════════════════════════════════════════════════════════════ -->
    <!-- TAB 1: INTERACTIVE NAVIGATION & REDIRECT RECORDER                       -->
    <!-- ═══════════════════════════════════════════════════════════════════════ -->
    <div v-if="activeTab === 'record'" class="space-y-3">
      <!-- Recorder Action Card -->
      <div class="card p-3 space-y-3 border" :class="recording ? 'border-rose-300 bg-rose-50/20' : 'border-gray-200'">
        <div class="flex items-start justify-between gap-2">
          <div>
            <div class="flex items-center gap-2">
              <span
                class="w-2.5 h-2.5 rounded-full"
                :class="recording ? 'bg-rose-500 animate-ping' : 'bg-gray-400'"
              ></span>
              <span class="text-xs font-bold text-gray-900">
                {{ recording ? 'Recording Browser Redirects' : 'Record User Navigation & Redirects' }}
              </span>
            </div>
            <p class="text-[11px] text-gray-500 mt-1 leading-relaxed">
              Browse your website naturally. Every page and redirect you navigate to is automatically saved to the <strong>Page Audit table</strong> on QA-Suite.
            </p>
          </div>

          <span
            v-if="recording"
            class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-rose-100 text-rose-700 border border-rose-200 animate-pulse flex-shrink-0"
          >
            Live
          </span>
        </div>

        <!-- Connection Notice if missing token -->
        <div v-if="!config.apiToken || !config.projectId" class="p-2 bg-amber-50 border border-amber-200 rounded text-[11px] text-amber-800">
          ⚠️ Connect your project in <strong>Set up</strong> above so recorded URLs can sync to your dashboard.
        </div>

        <!-- Record Trigger Button -->
        <div>
          <button
            type="button"
            @click="toggleRecording"
            :disabled="!config.apiToken || !config.projectId"
            class="btn w-full text-xs py-2.5 font-bold flex items-center justify-center gap-2 shadow-sm transition-all"
            :class="recording ? 'btn-danger shadow-rose-200' : 'btn-primary shadow-indigo-200'"
          >
            <span v-if="recording">⏹ Stop Recording</span>
            <span v-else>🔴 Start Recording Navigation</span>
          </button>
        </div>
      </div>

      <!-- Synced project page audits -->
      <div class="card p-3 space-y-2">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-1.5">
            <span class="text-xs font-bold text-gray-900">Project Page Audits</span>
            <span class="text-[11px] font-mono px-1.5 py-0.2 rounded-full bg-gray-100 text-gray-700 font-semibold">
              {{ projectPages.length }}
            </span>
          </div>

          <button
            type="button"
            @click="loadProjectPages"
            :disabled="projectPagesLoading"
            class="text-[10px] text-indigo-600 hover:text-indigo-800 underline disabled:opacity-50"
          >
            {{ projectPagesLoading ? 'Syncing…' : 'Refresh' }}
          </button>
        </div>

        <div v-if="projectPagesError" class="rounded border border-rose-200 bg-rose-50 p-2.5 text-[11px] text-rose-700">
          Could not sync with Page Audits: {{ projectPagesError }}
        </div>

        <div v-else-if="!config.projectId || !config.apiToken" class="rounded border border-dashed p-4 text-center text-[11px] text-gray-500">
          Connect a project to load its tracked pages.
        </div>

        <div v-else-if="projectPagesLoading && projectPages.length === 0" class="p-5 text-center text-xs text-gray-400">
          Syncing project pages…
        </div>

        <div v-else-if="projectPages.length === 0" class="rounded border border-dashed p-5 text-center text-xs text-gray-400">
          No tracked pages in this project yet. Recorded URLs and audits will appear here after syncing.
        </div>

        <div v-else class="space-y-1.5 max-h-80 overflow-y-auto pr-0.5">
          <div
            v-for="page in projectPages"
            :key="page.id || page.url"
            class="p-2 rounded-md border border-gray-100 bg-gray-50 hover:bg-white hover:border-indigo-200 transition-all text-xs space-y-1"
          >
            <div class="flex items-center justify-between gap-1">
              <div class="flex items-center gap-1.5 min-w-0">
                <span class="px-1.5 py-0.2 rounded text-[9px] font-bold" :class="page.statusCode && page.statusCode >= 400 ? 'bg-rose-100 text-rose-800' : 'bg-green-100 text-green-800'">
                  {{ page.statusCode ?? '—' }}
                </span>
                <span class="font-bold text-gray-900 truncate text-[11px]" :title="page.title">
                  {{ page.title || page.path }}
                </span>
              </div>
              <span class="shrink-0 rounded bg-white px-1.5 py-0.5 text-[9px] text-gray-500">{{ page.source }}</span>
            </div>

            <div class="text-[10px] font-mono text-gray-500 truncate" :title="page.url">
              {{ page.url }}
            </div>

            <div class="flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-gray-200 pt-1 text-[9px] text-gray-600">
              <span>SEO: <strong :class="page.seoStatus === 'good' ? 'text-emerald-700' : page.seoStatus === 'not-audited' ? 'text-gray-500' : 'text-amber-700'">{{ page.seoScore ?? page.seoStatus }}</strong></span>
              <span v-if="page.issueCount">{{ page.issueCount }} SEO issues</span>
              <span v-if="page.pageSpeedScores">Perf: <strong>{{ page.pageSpeedScores.performance ?? '—' }}</strong></span>
              <span v-if="page.securityAudit">ZAP: <strong>{{ page.securityAudit.highAlerts }}H / {{ page.securityAudit.mediumAlerts }}M / {{ page.securityAudit.lowAlerts }}L</strong></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ═══════════════════════════════════════════════════════════════════════ -->
    <!-- TAB 2: AUTOMATED BFS CRAWLER                                            -->
    <!-- ═══════════════════════════════════════════════════════════════════════ -->
    <div v-else class="space-y-3">
      <!-- Auth Loss Warning Banner -->
      <div v-if="authLossUrl" class="p-3 rounded-lg bg-amber-50 border border-amber-300 text-xs text-amber-800 space-y-2">
        <div class="flex items-center gap-1.5 font-bold">
          <span>⚠️</span>
          <span>Authentication Lost (Redirected to Login)</span>
        </div>
        <p class="text-[11px] leading-relaxed">
          The crawler encountered a login redirect at <code>{{ authLossUrl }}</code>. Please log in again in a browser tab, then click Resume.
        </p>
        <button @click="resumeCrawl" class="btn btn-primary text-xs py-1 px-3">
          ✓ I am logged in, Resume Crawl
        </button>
      </div>

      <!-- Crawl Setup Form (When idle or stopped) -->
      <div v-if="!sessionState || sessionState.status === 'stopped' || sessionState.status === 'done'" class="card p-3 space-y-3">
        <span class="text-xs font-semibold text-gray-900 block">Launch Multi-Page Authenticated Crawl</span>
        <p class="text-[11px] text-gray-500">
          Crawls internal links in the background using your active browser cookies and authentication.
        </p>

        <div>
          <label class="block text-[11px] font-semibold text-gray-600 mb-1">Start URL (Home / Dashboard)</label>
          <input
            v-model="startUrl"
            type="url"
            class="input text-xs"
            placeholder="https://client-site.com/dashboard"
          />
        </div>

        <div class="grid grid-cols-2 gap-2">
          <div>
            <label class="block text-[11px] font-semibold text-gray-600 mb-1">Audit Job ID (Optional)</label>
            <input
              v-model="jobId"
              type="text"
              class="input text-xs font-mono"
              placeholder="From Web App Audit"
            />
          </div>
          <div>
            <label class="block text-[11px] font-semibold text-gray-600 mb-1">Max Pages (Limit)</label>
            <input
              v-model.number="pageLimit"
              type="number"
              min="1"
              max="100"
              class="input text-xs"
            />
          </div>
        </div>

        <button
          @click="startNewCrawl"
          :disabled="!config.apiToken || !config.projectId"
          class="btn btn-primary w-full text-xs py-2 font-bold"
        >
          ▶ Start Authenticated Crawl
        </button>
      </div>

      <!-- Live Crawl Progress Dashboard -->
      <div v-else class="card p-3 space-y-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span
              class="w-2.5 h-2.5 rounded-full"
              :class="sessionState.status === 'running' ? 'bg-green-500 animate-ping' : 'bg-amber-400'"
            ></span>
            <span class="text-xs font-bold uppercase tracking-wider text-gray-900">
              Crawl Status: {{ sessionState.status }}
            </span>
          </div>

          <!-- Controls -->
          <div class="flex gap-1.5">
            <button
              v-if="sessionState.status === 'running'"
              @click="pauseCrawl"
              class="btn btn-secondary text-xs py-1 px-2.5"
            >
              ⏸ Pause
            </button>
            <button
              v-else-if="sessionState.status === 'paused'"
              @click="resumeCrawl"
              class="btn btn-primary text-xs py-1 px-2.5"
            >
              ▶ Resume
            </button>
            <button
              @click="stopCrawl"
              class="btn btn-danger text-xs py-1 px-2.5"
            >
              ⏹ Stop
            </button>
          </div>
        </div>

        <!-- Metrics Counter Grid -->
        <div class="grid grid-cols-3 gap-2 text-center pt-1">
          <div class="bg-gray-50 p-2 rounded border border-gray-100">
            <span class="text-[10px] text-gray-400 block font-semibold">PAGES CRAWLED</span>
            <span class="text-lg font-extrabold text-indigo-600">{{ sessionState.crawledCount }}</span>
            <span class="text-[10px] text-gray-400 block">/ {{ sessionState.pageLimit }} max</span>
          </div>
          <div class="bg-gray-50 p-2 rounded border border-gray-100">
            <span class="text-[10px] text-gray-400 block font-semibold">QUEUE REMAINING</span>
            <span class="text-lg font-extrabold text-gray-800">{{ queueLength }}</span>
            <span class="text-[10px] text-gray-400 block">URLs</span>
          </div>
          <div class="bg-gray-50 p-2 rounded border border-gray-100">
            <span class="text-[10px] text-gray-400 block font-semibold">ERRORS</span>
            <span class="text-lg font-extrabold" :class="sessionState.errors.length > 0 ? 'text-red-500' : 'text-green-600'">
              {{ sessionState.errors.length }}
            </span>
            <span class="text-[10px] text-gray-400 block">issues</span>
          </div>
        </div>

        <!-- Last Audited URL -->
        <div v-if="lastUrl" class="p-2 rounded bg-gray-50 border border-gray-100 text-[11px]">
          <span class="text-gray-400 block text-[10px] font-semibold">LAST CRAWLED PAGE</span>
          <span class="font-mono text-gray-700 truncate block">{{ lastUrl }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
