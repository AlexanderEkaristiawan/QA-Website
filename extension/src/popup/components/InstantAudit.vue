<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import type { ExtensionConfig, PageMetrics } from '@/types'
import { extractPageMetrics } from '@/content/scraper'
import SummaryTab from './tabs/SummaryTab.vue'
import HeadersTab from './tabs/HeadersTab.vue'
import ImagesTab from './tabs/ImagesTab.vue'
import LinksTab from './tabs/LinksTab.vue'
import SocialTab from './tabs/SocialTab.vue'
import SecurityTab from './tabs/SecurityTab.vue'
import ToolsTab from './tabs/ToolsTab.vue'

const props = defineProps<{
  config: ExtensionConfig
}>()

const activeTab = ref<'summary' | 'headers' | 'images' | 'links' | 'social' | 'security' | 'tools'>('summary')
const metrics = ref<PageMetrics | null>(null)
const scanning = ref(false)
const saving = ref(false)
const saveSuccess = ref(false)
const error = ref<string | null>(null)

let observedTabId: number | undefined

onMounted(() => {
  chrome.tabs.onUpdated.addListener(handleTabUpdated)
  runAudit()
})

onUnmounted(() => {
  chrome.tabs.onUpdated.removeListener(handleTabUpdated)
})

function handleTabUpdated(tabId: number, changeInfo: chrome.tabs.TabChangeInfo) {
  if (tabId === observedTabId && changeInfo.status === 'complete') {
    runAudit(tabId)
  }
}

async function runAudit(tabId?: number) {
  scanning.value = true
  error.value = null
  saveSuccess.value = false

  try {
    const tab = tabId === undefined
      ? (await chrome.tabs.query({ active: true, currentWindow: true }))[0]
      : await chrome.tabs.get(tabId)
    if (!tab?.id || !tab.url) {
      throw new Error('No active browser tab found.')
    }

    observedTabId = tab.id

    if (tab.url.startsWith('chrome://') || tab.url.startsWith('edge://') || tab.url.startsWith('about:')) {
      throw new Error('Cannot audit browser internal pages. Navigate to a public or local website.')
    }

    const results = await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: extractPageMetrics,
    })

    if (results[0]?.result) {
      const pageMetrics = results[0].result as PageMetrics
      const security = await chrome.runtime.sendMessage({
        type: 'GET_SECURITY_HEADERS',
        url: pageMetrics.url,
        tabId: tab.id,
      })
      metrics.value = { ...pageMetrics, security }
    } else {
      throw new Error('Failed to extract metrics from the page.')
    }
  } catch (err: any) {
    error.value = err.message || 'Audit failed.'
  } finally {
    scanning.value = false
  }
}

async function saveToProject() {
  if (!metrics.value) return
  if (!props.config.apiToken || !props.config.projectId) {
    alert('Please configure your Project ID and API Token in the Setup panel first.')
    return
  }

  saving.value = true
  error.value = null

  try {
    const payload = {
      projectId: props.config.projectId,
      url: metrics.value.url,
      timestamp: metrics.value.timestamp,
      metrics: {
        ...metrics.value,
        source: 'extension-instant',
      },
    }

    const res = await fetch(`${props.config.apiBaseUrl}/crawl-ingest`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${props.config.apiToken}`,
      },
      body: JSON.stringify(payload),
    })

    if (!res.ok) {
      const data = await res.json().catch(() => ({ error: 'Request failed' }))
      throw new Error(data.error || `HTTP ${res.status}`)
    }

    saveSuccess.value = true
    setTimeout(() => { saveSuccess.value = false }, 3000)
  } catch (err: any) {
    error.value = err.message || 'Failed to save to project.'
  } finally {
    saving.value = false
  }
}
</script>

<template>
  <div class="space-y-3">
    <!-- Active URL Header & Actions -->
    <div class="flex items-center justify-between gap-2">
      <div class="flex items-center gap-1.5 flex-1 min-w-0">
        <button @click="runAudit()" :disabled="scanning" class="btn btn-secondary text-xs py-1 px-2.5 flex-shrink-0">
          <span v-if="scanning" class="animate-spin">⟳</span>
          <span v-else>🔄 Refresh</span>
        </button>
        <span v-if="metrics" class="text-xs font-mono text-gray-500 truncate" :title="metrics.url">
          {{ metrics.url }}
        </span>
      </div>

      <button
        v-if="metrics"
        @click="saveToProject"
        :disabled="saving || !config.apiToken"
        class="btn btn-primary text-xs py-1 px-2.5 flex-shrink-0"
        :title="!config.apiToken ? 'Configure API token to save' : ''"
      >
        <span v-if="saving">Saving...</span>
        <span v-else-if="saveSuccess">✓ Saved!</span>
        <span v-else>💾 Save to Project</span>
      </button>
    </div>

    <!-- Error Banner -->
    <div v-if="error" class="p-2.5 rounded bg-red-50 border border-red-200 text-xs text-red-700">
      {{ error }}
    </div>

    <!-- Loading State -->
    <div v-if="scanning" class="card py-12 text-center space-y-2">
      <div class="inline-block animate-spin text-2xl">⟳</div>
      <p class="text-xs text-gray-500">Auditing active browser tab...</p>
    </div>

    <!-- Results Sub-Tabs -->
    <template v-else-if="metrics">
      <!-- Sub-Tab Navigation Bar -->
      <div class="flex gap-1 border-b border-gray-200 pb-1 overflow-x-auto text-xs">
        <button
          v-for="tab in [
            { key: 'summary', label: '📊 Summary' },
            { key: 'headers', label: '📑 Headers' },
            { key: 'images', label: `🖼️ Images` },//(${metrics.imageCount})
            { key: 'links', label: `🔗 Links` },//(${metrics.linkCount})
            { key: 'social', label: '🌐 Social' },
            { key: 'tools', label: '🛠️ Tools' },
            { key: 'security', label: '🛡️ Security' },
          ] as const"
          :key="tab.key"
          @click="activeTab = tab.key"
          class="px-2.5 py-1 font-medium rounded-t transition-colors whitespace-nowrap"
          :class="activeTab === tab.key ? 'bg-indigo-50 text-indigo-600 font-bold border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-800'"
        >
          {{ tab.label }}
        </button>
      </div>

      <!-- Tab Contents -->
      <SummaryTab v-if="activeTab === 'summary'" :metrics="metrics" />
      <HeadersTab v-else-if="activeTab === 'headers'" :metrics="metrics" />
      <ImagesTab v-else-if="activeTab === 'images'" :metrics="metrics" />
      <LinksTab v-else-if="activeTab === 'links'" :metrics="metrics" />
      <SocialTab v-else-if="activeTab === 'social'" :metrics="metrics" />
      <SecurityTab v-else-if="activeTab === 'security'" :metrics="metrics" />
      <ToolsTab v-else-if="activeTab === 'tools'" :metrics="metrics" />
    </template>
  </div>
</template>
