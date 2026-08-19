<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuditStore } from '@/composables/useFirestore'
import type { AuditJob, PageResult } from '@/types'

const route = useRoute()
const router = useRouter()
const auditStore = useAuditStore()

const audit = ref<AuditJob | null>(null)
const pages = ref<PageResult[]>([])
const loading = ref(true)
const loadingPages = ref(false)

onMounted(async () => {
  const auditId = route.params.auditId as string
  audit.value = await auditStore.getAuditJob(auditId)
  loading.value = false

  if (audit.value) {
    loadingPages.value = true
    try {
      const pageDocs = await auditStore.getAuditPages(auditId)
      pages.value = pageDocs as PageResult[]
    } catch (e) {
      console.warn('Failed to load audit pages:', e)
    } finally {
      loadingPages.value = false
    }
  }
})

function getScoreColor(score: number): string {
  if (score >= 90) return 'text-green-600'
  if (score >= 50) return 'text-amber-500'
  return 'text-red-600'
}

function goBack() {
  router.push(`/projects/${route.params.id}`)
}
</script>

<template>
  <div v-if="loading" class="flex items-center justify-center py-16">
    <div class="flex flex-col items-center gap-3">
      <div class="h-8 w-8 rounded-full border-4 border-indigo-500 border-t-transparent animate-spin"></div>
      <p class="text-sm text-gray-500">Loading audit results...</p>
    </div>
  </div>

  <div v-else-if="!audit" class="card p-12 text-center">
    <p class="text-4xl mb-4">❌</p>
    <h3 class="text-lg font-semibold text-gray-900">Audit not found</h3>
    <button @click="goBack" class="btn-primary mt-4">Go Back</button>
  </div>

  <div v-else class="space-y-8">
    <div class="flex items-start justify-between flex-wrap gap-4">
      <div>
        <button @click="goBack" class="text-sm text-indigo-600 hover:text-indigo-700 mb-2 flex items-center gap-1">
          ← Back to Project
        </button>
        <div class="flex items-center gap-3">
          <h1 class="text-2xl font-bold text-gray-900">Audit Results</h1>
          <span
            v-if="audit.crawlMode"
            class="rounded-full px-2.5 py-0.5 text-xs font-semibold"
            :class="audit.crawlMode === 'extension' || audit.crawlMode === 'extension-instant' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'"
          >
            {{ audit.crawlMode === 'extension-instant' ? '🧩 Instant Single-Page' : audit.crawlMode === 'extension' ? '🧩 Chrome Ext Crawl' : '🌐 Server Crawl' }}
          </span>
        </div>
        <p class="mt-1 text-sm text-gray-500">{{ audit.timestamp ? (audit.timestamp as any).toDate?.().toLocaleString() : 'Processing...' }}</p>
      </div>

      <!-- Status Badge -->
      <div>
        <span
          class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider"
          :class="{
            'bg-green-100 text-green-800': audit.status === 'completed',
            'bg-amber-100 text-amber-800': audit.status === 'running',
            'bg-red-100 text-red-800': audit.status === 'failed' || audit.status === 'auth-failed',
            'bg-gray-100 text-gray-800': audit.status === 'pending',
          }"
        >
          {{ audit.status }}
        </span>
      </div>
    </div>

    <!-- Overview Cards -->
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <!-- Performance Score -->
      <div class="card p-5">
        <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Performance Score</h3>
        <p class="text-3xl font-bold" :class="getScoreColor(audit.summaries?.performance?.performance ?? 0)">
          {{ audit.summaries?.performance?.performance ?? 0 }}<span class="text-base font-normal text-gray-400">/100</span>
        </p>
        <p class="text-xs text-gray-500 mt-1">Google PageSpeed</p>
      </div>

      <!-- Security Alerts -->
      <div class="card p-5">
        <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Security Alerts</h3>
        <div class="flex items-baseline gap-2">
          <span class="text-3xl font-bold text-red-600">{{ audit.summaries?.security?.highAlerts ?? 0 }}</span>
          <span class="text-xs text-gray-500">high, {{ audit.summaries?.security?.mediumAlerts ?? 0 }} med</span>
        </div>
        <p class="text-xs text-gray-500 mt-1">OWASP ZAP Scanner</p>
      </div>

      <!-- SEO Pages Crawled -->
      <div class="card p-5">
        <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Pages Audited</h3>
        <p class="text-3xl font-bold text-gray-900">{{ audit.summaries?.seo?.pageCount ?? pages.length }}</p>
        <p class="text-xs text-gray-500 mt-1">{{ audit.summaries?.seo?.totalErrors ?? 0 }} total issue(s)</p>
      </div>

      <!-- Missing Headers -->
      <div class="card p-5">
        <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Missing Headers</h3>
        <p class="text-3xl font-bold text-amber-600">{{ audit.summaries?.security?.missingHeaders?.length ?? 0 }}</p>
        <p class="text-xs text-gray-500 mt-1">CSP, HSTS, Frame-Options</p>
      </div>
    </div>

    <!-- Audited Pages List -->
    <div class="card overflow-hidden">
      <div class="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
        <h3 class="text-base font-bold text-gray-900">📄 Crawled & Audited Pages ({{ pages.length }})</h3>
        <span v-if="loadingPages" class="text-xs text-gray-400">Loading sub-collection...</span>
      </div>

      <div v-if="pages.length === 0" class="p-8 text-center text-sm text-gray-500">
        {{ loadingPages ? 'Fetching page details...' : 'No page records stored for this audit yet.' }}
      </div>

      <div v-else class="divide-y divide-gray-100">
        <div v-for="(p, idx) in pages" :key="idx" class="p-5 hover:bg-gray-50 transition-colors">
          <div class="flex items-start justify-between flex-wrap gap-2">
            <div class="space-y-1 max-w-2xl">
              <div class="flex items-center gap-2">
                <span
                  class="rounded px-1.5 py-0.5 text-xs font-mono"
                  :class="p.source === 'extension' || p.source === 'extension-instant' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'"
                >
                  {{ p.source || 'server' }}
                </span>
                <p class="text-sm font-semibold text-gray-900 truncate">{{ p.title || '(No Title Tag)' }}</p>
              </div>
              <p class="text-xs font-mono text-gray-500 break-all">{{ p.url }}</p>
            </div>

            <!-- Page Quick Stats -->
            <div class="flex items-center gap-4 text-xs">
              <div v-if="typeof p.loadTimeMs === 'number' && p.loadTimeMs > 0" class="text-right">
                <span class="text-gray-400 block">Load Time</span>
                <span :class="p.loadTimeMs > 2000 ? 'text-red-600 font-bold' : 'text-green-600 font-semibold'">
                  {{ Math.round(p.loadTimeMs) }} ms
                </span>
              </div>
              <div v-if="typeof p.brokenImages === 'number'" class="text-right">
                <span class="text-gray-400 block">Broken Imgs</span>
                <span :class="p.brokenImages > 0 ? 'text-red-600 font-bold' : 'text-gray-600'">
                  {{ p.brokenImages }}
                </span>
              </div>
              <div v-if="p.headerCounts" class="text-right">
                <span class="text-gray-400 block">H1 Tags</span>
                <span :class="p.headerCounts.h1 === 1 ? 'text-green-600' : 'text-amber-600 font-bold'">
                  {{ p.headerCounts.h1 }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

