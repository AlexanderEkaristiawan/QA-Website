import type { Handler, HandlerEvent } from '@netlify/functions'
import { getDb, getFieldValue, jsonResponse } from './_shared/firestore'
import axios from 'axios'
import * as https from 'https'
import * as http from 'http'

interface AuthSettings {
  authType: 'none' | 'basic' | 'session'
  basicAuthUsername?: string
  basicAuthPassword?: string
  sessionCookie?: string
}

interface CrawlPage {
  url: string
  statusCode: number
  title: string
  metaDescription: string
  h1Count: number
  missingAlt: number
  brokenLinks: string[]
  canonicalUrl: string | null
  robotsMeta: string | null
  issues: { type: string; description: string; severity: 'Critical' | 'Major' | 'Minor' }[]
}

const MAX_PAGES = 25
const REQUEST_DELAY_MS = 500

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function fetchPage(url: string, authSettings: AuthSettings): Promise<{ body: string; statusCode: number }> {
  const headers: Record<string, string> = {
    'User-Agent': 'QASuite-SEOBot/1.0 (University Research Project)',
    'Accept': 'text/html,application/xhtml+xml',
  }

  if (authSettings.authType === 'basic' && authSettings.basicAuthUsername) {
    const token = Buffer.from(`${authSettings.basicAuthUsername}:${authSettings.basicAuthPassword || ''}`).toString('base64')
    headers['Authorization'] = `Basic ${token}`
  }
  if (authSettings.authType === 'session' && authSettings.sessionCookie) {
    headers['Cookie'] = authSettings.sessionCookie
  }

  const response = await axios.get(url, {
    headers,
    timeout: 10000,
    maxRedirects: 3,
    validateStatus: () => true,
  })

  return { body: response.data as string, statusCode: response.status }
}

async function isAllowedByRobots(baseUrl: string, path: string): Promise<boolean> {
  try {
    const robotsUrl = `${new URL(baseUrl).origin}/robots.txt`
    const { data } = await axios.get(robotsUrl, { timeout: 5000 })
    const lines = (data as string).split('\n')
    let inQABot = false
    let inAll = false
    const disallowedQA: string[] = []
    const disallowedAll: string[] = []

    for (const line of lines) {
      const trimmed = line.trim()
      if (trimmed.toLowerCase().startsWith('user-agent:')) {
        const ua = trimmed.slice(11).trim().toLowerCase()
        inQABot = ua === 'qasuitebot' || ua === '*'
        inAll = ua === '*'
      } else if (trimmed.toLowerCase().startsWith('disallow:')) {
        const disPath = trimmed.slice(9).trim()
        if (inQABot) disallowedQA.push(disPath)
        if (inAll) disallowedAll.push(disPath)
      }
    }

    const allDisallowed = [...disallowedQA, ...disallowedAll]
    return !allDisallowed.some(dp => dp && path.startsWith(dp))
  } catch {
    return true // If robots.txt not found, allow
  }
}

