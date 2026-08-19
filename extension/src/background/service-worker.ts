/**
 * Background Service Worker — Manifest V3
 * Manages BFS multi-page authenticated crawl sessions.
 * State is persisted in chrome.storage.local (not in-memory) so the
 * service worker can be killed/restarted by Chrome without losing progress.
 */

import type { CrawlSession, ExtMessage, PageMetrics, SecurityResponseData } from '../types/index'

const CRAWL_STATE_KEY = 'qas_crawl_session'
const DELAY_MS = 1000
const LOGIN_PATTERNS = ['/login', '/signin', '/sign-in', '/auth', '/session/new', 'login.', 'accounts.']
const securityResponses = new Map<number, SecurityResponseData>()

// Keep the headers from real page navigations. This is the only place the
// extension can observe Set-Cookie flags, which are intentionally hidden from page JavaScript.
chrome.webRequest.onHeadersReceived.addListener(
  details => {
    if (details.type !== 'main_frame' || details.tabId < 0) return

    const headers: Record<string, string> = {}
    const setCookieHeaders: string[] = []
    for (const header of details.responseHeaders ?? []) {
      const name = header.name.toLowerCase()
      const value = header.value ?? ''
      if (name === 'set-cookie') setCookieHeaders.push(value)
      else headers[name] = headers[name] ? `${headers[name]}, ${value}` : value
    }

    securityResponses.set(details.tabId, {
      headers,
      setCookieHeaders,
      source: 'navigation',
      inspectedUrl: details.url,
    })
  },
  { urls: ['<all_urls>'], types: ['main_frame'] },
  ['responseHeaders', 'extraHeaders'],
)

// Open side panel when user clicks the extension action icon in the toolbar
if (chrome.sidePanel && chrome.sidePanel.setPanelBehavior) {
  chrome.sidePanel
    .setPanelBehavior({ openPanelOnActionClick: true })
    .catch((err: any) => console.error('Side panel error:', err))
}

// ── Message listener ─────────────────────────────────────────────────────────
chrome.runtime.onMessage.addListener((msg: ExtMessage, _sender, sendResponse) => {
  if (msg.type === 'START_CRAWL') {
    startCrawl(msg.session)
    sendResponse({ ok: true })
  } else if (msg.type === 'PAUSE_CRAWL') {
    updateStatus('paused')
    sendResponse({ ok: true })
  } else if (msg.type === 'RESUME_CRAWL') {
    resumeCrawl()
    sendResponse({ ok: true })
  } else if (msg.type === 'STOP_CRAWL') {
    updateStatus('stopped')
    sendResponse({ ok: true })
  } else if (msg.type === 'GET_SECURITY_HEADERS') {
    getSecurityHeaders(msg.url, msg.tabId)
      .then(sendResponse)
      .catch(() => sendResponse({
        headers: {},
        setCookieHeaders: [],
        source: 'unavailable',
        inspectedUrl: msg.url,
      } satisfies SecurityResponseData))
  }
  return true // Keep channel open for async
})

async function getSecurityHeaders(url: string, tabId?: number): Promise<SecurityResponseData> {
  const navigationResponse = tabId === undefined ? undefined : securityResponses.get(tabId)
  if (navigationResponse && equivalentUrl(navigationResponse.inspectedUrl, url)) {
    return navigationResponse
  }

  const response = await fetch(url, { cache: 'no-store', credentials: 'omit', redirect: 'follow' })
  const headers: Record<string, string> = {}
  response.headers.forEach((value, name) => { headers[name.toLowerCase()] = value })
  return {
    headers,
    // Fetch intentionally does not expose Set-Cookie; navigation capture above handles it when available.
    setCookieHeaders: [],
    source: 'background-request',
    inspectedUrl: response.url || url,
  }
}

function equivalentUrl(left: string, right: string): boolean {
  try {
    const a = new URL(left)
    const b = new URL(right)
    return a.origin === b.origin && a.pathname === b.pathname
  } catch {
    return left === right
  }
}

