/**
 * Background Service Worker — Manifest V3
 * Manages BFS multi-page authenticated crawl sessions.
 * State is persisted in chrome.storage.local (not in-memory) so the
 * service worker can be killed/restarted by Chrome without losing progress.
 */

import type { CrawlSession, ExtMessage, PageMetrics, SecurityResponseData } from '../types/index'
import { extractPageMetrics } from '../content/scraper'

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
      func: extractPageMetrics,
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
