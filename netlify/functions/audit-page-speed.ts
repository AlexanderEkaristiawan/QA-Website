import type { Handler, HandlerEvent } from '@netlify/functions'
import { randomUUID } from 'crypto'
import { getDb, jsonResponse } from './_shared/firestore'

export const handler: Handler = async (event: HandlerEvent) => {
  const origin = event.headers.origin
  let auditRef: FirebaseFirestore.DocumentReference | undefined

  if (event.httpMethod === 'OPTIONS') return jsonResponse(204, {}, origin)
  if (event.httpMethod !== 'POST') return jsonResponse(405, { error: 'Method not allowed' }, origin)

  try {
    const { url, strategy = 'mobile' } = JSON.parse(event.body || '{}')
    if (typeof url !== 'string' || !url.trim()) {
      return jsonResponse(400, { error: 'URL is required' }, origin)
    }

    let parsedUrl: URL
    try {
      parsedUrl = new URL(url)
    } catch {
      return jsonResponse(400, { error: 'Enter a valid page URL' }, origin)
    }
    if (parsedUrl.protocol !== 'http:' && parsedUrl.protocol !== 'https:') {
      return jsonResponse(400, { error: 'PageSpeed supports HTTP and HTTPS URLs only' }, origin)
    }

    const auditId = randomUUID()
    const db = getDb()
    auditRef = db.collection('page_speed_audits').doc(auditId)
    await auditRef.set({
      status: 'pending',
      url: parsedUrl.toString(),
      strategy: strategy === 'desktop' ? 'desktop' : 'mobile',
      createdAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
    })

    const host = event.headers.host
    if (!host) throw new Error('Could not determine the function host for the background audit')
    const protocol = event.headers['x-forwarded-proto'] || (host.startsWith('localhost') ? 'http' : 'https')
    const workerUrl = `${protocol}://${host}/.netlify/functions/audit-page-speed-background`
    const trigger = await fetch(workerUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ auditId }),
      signal: AbortSignal.timeout(8000),
    })

    if (!trigger.ok && trigger.status !== 202) {
      const detail = await trigger.text().catch(() => '')
      throw new Error(detail || `Could not start the background PageSpeed audit (${trigger.status})`)
    }

    return jsonResponse(202, { success: true, auditId, status: 'pending' }, origin)
  } catch (err: any) {
    console.error('audit-page-speed start error:', err)
    if (auditRef) {
      await auditRef.update({
        status: 'failed',
        error: err.message || 'Could not start PageSpeed audit',
        completedAt: new Date().toISOString(),
      }).catch(() => {})
    }
    return jsonResponse(500, { error: err.message || 'Could not start PageSpeed audit' }, origin)
  }
}
