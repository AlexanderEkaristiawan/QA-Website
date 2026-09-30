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

  const { scanId } = JSON.parse(event.body || '{}')
  if (!scanId) return jsonResponse(400, { error: 'scanId required' }, origin)

  const db = getDb()
  const scanRef = db.collection('page_security_audits').doc(scanId)
  const scanDoc = await scanRef.get()
  if (!scanDoc.exists) return jsonResponse(404, { error: 'Security scan not found' }, origin)
  const scan = scanDoc.data()!
  if (scan.status === 'unavailable' || scan.status === 'completed') return jsonResponse(200, scan, origin)

  try {
    const zapUrl = getZapUrl()
    const params = { apikey: getZapKey(), scanId: scan.zapScanId }
    const statusResponse = await axios.get(`${zapUrl}/JSON/ascan/view/status/`, { params, timeout: 5000 })
    const progress = Number(statusResponse.data?.status ?? 0)
    if (progress < 100) return jsonResponse(200, { ...scan, status: 'scanning', progress }, origin)

    const alertsResponse = await axios.get(`${zapUrl}/JSON/core/view/alerts/`, {
      params: { apikey: getZapKey(), baseurl: scan.url, start: 0, count: 500 }, timeout: 8000,
    })
    const alerts = Array.isArray(alertsResponse.data?.alerts) ? alertsResponse.data.alerts : []
    const highAlerts = alerts.filter((alert: any) => alert.riskcode === '3' || alert.risk === 'High').length
    const mediumAlerts = alerts.filter((alert: any) => alert.riskcode === '2' || alert.risk === 'Medium').length
    const lowAlerts = alerts.filter((alert: any) => alert.riskcode === '1' || alert.risk === 'Low').length
    const result = { status: 'completed', progress: 100, highAlerts, mediumAlerts, lowAlerts, alerts }
    await scanRef.update(result)
    return jsonResponse(200, result, origin)
  } catch (err: any) {
    await scanRef.update({ status: 'unavailable', error: err.message || 'ZAP is not reachable' })
    return jsonResponse(200, { status: 'unavailable', error: err.message }, origin)
  }
}
