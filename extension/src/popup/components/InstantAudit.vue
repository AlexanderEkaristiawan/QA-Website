<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import type { ExtensionConfig, PageMetrics } from '@/types'
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
      func: extractMetricsInTab,
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

// Injected extractor function
function extractMetricsInTab(): PageMetrics {
  const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined
  const loadTimeMs = nav ? Math.round(nav.loadEventEnd - nav.startTime) : 0
  const domReadyMs = nav ? Math.round(nav.domContentLoadedEventEnd - nav.startTime) : 0

  const titleEl = document.querySelector('title')
  const title = titleEl ? titleEl.textContent?.trim() ?? '' : ''

  function getMeta(selector: string): string {
    return (document.querySelector(selector) as HTMLMetaElement)?.content?.trim() ?? ''
  }
  const metaDescription = getMeta('meta[name="description"]')
  const keywords = getMeta('meta[name="keywords"]')
  const robotsMeta = getMeta('meta[name="robots"]') || null
  const author = getMeta('meta[name="author"]') || null
  const langAttr = document.documentElement.getAttribute('lang')

  const canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
  const canonicalUrl = canonicalEl?.href ?? null

  const headerCounts = { h1: 0, h2: 0, h3: 0, h4: 0, h5: 0, h6: 0 }
  const headersList: { level: number; text: string }[] = []
  document.querySelectorAll('h1,h2,h3,h4,h5,h6').forEach(el => {
    const level = parseInt(el.tagName[1], 10) as 1 | 2 | 3 | 4 | 5 | 6
    headerCounts[`h${level}` as keyof typeof headerCounts]++
    headersList.push({ level, text: (el.textContent ?? '').trim().slice(0, 200) })
  })

  const imgs = Array.from(document.querySelectorAll('img'))
  let missingAltCount = 0, missingTitleCount = 0, brokenImages = 0
  const images = imgs.map(img => {
    const alt = img.getAttribute('alt') ?? ''
    const titleAttr = img.getAttribute('title') ?? ''
    const broken = img.naturalWidth === 0 && img.complete
    if (!alt) missingAltCount++
    if (!titleAttr) missingTitleCount++
    if (broken) brokenImages++
    return { src: img.src.slice(0, 300), alt: alt.slice(0, 200), title: titleAttr.slice(0, 200), broken }
  })

  const baseDomain = location.hostname
  const hrefCounts: Record<string, number> = {}
  const anchors = Array.from(document.querySelectorAll('a[href]'))
  anchors.forEach(a => { const h = (a as HTMLAnchorElement).href; hrefCounts[h] = (hrefCounts[h] ?? 0) + 1 })
  let missingLinkTitleCount = 0, internalLinks = 0, externalLinks = 0
  const links = anchors.map(a => {
    const el = a as HTMLAnchorElement
    const href = el.href, hrefAttr = el.getAttribute('href') ?? '', t = el.getAttribute('title') ?? ''
    if (!t) missingLinkTitleCount++
    const internal = el.hostname === baseDomain || hrefAttr.startsWith('#') || hrefAttr.startsWith('/')
    if (internal) internalLinks++; else externalLinks++
    let type: 'standard' | 'anchor' | 'js' | 'mailto' = 'standard'
    if (hrefAttr.startsWith('#')) type = 'anchor'
    else if (hrefAttr.startsWith('javascript:')) type = 'js'
    else if (hrefAttr.startsWith('mailto:')) type = 'mailto'
    return { href: href.slice(0, 500), text: (el.textContent ?? '').trim().slice(0, 200), type, title: t.slice(0, 200), internal, duplicate: hrefCounts[href] > 1 }
  })
  const duplicateLinksCount = Object.values(hrefCounts).filter(c => c > 1).length

  const scriptSrcs = Array.from(document.querySelectorAll('script[src]')).map(s => (s as HTMLScriptElement).src)
  const knownAnalytics = ['google-analytics.com','googletagmanager.com','segment.com','mixpanel.com','plausible.io','hotjar.com','clarity.ms']
  const analyticsScripts = scriptSrcs.filter(src => knownAnalytics.some(a => src.includes(a)))

  const openGraphTags: Record<string, string> = {}
  document.querySelectorAll('meta[property^="og:"]').forEach(m => { openGraphTags[m.getAttribute('property') ?? ''] = ((m as HTMLMetaElement).content ?? '').slice(0, 300) })
  const twitterCardTags: Record<string, string> = {}
  document.querySelectorAll('meta[name^="twitter:"]').forEach(m => { twitterCardTags[m.getAttribute('name') ?? ''] = ((m as HTMLMetaElement).content ?? '').slice(0, 300) })
  const hasSchemaOrg = document.querySelector('script[type="application/ld+json"]') !== null

  return {
    url: location.href,
    timestamp: new Date().toISOString(),
    title, titleLength: title.length,
    metaDescription, descriptionLength: metaDescription.length,
    keywords, canonicalUrl, robotsMeta, langAttr, author,
    headerCounts, headers: headersList.slice(0, 100),
    imageCount: imgs.length, missingAltCount, missingTitleCount, brokenImages, images: images.slice(0, 50),
    linkCount: anchors.length, internalLinks, externalLinks, duplicateLinksCount, missingLinkTitleCount, links: links.slice(0, 100),
    hasAnalyticsScript: analyticsScripts.length > 0, analyticsScripts,
    hasOpenGraph: Object.keys(openGraphTags).length > 0, openGraphTags,
    hasTwitterCard: Object.keys(twitterCardTags).length > 0, twitterCardTags,
    hasSchemaOrg, extraMetaTags: [], extraLinkTags: [],
    loadTimeMs, domReadyMs,
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
            { key: 'images', label: `🖼️ Images (${metrics.imageCount})` },
            { key: 'links', label: `🔗 Links (${metrics.linkCount})` },
            { key: 'social', label: '🌐 Social' },
            { key: 'tools', label: '🛠️ Tools' },
            { key: 'security', label: 'Security' },
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
