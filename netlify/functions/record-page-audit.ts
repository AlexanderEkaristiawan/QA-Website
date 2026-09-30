import type { Handler, HandlerEvent } from '@netlify/functions'
import { getDb, jsonResponse } from './_shared/firestore'
import { createHash } from 'crypto'

// Validate Bearer token against stored SHA-256 hash on the project document
async function validateToken(
  db: FirebaseFirestore.Firestore,
  projectId: string,
  authHeader: string | undefined
): Promise<boolean> {
  if (!authHeader?.startsWith('Bearer ')) return false
  const rawToken = authHeader.slice(7).trim()
  const tokenHash = createHash('sha256').update(rawToken).digest('hex')

  const projectDoc = await db.collection('projects').doc(projectId).get()
  if (!projectDoc.exists) return false

  return projectDoc.data()?.extensionApiToken === tokenHash
}

function normalizeUrl(rawUrl: string): string {
  try {
    const parsed = new URL(rawUrl)
    parsed.hash = ''
    if (parsed.pathname.length > 1) {
      parsed.pathname = parsed.pathname.replace(/\/+$/, '')
    }
    return parsed.toString()
  } catch {
    return rawUrl
  }
}

function stripUndefined(value: any): any {
  if (Array.isArray(value)) return value.map(item => item === undefined ? null : stripUndefined(item))
  if (!value || typeof value !== 'object' || value instanceof Date) return value

  const prototype = Object.getPrototypeOf(value)
  if (prototype !== Object.prototype && prototype !== null) return value

  return Object.fromEntries(
    Object.entries(value)
      .filter(([, item]) => item !== undefined)
      .map(([key, item]) => [key, stripUndefined(item)])
  )
}

