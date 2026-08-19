<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import type { ExtensionConfig, CrawlSession, ExtMessage } from '@/types'

const props = defineProps<{
  config: ExtensionConfig
}>()

const startUrl = ref('')
const jobId = ref('')
const pageLimit = ref(25)
const maxDurationMin = ref(15)

const sessionState = ref<CrawlSession | null>(null)
const lastUrl = ref<string | null>(null)
const authLossUrl = ref<string | null>(null)
const errorMsg = ref<string | null>(null)

onMounted(async () => {
  // Pre-fill active tab URL as startUrl
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
  if (tab?.url && !tab.url.startsWith('chrome://')) {
    startUrl.value = tab.url
  }

  // Load existing session state if any
  const data = await chrome.storage.local.get('qas_crawl_session')
  if (data.qas_crawl_session) {
    sessionState.value = data.qas_crawl_session
  }

  chrome.runtime.onMessage.addListener(handleMessage)
})

onUnmounted(() => {
  chrome.runtime.onMessage.removeListener(handleMessage)
})

function handleMessage(msg: ExtMessage) {
  if (msg.type === 'CRAWL_PROGRESS') {
    if (sessionState.value) {
      sessionState.value.crawledCount = msg.crawledCount
      sessionState.value.status = msg.status
      sessionState.value.errors = msg.errors
    }
    if (msg.lastUrl) lastUrl.value = msg.lastUrl
  } else if (msg.type === 'AUTH_LOSS_DETECTED') {
    authLossUrl.value = msg.redirectUrl
  }
}

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

    chrome.runtime.sendMessage({
      type: 'START_CRAWL',
      session: sessionInit,
    } as ExtMessage, () => {
      sessionState.value = {
        ...sessionInit,
        status: 'running',
        startedAt: Date.now(),
        queue: [sessionInit.startUrl],
        visited: [],
        crawledCount: 0,
        errors: [],
      }
    })
  } catch (err: any) {
    errorMsg.value = `Invalid URL: ${err.message}`
  }
}

function pauseCrawl() {
  chrome.runtime.sendMessage({ type: 'PAUSE_CRAWL' } as ExtMessage, () => {
    if (sessionState.value) sessionState.value.status = 'paused'
  })
}

function resumeCrawl() {
  authLossUrl.value = null
  chrome.runtime.sendMessage({ type: 'RESUME_CRAWL' } as ExtMessage, () => {
    if (sessionState.value) sessionState.value.status = 'running'
  })
}

function stopCrawl() {
  chrome.runtime.sendMessage({ type: 'STOP_CRAWL' } as ExtMessage, () => {
    if (sessionState.value) sessionState.value.status = 'stopped'
  })
}
</script>

<template>
  <div class="space-y-3">
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

    <!-- Error Banner -->
    <div v-if="errorMsg" class="p-2.5 rounded bg-red-50 border border-red-200 text-xs text-red-700">
      {{ errorMsg }}
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
          <span class="text-lg font-extrabold text-gray-800">{{ sessionState.queue?.length ?? 0 }}</span>
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
</template>