// ── Start a new crawl session ─────────────────────────────────────────────────
async function startCrawl(
  init: Omit<CrawlSession, 'queue' | 'visited' | 'crawledCount' | 'errors' | 'status' | 'startedAt'>
) {
  const session: CrawlSession = {
    ...init,
    status: 'running',
    startedAt: Date.now(),
    queue: [init.startUrl],
    visited: [],
    crawledCount: 0,
    errors: [],
  }
  await chrome.storage.local.set({ [CRAWL_STATE_KEY]: session })
  runLoop()
}

async function resumeCrawl() {
  await updateStatus('running')
  runLoop()
}

async function updateStatus(status: CrawlSession['status']) {
  const data = await chrome.storage.local.get(CRAWL_STATE_KEY)
  const session: CrawlSession | undefined = data[CRAWL_STATE_KEY]
  if (session) {
    session.status = status
    await chrome.storage.local.set({ [CRAWL_STATE_KEY]: session })
  }
}

// ── BFS Crawl Loop ────────────────────────────────────────────────────────────
async function runLoop() {
  let data = await chrome.storage.local.get(CRAWL_STATE_KEY)
  let session: CrawlSession = data[CRAWL_STATE_KEY]
  if (!session) return

  while (
    session.status === 'running' &&
    session.queue.length > 0 &&
    session.crawledCount < session.pageLimit
  ) {
    // Check max duration
    const elapsedMin = (Date.now() - session.startedAt) / 60000
    if (elapsedMin > session.maxDurationMin) {
      session.status = 'done'
      await chrome.storage.local.set({ [CRAWL_STATE_KEY]: session })
      broadcastProgress(session)
      break
    }

    const url = session.queue.shift()!
    if (session.visited.includes(url)) {
      await chrome.storage.local.set({ [CRAWL_STATE_KEY]: session })
      continue
    }

    session.visited.push(url)

    try {
      const metrics = await crawlPage(url, session)
      if (!metrics) {
        // Auth loss — session status set to paused inside crawlPage
        data = await chrome.storage.local.get(CRAWL_STATE_KEY)
        session = data[CRAWL_STATE_KEY]
        break
      }

      // Enqueue same-domain links not yet visited
      const newLinks = (metrics.links ?? [])
        .filter(l => l.internal && !session.visited.includes(l.href) && !session.queue.includes(l.href))
        .map(l => l.href)
        .slice(0, 50)

      session.queue.push(...newLinks)
      session.crawledCount++
      await chrome.storage.local.set({ [CRAWL_STATE_KEY]: session })
      broadcastProgress(session, url)

      // Rate limiting
      await sleep(DELAY_MS)
    } catch (err: any) {
      session.errors.push(`${url}: ${err.message}`)
      await chrome.storage.local.set({ [CRAWL_STATE_KEY]: session })
    }

    // Reload state in case popup sent a control message
    data = await chrome.storage.local.get(CRAWL_STATE_KEY)
    session = data[CRAWL_STATE_KEY]
    if (!session || session.status !== 'running') break
  }

  // Mark done if queue exhausted or limit reached
  data = await chrome.storage.local.get(CRAWL_STATE_KEY)
  session = data[CRAWL_STATE_KEY]
  if (session && session.status === 'running') {
    session.status = 'done'
    await chrome.storage.local.set({ [CRAWL_STATE_KEY]: session })
    broadcastProgress(session)
  }
}

