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

// ── On-demand Single Page Audits State ──────────────────────────────────────
const runningSeo = ref(false)
const runningPageSpeed = ref(false)
const runningSecurity = ref(false)
const auditFeedback = ref<string | null>(null)

// Audit result previews
const seoResult = ref<{ score: number; status: string; issuesCount: number } | null>(null)
const pageSpeedResult = ref<{ perf: number | null; a11y: number | null; bp: number | null; seo: number | null } | null>(null)
const zapResult = ref<{ high: number; med: number; low: number; status: string } | null>(null)

let observedTabId: number | undefined

// Runs inside the active, authenticated page. This is a local Lighthouse-style
// audit using browser performance entries and DOM checks, not Google's PSI API.
async function collectInTabAudit() {
  const findings: { id: string; title: string; description: string; displayValue?: string }[] = []
  const add = (id: string, title: string, description: string, displayValue?: string) => {
    findings.push({ id, title, description, displayValue })
  }

  let lcp = 0
  let cls = 0
  try {
    const observer = new PerformanceObserver(list => {
      for (const entry of list.getEntries() as any[]) lcp = Math.max(lcp, entry.startTime || 0)
    })
    observer.observe({ type: 'largest-contentful-paint', buffered: true })
    await new Promise(resolve => setTimeout(resolve, 350))
    observer.disconnect()
  } catch { /* LCP observer may be unavailable on some pages */ }
  try {
    const observer = new PerformanceObserver(list => {
      for (const entry of list.getEntries() as any[]) if (!entry.hadRecentInput) cls += entry.value || 0
    })
    observer.observe({ type: 'layout-shift', buffered: true })
    await new Promise(resolve => setTimeout(resolve, 150))
    observer.disconnect()
  } catch { /* CLS observer may be unavailable on some pages */ }

  const paints = performance.getEntriesByType('paint')
  const fcp = paints.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0
  const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[]
  const transferBytes = resources.reduce((sum, entry) => sum + (entry.transferSize || 0), 0)
  const longTaskMs = performance.getEntriesByType('longtask').reduce((sum, entry) => sum + entry.duration, 0)
  const images = Array.from(document.images)
  const missingAlt = images.filter(image => !image.hasAttribute('alt')).length
  const unnamedButtons = Array.from(document.querySelectorAll('button,[role="button"]'))
    .filter(el => !((el.textContent || '').trim() || el.getAttribute('aria-label') || el.getAttribute('aria-labelledby'))).length
  const unlabeledInputs = Array.from(document.querySelectorAll('input:not([type="hidden"]),select,textarea'))
    .filter(el => !el.getAttribute('aria-label') && !el.getAttribute('aria-labelledby') &&
      !(el.id && document.querySelector(`label[for="${CSS.escape(el.id)}"]`)) && !el.closest('label')).length
  const titleLength = document.title.trim().length
  const description = document.querySelector('meta[name="description"]')?.getAttribute('content')?.trim() || ''
  const h1Count = document.querySelectorAll('h1').length
  const canonical = Boolean(document.querySelector('link[rel="canonical"]'))
  const viewport = Boolean(document.querySelector('meta[name="viewport"]'))
  const mixedContent = location.protocol === 'https:' && Array.from(document.querySelectorAll('[src],[href]'))
    .some(el => /^(http):\/\//i.test(el.getAttribute('src') || el.getAttribute('href') || ''))
  const unsafeBlankLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('a[target="_blank"]'))
    .filter(link => !/\bnoopener\b/i.test(link.rel)).length

  if (fcp > 1800) add('local-fcp', 'First Contentful Paint is slow', 'The page took over 1.8 seconds to render its first content.', `${(fcp / 1000).toFixed(1)} s`)
  if (lcp > 2500) add('local-lcp', 'Largest Contentful Paint is slow', 'The largest visible content took over 2.5 seconds to render.', `${(lcp / 1000).toFixed(1)} s`)
  if (cls > 0.1) add('local-cls', 'Layout shifts detected', 'Content moved during page load.', cls.toFixed(3))
  if (longTaskMs > 200) add('local-long-tasks', 'Long main-thread tasks', 'Long JavaScript tasks can delay interaction.', `${Math.round(longTaskMs)} ms`)
  if (resources.length > 80) add('local-resources', 'High resource count', 'The page loaded more than 80 network resources.', `${resources.length} resources`)
  if (transferBytes > 2_000_000) add('local-transfer-size', 'Large page transfer', 'The measurable transfer size exceeds 2 MB.', `${(transferBytes / 1_000_000).toFixed(1)} MB`)
  if (missingAlt) add('local-image-alt', 'Images missing alternative text', 'Add useful alt text to informative images.', `${missingAlt} images`)
  if (unnamedButtons) add('local-button-names', 'Buttons need accessible names', 'Give each button visible text or an accessible name.', `${unnamedButtons} buttons`)
  if (unlabeledInputs) add('local-input-labels', 'Form fields need labels', 'Associate each form field with a visible or accessible label.', `${unlabeledInputs} fields`)
  if (location.protocol !== 'https:' && location.hostname !== 'localhost') add('local-https', 'Use HTTPS', 'The page is not served over HTTPS.')
  if (mixedContent) add('local-mixed-content', 'Mixed content detected', 'Some page resources use HTTP on an HTTPS page.')
  if (unsafeBlankLinks) add('local-blank-links', 'External links may need protection', 'Links opening a new tab should include rel="noopener".', `${unsafeBlankLinks} links`)
  if (titleLength < 30 || titleLength > 65) add('local-title', 'Review the page title length', 'A descriptive title of about 30–65 characters is recommended.', `${titleLength} characters`)
  if (description.length < 120 || description.length > 320) add('local-description', 'Review the meta description', 'A useful meta description of about 120–320 characters is recommended.', `${description.length} characters`)
  if (h1Count !== 1) add('local-h1', 'Use one primary H1', 'The page should have exactly one primary H1 heading.', `${h1Count} headings`)
  if (!canonical) add('local-canonical', 'Canonical URL is missing', 'Add a canonical link when this page should have a preferred URL.')
  if (!viewport) add('local-viewport', 'Viewport metadata is missing', 'Add a viewport meta tag for mobile layout.')

  const score = (penalty: number) => Math.max(0, Math.min(100, 100 - penalty))
  const performancePenalty = (fcp > 3000 ? 25 : fcp > 1800 ? 12 : 0) + (lcp > 4000 ? 25 : lcp > 2500 ? 15 : 0) + (cls > 0.25 ? 20 : cls > 0.1 ? 10 : 0) + (longTaskMs > 500 ? 20 : longTaskMs > 200 ? 10 : 0) + (resources.length > 100 ? 10 : resources.length > 80 ? 5 : 0) + (transferBytes > 4_000_000 ? 15 : transferBytes > 2_000_000 ? 8 : 0)
  const accessibilityPenalty = Math.min(100, missingAlt * 5 + unnamedButtons * 5 + unlabeledInputs * 5)
  const bestPracticesPenalty = (location.protocol !== 'https:' && location.hostname !== 'localhost' ? 30 : 0) + (mixedContent ? 25 : 0) + Math.min(30, unsafeBlankLinks * 3)
  const seoPenalty = (titleLength === 0 ? 25 : titleLength < 30 || titleLength > 65 ? 8 : 0) + (!description ? 20 : description.length < 120 || description.length > 320 ? 6 : 0) + (h1Count === 0 ? 20 : h1Count > 1 ? 8 : 0) + (!canonical ? 8 : 0) + (!viewport ? 8 : 0)

  return {
    scores: {
      performance: score(performancePenalty),
      accessibility: score(accessibilityPenalty),
      bestPractices: score(bestPracticesPenalty),
      seo: score(seoPenalty),
    },
    metrics: {
      fcp: Math.round(fcp),
      lcp: Math.round(lcp),
      cls: Number(cls.toFixed(3)),
    },
    findings,
    auditType: 'in-tab-lighthouse-style',
    auditedAt: new Date().toISOString(),
  }
}

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

