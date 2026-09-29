import { ref } from 'vue'
import type { ProjectPage, SEOIssue } from '@/types'

const NETLIFY_BASE = import.meta.env.VITE_NETLIFY_FUNCTIONS_URL || '/.netlify/functions'

export function usePageAudits() {
  const auditingSeoUrl = ref<string | null>(null)
  const auditingPerfUrl = ref<string | null>(null)
  const auditError = ref<string | null>(null)

  /**
   * Run Single Page SEO Audit
   */
  async function runSinglePageSEO(url: string, authSettings?: any): Promise<Partial<ProjectPage> | null> {
    auditingSeoUrl.value = url
    auditError.value = null

    try {
      const response = await fetch(`${NETLIFY_BASE}/audit-single-page`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url, authSettings }),
      })

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}))
        throw new Error(errData.error || `HTTP ${response.status}: Failed to run SEO audit`)
      }

      const res = await response.json()
      const d = res.data

      return {
        url: d.url,
        statusCode: d.statusCode,
        title: d.title,
        titleLength: d.titleLength,
        metaDescription: d.metaDescription,
        descriptionLength: d.descriptionLength,
        h1Count: d.h1Count,
        missingAltCount: d.missingAltCount,
        canonicalUrl: d.canonicalUrl,
        robotsMeta: d.robotsMeta,
        hasOpenGraph: d.hasOpenGraph,
        issues: d.issues as SEOIssue[],
        seoScore: d.seoScore,
        seoStatus: d.seoStatus,
        seoAuditedAt: new Date(),
      }
    } catch (err: any) {
      console.warn('SEO audit function error, attempting client check fallback:', err.message)
      auditError.value = err.message
      return null
    } finally {
      auditingSeoUrl.value = null
    }
  }

  /**
   * Run PageSpeed Insights for a specific URL.
   * Calls Netlify function if reachable, and falls back directly to the Google
   * PageSpeed Insights public REST endpoint.
   */
  async function runSinglePageSpeed(url: string, strategy: 'mobile' | 'desktop' = 'mobile'): Promise<{
    pageSpeedScores: {
      performance: number | null
      accessibility: number | null
      bestPractices: number | null
      seo: number | null
    }
    pageSpeedMetrics: {
      fcp: number
      lcp: number
      cls: number
      speedIndex?: number
      tti?: number
    }
  } | null> {
    auditingPerfUrl.value = url
    auditError.value = null

    // Attempt 1: Call Netlify Function
    try {
      const response = await fetch(`${NETLIFY_BASE}/audit-page-speed`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url, strategy }),
      })

      if (response.ok) {
        const res = await response.json()
        return {
          pageSpeedScores: res.data.scores,
          pageSpeedMetrics: res.data.metrics,
        }
      }
    } catch {
      // Fall through to direct Google PageSpeed call
    }

    // Attempt 2: Direct public Google PageSpeed Insights REST call (CORS supported)
    try {
      const categories = ['performance', 'accessibility', 'best-practices', 'seo']
      const catQuery = categories.map(c => `category=${c}`).join('&')
      const target = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&strategy=${strategy}&${catQuery}`

      const res = await fetch(target)
      if (!res.ok) {
        const errorJson = await res.json().catch(() => ({}))
        throw new Error(errorJson.error?.message || `PageSpeed API responded with ${res.status}`)
      }

      const data = await res.json()
      const cats = data.lighthouseResult?.categories || data.categories || {}
      const audits = data.lighthouseResult?.audits || {}

      const toScore = (cat?: { score: number | null }) => {
        if (!cat || cat.score === null) return 0
        return Math.round(cat.score * 100)
      }

      return {
        pageSpeedScores: {
          performance: toScore(cats.performance),
          accessibility: toScore(cats.accessibility),
          bestPractices: toScore(cats['best-practices']),
          seo: toScore(cats.seo),
        },
        pageSpeedMetrics: {
          fcp: Math.round(audits['first-contentful-paint']?.numericValue || 0),
          lcp: Math.round(audits['largest-contentful-paint']?.numericValue || 0),
          cls: Number((audits['cumulative-layout-shift']?.numericValue || 0).toFixed(3)),
          speedIndex: Math.round(audits['speed-index']?.numericValue || 0),
          tti: Math.round(audits['interactive']?.numericValue || 0),
        },
      }
    } catch (err: any) {
      console.error('PageSpeed audit error:', err)
      auditError.value = err.message || 'PageSpeed audit failed'
      return null
    } finally {
      auditingPerfUrl.value = null
    }
  }

  return {
    auditingSeoUrl,
    auditingPerfUrl,
    auditError,
    runSinglePageSEO,
    runSinglePageSpeed,
  }
}
