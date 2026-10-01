import type { Handler, HandlerEvent } from '@netlify/functions'
import { getDb, jsonResponse } from './_shared/firestore'

export const handler: Handler = async (event: HandlerEvent) => {
  const origin = event.headers.origin
  if (event.httpMethod === 'OPTIONS') return jsonResponse(204, {}, origin)
  if (event.httpMethod !== 'POST') return jsonResponse(405, { error: 'Method not allowed' }, origin)

  try {
    const { auditId } = JSON.parse(event.body || '{}')
    if (typeof auditId !== 'string' || !auditId) {
      return jsonResponse(400, { error: 'auditId is required' }, origin)
    }

    const auditDoc = await getDb().collection('page_speed_audits').doc(auditId).get()
    if (!auditDoc.exists) return jsonResponse(404, { error: 'PageSpeed audit job not found' }, origin)

    const job = auditDoc.data()!
    const response = jsonResponse(200, {
      status: job.status,
      result: job.status === 'completed' ? job.result : undefined,
      error: job.status === 'failed' ? job.error : undefined,
    }, origin)
    if (job.status === 'completed' || job.status === 'failed') {
      await auditDoc.ref.delete().catch(err => console.warn('PageSpeed job cleanup failed:', err.message))
    }
    return response
  } catch (err: any) {
    console.error('audit-page-speed status error:', err)
    return jsonResponse(500, { error: err.message || 'Could not read PageSpeed audit status' }, origin)
  }
}
