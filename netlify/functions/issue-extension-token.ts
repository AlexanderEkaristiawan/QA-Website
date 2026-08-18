import type { Handler, HandlerEvent } from '@netlify/functions'
import { getDb, jsonResponse } from './_shared/firestore'
import { randomBytes, createHash } from 'crypto'

export const handler: Handler = async (event: HandlerEvent) => {
  const origin = event.headers.origin

  if (event.httpMethod === 'OPTIONS') return jsonResponse(204, {}, origin)
  if (event.httpMethod !== 'POST') return jsonResponse(405, { error: 'Method not allowed' }, origin)

  try {
    const body = JSON.parse(event.body || '{}')
    const { projectId, userId } = body

    if (!projectId || !userId) {
      return jsonResponse(400, { error: 'projectId and userId required' }, origin)
    }

    const db = getDb()
    const projectDoc = await db.collection('projects').doc(projectId).get()

    if (!projectDoc.exists) {
      return jsonResponse(404, { error: 'Project not found' }, origin)
    }

    const project = projectDoc.data()!

    // RBAC: only owner/admin/developer can issue tokens
    const memberRole = project.members?.[userId] as string | undefined
    if (project.ownerId !== userId && !['owner', 'admin', 'developer'].includes(memberRole || '')) {
      return jsonResponse(403, { error: 'Permission denied' }, origin)
    }

    // Generate a 32-byte random token prefixed for identification
    const rawToken = `qas_ext_${randomBytes(24).toString('hex')}`

    // Store the SHA-256 hash on the project doc (never store raw token server-side)
    const tokenHash = createHash('sha256').update(rawToken).digest('hex')
    await db.collection('projects').doc(projectId).update({
      extensionApiToken: tokenHash,
      extensionApiTokenIssuedAt: new Date().toISOString(),
    })

    // Return the raw token — client stores it; we only ever keep the hash
    return jsonResponse(200, { token: rawToken }, origin)
  } catch (err: any) {
    console.error('issue-extension-token error:', err)
    return jsonResponse(500, { error: err.message || 'Internal server error' }, origin)
  }
}
