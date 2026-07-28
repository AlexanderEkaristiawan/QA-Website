import type { Handler, HandlerEvent } from '@netlify/functions'
import { getDb, getFieldValue, jsonResponse } from './_shared/firestore'
import axios from 'axios'

interface PageSpeedCategory {
  score: number | null
}

interface PageSpeedResponse {
  categories: {
    performance?: PageSpeedCategory
    accessibility?: PageSpeedCategory
    'best-practices'?: PageSpeedCategory
    seo?: PageSpeedCategory
  }
  lighthouseResult?: {
    audits?: Record<string, { numericValue?: number }>
  }
}

function toScore(cat?: PageSpeedCategory): number {
  if (!cat || cat.score === null) return 0
  return Math.round(cat.score * 100)
}

export const handler: Handler = async (event: HandlerEvent) => {
  const origin = event.headers.origin

  if (event.httpMethod === 'OPTIONS') return jsonResponse(204, {}, origin)
  if (event.httpMethod !== 'POST') return jsonResponse(405, { error: 'Method not allowed' }, origin)

  const db = getDb()
  const fv = getFieldValue()
  const body = JSON.parse(event.body || '{}')
  const { jobId, projectId, targetUrl } = body

  if (!jobId || !projectId || !targetUrl) {
    return jsonResponse(400, { error: 'jobId, projectId, and targetUrl required' }, origin)
  }

  const jobRef = db.collection('audit_jobs').doc(jobId)

  try {
    await jobRef.update({ 'summaries.performance.status': 'running' })

    const apiKey = process.env.PAGESPEED_API_KEY
    const params: Record<string, string> = {
      url: targetUrl,
      strategy: 'mobile',
      category: 'performance',
      // Also fetch these
    }
    const categories = ['performance', 'accessibility', 'best-practices', 'seo']
    const catParams = categories.map(c => `category=${c}`).join('&')

    const url = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(targetUrl)}&strategy=mobile&${catParams}${apiKey ? `&key=${apiKey}` : ''}`

    const response = await axios.get<PageSpeedResponse>(url, { timeout: 30000 })
    const data = response.data

    const performanceSummary = {
      performance: toScore(data.categories?.performance),
      accessibility: toScore(data.categories?.accessibility),
      bestPractices: toScore(data.categories?.['best-practices']),
      seo: toScore(data.categories?.seo),
      status: 'completed',
    }

    // Extract key metrics for sub-collection
    const audits = data.lighthouseResult?.audits || {}
    const metrics = {
      fcp: audits['first-contentful-paint']?.numericValue || 0,
      lcp: audits['largest-contentful-paint']?.numericValue || 0,
      cls: audits['cumulative-layout-shift']?.numericValue || 0,
      speedIndex: audits['speed-index']?.numericValue || 0,
      tti: audits['interactive']?.numericValue || 0,
    }

    // Write to performance_metrics sub-collection (lazy-loaded by UI)
    await jobRef.collection('performance_metrics').add({
      ...metrics,
      timestamp: fv.serverTimestamp(),
    })

    await jobRef.update({ 'summaries.performance': performanceSummary })

    // Auto-create bug if performance is poor
    if (performanceSummary.performance < 50 || performanceSummary.accessibility < 70) {
      const projectRef = db.collection('projects').doc(projectId)
      let shortId = ''
      await db.runTransaction(async (tx) => {
        const proj = await tx.get(projectRef)
        const counter = (proj.data()?.bugCounter || 0) + 1
        shortId = `QAS-${counter}`
        tx.update(projectRef, { bugCounter: counter })
      })
      await db.collection('bug_list').add({
        projectId,
        shortId,
        title: `Performance Score: ${performanceSummary.performance}/100`,
        source: 'PERFORMANCE',
        severity: performanceSummary.performance < 50 ? 'Urgent' : 'High',
        status: 'Open',
        tags: ['Performance', 'PageSpeed'],
        assignees: [],
        description: `PageSpeed Insights scores — Performance: ${performanceSummary.performance}, Accessibility: ${performanceSummary.accessibility}, SEO: ${performanceSummary.seo}, Best Practices: ${performanceSummary.bestPractices}. FCP: ${(metrics.fcp / 1000).toFixed(1)}s, LCP: ${(metrics.lcp / 1000).toFixed(1)}s.`,
        remediationGuide: null,
        commentCount: 0,
        createdAt: fv.serverTimestamp(),
        lastEditedTime: fv.serverTimestamp(),
      })
    }

    return jsonResponse(200, { performanceSummary }, origin)
  } catch (err: any) {
    console.error('Performance bot error:', err)
    await jobRef.update({
      'summaries.performance.status': 'failed',
      errors: fv.arrayUnion({ bot: 'performance', message: err.message, retriesLeft: 1 }),
    }).catch(() => {})
    return jsonResponse(500, { error: err.message }, origin)
  }
}
