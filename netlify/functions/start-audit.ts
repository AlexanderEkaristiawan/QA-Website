import type { Handler, HandlerEvent } from '@netlify/functions'
import { getDb, getFieldValue, jsonResponse } from './_shared/firestore'
import axios from 'axios'

export const handler: Handler = async (event: HandlerEvent) => {
  const origin = event.headers.origin

  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return jsonResponse(204, {}, origin)
  }

  if (event.httpMethod !== 'POST') {
    return jsonResponse(405, { error: 'Method not allowed' }, origin)
  }

  try {
    const body = JSON.parse(event.body || '{}')
    const { projectId, userId, crawlMode = 'server' } = body

    if (!projectId || !userId) {
      return jsonResponse(400, { error: 'projectId and userId required' }, origin)
    }

    if (!['server', 'extension'].includes(crawlMode)) {
      return jsonResponse(400, { error: 'crawlMode must be "server" or "extension"' }, origin)
    }

    const db = getDb()
    const fv = getFieldValue()

    // Load project and verify ownership/membership
    const projectDoc = await db.collection('projects').doc(projectId).get()
    if (!projectDoc.exists) {
      return jsonResponse(404, { error: 'Project not found' }, origin)
    }

    const project = projectDoc.data()!

    // RBAC: only owner/admin/developer can trigger audits
    const memberRole = project.members?.[userId] as string | undefined
    if (project.ownerId !== userId && !['owner', 'admin', 'developer'].includes(memberRole || '')) {
      return jsonResponse(403, { error: 'Permission denied' }, origin)
    }

    // Require ownership verified
    if (!project.ownershipVerified) {
      return jsonResponse(403, { error: 'Domain ownership not verified. Please confirm authorization in project settings.' }, origin)
    }

    // Create the audit job doc with crawlMode
    const jobRef = await db.collection('audit_jobs').add({
      projectId,
      crawlMode,
      status: 'pending',
      timestamp: fv.serverTimestamp(),
      zapScanId: null,
      summaries: {
        // Extension mode: seo summary is populated by crawl-ingest; pending means waiting for extension
        seo: { totalErrors: 0, pageCount: 0, status: crawlMode === 'extension' ? 'pending' : 'pending' },
        security: { highAlerts: 0, mediumAlerts: 0, lowAlerts: 0, missingHeaders: [], status: 'pending' },
        performance: { performance: 0, accessibility: 0, seo: 0, bestPractices: 0, status: 'pending' },
      },
      errors: [],
    })

    const jobId = jobRef.id
    const baseUrl = process.env.URL || 'http://localhost:8888'

    // Fire bots independently based on crawlMode
    const botCalls: Promise<any>[] = []

    if (crawlMode === 'server') {
      // Server mode: run preflight, SEO crawler, security, and performance bots
      botCalls.push(
        axios.post(`${baseUrl}/.netlify/functions/preflight-check`, {
          jobId, projectId, targetUrl: project.targetUrl, authSettings: project.authSettings,
        }).catch(e => console.error('preflight failed:', e.message)),
        axios.post(`${baseUrl}/.netlify/functions/bot-seo`, {
          jobId, projectId, targetUrl: project.targetUrl, authSettings: project.authSettings,
        }).catch(e => console.error('seo bot failed:', e.message)),
      )
    } else {
      // Extension mode: extension handles crawling — skip preflight and bot-seo
      // Mark SEO as pending (extension will stream results via crawl-ingest)
      console.log(`[start-audit] crawlMode=extension — SEO crawl delegated to Chrome Extension. jobId=${jobId}`)
    }

    // Security and performance bots run regardless of crawlMode
    botCalls.push(
      axios.post(`${baseUrl}/.netlify/functions/bot-security`, {
        jobId, projectId, targetUrl: project.targetUrl,
        contextName: project.name?.replace(/[^a-zA-Z0-9_-]/g, '_'),
      }).catch(e => console.error('security bot failed:', e.message)),
      axios.post(`${baseUrl}/.netlify/functions/bot-performance`, {
        jobId, projectId, targetUrl: project.targetUrl,
      }).catch(e => console.error('perf bot failed:', e.message)),
    )

    // Start all bots (fire-and-forget style for background functions)
    Promise.allSettled(botCalls).then(results => {
      results.forEach((r, i) => {
        if (r.status === 'rejected') console.error(`Bot ${i} error:`, r.reason)
      })
    })

    // Update status to running
    await jobRef.update({ status: 'running' })

    return jsonResponse(200, { jobId, crawlMode }, origin)
  } catch (err: any) {
    console.error('start-audit error:', err)
    return jsonResponse(500, { error: err.message || 'Internal server error' }, origin)
  }
}

