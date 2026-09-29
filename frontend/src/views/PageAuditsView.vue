<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useProjectStore, useAuditStore, usePageStore } from '@/composables/useFirestore'
import { usePageAudits } from '@/composables/usePageAudits'
import type { Project, ProjectPage, SEOIssue, PageResult } from '@/types'

const route = useRoute()
const router = useRouter()
const projectStore = useProjectStore()
const auditStore = useAuditStore()
const pageStore = usePageStore()
const { auditingSeoUrl, auditingPerfUrl, runSinglePageSEO, runSinglePageSpeed } = usePageAudits()

const projectId = route.params.id as string
const project = ref<Project | null>(null)
const pages = ref<ProjectPage[]>([])
const loading = ref(true)
const searchQuery = ref('')
const filterStatus = ref<'all' | 'good' | 'issues' | 'has-pagespeed' | 'no-pagespeed'>('all')

// Add Page Modal
const showAddModal = ref(false)
const newPageInput = ref('')
const newPageTitle = ref('')
const runSeoOnAdd = ref(true)
const runPerfOnAdd = ref(false)
const addingPage = ref(false)
const addPageError = ref('')

// SEO Details Modal
const selectedPageForDetails = ref<ProjectPage | null>(null)

// Batch running states
const batchRunningSeo = ref(false)
const batchRunningPerf = ref(false)
const batchProgress = ref({ current: 0, total: 0 })

let unsubscribe: (() => void) | null = null

onMounted(async () => {
  try {
    project.value = await projectStore.getProject(projectId)

    unsubscribe = pageStore.subscribeProjectPages(projectId, async (loadedPages) => {
      if (loadedPages.length === 0 && project.value?.targetUrl) {
        await seedInitialPages()
      } else {
        pages.value = loadedPages
      }
      loading.value = false
    })
  } catch (err) {
    console.error('PageAudits load error:', err)
  } finally {
    setTimeout(() => {
      loading.value = false
    }, 1000)
  }
})

onUnmounted(() => {
  unsubscribe?.()
})

