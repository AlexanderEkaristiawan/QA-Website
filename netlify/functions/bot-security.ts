import type { Handler, HandlerEvent } from '@netlify/functions'
import { getDb, getFieldValue, jsonResponse } from './_shared/firestore'
import axios from 'axios'

// ZAP API base URL — set via Netlify env var pointing to your self-hosted ZAP instance
function getZapUrl(): string {
  return process.env.ZAP_API_URL || 'http://localhost:8080'
}

function getZapKey(): string {
  return process.env.ZAP_API_KEY || 'zapapikey'
}

export const handler: Handler = async (event: HandlerEvent) => {
  const origin = event.headers.origin

  if (event.httpMethod === 'OPTIONS') return jsonResponse(204, {}, origin)
  if (event.httpMethod !== 'POST') return jsonResponse(405, { error: 'Method not allowed' }, origin)

  const db = getDb()
  const fv = getFieldValue()
  const body = JSON.parse(event.body || '{}')
  const { jobId, projectId, targetUrl, contextName = 'qa_context' } = body

  if (!jobId || !projectId || !targetUrl) {
    return jsonResponse(400, { error: 'jobId, projectId, and targetUrl required' }, origin)
  }

  const jobRef = db.collection('audit_jobs').doc(jobId)

  try {
    await jobRef.update({ 'summaries.security.status': 'running' })

    const zapUrl = getZapUrl()
    const apiKey = getZapKey()

    // Step 1: Create a new ZAP context
    let contextId: string
    try {
      const ctxRes = await axios.get(`${zapUrl}/JSON/context/action/newContext/`, {
        params: { apikey: apiKey, contextName: `${contextName}_${jobId}` },
        timeout: 8000,
      })
      contextId = ctxRes.data.contextId
    } catch (err: any) {
      // ZAP not reachable — mark as failed gracefully
      await jobRef.update({
        'summaries.security': {
          highAlerts: 0, mediumAlerts: 0, lowAlerts: 0,
          missingHeaders: [], status: 'unavailable',
        },
        errors: fv.arrayUnion({ bot: 'security', message: `ZAP unavailable: ${err.message}`, retriesLeft: 1 }),
      })
      return jsonResponse(503, { error: 'ZAP API not reachable', details: err.message }, origin)
    }

    // Step 2: Add target URL to context
    await axios.get(`${zapUrl}/JSON/context/action/includeInContext/`, {
      params: { apikey: apiKey, contextName: `${contextName}_${jobId}`, regex: `${targetUrl}.*` },
      timeout: 5000,
    }).catch(() => {})

    // Step 3: Spider the target (quick spider to seed the tree)
    const spiderRes = await axios.get(`${zapUrl}/JSON/spider/action/scan/`, {
      params: { apikey: apiKey, url: targetUrl, contextId, maxChildren: 10, recurse: true },
      timeout: 8000,
    })
    const spiderId = spiderRes.data.scan

    // Step 4: Start active scan (async — we only START it here, not wait)
    const scanRes = await axios.get(`${zapUrl}/JSON/ascan/action/scan/`, {
      params: { apikey: apiKey, url: targetUrl, contextId, recurse: true },
      timeout: 8000,
    })
    const zapScanId = scanRes.data.scan

    // Store zapScanId in Firestore — Vue will poll check-zap-status
    await jobRef.update({
      zapScanId,
      zapSpiderId: spiderId,
      zapContextId: contextId,
      'summaries.security.status': 'scanning',
    })

    return jsonResponse(200, { zapScanId, message: 'ZAP scan started. Poll check-zap-status for results.' }, origin)
  } catch (err: any) {
    console.error('Security bot error:', err)
    await jobRef.update({
      'summaries.security.status': 'failed',
      errors: fv.arrayUnion({ bot: 'security', message: err.message, retriesLeft: 1 }),
    }).catch(() => {})
    return jsonResponse(500, { error: err.message }, origin)
  }
}