// ── Crawl a single page ───────────────────────────────────────────────────────
async function crawlPage(url: string, session: CrawlSession): Promise<PageMetrics | null> {
  let tabId: number | null = null

  try {
    const tab = await chrome.tabs.create({ url, active: false })
    tabId = tab.id!

    // Wait for the tab to finish loading (with SPA fallback via polling)
    await waitForTab(tabId)

    // Check for auth-loss redirect before scraping
    const tabInfo = await chrome.tabs.get(tabId)
    const finalUrl = tabInfo.url ?? url
    if (isLoginPage(finalUrl)) {
      // Pause crawl and notify popup
      await updateStatus('paused')
      chrome.runtime.sendMessage({ type: 'AUTH_LOSS_DETECTED', redirectUrl: finalUrl } as ExtMessage)
      return null
    }

    // Inject content script and extract metrics
    const results = await chrome.scripting.executeScript({
      target: { tabId },
      func: scraperFunc,
    })

    const metrics = results[0]?.result as PageMetrics
    if (!metrics) return null

    // POST to ingestion endpoint. Direct extension crawls have no job yet;
    // persist the first returned job ID so all following pages join that job.
    const ingestion = await ingestPage(metrics, session)
    if (!session.jobId && ingestion.jobId) session.jobId = ingestion.jobId
    return metrics
  } finally {
    if (tabId !== null) {
      chrome.tabs.remove(tabId).catch(() => {})
    }
  }
}

// ── Page metrics extractor (injected via func — must be self-contained) ───────
function scraperFunc(): PageMetrics {
  const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined
  const loadTimeMs = nav ? Math.round(nav.loadEventEnd - nav.startTime) : 0
  const domReadyMs = nav ? Math.round(nav.domContentLoadedEventEnd - nav.startTime) : 0

  const titleEl = document.querySelector('title')
  const title = titleEl?.textContent?.trim() ?? ''
  function getMeta(sel: string) {
    return (document.querySelector(sel) as HTMLMetaElement)?.content?.trim() ?? ''
  }
  const metaDescription = getMeta('meta[name="description"]')
  const canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
  const canonicalUrl = canonicalEl?.href ?? null
  const robotsMeta = getMeta('meta[name="robots"]') || null
  const langAttr = document.documentElement.getAttribute('lang')
  const author = getMeta('meta[name="author"]') || null
  const keywords = getMeta('meta[name="keywords"]')

  const headerCounts = { h1: 0, h2: 0, h3: 0, h4: 0, h5: 0, h6: 0 }
  const headers: { level: number; text: string }[] = []
  document.querySelectorAll('h1,h2,h3,h4,h5,h6').forEach(el => {
    const lvl = parseInt(el.tagName[1], 10) as 1|2|3|4|5|6
    headerCounts[`h${lvl}` as keyof typeof headerCounts]++
    headers.push({ level: lvl, text: (el.textContent ?? '').trim().slice(0, 200) })
  })

  const imgs = Array.from(document.querySelectorAll('img'))
  let missingAltCount = 0, missingTitleCount = 0, brokenImages = 0
  const images = imgs.map(img => {
    const alt = img.getAttribute('alt') ?? ''
    const t = img.getAttribute('title') ?? ''
    const broken = img.naturalWidth === 0 && img.complete
    if (!alt) missingAltCount++
    if (!t) missingTitleCount++
    if (broken) brokenImages++
    return { src: img.src.slice(0, 300), alt: alt.slice(0, 200), title: t.slice(0, 200), broken }
  })

  const baseDomain = location.hostname
  const hrefCounts: Record<string, number> = {}
  const anchors = Array.from(document.querySelectorAll('a[href]'))
  anchors.forEach(a => { const h = (a as HTMLAnchorElement).href; hrefCounts[h] = (hrefCounts[h] ?? 0) + 1 })
  let missingLinkTitleCount = 0, internalLinks = 0, externalLinks = 0
  const links = anchors.map(a => {
    const el = a as HTMLAnchorElement
    const href = el.href, hrefAttr = el.getAttribute('href') ?? '', t = el.getAttribute('title') ?? ''
    if (!t) missingLinkTitleCount++
    const internal = el.hostname === baseDomain || hrefAttr.startsWith('#') || hrefAttr.startsWith('/')
    if (internal) internalLinks++; else externalLinks++
    let type: 'standard'|'anchor'|'js'|'mailto' = 'standard'
    if (hrefAttr.startsWith('#')) type = 'anchor'
    else if (hrefAttr.startsWith('javascript:')) type = 'js'
    else if (hrefAttr.startsWith('mailto:')) type = 'mailto'
    return { href: href.slice(0, 500), text: (el.textContent ?? '').trim().slice(0, 200), type, title: t.slice(0, 200), internal, duplicate: hrefCounts[href] > 1 }
  })
  const duplicateLinksCount = Object.values(hrefCounts).filter(c => c > 1).length

  const scriptSrcs = Array.from(document.querySelectorAll('script[src]')).map(s => (s as HTMLScriptElement).src)
  const knownAnalytics = ['google-analytics.com','googletagmanager.com','segment.com','mixpanel.com','plausible.io','hotjar.com','clarity.ms']
  const analyticsScripts = scriptSrcs.filter(src => knownAnalytics.some(a => src.includes(a)))

  const openGraphTags: Record<string,string> = {}
  document.querySelectorAll('meta[property^="og:"]').forEach(m => { openGraphTags[m.getAttribute('property') ?? ''] = ((m as HTMLMetaElement).content ?? '').slice(0, 300) })
  const twitterCardTags: Record<string,string> = {}
  document.querySelectorAll('meta[name^="twitter:"]').forEach(m => { twitterCardTags[m.getAttribute('name') ?? ''] = ((m as HTMLMetaElement).content ?? '').slice(0, 300) })
  const hasSchemaOrg = !!document.querySelector('script[type="application/ld+json"]')

  return {
    url: location.href, timestamp: new Date().toISOString(),
    title, titleLength: title.length, metaDescription, descriptionLength: metaDescription.length,
    keywords, canonicalUrl, robotsMeta, langAttr, author,
    headerCounts, headers: headers.slice(0, 100),
    imageCount: imgs.length, missingAltCount, missingTitleCount, brokenImages, images: images.slice(0, 50),
    linkCount: anchors.length, internalLinks, externalLinks, duplicateLinksCount, missingLinkTitleCount, links: links.slice(0, 100),
    hasAnalyticsScript: analyticsScripts.length > 0, analyticsScripts,
    hasOpenGraph: Object.keys(openGraphTags).length > 0, openGraphTags,
    hasTwitterCard: Object.keys(twitterCardTags).length > 0, twitterCardTags,
    hasSchemaOrg, extraMetaTags: [], extraLinkTags: [],
    loadTimeMs, domReadyMs,
  }
}