// ── Sync Helper to QA-Suite customPages Table ────────────────────────────────
async function syncToProjectTable(payload: Record<string, any>) {
  if (!props.config.apiToken || !props.config.projectId) {
    throw new Error('Please configure Project ID & Token in Set up first.')
  }

  const res = await fetch(`${props.config.apiBaseUrl}/record-page-audit`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${props.config.apiToken}`,
    },
    body: JSON.stringify({
      projectId: props.config.projectId,
      url: metrics.value?.url,
      title: metrics.value?.title,
      statusCode: 200,
      source: 'extension-instant',
      ...payload,
    }),
  })

  if (!res.ok) {
    const data = await res.json().catch(() => ({ error: 'Sync failed' }))
    throw new Error(data.error || `HTTP ${res.status}`)
  }
}

// ── Run Single Page SEO Audit ────────────────────────────────────────────────
async function runDirectSeo() {
  if (!metrics.value) return
  runningSeo.value = true
  auditFeedback.value = null
  error.value = null

  try {
    let seoData: any = null

    // 1. Try backend SEO analyzer
    try {
      const res = await fetch(`${props.config.apiBaseUrl}/audit-single-page`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: metrics.value.url }),
      })
      if (res.ok) {
        const json = await res.json()
        seoData = json.data
      }
    } catch {
      // Fallback: evaluate SEO from in-page metrics
    }

    if (!seoData) {
      const issues: any[] = []
      if (!metrics.value.title) {
        issues.push({ type: 'missing-title', description: 'Page is missing a <title> tag', severity: 'Critical' })
      } else if (metrics.value.titleLength < 30) {
        issues.push({ type: 'title-short', description: `Title too short (${metrics.value.titleLength} chars)`, severity: 'Minor' })
      }
      if (!metrics.value.metaDescription) {
        issues.push({ type: 'missing-meta-description', description: 'Page is missing a meta description', severity: 'Major' })
      }
      if (metrics.value.headerCounts?.h1 === 0) {
        issues.push({ type: 'missing-h1', description: 'Page is missing an <h1> heading', severity: 'Major' })
      }
      if (metrics.value.missingAltCount > 0) {
        issues.push({ type: 'missing-alt', description: `${metrics.value.missingAltCount} image(s) missing alt attribute`, severity: 'Minor' })
      }
      if (!metrics.value.hasOpenGraph) {
        issues.push({ type: 'missing-og', description: 'Missing Open Graph meta tags', severity: 'Minor' })
      }

      let penalty = 0
      issues.forEach(i => {
        if (i.severity === 'Critical') penalty += 25
        else if (i.severity === 'Major') penalty += 12
        else penalty += 5
      })
      const score = Math.max(0, 100 - penalty)
      const status = score >= 80 ? 'good' : score >= 50 ? 'warning' : 'error'

      seoData = {
        seoScore: score,
        seoStatus: status,
        issues,
        h1Count: metrics.value.headerCounts?.h1 ?? 0,
        missingAltCount: metrics.value.missingAltCount,
        titleLength: metrics.value.titleLength,
        metaDescription: metrics.value.metaDescription,
        descriptionLength: metrics.value.descriptionLength,
        canonicalUrl: metrics.value.canonicalUrl,
        robotsMeta: metrics.value.robotsMeta,
        hasOpenGraph: metrics.value.hasOpenGraph,
      }
    }

    seoResult.value = {
      score: seoData.seoScore,
      status: seoData.seoStatus,
      issuesCount: seoData.issues?.length || 0,
    }

    // Save to Project table in QA-Suite
    await syncToProjectTable({ seo: seoData })
    auditFeedback.value = `✓ SEO audit recorded on QA-Suite table (Score: ${seoData.seoScore}/100)`
    setTimeout(() => { auditFeedback.value = null }, 4000)
  } catch (err: any) {
    error.value = err.message || 'SEO audit failed'
  } finally {
    runningSeo.value = false
  }
}

// ── Run a local audit against the authenticated active tab ───────────────────
async function runInTabAudit() {
  if (!metrics.value) return
  runningPageSpeed.value = true
  auditFeedback.value = null
  error.value = null

  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
    const tabId = observedTabId ?? tab?.id
    if (!tabId || tabId !== tab?.id) throw new Error('The active page changed. Refresh the page audit and try again.')
    const results = await chrome.scripting.executeScript({ target: { tabId }, func: collectInTabAudit })
    const perfData = results[0]?.result
    if (!perfData) throw new Error('Could not collect audit data from the active tab.')

    pageSpeedResult.value = {
      perf: perfData.scores.performance,
      a11y: perfData.scores.accessibility,
      bp: perfData.scores.bestPractices,
      seo: perfData.scores.seo,
    }

    // Save to Project table in QA-Suite
    await syncToProjectTable({ pageSpeed: perfData })
    auditFeedback.value = `✓ In-tab audit recorded (Performance: ${perfData.scores.performance}/100)`
    setTimeout(() => { auditFeedback.value = null }, 4000)
  } catch (err: any) {
    error.value = err.message || 'In-tab audit failed'
  } finally {
    runningPageSpeed.value = false
  }
}

// ── Run Single Page ZAP Security Audit ───────────────────────────────────────
async function runDirectZapSecurity() {
  if (!metrics.value) return
  runningSecurity.value = true
  auditFeedback.value = null
  error.value = null

  try {
    let zapData: any = null

    try {
      const startRes = await fetch(`${props.config.apiBaseUrl}/audit-page-security`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ projectId: props.config.projectId, url: metrics.value.url }),
      })
      const start = await startRes.json()
      if (startRes.ok && start.scanId && start.status !== 'unavailable') {
        for (let attempt = 0; attempt < 30; attempt++) {
          await new Promise(r => setTimeout(r, 2000))
          const checkRes = await fetch(`${props.config.apiBaseUrl}/check-page-security`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ scanId: start.scanId }),
          })
          const res = await checkRes.json()
          if (res.status === 'completed') {
            zapData = res
            break
          }
        }
      }
    } catch {
      // Fallback to headers check
    }

    // Fallback: evaluate headers captured by extension
    if (!zapData) {
      const headers = metrics.value.security?.headers || {}
      const missingHeaders: string[] = []
      if (!headers['x-frame-options'] && !headers['content-security-policy']) {
        missingHeaders.push('Missing Anti-clickjacking Header (X-Frame-Options)')
      }
      if (!headers['strict-transport-security']) {
        missingHeaders.push('Missing Strict-Transport-Security (HSTS)')
      }
      if (!headers['x-content-type-options']) {
        missingHeaders.push('Missing X-Content-Type-Options: nosniff')
      }
      if (!headers['content-security-policy']) {
        missingHeaders.push('Content Security Policy (CSP) Not Implemented')
      }

      const alerts = missingHeaders.map(title => ({
        alert: title,
        risk: title.includes('Anti-clickjacking') ? 'Medium' : 'Low',
        description: `Header check on ${metrics.value?.url}`,
      }))

      zapData = {
        status: 'completed',
        highAlerts: 0,
        mediumAlerts: alerts.filter(a => a.risk === 'Medium').length,
        lowAlerts: alerts.filter(a => a.risk === 'Low').length,
        alerts,
      }
    }

    zapResult.value = {
      high: zapData.highAlerts || 0,
      med: zapData.mediumAlerts || 0,
      low: zapData.lowAlerts || 0,
      status: zapData.status || 'completed',
    }

    // Save to Project table in QA-Suite
    await syncToProjectTable({ security: zapData })
    auditFeedback.value = `✓ Security audit recorded (${zapData.highAlerts || 0} High, ${zapData.mediumAlerts || 0} Med)`
    setTimeout(() => { auditFeedback.value = null }, 4000)
  } catch (err: any) {
    error.value = err.message || 'Security scan failed'
  } finally {
    runningSecurity.value = false
  }
}

// ── Run All 3 Audits in Sequence ─────────────────────────────────────────────
async function runAllAudits() {
  await runDirectSeo()
  await runInTabAudit()
  await runDirectZapSecurity()
}

// ── Save to Project Legacy Button ────────────────────────────────────────────
async function saveToProject() {
  if (!metrics.value) return
  if (!props.config.apiToken || !props.config.projectId) {
    alert('Please configure your Project ID and API Token in Set up first.')
    return
  }

  saving.value = true
  error.value = null

  try {
    await syncToProjectTable({})
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
        <span v-else>💾 Track Page</span>
      </button>
    </div>

    <!-- Error Banner -->
    <div v-if="error" class="p-2.5 rounded bg-red-50 border border-red-200 text-xs text-red-700">
      {{ error }}
    </div>

    <!-- Audit Feedback Banner -->
    <div v-if="auditFeedback" class="p-2.5 rounded bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-1.5">
      <span>✨</span>
      <span>{{ auditFeedback }}</span>
    </div>

    <!-- Loading State -->
    <div v-if="scanning" class="card py-12 text-center space-y-2">
      <div class="inline-block animate-spin text-2xl">⟳</div>
      <p class="text-xs text-gray-500">Auditing active browser tab...</p>
    </div>

    <!-- Direct Audits Command Deck & Tab Content -->
    <template v-else-if="metrics">
      <!-- ═══════════════════════════════════════════════════════════════════ -->
      <!-- DIRECT ON-DEMAND AUDITS BAR (Syncs to Web App Page Audit Table)      -->
      <!-- ═══════════════════════════════════════════════════════════════════ -->
      <div class="card p-3 space-y-2.5 border border-indigo-100 bg-gradient-to-br from-indigo-50/40 to-white">
        <div class="flex items-center justify-between">
          <span class="text-xs font-bold text-gray-900 flex items-center gap-1.5">
            <span>⚡</span>
          <span>Run On-Demand Audits</span>
          </span>

          <button
            type="button"
            @click="runAllAudits"
            :disabled="runningSeo || runningPageSpeed || runningSecurity || !config.apiToken"
            class="text-[11px] font-bold text-indigo-700 hover:text-indigo-900 bg-indigo-100/70 hover:bg-indigo-100 px-2 py-0.5 rounded transition-all flex items-center gap-1"
          >
            <span>Run All 3</span>
            <span>⚡</span>
          </button>
        </div>

        <p class="text-[10px] text-gray-500">
          Run audits on this live, signed-in page. The in-tab category scores are local Lighthouse-style checks, then automatically record in the <strong>Page Audits table</strong>.
        </p>

        <!-- 3 Quick Audit Action Buttons -->
        <div class="grid min-w-0 grid-cols-3 gap-1.5">
          <!-- 1. SEO Audit Button -->
          <button
            type="button"
            @click="runDirectSeo"
            :disabled="runningSeo || !config.apiToken"
            class="min-w-0 p-1.5 rounded-lg border text-left transition-all hover:border-indigo-300 hover:shadow-xs flex flex-col justify-between"
            :class="runningSeo ? 'bg-indigo-50/50 border-indigo-300' : 'bg-white border-gray-200'"
          >
            <div class="flex items-center justify-between w-full">
              <span class="min-w-0 truncate whitespace-nowrap text-[10px] font-bold text-gray-800">🔍 SEO</span>
              <span v-if="runningSeo" class="animate-spin text-xs text-indigo-600">⟳</span>
              <span v-else-if="seoResult" class="shrink-0 text-[9px] leading-none font-bold px-1 py-1 rounded" :class="seoResult.score >= 80 ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'">
                {{ seoResult.score }}
              </span>
            </div>
            <span class="mt-1 block truncate whitespace-nowrap text-[9px] text-gray-400">
              {{ runningSeo ? 'Auditing...' : seoResult ? `${seoResult.issuesCount} issues` : 'Run audit' }}
            </span>
          </button>

          <!-- 2. Local authenticated-page audit -->
          <button
            type="button"
            @click="runInTabAudit"
            :disabled="runningPageSpeed || !config.apiToken"
            class="min-w-0 p-1.5 rounded-lg border text-left transition-all hover:border-amber-300 hover:shadow-xs flex flex-col justify-between"
            :class="runningPageSpeed ? 'bg-amber-50/50 border-amber-300' : 'bg-white border-gray-200'"
          >
            <div class="flex items-center justify-between w-full">
              <span class="min-w-0 flex-1 truncate whitespace-nowrap text-[10px] font-bold text-gray-800">⚡ In-tab Audit</span>
              <span v-if="runningPageSpeed" class="animate-spin text-xs text-amber-600">⟳</span>
              <span v-else-if="pageSpeedResult" class="shrink-0 text-[9px] leading-none font-bold px-1 py-1 rounded bg-amber-100 text-amber-800">
                {{ pageSpeedResult.perf ?? '—' }}
              </span>
            </div>
            <span class="mt-1 block truncate whitespace-nowrap text-[9px] text-gray-400">
              {{ runningPageSpeed ? 'Auditing live tab...' : pageSpeedResult ? `Perf / A11y` : 'In-tab checks' }}
            </span>
          </button>

          <!-- 3. ZAP Security Button -->
          <button
            type="button"
            @click="runDirectZapSecurity"
            :disabled="runningSecurity || !config.apiToken"
            class="min-w-0 p-1.5 rounded-lg border text-left transition-all hover:border-rose-300 hover:shadow-xs flex flex-col justify-between"
            :class="runningSecurity ? 'bg-rose-50/50 border-rose-300' : 'bg-white border-gray-200'"
          >
            <div class="flex items-center justify-between w-full">
              <span class="min-w-0 truncate whitespace-nowrap text-[10px] font-bold text-gray-800">🛡️ ZAP</span>
              <span v-if="runningSecurity" class="animate-spin text-xs text-rose-600">⟳</span>
              <span v-else-if="zapResult" class="shrink-0 text-[8px] leading-none font-bold px-1 py-1 rounded" :class="zapResult.high > 0 ? 'bg-rose-100 text-rose-800' : 'bg-emerald-100 text-emerald-800'">
                {{ zapResult.high }}H / {{ zapResult.med }}M
              </span>
            </div>
            <span class="mt-1 block truncate whitespace-nowrap text-[9px] text-gray-400">
              {{ runningSecurity ? 'Scanning...' : zapResult ? 'Scan done' : 'Header / ZAP' }}
            </span>
          </button>
        </div>
      </div>

      <!-- Sub-Tab Navigation Bar -->
      <div class="flex gap-1 border-b border-gray-200 pb-1 overflow-x-auto text-xs">
        <button
          v-for="tab in [
            { key: 'summary', label: '📊 Summary' },
            { key: 'headers', label: '📑 Headers' },
            { key: 'images', label: `🖼️ Images` },
            { key: 'links', label: `🔗 Links` },
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
