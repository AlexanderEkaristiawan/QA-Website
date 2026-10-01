import type { Handler, HandlerEvent } from '@netlify/functions'
import { createHash } from 'crypto'
import { getDb, jsonResponse } from './_shared/firestore'

function asIsoString(value: any): string | null {
  if (!value) return null
  if (typeof value === 'string') return value
  if (value instanceof Date) return value.toISOString()
  if (typeof value.toDate === 'function') return value.toDate().toISOString()
  return null
}

export const handler: Handler = async (event: HandlerEvent) => {
  const origin = event.headers.origin
  if (event.httpMethod === 'OPTIONS') return jsonResponse(204, {}, origin)
  if (event.httpMethod !== 'GET') return jsonResponse(405, { error: 'Method not allowed' }, origin)

  const projectId = event.queryStringParameters?.projectId
  const authHeader = event.headers.authorization
  if (!projectId || !authHeader?.startsWith('Bearer ')) {
    return jsonResponse(401, { error: 'Project ID and extension token required' }, origin)
  }

  try {
    const tokenHash = createHash('sha256').update(authHeader.slice(7).trim()).digest('hex')
    const projectRef = getDb().collection('projects').doc(projectId)
    const projectSnap = await projectRef.get()
    if (!projectSnap.exists) return jsonResponse(404, { error: 'Project not found' }, origin)
    if (projectSnap.data()?.extensionApiToken !== tokenHash) {
      return jsonResponse(401, { error: 'Invalid or expired extension API token' }, origin)
    }

    const pages = Array.isArray(projectSnap.data()?.customPages) ? projectSnap.data()!.customPages : []
    const result = pages.slice(0, 500).map((page: any) => ({
      id: page.id,
      url: page.url,
      path: page.path || '/',
      title: page.title || page.path || page.url,
      source: page.source || 'manual',
      statusCode: page.statusCode ?? null,
      seoScore: page.seoScore ?? null,
      seoStatus: page.seoStatus || 'not-audited',
      issueCount: Array.isArray(page.issues) ? page.issues.length : 0,
      pageSpeedScores: page.pageSpeedScores || null,
      pageSpeedAuditType: page.pageSpeedAuditType || null,
      securityAudit: page.securityAudit ? {
        status: page.securityAudit.status,
        highAlerts: page.securityAudit.highAlerts || 0,
        mediumAlerts: page.securityAudit.mediumAlerts || 0,
        lowAlerts: page.securityAudit.lowAlerts || 0,
      } : null,
      updatedAt: asIsoString(page.updatedAt || page.createdAt),
    })).filter((page: any) => typeof page.url === 'string' && page.url.length > 0)

    return jsonResponse(200, { success: true, pages: result }, origin)
  } catch (err: any) {
    console.error('list-page-audits error:', err)
    return jsonResponse(500, { error: err.message || 'Could not load project pages' }, origin)
  }
}