// ── POST metrics to crawl-ingest Netlify Function ─────────────────────────────
async function ingestPage(metrics: PageMetrics, session: CrawlSession): Promise<{ jobId?: string }> {
  const payload = {
    projectId: session.projectId,
    auditJobId: session.jobId,
    url: metrics.url,
    timestamp: metrics.timestamp,
    metrics: { ...metrics, source: 'extension' },
  }

  const res = await fetch(`${session.apiBaseUrl}/crawl-ingest`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${session.apiToken}`,
    },
    body: JSON.stringify(payload),
  })

  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: 'Unknown error' }))
    throw new Error(`Ingest failed (${res.status}): ${err.error}`)
  }

  return res.json().catch(() => ({}))
}

// ── Broadcast progress to popup ───────────────────────────────────────────────
function broadcastProgress(session: CrawlSession, lastUrl?: string) {
  chrome.runtime.sendMessage({
    type: 'CRAWL_PROGRESS',
    crawledCount: session.crawledCount,
    queueLength: session.queue.length,
    status: session.status,
    lastUrl,
    errors: session.errors,
  } as ExtMessage).catch(() => {}) // Popup may be closed — ignore
}

// ── Wait for tab load (SPA-aware polling) ─────────────────────────────────────
function waitForTab(tabId: number): Promise<void> {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => reject(new Error('Tab load timeout')), 20000)

    function check() {
      chrome.tabs.get(tabId, tab => {
        if (chrome.runtime.lastError) { clearTimeout(timeout); resolve(); return }
        if (tab.status === 'complete') { clearTimeout(timeout); resolve() }
        else setTimeout(check, 300)
      })
    }
    check()
  })
}

function isLoginPage(url: string): boolean {
  return LOGIN_PATTERNS.some(p => url.toLowerCase().includes(p))
}

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}
