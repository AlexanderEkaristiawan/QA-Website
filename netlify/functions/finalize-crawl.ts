import type { Handler, HandlerEvent } from '@netlify/functions'
import { createHash } from 'crypto'
import { getDb, jsonResponse } from './_shared/firestore'

export const handler: Handler = async (event: HandlerEvent) => {
  const origin = event.headers.origin
  if (event.httpMethod === 'OPTIONS') return jsonResponse(204, {}, origin)
  if (event.httpMethod !== 'POST') return jsonResponse(405, { error: 'Method not allowed' }, origin)

  try {
    const body = JSON.parse(event.body || '{}')
    const { projectId, auditJobId } = body
    const authHeader = event.headers.authorization
    if (!projectId || !auditJobId || !authHeader?.startsWith('Bearer ')) {
      return jsonResponse(400, { error: 'projectId, auditJobId, and extension token are required' }, origin)
    }

    const tokenHash = createHash('sha256').update(authHeader.slice(7).trim()).digest('hex')
    const db = getDb()
    const projectDoc = await db.collection('projects').doc(projectId).get()
    if (!projectDoc.exists || projectDoc.data()?.extensionApiToken !== tokenHash) {
      return jsonResponse(401, { error: 'Invalid or expired extension API token' }, origin)
    }

    const jobRef = db.collection('audit_jobs').doc(auditJobId)
    const jobDoc = await jobRef.get()
    if (!jobDoc.exists) return jsonResponse(404, { error: 'Audit job not found' }, origin)
    if (jobDoc.data()?.projectId !== projectId) {
      return jsonResponse(403, { error: 'Audit job does not belong to this project' }, origin)
    }

    await jobRef.update({
      status: 'completed',
      'summaries.seo.status': 'completed',
    })
    return jsonResponse(200, { success: true }, origin)
  } catch (err: any) {
    console.error('finalize-crawl error:', err)
    return jsonResponse(500, { error: err.message || 'Internal server error' }, origin)
  }
}