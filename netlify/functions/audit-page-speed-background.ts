import type { Handler, HandlerEvent } from '@netlify/functions'
import axios from 'axios'
import { getDb, jsonResponse } from './_shared/firestore'


interface PageSpeedCategory {
  score: number | null
  auditRefs?: Array<{ id: string; weight?: number }>
}

interface PageSpeedAudit {
  title?: string
  description?: string
  displayValue?: string
  score?: number | null
  scoreDisplayMode?: string
  numericValue?: number
  details?: { overallSavingsMs?: number; overallSavingsBytes?: number }
}

interface PageSpeedResponse {
  categories?: Record<string, PageSpeedCategory>
  lighthouseResult?: {
    categories?: Record<string, PageSpeedCategory>
    audits?: Record<string, PageSpeedAudit>
  }
}

function toScore(category?: PageSpeedCategory): number {
  if (!category || category.score === null) return 0
  return Math.round(category.score * 100)
}

export const handler: Handler = async (event: HandlerEvent) => {
  const origin = event.headers.origin
  if (event.httpMethod !== 'POST') return jsonResponse(405, { error: 'Method not allowed' }, origin)

  let auditRef: FirebaseFirestore.DocumentReference | undefined
  try {
    const { auditId } = JSON.parse(event.body || '{}')
    if (typeof auditId !== 'string' || !auditId) {
      return jsonResponse(400, { error: 'auditId is required' }, origin)
    }

    const db = getDb()
    auditRef = db.collection('page_speed_audits').doc(auditId)
    const auditDoc = await auditRef.get()
    if (!auditDoc.exists) return jsonResponse(404, { error: 'PageSpeed audit job not found' }, origin)

    const job = auditDoc.data()!
    if (job.status === 'completed' || job.status === 'failed') return jsonResponse(200, { status: job.status }, origin)
    await auditRef.update({ status: 'running', startedAt: new Date().toISOString() })

    const requestedCategories = ['performance', 'accessibility', 'best-practices', 'seo']
    const params = new URLSearchParams({
      url: job.url,
      strategy: job.strategy === 'desktop' ? 'desktop' : 'mobile',
    })
    requestedCategories.forEach(category => params.append('category', category))
    const apiKey = process.env.PAGESPEED_API_KEY
    if (apiKey) params.set('key', apiKey)

    const response = await axios.get<PageSpeedResponse>(
      `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?${params.toString()}`,
      { timeout: 120000 },
    )
    const data = response.data
    const categories = data.lighthouseResult?.categories ?? data.categories
    const audits = data.lighthouseResult?.audits ?? {}
    const performanceFindings = (categories?.performance?.auditRefs ?? [])
      .filter(ref => (ref.weight || 0) > 0)
      .map(ref => {
        const audit = audits[ref.id]
        if (!audit || audit.score === null || audit.score === undefined || audit.score >= 1 || audit.scoreDisplayMode === 'notApplicable') return null
        const finding: Record<string, unknown> = {
          id: ref.id,
          title: audit.title || ref.id,
          description: audit.description || '',
          displayValue: audit.displayValue,
          score: audit.score,
        }
        if (audit.details?.overallSavingsMs !== undefined) {
          finding.savingsMs = audit.details.overallSavingsMs
        }
        if (audit.details?.overallSavingsBytes !== undefined) {
          finding.savingsBytes = audit.details.overallSavingsBytes
        }
        return finding
      })
      .filter((finding): finding is NonNullable<typeof finding> => finding !== null)

    await auditRef.update({
      status: 'completed',
      result: {
        url: job.url,
        scores: {
          performance: toScore(categories?.performance),
          accessibility: toScore(categories?.accessibility),
          bestPractices: toScore(categories?.['best-practices']),
          seo: toScore(categories?.seo),
        },
        metrics: {
          fcp: Math.round(audits['first-contentful-paint']?.numericValue || 0),
          lcp: Math.round(audits['largest-contentful-paint']?.numericValue || 0),
          cls: Number((audits['cumulative-layout-shift']?.numericValue || 0).toFixed(3)),
          speedIndex: Math.round(audits['speed-index']?.numericValue || 0),
          tti: Math.round(audits['interactive']?.numericValue || 0),
        },
        performanceFindings,
        auditedAt: new Date().toISOString(),
      },
      completedAt: new Date().toISOString(),
    })
    return jsonResponse(200, { status: 'completed' }, origin)
  } catch (err: any) {
    console.error('audit-page-speed background error:', err)
    if (auditRef) {
      await auditRef.update({
        status: 'failed',
        error: err.response?.data?.error?.message || err.message || 'PageSpeed audit failed',
        completedAt: new Date().toISOString(),
      }).catch(() => {})
    }
    return jsonResponse(200, { status: 'failed' }, origin)
  }
}
