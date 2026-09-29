import type { Handler, HandlerEvent } from '@netlify/functions'
import { createHash } from 'crypto'
import { getDb, jsonResponse } from './_shared/firestore'

export const handler: Handler = async (event: HandlerEvent) => {
  const origin = event.headers.origin

  if (event.httpMethod === 'OPTIONS') return jsonResponse(204, {}, origin)
  if (event.httpMethod !== 'GET') return jsonResponse(405, { error: 'Method not allowed' }, origin)

  const projectId = event.queryStringParameters?.projectId
  const authHeader = event.headers.authorization

  if (!projectId || !authHeader?.startsWith('Bearer ')) {
    return jsonResponse(401, { connected: false, error: 'Project ID and extension token required' }, origin)
  }

  try {
    const rawToken = authHeader.slice(7).trim()
    const tokenHash = createHash('sha256').update(rawToken).digest('hex')
    const projectDoc = await getDb().collection('projects').doc(projectId).get()

    if (!projectDoc.exists || projectDoc.data()?.extensionApiToken !== tokenHash) {
      return jsonResponse(401, { connected: false, error: 'Invalid or expired extension API token' }, origin)
    }

    return jsonResponse(200, { connected: true }, origin)
  } catch (err: any) {
    console.error('verify-extension-token error:', err)
    return jsonResponse(500, { connected: false, error: err.message || 'Internal server error' }, origin)
  }
}