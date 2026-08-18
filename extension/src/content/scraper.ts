/**
 * QA-Suite Content Script — extractQAMetrics()
 * Injected into target pages via chrome.scripting.executeScript.
 * Runs entirely in the page context and returns a structured PageMetrics object.
 *
 * Security: All string values from the DOM are kept as data (never innerHTML-rendered)
 * and the popup HTML-escapes them before rendering. This prevents XSS from page content.
 */
(function extractQAMetrics() {
  const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined
  const loadTimeMs = nav ? Math.round(nav.loadEventEnd - nav.startTime) : 0
  const domReadyMs = nav ? Math.round(nav.domContentLoadedEventEnd - nav.startTime) : 0

  // ── Title ─────────────────────────────────────────────────────────────────
  const titleEl = document.querySelector('title')
  const title = titleEl ? titleEl.textContent?.trim() ?? '' : ''

  // ── Meta Tags ─────────────────────────────────────────────────────────────
  function getMeta(selector: string): string {
    return (document.querySelector(selector) as HTMLMetaElement)?.content?.trim() ?? ''
  }
  const metaDescription = getMeta('meta[name="description"]')
  const keywords = getMeta('meta[name="keywords"]')
  const robotsMeta = getMeta('meta[name="robots"]') || null
  const author = getMeta('meta[name="author"]') || null
  const langAttr = document.documentElement.getAttribute('lang')

  // ── Canonical ─────────────────────────────────────────────────────────────
  const canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
  const canonicalUrl = canonicalEl?.href ?? null

  // ── Headers H1–H6 ─────────────────────────────────────────────────────────
  const headerCounts = { h1: 0, h2: 0, h3: 0, h4: 0, h5: 0, h6: 0 }
  const headersList: { level: number; text: string }[] = []
  document.querySelectorAll('h1,h2,h3,h4,h5,h6').forEach(el => {
    const level = parseInt(el.tagName[1], 10) as 1 | 2 | 3 | 4 | 5 | 6
    headerCounts[`h${level}` as keyof typeof headerCounts]++
    headersList.push({ level, text: (el.textContent ?? '').trim().slice(0, 200) })
  })

  // ── Images ────────────────────────────────────────────────────────────────
  const imgs = Array.from(document.querySelectorAll('img'))
  let missingAltCount = 0, missingTitleCount = 0, brokenImages = 0
  const images = imgs.map(img => {
    const alt = img.getAttribute('alt') ?? ''
    const titleAttr = img.getAttribute('title') ?? ''
    const broken = img.naturalWidth === 0 && img.complete
    if (!alt) missingAltCount++
    if (!titleAttr) missingTitleCount++
    if (broken) brokenImages++
    return {
      src: img.src.slice(0, 300),
      alt: alt.slice(0, 200),
      title: titleAttr.slice(0, 200),
      broken,
    }
  })

  // ── Links ─────────────────────────────────────────────────────────────────
  const baseDomain = location.hostname
  const hrefCounts: Record<string, number> = {}
  const anchors = Array.from(document.querySelectorAll('a[href]'))

  anchors.forEach(a => {
    const href = (a as HTMLAnchorElement).href
    hrefCounts[href] = (hrefCounts[href] ?? 0) + 1
  })

  let missingLinkTitleCount = 0
  let internalLinks = 0, externalLinks = 0
  const links = anchors.map(a => {
    const el = a as HTMLAnchorElement
    const href = el.href
    const hrefAttr = el.getAttribute('href') ?? ''
    const titleAttr = el.getAttribute('title') ?? ''
    if (!titleAttr) missingLinkTitleCount++
    const internal = el.hostname === baseDomain || hrefAttr.startsWith('#') || hrefAttr.startsWith('/')
    if (internal) internalLinks++; else externalLinks++

    let type: 'standard' | 'anchor' | 'js' | 'mailto' = 'standard'
    if (hrefAttr.startsWith('#')) type = 'anchor'
    else if (hrefAttr.startsWith('javascript:')) type = 'js'
    else if (hrefAttr.startsWith('mailto:')) type = 'mailto'

    return {
      href: href.slice(0, 500),
      text: (el.textContent ?? '').trim().slice(0, 200),
      type,
      title: titleAttr.slice(0, 200),
      internal,
      duplicate: hrefCounts[href] > 1,
    }
  })
  const duplicateLinksCount = Object.values(hrefCounts).filter(c => c > 1).length

  // ── Analytics Detection ───────────────────────────────────────────────────
  const scriptSrcs = Array.from(document.querySelectorAll('script[src]'))
    .map(s => (s as HTMLScriptElement).src)
  const knownAnalytics = [
    'google-analytics.com', 'googletagmanager.com', 'segment.com',
    'mixpanel.com', 'plausible.io', 'hotjar.com', 'clarity.ms',
  ]
  const analyticsScripts = scriptSrcs.filter(src =>
    knownAnalytics.some(a => src.includes(a))
  )
  const hasAnalyticsScript = analyticsScripts.length > 0

  // ── OpenGraph ─────────────────────────────────────────────────────────────
  const openGraphTags: Record<string, string> = {}
  document.querySelectorAll('meta[property^="og:"]').forEach(m => {
    const prop = m.getAttribute('property') ?? ''
    const content = (m as HTMLMetaElement).content ?? ''
    openGraphTags[prop] = content.slice(0, 300)
  })
  const hasOpenGraph = Object.keys(openGraphTags).length > 0

  // ── Twitter Card ──────────────────────────────────────────────────────────
  const twitterCardTags: Record<string, string> = {}
  document.querySelectorAll('meta[name^="twitter:"]').forEach(m => {
    const name = m.getAttribute('name') ?? ''
    const content = (m as HTMLMetaElement).content ?? ''
    twitterCardTags[name] = content.slice(0, 300)
  })
  const hasTwitterCard = Object.keys(twitterCardTags).length > 0

  // ── Schema.org ────────────────────────────────────────────────────────────
  const hasSchemaOrg = document.querySelector('script[type="application/ld+json"]') !== null

  // ── Extra meta/link tags ──────────────────────────────────────────────────
  const extraMetaTags = Array.from(document.querySelectorAll('head meta[name]'))
    .slice(0, 30)
    .map(m => ({
      name: m.getAttribute('name') ?? '',
      content: ((m as HTMLMetaElement).content ?? '').slice(0, 200),
    }))
  const extraLinkTags = Array.from(document.querySelectorAll('head link[rel]'))
    .slice(0, 30)
    .map(l => ({
      rel: l.getAttribute('rel') ?? '',
      href: ((l as HTMLLinkElement).href ?? '').slice(0, 300),
    }))

  return {
    url: location.href,
    timestamp: new Date().toISOString(),
    title,
    titleLength: title.length,
    metaDescription,
    descriptionLength: metaDescription.length,
    keywords,
    canonicalUrl,
    robotsMeta,
    langAttr,
    author,
    headerCounts,
    headers: headersList.slice(0, 100),
    imageCount: imgs.length,
    missingAltCount,
    missingTitleCount,
    brokenImages,
    images: images.slice(0, 50),
    linkCount: anchors.length,
    internalLinks,
    externalLinks,
    duplicateLinksCount,
    missingLinkTitleCount,
    links: links.slice(0, 100),
    hasAnalyticsScript,
    analyticsScripts,
    hasOpenGraph,
    openGraphTags,
    hasTwitterCard,
    twitterCardTags,
    hasSchemaOrg,
    extraMetaTags,
    extraLinkTags,
    loadTimeMs,
    domReadyMs,
  }
})()
