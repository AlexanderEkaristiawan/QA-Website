import type { Handler, HandlerEvent } from '@netlify/functions'
import { getDb, getFieldValue, jsonResponse } from './_shared/firestore'
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

  const db = getDb()
  const fv = getFieldValue()
  const body = JSON.parse(event.body || '{}')
  const { jobId, projectId } = body

  if (!jobId || !projectId) {
    return jsonResponse(400, { error: 'jobId and projectId required' }, origin)
  }

  const jobRef = db.collection('audit_jobs').doc(jobId)
  const jobDoc = await jobRef.get()
  if (!jobDoc.exists) {
    return jsonResponse(404, { error: 'Job not found' }, origin)
  }

  const job = jobDoc.data()!
  const zapScanId = job.zapScanId

  if (!zapScanId) {
    return jsonResponse(200, { status: 'no_scan', progress: 0 }, origin)
  }

  try {
    const zapUrl = getZapUrl()
    const apiKey = getZapKey()

    // Check scan progress
    const statusRes = await axios.get(`${zapUrl}/JSON/ascan/view/status/`, {
      params: { apikey: apiKey, scanId: zapScanId },
      timeout: 8000,
    })

    const progress = parseInt(statusRes.data.status || '0')

    if (progress < 100) {
      return jsonResponse(200, { status: 'running', progress }, origin)
    }

    // Scan complete — fetch alerts
    const alertsRes = await axios.get(`${zapUrl}/JSON/alert/view/alerts/`, {
      params: { apikey: apiKey, start: 0, count: 200 },
      timeout: 8000,
    })

    const alerts: any[] = alertsRes.data.alerts || []

    const highAlerts = alerts.filter(a => a.risk === 'High').length
    const mediumAlerts = alerts.filter(a => a.risk === 'Medium').length
    const lowAlerts = alerts.filter(a => a.risk === 'Low').length

    // Fetch security headers check
    const headersRes = await axios.get(`${zapUrl}/JSON/pscan/view/recordsToScan/`, {
      params: { apikey: apiKey },
      timeout: 5000,
    }).catch(() => ({ data: {} }))

    // Write vulnerabilities to sub-collection (lazy-load only)
    const batch = db.batch()
    for (const alert of alerts.slice(0, 100)) {
      const vulnRef = jobRef.collection('vulnerabilities').doc()
      batch.set(vulnRef, {
        alert: alert.alert,
        risk: alert.risk,
        description: alert.description,
        url: alert.url,
        solution: alert.solution,
        evidence: alert.evidence || '',
        cweid: alert.cweid,
      })
    }
    await batch.commit()

    // Common expected security headers
    const requiredHeaders = ['Content-Security-Policy', 'X-Content-Type-Options', 'X-Frame-Options', 'Strict-Transport-Security', 'Referrer-Policy']
    const headerAlerts = alerts.filter(a => requiredHeaders.some(h => a.alert?.includes(h)))
    const missingHeaders = [...new Set(headerAlerts.map(a => {
      const found = requiredHeaders.find(h => a.alert?.includes(h))
      return found || a.alert
    }))]

    await jobRef.update({
      'summaries.security': {
        highAlerts,
        mediumAlerts,
        lowAlerts,
        missingHeaders,
        status: 'completed',
      },
    })

    // Auto-create security bugs
    if (highAlerts > 0) {
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
        title: `${highAlerts} High Risk Security Vulnerabilities`,
        source: 'SECURITY',
        severity: 'Urgent',
        status: 'Open',
        tags: ['Security', 'ZAP', 'Critical'],
        assignees: [],
        description: `OWASP ZAP scan found ${highAlerts} high-risk, ${mediumAlerts} medium-risk, and ${lowAlerts} low-risk vulnerabilities.`,
        remediationGuide: null,
        commentCount: 0,
        createdAt: fv.serverTimestamp(),
        lastEditedTime: fv.serverTimestamp(),
      })
    }

    if (missingHeaders.length > 0) {
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
        title: `Missing Security Headers: ${missingHeaders.join(', ')}`,
        source: 'SECURITY',
        severity: 'High',
        status: 'Open',
        tags: ['Security', 'Headers'],
        assignees: [],
        description: `Security headers missing from response: ${missingHeaders.join(', ')}. These protect against XSS, clickjacking, and MIME-sniffing attacks.`,
        remediationGuide: null,
        commentCount: 0,
        createdAt: fv.serverTimestamp(),
        lastEditedTime: fv.serverTimestamp(),
      })
    }

    return jsonResponse(200, { status: 'completed', progress: 100, highAlerts, mediumAlerts, lowAlerts }, origin)
  } catch (err: any) {
    console.error('check-zap-status error:', err)
    return jsonResponse(200, { status: 'error', error: err.message, progress: 0 }, origin)
  }
}