function parsePage(url: string, html: string, statusCode: number): CrawlPage {
  // Simple regex-based parsing (avoid cheerio for bundle size in functions)
  const issues: CrawlPage['issues'] = []

  const titleMatch = html.match(/<title[^>]*>([^<]*)<\/title>/i)
  const title = titleMatch ? titleMatch[1].trim() : ''
  if (!title) issues.push({ type: 'missing-title', description: 'Page is missing a <title> tag', severity: 'Critical' })
  else if (title.length < 30 || title.length > 60) issues.push({ type: 'title-length', description: `Title length is ${title.length} chars (ideal: 30-60)`, severity: 'Minor' })

  const metaDescMatch = html.match(/<meta\s+name=["']description["'][^>]*content=["']([^"']*)["']/i)
    || html.match(/<meta\s+content=["']([^"']*)["'][^>]*name=["']description["']/i)
  const metaDescription = metaDescMatch ? metaDescMatch[1].trim() : ''
  if (!metaDescription) issues.push({ type: 'missing-meta-description', description: 'Page is missing meta description', severity: 'Major' })
  else if (metaDescription.length < 70 || metaDescription.length > 160) issues.push({ type: 'meta-desc-length', description: `Meta description length is ${metaDescription.length} chars (ideal: 70-160)`, severity: 'Minor' })

  const h1Matches = html.match(/<h1[^>]*>[\s\S]*?<\/h1>/gi) || []
  const h1Count = h1Matches.length
  if (h1Count === 0) issues.push({ type: 'missing-h1', description: 'Page has no <h1> tag', severity: 'Major' })
  else if (h1Count > 1) issues.push({ type: 'multiple-h1', description: `Page has ${h1Count} <h1> tags (should have exactly 1)`, severity: 'Minor' })

  const imgTags = html.match(/<img[^>]+>/gi) || []
  const missingAlt = imgTags.filter(img => !img.match(/alt=["'][^"']*["']/i) || img.match(/alt=["']['"]]/i)).length
  if (missingAlt > 0) issues.push({ type: 'missing-alt', description: `${missingAlt} image(s) missing or empty alt attribute`, severity: 'Major' })

  const canonicalMatch = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']*)["']/i)
  const canonicalUrl = canonicalMatch ? canonicalMatch[1] : null

  const robotsMetaMatch = html.match(/<meta\s+name=["']robots["'][^>]+content=["']([^"']*)["']/i)
  const robotsMeta = robotsMetaMatch ? robotsMetaMatch[1] : null
  if (robotsMeta && (robotsMeta.includes('noindex') || robotsMeta.includes('nofollow'))) {
    issues.push({ type: 'robots-noindex', description: `Page has robots meta: "${robotsMeta}"`, severity: 'Minor' })
  }

  if (statusCode >= 400) {
    issues.push({ type: 'http-error', description: `Page returned HTTP ${statusCode}`, severity: 'Critical' })
  }

  return { url, statusCode, title, metaDescription, h1Count, missingAlt, brokenLinks: [], canonicalUrl, robotsMeta, issues }
}

function extractLinks(baseUrl: string, html: string): string[] {
  const base = new URL(baseUrl)
  const hrefs = [...html.matchAll(/href=["']([^"'#?]+)["']/gi)].map(m => m[1])
  const links: string[] = []

  for (const href of hrefs) {
    try {
      const resolved = new URL(href, baseUrl)
      if (resolved.hostname === base.hostname && resolved.protocol.startsWith('http')) {
        links.push(resolved.origin + resolved.pathname)
      }
    } catch {}
  }
  return [...new Set(links)]
}

export const handler: Handler = async (event: HandlerEvent) => {
  const origin = event.headers.origin

  if (event.httpMethod === 'OPTIONS') return jsonResponse(204, {}, origin)
  if (event.httpMethod !== 'POST') return jsonResponse(405, { error: 'Method not allowed' }, origin)

  const db = getDb()
  const fv = getFieldValue()
  const body = JSON.parse(event.body || '{}')
  const { jobId, projectId, targetUrl, authSettings = {} } = body

  if (!jobId || !projectId || !targetUrl) {
    return jsonResponse(400, { error: 'jobId, projectId, and targetUrl required' }, origin)
  }

  const jobRef = db.collection('audit_jobs').doc(jobId)

  try {
    await jobRef.update({ 'summaries.seo.status': 'running' })

    const visited = new Set<string>()
    const queue: string[] = [targetUrl]
    const crawledPages: CrawlPage[] = []
    let totalIssues = 0

    while (queue.length > 0 && crawledPages.length < MAX_PAGES) {
      const url = queue.shift()!
      if (visited.has(url)) continue
      visited.add(url)

      const path = new URL(url).pathname
      const allowed = await isAllowedByRobots(targetUrl, path)
      if (!allowed) continue

      await sleep(REQUEST_DELAY_MS)

      try {
        const { body: html, statusCode } = await fetchPage(url, authSettings)
        const page = parsePage(url, html, statusCode)
        crawledPages.push(page)
        totalIssues += page.issues.length

        // BFS: enqueue new links
        const links = extractLinks(url, html)
        for (const link of links) {
          if (!visited.has(link) && !queue.includes(link)) {
            queue.push(link)
          }
        }
      } catch (err: any) {
        console.warn(`Failed to fetch ${url}:`, err.message)
        crawledPages.push({
          url, statusCode: 0, title: '', metaDescription: '', h1Count: 0, missingAlt: 0,
          brokenLinks: [], canonicalUrl: null, robotsMeta: null,
          issues: [{ type: 'fetch-error', description: err.message, severity: 'Major' }],
        })
        totalIssues++
      }
    }

    // Write pages sub-collection (lazy-load only)
    const batch = db.batch()
    for (const page of crawledPages) {
      const pageRef = jobRef.collection('pages').doc()
      batch.set(pageRef, page)
    }
    await batch.commit()

    // Update summary
    await jobRef.update({
      'summaries.seo': {
        totalErrors: totalIssues,
        pageCount: crawledPages.length,
        status: 'completed',
      },
    })

    // Auto-create bug entries for critical SEO issues
    if (totalIssues > 0) {
      const bugRef = db.collection('bug_list').doc()
      // Get next short ID via transaction
      const projectRef = db.collection('projects').doc(projectId)
      let shortId = ''
      await db.runTransaction(async (tx) => {
        const proj = await tx.get(projectRef)
        const counter = (proj.data()?.bugCounter || 0) + 1
        shortId = `QAS-${counter}`
        tx.update(projectRef, { bugCounter: counter })
      })
      batch.set(bugRef, {
        projectId,
        shortId,
        title: `${totalIssues} SEO Issues Found across ${crawledPages.length} pages`,
        source: 'SEO',
        severity: totalIssues > 5 ? 'High' : 'Medium',
        status: 'Open',
        tags: ['SEO', 'Crawl'],
        assignees: [],
        description: `Automated SEO crawl found ${totalIssues} issues across ${crawledPages.length} pages. Review the detailed pages report for specifics.`,
        remediationGuide: null,
        commentCount: 0,
        screenshotUrls: [],
        createdAt: fv.serverTimestamp(),
        lastEditedTime: fv.serverTimestamp(),
      })
      await batch.commit()
    }

    return jsonResponse(200, { pageCount: crawledPages.length, totalErrors: totalIssues }, origin)
  } catch (err: any) {
    console.error('SEO bot error:', err)
    await jobRef.update({
      'summaries.seo.status': 'failed',
      errors: fv.arrayUnion({ bot: 'seo', message: err.message, retriesLeft: 1 }),
    }).catch(() => {})
    return jsonResponse(500, { error: err.message }, origin)
  }
}
