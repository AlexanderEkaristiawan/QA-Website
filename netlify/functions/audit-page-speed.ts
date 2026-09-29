import type { Handler, HandlerEvent } from '@netlify/functions'
import { jsonResponse } from './_shared/firestore'
import axios from 'axios'

interface PageSpeedCategory {
  score: number | null
}

interface PageSpeedResponse {
  categories?: {
    performance?: PageSpeedCategory
    accessibility?: PageSpeedCategory
    'best-practices'?: PageSpeedCategory
    seo?: PageSpeedCategory
  }
  lighthouseResult?: {
    categories?: {
      performance?: PageSpeedCategory
      accessibility?: PageSpeedCategory
      'best-practices'?: PageSpeedCategory
      seo?: PageSpeedCategory
    }
    audits?: Record<string, { numericValue?: number; displayValue?: string }>
  }
}

function toScore(cat?: PageSpeedCategory): number {
  if (!cat || cat.score === null) return 0
  return Math.round(cat.score * 100)
}

export const handler: Handler = async (event: HandlerEvent) => {
  const origin = event.headers.origin

  if (event.httpMethod === 'OPTIONS') {
    return jsonResponse(204, {}, origin)
  }

  if (event.httpMethod !== 'POST') {
    return jsonResponse(405, { error: 'Method not allowed' }, origin)
  }

  try {
    const body = JSON.parse(event.body || '{}')
    const { url, strategy = 'mobile' } = body

    if (!url) {
      return jsonResponse(400, { error: 'URL is required' }, origin)
    }

    const apiKey = process.env.PAGESPEED_API_KEY
    const requestedCategories = ['performance', 'accessibility', 'best-practices', 'seo']
    const catParams = requestedCategories.map(c => `category=${c}`).join('&')

    const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(
      url
    )}&strategy=${strategy}&${catParams}${apiKey ? `&key=${apiKey}` : ''}`

    const response = await axios.get<PageSpeedResponse>(apiUrl, { timeout: 35000 })
    const data = response.data
    const scoreCategories = data.lighthouseResult?.categories ?? data.categories

    const scores = {
      performance: toScore(scoreCategories?.performance),
      accessibility: toScore(scoreCategories?.accessibility),
      bestPractices: toScore(scoreCategories?.['best-practices']),
      seo: toScore(scoreCategories?.seo),
    }

    const audits = data.lighthouseResult?.audits || {}
    const metrics = {
      fcp: Math.round(audits['first-contentful-paint']?.numericValue || 0),
      lcp: Math.round(audits['largest-contentful-paint']?.numericValue || 0),
      cls: Number((audits['cumulative-layout-shift']?.numericValue || 0).toFixed(3)),
      speedIndex: Math.round(audits['speed-index']?.numericValue || 0),
      tti: Math.round(audits['interactive']?.numericValue || 0),
    }

    return jsonResponse(
      200,
      {
        success: true,
        data: {
          url,
          scores,
          metrics,
          auditedAt: new Date().toISOString(),
        },
      },
      origin
    )
  } catch (err: any) {
    console.error('audit-page-speed error:', err)
    return jsonResponse(
      500,
      { error: err.response?.data?.error?.message || err.message || 'PageSpeed audit failed' },
      origin
    )
  }
}