export const handler: Handler = async (event: HandlerEvent) => {
  const origin = event.headers.origin

  if (event.httpMethod === 'OPTIONS') return jsonResponse(204, {}, origin)
  if (event.httpMethod !== 'POST') return jsonResponse(405, { error: 'Method not allowed' }, origin)

  try {
    const body = JSON.parse(event.body || '{}')
    const {
      projectId,
      url,
      title,
      statusCode,
      source = 'extension-record',
      seo,
      pageSpeed,
      security,
      batch,
    } = body

    if (!projectId) {
      return jsonResponse(400, { error: 'projectId is required' }, origin)
    }

    const db = getDb()

    // Auth check
    const isValid = await validateToken(db, projectId, event.headers.authorization)
    if (!isValid) {
      return jsonResponse(401, { error: 'Invalid or expired extension API token' }, origin)
    }

    const projectRef = db.collection('projects').doc(projectId)
    const projectDoc = await projectRef.get()
    if (!projectDoc.exists) {
      return jsonResponse(404, { error: 'Project not found' }, origin)
    }

    const projectData = projectDoc.data() || {}
    let existingPages: any[] = Array.isArray(projectData.customPages) ? [...projectData.customPages] : []

    // Helper to upsert a single item into existingPages
    const upsertItem = (item: {
      url: string
      title?: string
      statusCode?: number
      source?: string
      seo?: any
      pageSpeed?: any
      security?: any
    }) => {
      if (!item.url) return null
      const normUrl = normalizeUrl(item.url)
      let pathname = '/'
      try {
        pathname = new URL(normUrl).pathname || '/'
      } catch {}

      const existingIndex = existingPages.findIndex(
        p => normalizeUrl(p.url).toLowerCase() === normUrl.toLowerCase()
      )

      if (existingIndex >= 0) {
        const current = existingPages[existingIndex]
        const updated = {
          ...current,
          url: normUrl,
          path: pathname,
          title: item.title?.trim() || current.title || pathname,
          statusCode: item.statusCode !== undefined ? item.statusCode : current.statusCode ?? 200,
          source: current.source || item.source || 'extension-record',
          updatedAt: new Date().toISOString(),
        }

        if (item.seo) {
          updated.seoScore = item.seo.seoScore !== undefined ? item.seo.seoScore : current.seoScore
          updated.seoStatus = item.seo.seoStatus || current.seoStatus
          updated.issues = item.seo.issues || current.issues || []
          updated.h1Count = item.seo.h1Count !== undefined ? item.seo.h1Count : current.h1Count
          updated.missingAltCount = item.seo.missingAltCount !== undefined ? item.seo.missingAltCount : current.missingAltCount
          updated.titleLength = item.seo.titleLength !== undefined ? item.seo.titleLength : current.titleLength
          updated.metaDescription = item.seo.metaDescription ?? current.metaDescription ?? ''
          updated.descriptionLength = item.seo.descriptionLength !== undefined ? item.seo.descriptionLength : current.descriptionLength
          updated.canonicalUrl = item.seo.canonicalUrl !== undefined ? item.seo.canonicalUrl : current.canonicalUrl
          updated.robotsMeta = item.seo.robotsMeta !== undefined ? item.seo.robotsMeta : current.robotsMeta
          updated.hasOpenGraph = item.seo.hasOpenGraph !== undefined ? item.seo.hasOpenGraph : current.hasOpenGraph
          updated.seoAuditedAt = item.seo.auditedAt || new Date().toISOString()
        }

        if (item.pageSpeed) {
          updated.pageSpeedScores = item.pageSpeed.scores || item.pageSpeed.pageSpeedScores || current.pageSpeedScores
          updated.pageSpeedMetrics = item.pageSpeed.metrics || item.pageSpeed.pageSpeedMetrics || current.pageSpeedMetrics
          updated.pageSpeedFindings = item.pageSpeed.findings || item.pageSpeed.pageSpeedFindings || current.pageSpeedFindings || []
          updated.pageSpeedAuditType = item.pageSpeed.auditType || current.pageSpeedAuditType || 'pagespeed-insights'
          updated.pageSpeedAuditedAt = item.pageSpeed.auditedAt || new Date().toISOString()
        }

        if (item.security) {
          updated.securityAudit = item.security
        }

        existingPages[existingIndex] = updated
        return updated
      } else {
        const newId = `page_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`
        const newPage: any = {
          id: newId,
          projectId,
          url: normUrl,
          path: pathname,
          title: item.title?.trim() || pathname,
          source: item.source || 'extension-record',
          statusCode: item.statusCode ?? 200,
          seoStatus: 'not-audited',
          createdAt: new Date().toISOString(),
        }

        if (item.seo) {
          newPage.seoScore = item.seo.seoScore ?? null
          newPage.seoStatus = item.seo.seoStatus || 'not-audited'
          newPage.issues = item.seo.issues || []
          newPage.h1Count = item.seo.h1Count ?? 0
          newPage.missingAltCount = item.seo.missingAltCount ?? 0
          newPage.titleLength = item.seo.titleLength ?? 0
          newPage.metaDescription = item.seo.metaDescription ?? ''
          newPage.descriptionLength = item.seo.descriptionLength ?? 0
          newPage.canonicalUrl = item.seo.canonicalUrl ?? null
          newPage.robotsMeta = item.seo.robotsMeta ?? null
          newPage.hasOpenGraph = item.seo.hasOpenGraph ?? false
          newPage.seoAuditedAt = item.seo.auditedAt || new Date().toISOString()
        }

        if (item.pageSpeed) {
          newPage.pageSpeedScores = item.pageSpeed.scores || item.pageSpeed.pageSpeedScores || null
          newPage.pageSpeedMetrics = item.pageSpeed.metrics || item.pageSpeed.pageSpeedMetrics || null
          newPage.pageSpeedFindings = item.pageSpeed.findings || item.pageSpeed.pageSpeedFindings || []
          newPage.pageSpeedAuditType = item.pageSpeed.auditType || 'pagespeed-insights'
          newPage.pageSpeedAuditedAt = item.pageSpeed.auditedAt || new Date().toISOString()
        }

        if (item.security) {
          newPage.securityAudit = item.security
        }

        existingPages = [newPage, ...existingPages]
        return newPage
      }
    }

    let resultItem: any = null

    if (Array.isArray(batch) && batch.length > 0) {
      for (const item of batch) {
        upsertItem(item)
      }
    } else if (url) {
      resultItem = upsertItem({
        url,
        title,
        statusCode,
        source,
        seo,
        pageSpeed,
        security,
      })
    } else {
      return jsonResponse(400, { error: 'url or batch items required' }, origin)
    }

    // Persist customPages array back to project document
    await projectRef.update({
      customPages: stripUndefined(existingPages),
      updatedAt: new Date().toISOString(),
    })

    return jsonResponse(
      200,
      {
        success: true,
        page: resultItem,
        totalPages: existingPages.length,
      },
      origin
    )
  } catch (err: any) {
    console.error('record-page-audit error:', err)
    return jsonResponse(500, { error: err.message || 'Internal server error' }, origin)
  }
}
