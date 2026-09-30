import type { Handler, HandlerEvent } from '@netlify/functions'
import { getDb, jsonResponse } from './_shared/firestore'
import axios from 'axios'

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

  const body = JSON.parse(event.body || '{}')
  const { projectId, url } = body
  if (!projectId || !url) return jsonResponse(400, { error: 'projectId and url required' }, origin)

  const db = getDb()
  const scanRef = await db.collection('page_security_audits').add({
    projectId,
    url,
    status: 'starting',
    highAlerts: 0,
    mediumAlerts: 0,
    lowAlerts: 0,
    createdAt: new Date().toISOString(),
  })

  try {
    const zapUrl = getZapUrl()
    const apiKey = getZapKey()
    const contextName = `qas_page_${scanRef.id}`
    const context = await axios.get(`${zapUrl}/JSON/context/action/newContext/`, {
      params: { apikey: apiKey, contextName }, timeout: 8000,
    })
    const contextId = context.data.contextId

    await axios.get(`${zapUrl}/JSON/context/action/includeInContext/`, {
      params: { apikey: apiKey, contextName, regex: `${url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}.*` }, timeout: 5000,
    })
    const spider = await axios.get(`${zapUrl}/JSON/spider/action/scan/`, {
      params: { apikey: apiKey, url, contextId, maxChildren: 10, recurse: true }, timeout: 8000,
    })
    const scan = await axios.get(`${zapUrl}/JSON/ascan/action/scan/`, {
      params: { apikey: apiKey, url, contextId, recurse: true }, timeout: 8000,
    })

    await scanRef.update({
      status: 'scanning',
      zapScanId: scan.data.scan,
      zapSpiderId: spider.data.scan,
      contextId,
    })
    return jsonResponse(200, { scanId: scanRef.id, status: 'scanning' }, origin)
  } catch (err: any) {
    await scanRef.update({ status: 'unavailable', error: err.message || 'ZAP is not reachable' })
    return jsonResponse(200, { scanId: scanRef.id, status: 'unavailable', error: err.message }, origin)
  }
}