async function seedInitialPages() {
  if (!project.value?.targetUrl) {
    loading.value = false
    return
  }

  try {
    let rootPath = '/'
    try { rootPath = new URL(project.value.targetUrl).pathname || '/' } catch {}

    const initialList: ProjectPage[] = [
      {
        id: `page_${Date.now()}_root`,
        projectId,
        url: project.value.targetUrl,
        path: rootPath,
        title: project.value.name || 'Homepage',
        source: 'root',
        seoStatus: 'not-audited',
        createdAt: new Date().toISOString(),
      },
    ]

    try {
      const jobs = await auditStore.getAuditJobs(projectId)
      if (jobs.length > 0) {
        const crawled = (await auditStore.getAuditPages(jobs[0].id)) as PageResult[]
        const seenUrls = new Set([project.value.targetUrl.toLowerCase()])
        for (const cp of crawled) {
          if (!cp.url || seenUrls.has(cp.url.toLowerCase())) continue
          seenUrls.add(cp.url.toLowerCase())
          let path = '/'
          try { path = new URL(cp.url).pathname || '/' } catch {}
          initialList.push({
            id: `page_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
            projectId,
            url: cp.url,
            path,
            title: cp.title || undefined,
            source: 'crawled',
            statusCode: cp.statusCode,
            h1Count: cp.h1Count,
            missingAltCount: cp.missingAltCount || cp.missingAlt,
            canonicalUrl: cp.canonicalUrl,
            robotsMeta: cp.robotsMeta,
            issues: cp.issues || [],
            seoStatus: (cp.issues?.length ?? 0) === 0 ? 'good' : 'warning',
            seoScore: Math.max(0, 100 - (cp.issues?.length || 0) * 12),
            seoAuditedAt: cp.timestamp ? new Date(cp.timestamp) : new Date(),
            createdAt: new Date().toISOString(),
          })
        }
      }
    } catch (e) {
      console.warn('Could not read crawled pages:', e)
    }

    pages.value = initialList
    await pageStore.saveProjectPages(projectId, initialList)
  } catch (err) {
    console.warn('Failed to seed pages:', err)
  } finally {
    loading.value = false
  }
}

// ── Computed & Filters ──────────────────────────────────────────────────────
const filteredPages = computed(() => {
  return pages.value.filter(p => {
    const q = searchQuery.value.trim().toLowerCase()
    const matchesSearch = !q || p.url.toLowerCase().includes(q) || (p.title && p.title.toLowerCase().includes(q))
    if (!matchesSearch) return false

    if (filterStatus.value === 'good') return p.seoStatus === 'good'
    if (filterStatus.value === 'issues') return p.seoStatus === 'warning' || p.seoStatus === 'error'
    if (filterStatus.value === 'has-pagespeed') return p.pageSpeedScores !== null && p.pageSpeedScores !== undefined
    if (filterStatus.value === 'no-pagespeed') return !p.pageSpeedScores
    return true
  })
})

const stats = computed(() => {
  const total = pages.value.length
  const withGoodSeo = pages.value.filter(p => p.seoStatus === 'good').length
  const withIssues = pages.value.filter(p => p.seoStatus === 'warning' || p.seoStatus === 'error').length
  const withPageSpeed = pages.value.filter(p => p.pageSpeedScores?.performance !== null && p.pageSpeedScores?.performance !== undefined)

  const avgPerf = withPageSpeed.length > 0
    ? Math.round(withPageSpeed.reduce((acc, p) => acc + (p.pageSpeedScores?.performance || 0), 0) / withPageSpeed.length)
    : null

  return { total, withGoodSeo, withIssues, withPageSpeedCount: withPageSpeed.length, avgPerf }
})

// ── Add Page Handler ────────────────────────────────────────────────────────
function normalizeUrl(input: string): string {
  let val = input.trim()
  if (!val) return ''

  if (val.startsWith('/')) {
    // Relative path -> prepend project's targetUrl base
    const base = project.value?.targetUrl ? new URL(project.value.targetUrl).origin : 'https://example.com'
    return `${base}${val}`
  }

  if (!/^https?:\/\//i.test(val)) {
    val = `https://${val}`
  }

  try {
    const u = new URL(val)
    return u.href
  } catch {
    return ''
  }
}

async function handleAddPage() {
  addPageError.value = ''
  const finalUrl = normalizeUrl(newPageInput.value)

  if (!finalUrl) {
    addPageError.value = 'Please enter a valid page URL or relative path (e.g. /about or https://...)'
    return
  }

  // Check duplicate
  if (pages.value.some(p => p.url.toLowerCase() === finalUrl.toLowerCase())) {
    addPageError.value = 'This page URL is already tracked in this project.'
    return
  }

  addingPage.value = true
  try {
    let parsedPath = '/'
    try { parsedPath = new URL(finalUrl).pathname || '/' } catch {}

    const newPageData: Omit<ProjectPage, 'id'> = {
      projectId,
      url: finalUrl,
      path: parsedPath,
      title: newPageTitle.value.trim() || undefined,
      source: 'manual',
      seoStatus: 'not-audited',
    }

    const docId = await pageStore.addProjectPage(projectId, newPageData)

    // Optionally trigger SEO and/or PageSpeed immediately
    if (runSeoOnAdd.value) {
      void runSeoAuditForPage({ ...newPageData, id: docId })
    }
    if (runPerfOnAdd.value) {
      void runPageSpeedForPage({ ...newPageData, id: docId })
    }

    showAddModal.value = false
    newPageInput.value = ''
    newPageTitle.value = ''
  } catch (err: any) {
    addPageError.value = err.message || 'Failed to add page'
  } finally {
    addingPage.value = false
  }
}

// ── Discover & Import Crawled Pages ─────────────────────────────────────────
const importingCrawled = ref(false)
async function handleImportCrawledPages() {
  if (importingCrawled.value) return
  importingCrawled.value = true

  try {
    const jobs = await auditStore.getAuditJobs(projectId)
    const existingUrls = new Set(pages.value.map(p => p.url.toLowerCase()))
    const toImport: Array<Omit<ProjectPage, 'id'>> = []

    for (const job of jobs.slice(0, 3)) {
      try {
        const crawledPages = (await auditStore.getAuditPages(job.id)) as PageResult[]
        for (const cp of crawledPages) {
          if (!cp.url) continue
          const norm = cp.url.toLowerCase()
          if (!existingUrls.has(norm)) {
            existingUrls.add(norm)
            let path = '/'
            try { path = new URL(cp.url).pathname || '/' } catch {}

            toImport.push({
              projectId,
              url: cp.url,
              path,
              title: cp.title || undefined,
              source: 'crawled',
              statusCode: cp.statusCode,
              h1Count: cp.h1Count,
              missingAltCount: cp.missingAltCount || cp.missingAlt,
              canonicalUrl: cp.canonicalUrl,
              robotsMeta: cp.robotsMeta,
              issues: cp.issues || [],
              seoStatus: (cp.issues?.length ?? 0) === 0 ? 'good' : 'warning',
              seoScore: Math.max(0, 100 - (cp.issues?.length || 0) * 12),
              seoAuditedAt: cp.timestamp ? new Date(cp.timestamp) : new Date(),
            })
          }
        }
      } catch (err) {
        console.warn(`Could not read pages for audit job ${job.id}:`, err)
      }
    }

    if (toImport.length > 0) {
      await pageStore.batchAddProjectPages(projectId, toImport)
      alert(`Imported ${toImport.length} page(s) discovered from previous audits!`)
    } else {
      alert('No new unique pages found from recent crawls to import.')
    }
  } catch (err: any) {
    alert('Failed to import pages: ' + err.message)
  } finally {
    importingCrawled.value = false
  }
}

// ── Single Page SEO Audit ───────────────────────────────────────────────────
async function runSeoAuditForPage(page: ProjectPage) {
  if (auditingSeoUrl.value === page.url) return
  const result = await runSinglePageSEO(page.url, project.value?.authSettings)
  if (result) {
    Object.assign(page, {
      ...result,
      statusCode: result.statusCode ?? 200,
    })
    await pageStore.updateProjectPage(projectId, page.id, {
      ...result,
      statusCode: result.statusCode ?? 200,
    })
  }
}

// ── Single Page PageSpeed Audit ─────────────────────────────────────────────
async function runPageSpeedForPage(page: ProjectPage) {
  if (auditingPerfUrl.value === page.url) return
  const result = await runSinglePageSpeed(page.url, 'mobile')
  if (result) {
    Object.assign(page, {
      pageSpeedScores: result.pageSpeedScores,
      pageSpeedMetrics: result.pageSpeedMetrics,
      pageSpeedAuditedAt: new Date(),
    })
    await pageStore.updateProjectPage(projectId, page.id, {
      pageSpeedScores: result.pageSpeedScores,
      pageSpeedMetrics: result.pageSpeedMetrics,
      pageSpeedAuditedAt: new Date(),
    })
  }
}

// ── Batch Run All ───────────────────────────────────────────────────────────
async function runAllSeo() {
  if (batchRunningSeo.value) return
  batchRunningSeo.value = true
  batchProgress.value = { current: 0, total: pages.value.length }

  for (const page of pages.value) {
    batchProgress.value.current++
    await runSeoAuditForPage(page)
    await new Promise(r => setTimeout(r, 600))
  }
  batchRunningSeo.value = false
}

async function runAllPageSpeed() {
  if (batchRunningPerf.value) return
  batchRunningPerf.value = true
  batchProgress.value = { current: 0, total: pages.value.length }

  for (const page of pages.value) {
    batchProgress.value.current++
    await runPageSpeedForPage(page)
    await new Promise(r => setTimeout(r, 1500))
  }
  batchRunningPerf.value = false
}

// ── Delete Page ─────────────────────────────────────────────────────────────
async function handleDeletePage(page: ProjectPage) {
  if (!confirm(`Remove "${page.url}" from this project's tracked pages?`)) return
  await pageStore.deleteProjectPage(projectId, page.id)
}

function getScoreColorClass(score: number | null | undefined): string {
  if (score === null || score === undefined) return 'text-gray-400 bg-gray-50 border-gray-200'
  if (score >= 90) return 'text-emerald-700 bg-emerald-50 border-emerald-300 font-bold'
  if (score >= 50) return 'text-amber-700 bg-amber-50 border-amber-300 font-bold'
  return 'text-rose-700 bg-rose-50 border-rose-300 font-bold'
}

function getScoreBgBadge(score: number | null | undefined): string {
  if (score === null || score === undefined) return 'bg-gray-200 text-gray-500'
  if (score >= 90) return 'bg-emerald-500 text-white'
  if (score >= 50) return 'bg-amber-500 text-white'
  return 'bg-rose-500 text-white'
}
</script>

<template>
  <div v-if="loading" class="flex items-center justify-center py-24">
    <div class="flex flex-col items-center gap-3">
      <div class="h-10 w-10 rounded-full border-4 border-indigo-500 border-t-transparent animate-spin"></div>
      <p class="text-sm text-gray-500">Loading tracked pages...</p>
    </div>
  </div>

  <div v-else-if="!project" class="card p-12 text-center">
    <p class="text-5xl mb-4">❌</p>
    <h3 class="text-lg font-semibold text-gray-900">Project not found</h3>
    <router-link to="/projects" class="btn-primary mt-4 inline-block">Back to Projects</router-link>
  </div>

  <div v-else class="space-y-6">
    <!-- Header -->
    <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <router-link
          :to="`/projects/${projectId}`"
          class="mb-2 inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-indigo-600 transition-colors"
        >
          <span>← Back to Project Overview</span>
        </router-link>
        <div class="flex items-center gap-2.5">
          <h1 class="text-2xl font-bold text-gray-900">Page SEO &amp; Performance Audits</h1>
          <span class="inline-flex items-center rounded-full bg-indigo-50 border border-indigo-200 px-2.5 py-0.5 text-xs font-semibold text-indigo-700">
            {{ pages.length }} page{{ pages.length === 1 ? '' : 's' }}
          </span>
        </div>
        <p class="mt-1 text-sm text-gray-500">
          Track URLs, run on-demand page SEO audits, and benchmark Google PageSpeed performance per page for
          <strong class="text-gray-700">{{ project.targetUrl }}</strong>
        </p>
      </div>

      <!-- Action Buttons -->
      <div class="flex items-center gap-2 flex-wrap">
        <button
          type="button"
          @click="handleImportCrawledPages"
          class="btn-secondary text-xs py-2 px-3 flex items-center gap-1.5"
          :disabled="importingCrawled"
          title="Import any URLs found during previous site audits"
        >
          <span v-if="importingCrawled" class="h-3 w-3 rounded-full border-2 border-gray-400 border-t-transparent animate-spin"></span>
          <span v-else>📥</span>
          <span>Import Crawled Pages</span>
        </button>

        <button
          type="button"
          @click="showAddModal = true"
          class="btn-primary text-xs py-2 px-3.5 flex items-center gap-1.5"
        >
          <span>+</span>
          <span>Add Page</span>
        </button>
      </div>
    </div>

    <!-- Navigation Tabs -->
    <div class="flex gap-1 border-b border-gray-200">
      <router-link
        v-for="tab in [
          { label: '📈 Trends', path: `/projects/${project.id}/history` },
          { label: '🐛 Bug List', path: `/projects/${project.id}/bugs` },
          { label: '✅ Test Cases', path: `/projects/${project.id}/test-cases` },
          { label: '📑 Page Audits', path: `/projects/${project.id}/pages` },
        ]"
        :key="tab.path"
        :to="tab.path"
        class="px-4 py-2.5 text-sm font-medium text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300 transition-all"
        active-class="text-indigo-600 border-indigo-600 hover:text-indigo-600 font-semibold"
      >
        {{ tab.label }}
      </router-link>
    </div>

    <!-- Batch Progress Notification -->
    <div v-if="batchRunningSeo || batchRunningPerf" class="p-3 bg-indigo-50 border border-indigo-200 rounded-xl flex items-center justify-between text-xs text-indigo-900">
      <div class="flex items-center gap-2">
        <span class="h-4 w-4 rounded-full border-2 border-indigo-600 border-t-transparent animate-spin"></span>
        <span class="font-semibold">
          {{ batchRunningSeo ? 'Auditing SEO for all pages...' : 'Running PageSpeed benchmarks for all pages...' }}
        </span>
        <span class="text-indigo-600">({{ batchProgress.current }} / {{ batchProgress.total }})</span>
      </div>
    </div>

    <!-- Quick Stats Cards -->
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
      <div class="card p-3.5">
        <span class="text-[11px] font-bold text-gray-500 uppercase tracking-wider block">Tracked Pages</span>
        <div class="mt-1 text-2xl font-extrabold text-gray-900">{{ stats.total }}</div>
        <span class="text-[10px] text-gray-400">Total pages tracked</span>
      </div>

      <div class="card p-3.5">
        <span class="text-[11px] font-bold text-gray-500 uppercase tracking-wider block">Healthy SEO</span>
        <div class="mt-1 text-2xl font-extrabold text-emerald-600">{{ stats.withGoodSeo }}</div>
        <span class="text-[10px] text-gray-400">0 Critical SEO issues</span>
      </div>

      <div class="card p-3.5">
        <span class="text-[11px] font-bold text-gray-500 uppercase tracking-wider block">SEO Issues Found</span>
        <div class="mt-1 text-2xl font-extrabold text-rose-600">{{ stats.withIssues }}</div>
        <span class="text-[10px] text-gray-400">Require optimization</span>
      </div>

      <div class="card p-3.5">
        <span class="text-[11px] font-bold text-gray-500 uppercase tracking-wider block">Avg Mobile Perf</span>
        <div class="mt-1 text-2xl font-extrabold" :class="stats.avgPerf && stats.avgPerf >= 90 ? 'text-emerald-600' : stats.avgPerf && stats.avgPerf >= 50 ? 'text-amber-500' : 'text-gray-400'">
          {{ stats.avgPerf !== null ? `${stats.avgPerf}/100` : '—' }}
        </div>
        <span class="text-[10px] text-gray-400">{{ stats.withPageSpeedCount }} page(s) audited</span>
      </div>
    </div>

    <!-- Filter & Toolbar -->
    <div class="card p-3 flex flex-col sm:flex-row items-center justify-between gap-3 bg-white">
      <div class="flex items-center gap-2 w-full sm:w-auto">
        <div class="relative flex-1 sm:w-72">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search by URL or title..."
            class="input pl-8 text-xs py-1.5 w-full"
          />
          <span class="absolute left-2.5 top-2 text-xs text-gray-400">🔍</span>
        </div>

        <select v-model="filterStatus" class="input text-xs py-1.5 w-auto">
          <option value="all">All Pages ({{ pages.length }})</option>
          <option value="good">Good SEO Only</option>
          <option value="issues">Has SEO Issues</option>
          <option value="has-pagespeed">Has PageSpeed</option>
          <option value="no-pagespeed">No PageSpeed Yet</option>
        </select>
      </div>

      <!-- Batch Actions -->
      <div class="flex items-center gap-2 w-full sm:w-auto justify-end">
        <button
          type="button"
          @click="runAllSeo"
          class="btn-secondary text-xs py-1.5 px-2.5 flex items-center gap-1"
          :disabled="batchRunningSeo || pages.length === 0"
          title="Run SEO audit on every page in sequence"
        >
          <span>🔍 Run All SEO</span>
        </button>

        <button
          type="button"
          @click="runAllPageSpeed"
          class="btn-secondary text-xs py-1.5 px-2.5 flex items-center gap-1 text-amber-700 hover:text-amber-800"
          :disabled="batchRunningPerf || pages.length === 0"
          title="Run Google PageSpeed on every page in sequence"
        >
          <span>⚡ Run All PageSpeed</span>
        </button>
      </div>
    </div>

    <!-- Empty State -->
    <div v-if="filteredPages.length === 0" class="card p-12 text-center border-2 border-dashed border-gray-200">
      <p class="text-4xl mb-3">📄</p>
      <h3 class="text-base font-semibold text-gray-900">No pages found</h3>
      <p class="text-xs text-gray-500 mt-1 max-w-sm mx-auto">
        {{ searchQuery || filterStatus !== 'all' ? 'No pages match your search or filter.' : 'Add your first page or import discovered URLs from past audits to get started.' }}
      </p>
      <div class="mt-4 flex items-center justify-center gap-2">
        <button v-if="searchQuery || filterStatus !== 'all'" @click="searchQuery = ''; filterStatus = 'all'" class="btn-secondary text-xs">
          Clear Filters
        </button>
        <button @click="showAddModal = true" class="btn-primary text-xs">
          + Add First Page
        </button>
      </div>
    </div>

    <!-- Pages Table -->
    <div v-else class="card overflow-hidden shadow-sm border border-gray-200">
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200 text-left">
          <thead class="bg-gray-50/80 text-[11px] font-bold uppercase text-gray-500 tracking-wider">
            <tr>
              <th scope="col" class="py-3 px-4">Page URL &amp; Path</th>
              <th scope="col" class="py-3 px-4">SEO Audit Result</th>
              <th scope="col" class="py-3 px-4 min-w-[240px]">
                <div class="flex items-center gap-1">
                  <span>PageSpeed Scores</span>
                  <span class="text-[9px] font-normal lowercase text-gray-400">(Perf / A11y / Best / SEO)</span>
                </div>
              </th>
              <th scope="col" class="py-3 px-4 text-right">Actions</th>
            </tr>
          </thead>

          <tbody class="divide-y divide-gray-100 bg-white text-xs">
            <tr
              v-for="page in filteredPages"
              :key="page.id"
              class="hover:bg-indigo-50/20 transition-colors"
            >
              <!-- 1. Page Details -->
              <td class="py-3 px-4 align-top max-w-xs">
                <div class="flex items-center gap-2">
                  <span v-if="page.source === 'root'" class="badge badge-neutral text-[10px] bg-indigo-50 text-indigo-700 border-indigo-200">
                    🏠 Home
                  </span>
                  <span v-else-if="page.source === 'manual'" class="badge badge-neutral text-[10px] bg-slate-100 text-slate-700">
                    Manual
                  </span>
                  <span v-else class="badge badge-neutral text-[10px] bg-blue-50 text-blue-700">
                    Crawled
                  </span>
                  <span v-if="page.statusCode" class="text-[10px] font-mono px-1 rounded" :class="page.statusCode < 400 ? 'text-green-700 bg-green-50' : 'text-red-700 bg-red-50'">
                    {{ page.statusCode }}
                  </span>
                </div>

                <div class="font-semibold text-gray-900 mt-1 truncate" :title="page.title || page.url">
                  {{ page.title || '(No Page Title)' }}
                </div>

                <a
                  :href="page.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-[11px] font-mono text-indigo-600 hover:text-indigo-800 hover:underline flex items-center gap-1 mt-0.5 break-all"
                  title="Open page in new browser tab"
                >
                  <span class="truncate">{{ page.url }}</span>
                  <span class="text-[10px] opacity-75">↗</span>
                </a>

                <div v-if="page.seoAuditedAt" class="text-[10px] text-gray-400 mt-1">
                  SEO checked: {{ new Date(page.seoAuditedAt as any).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }}
                </div>
              </td>

              <!-- 2. SEO Results Column -->
              <td class="py-3 px-4 align-top">
                <div v-if="page.seoStatus === 'not-audited'" class="flex items-center gap-1.5 text-gray-400 text-xs py-1">
                  <span>⏳</span>
                  <span>Not audited yet</span>
                </div>

                <div v-else class="space-y-1.5">
                  <div class="flex items-center gap-2">
                    <span
                      class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-bold"
                      :class="page.seoStatus === 'good' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'"
                    >
                      <span>{{ page.seoStatus === 'good' ? '✓' : '⚠' }}</span>
                      <span>{{ page.seoStatus === 'good' ? 'Good SEO' : `${page.issues?.length || 0} Issue(s)` }}</span>
                      <span v-if="typeof page.seoScore === 'number'" class="opacity-75">({{ page.seoScore }}/100)</span>
                    </span>

                    <button
                      type="button"
                      @click="selectedPageForDetails = page"
                      class="text-[10px] text-indigo-600 hover:text-indigo-800 hover:underline font-semibold"
                    >
                      View Findings
                    </button>
                  </div>

                  <!-- Quick Badges -->
                  <div class="flex flex-wrap gap-1 text-[10px]">
                    <span
                      class="px-1.5 py-0.5 rounded font-mono"
                      :class="page.h1Count === 1 ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-rose-50 text-rose-700 border border-rose-200 font-bold'"
                      :title="page.h1Count === 1 ? 'Optimal: 1 primary H1 heading' : 'Sub-optimal: missing or multiple H1 tags'"
                    >
                      H1: {{ page.h1Count ?? '—' }}
                    </span>

                    <span
                      class="px-1.5 py-0.5 rounded font-mono"
                      :class="!page.missingAltCount || page.missingAltCount === 0 ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-rose-50 text-rose-700 border border-rose-200 font-bold'"
                      :title="page.missingAltCount ? `${page.missingAltCount} images without alt text` : 'All images contain alt text'"
                    >
                      Alt: {{ page.missingAltCount ? `${page.missingAltCount} missing` : '✓ OK' }}
                    </span>

                    <span
                      v-if="typeof page.titleLength === 'number'"
                      class="px-1.5 py-0.5 rounded font-mono"
                      :class="page.titleLength >= 30 && page.titleLength <= 65 ? 'bg-gray-50 text-gray-600 border border-gray-200' : 'bg-amber-50 text-amber-700 border border-amber-200'"
                    >
                      Title: {{ page.titleLength }}ch
                    </span>

                    <span
                      v-if="page.canonicalUrl"
                      class="px-1.5 py-0.5 rounded font-mono bg-blue-50 text-blue-700 border border-blue-200"
                      title="Canonical tag present"
                    >
                      Canonical
                    </span>
                  </div>
                </div>
              </td>

              <!-- 3. PageSpeed Scores Column (Design matching overview screenshot) -->
              <td class="py-3 px-4 align-top">
                <div v-if="!page.pageSpeedScores" class="flex items-center gap-1.5 text-gray-400 py-1">
                  <span>⚡</span>
                  <span class="text-xs">No PageSpeed benchmark yet</span>
                </div>

                <div v-else class="space-y-1.5">
                  <div class="grid grid-cols-4 gap-1.5 text-center">
                    <!-- Performance -->
                    <div class="flex flex-col items-center p-1 rounded border" :class="getScoreColorClass(page.pageSpeedScores.performance)">
                      <span class="text-xs font-black">{{ page.pageSpeedScores.performance ?? '—' }}</span>
                      <span class="text-[9px] uppercase font-semibold opacity-75">Perf</span>
                    </div>

                    <!-- Accessibility -->
                    <div class="flex flex-col items-center p-1 rounded border" :class="getScoreColorClass(page.pageSpeedScores.accessibility)">
                      <span class="text-xs font-black">{{ page.pageSpeedScores.accessibility ?? '—' }}</span>
                      <span class="text-[9px] uppercase font-semibold opacity-75">A11y</span>
                    </div>

                    <!-- Best Practices -->
                    <div class="flex flex-col items-center p-1 rounded border" :class="getScoreColorClass(page.pageSpeedScores.bestPractices)">
                      <span class="text-xs font-black">{{ page.pageSpeedScores.bestPractices ?? '—' }}</span>
                      <span class="text-[9px] uppercase font-semibold opacity-75">Best</span>
                    </div>

                    <!-- SEO -->
                    <div class="flex flex-col items-center p-1 rounded border" :class="getScoreColorClass(page.pageSpeedScores.seo)">
                      <span class="text-xs font-black">{{ page.pageSpeedScores.seo ?? '—' }}</span>
                      <span class="text-[9px] uppercase font-semibold opacity-75">SEO</span>
                    </div>
                  </div>

                  <!-- Core Web Vitals Micro Banner -->
                  <div v-if="page.pageSpeedMetrics" class="text-[10px] text-gray-500 font-mono flex items-center gap-2 pt-0.5">
                    <span>FCP: {{ (page.pageSpeedMetrics.fcp / 1000).toFixed(1) }}s</span>
                    <span>•</span>
                    <span>LCP: {{ (page.pageSpeedMetrics.lcp / 1000).toFixed(1) }}s</span>
                    <span>•</span>
                    <span>CLS: {{ page.pageSpeedMetrics.cls }}</span>
                  </div>
                </div>
              </td>

              <!-- 4. Row Action Buttons -->
              <td class="py-3 px-4 align-top text-right">
                <div class="flex items-center justify-end gap-1.5">
                  <!-- Run SEO Button -->
                  <button
                    type="button"
                    @click="runSeoAuditForPage(page)"
                    class="btn-secondary text-xs py-1 px-2.5 flex items-center gap-1 font-semibold"
                    :disabled="auditingSeoUrl === page.url || batchRunningSeo"
                    title="Audit SEO tags and issues for this page"
                  >
                    <span v-if="auditingSeoUrl === page.url" class="h-3 w-3 rounded-full border-2 border-indigo-600 border-t-transparent animate-spin"></span>
                    <span v-else>🔍</span>
                    <span>SEO</span>
                  </button>

                  <!-- Run PageSpeed Button -->
                  <button
                    type="button"
                    @click="runPageSpeedForPage(page)"
                    class="btn-secondary text-xs py-1 px-2.5 flex items-center gap-1 font-semibold text-amber-700 hover:text-amber-800"
                    :disabled="auditingPerfUrl === page.url || batchRunningPerf"
                    title="Run Google PageSpeed Insights on this page"
                  >
                    <span v-if="auditingPerfUrl === page.url" class="h-3 w-3 rounded-full border-2 border-amber-600 border-t-transparent animate-spin"></span>
                    <span v-else>⚡</span>
                    <span>PageSpeed</span>
                  </button>

                  <!-- Delete Button -->
                  <button
                    type="button"
                    @click="handleDeletePage(page)"
                    class="p-1 text-gray-400 hover:text-red-600 transition-colors rounded"
                    title="Remove page from tracking"
                  >
                    🗑️
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- ================================================================= -->
    <!-- MODAL: ADD PAGE                                                   -->
    <!-- ================================================================= -->
    <div
      v-if="showAddModal"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
    >
      <div class="card w-full max-w-md p-6 space-y-4 shadow-xl bg-white">
        <div class="flex items-center justify-between border-b pb-3">
          <h3 class="text-base font-bold text-gray-900 flex items-center gap-2">
            <span>➕</span>
            <span>Add Tracked Page</span>
          </h3>
          <button @click="showAddModal = false" class="text-gray-400 hover:text-gray-600">✕</button>
        </div>

        <div v-if="addPageError" class="p-2.5 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-lg">
          {{ addPageError }}
        </div>

        <form @submit.prevent="handleAddPage" class="space-y-3 text-xs">
          <div>
            <label class="block font-semibold text-gray-700 mb-1">
              Page URL or Path <span class="text-rose-500">*</span>
            </label>
            <input
              v-model="newPageInput"
              type="text"
              placeholder="/jobs, /about, or https://..."
              class="input w-full text-xs"
              required
            />
            <p class="text-[10px] text-gray-400 mt-1">
              Enter full URL or relative path starting with <code>/</code> (will use project origin <code>{{ project.targetUrl }}</code>)
            </p>
          </div>

          <div>
            <label class="block font-semibold text-gray-700 mb-1">Page Title / Label (Optional)</label>
            <input
              v-model="newPageTitle"
              type="text"
              placeholder="e.g. Careers Page, Pricing, Contact Us"
              class="input w-full text-xs"
            />
          </div>

          <div class="pt-2 border-t space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input v-model="runSeoOnAdd" type="checkbox" class="rounded text-indigo-600" />
              <span class="text-gray-700">Run SEO audit immediately upon adding</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input v-model="runPerfOnAdd" type="checkbox" class="rounded text-indigo-600" />
              <span class="text-gray-700">Run PageSpeed benchmark immediately upon adding</span>
            </label>
          </div>

          <div class="flex items-center justify-end gap-2 pt-3 border-t">
            <button type="button" @click="showAddModal = false" class="btn-secondary text-xs py-1.5">
              Cancel
            </button>
            <button type="submit" class="btn-primary text-xs py-1.5" :disabled="addingPage">
              <span v-if="addingPage" class="h-3 w-3 rounded-full border-2 border-white border-t-transparent animate-spin mr-1"></span>
              <span>Add Page to Table</span>
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- ================================================================= -->
    <!-- MODAL: PAGE SEO DETAILS & ISSUES                                  -->
    <!-- ================================================================= -->
    <div
      v-if="selectedPageForDetails"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
    >
      <div class="card w-full max-w-2xl max-h-[85vh] overflow-y-auto p-6 space-y-4 shadow-2xl bg-white">
        <div class="flex items-start justify-between border-b pb-3">
          <div class="pr-4">
            <div class="flex items-center gap-2">
              <span class="badge text-[10px] font-bold" :class="selectedPageForDetails.seoStatus === 'good' ? 'badge-good' : 'badge-neutral'">
                {{ selectedPageForDetails.seoStatus === 'good' ? '✓ Good Health' : 'Issues Detected' }}
              </span>
              <span v-if="typeof selectedPageForDetails.seoScore === 'number'" class="font-mono text-xs font-bold text-indigo-700">
                Score: {{ selectedPageForDetails.seoScore }}/100
              </span>
            </div>
            <h3 class="text-base font-bold text-gray-900 mt-1">
              {{ selectedPageForDetails.title || 'Page SEO Breakdown' }}
            </h3>
            <p class="text-xs font-mono text-gray-500 break-all">{{ selectedPageForDetails.url }}</p>
          </div>
          <button @click="selectedPageForDetails = null" class="text-gray-400 hover:text-gray-600 text-lg">✕</button>
        </div>

        <!-- Meta Tags Grid -->
        <div class="grid grid-cols-2 gap-3 text-xs">
          <div class="bg-gray-50 p-2.5 rounded-lg border border-gray-200">
            <span class="text-[10px] font-bold text-gray-400 block uppercase">Title Tag</span>
            <p class="font-medium text-gray-800 mt-0.5 break-words">
              {{ selectedPageForDetails.title || '(Empty)' }}
            </p>
            <span class="text-[10px] text-gray-500 block mt-1">
              Length: {{ selectedPageForDetails.titleLength ?? selectedPageForDetails.title?.length ?? 0 }} characters (ideal 30–65)
            </span>
          </div>

          <div class="bg-gray-50 p-2.5 rounded-lg border border-gray-200">
            <span class="text-[10px] font-bold text-gray-400 block uppercase">Meta Description</span>
            <p class="font-medium text-gray-800 mt-0.5 break-words line-clamp-3">
              {{ selectedPageForDetails.metaDescription || '(None declared)' }}
            </p>
            <span class="text-[10px] text-gray-500 block mt-1">
              Length: {{ selectedPageForDetails.descriptionLength ?? selectedPageForDetails.metaDescription?.length ?? 0 }} characters (ideal 120–320)
            </span>
          </div>

          <div class="bg-gray-50 p-2.5 rounded-lg border border-gray-200">
            <span class="text-[10px] font-bold text-gray-400 block uppercase">Heading Structure</span>
            <p class="font-medium text-gray-800 mt-0.5">
              H1 Count: <span class="font-bold">{{ selectedPageForDetails.h1Count ?? 0 }}</span>
            </p>
            <span class="text-[10px] text-gray-500">Every page should have exactly one primary &lt;h1&gt;</span>
          </div>

          <div class="bg-gray-50 p-2.5 rounded-lg border border-gray-200">
            <span class="text-[10px] font-bold text-gray-400 block uppercase">Image Alt Attributes</span>
            <p class="font-medium text-gray-800 mt-0.5">
              Missing Alt: <span class="font-bold" :class="selectedPageForDetails.missingAltCount ? 'text-rose-600' : 'text-emerald-600'">{{ selectedPageForDetails.missingAltCount ?? 0 }}</span>
            </p>
            <span class="text-[10px] text-gray-500">Essential for SEO ranking and accessibility</span>
          </div>
        </div>

        <!-- Detected Issues List -->
        <div class="space-y-2 pt-2">
          <h4 class="text-xs font-bold text-gray-800 uppercase tracking-wider flex items-center gap-1.5">
            <span>🚨</span>
            <span>Detected SEO Issues ({{ selectedPageForDetails.issues?.length || 0 }})</span>
          </h4>

          <div v-if="!selectedPageForDetails.issues || selectedPageForDetails.issues.length === 0" class="p-4 bg-emerald-50 border border-emerald-200 rounded-lg text-xs text-emerald-800 flex items-center gap-2">
            <span>✓</span>
            <span>No SEO violations detected on this page! All key tags and elements are configured properly.</span>
          </div>

          <div v-else class="space-y-2">
            <div
              v-for="(issue, idx) in selectedPageForDetails.issues"
              :key="idx"
              class="p-3 rounded-lg border text-xs flex items-start gap-2.5"
              :class="issue.severity === 'Critical' ? 'bg-rose-50 border-rose-200 text-rose-900' : issue.severity === 'Major' ? 'bg-amber-50 border-amber-200 text-amber-900' : 'bg-slate-50 border-slate-200 text-slate-800'"
            >
              <span class="text-sm flex-shrink-0">
                {{ issue.severity === 'Critical' ? '🛑' : issue.severity === 'Major' ? '⚠️' : 'ℹ️' }}
              </span>
              <div class="flex-1">
                <div class="flex items-center gap-2 font-bold">
                  <span>{{ issue.type }}</span>
                  <span class="badge text-[9px] uppercase px-1.5 py-0.2" :class="issue.severity === 'Critical' ? 'badge-bad' : issue.severity === 'Major' ? 'bg-amber-100 text-amber-800' : 'badge-neutral'">
                    {{ issue.severity }}
                  </span>
                </div>
                <p class="mt-0.5 text-xs opacity-90">{{ issue.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-between pt-3 border-t">
          <button
            type="button"
            @click="runSeoAuditForPage(selectedPageForDetails)"
            class="btn-primary text-xs py-1.5 flex items-center gap-1"
            :disabled="auditingSeoUrl === selectedPageForDetails.url"
          >
            <span v-if="auditingSeoUrl === selectedPageForDetails.url" class="h-3 w-3 rounded-full border-2 border-white border-t-transparent animate-spin mr-1"></span>
            <span>↻ Re-Audit This Page</span>
          </button>

          <button @click="selectedPageForDetails = null" class="btn-secondary text-xs py-1.5">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
