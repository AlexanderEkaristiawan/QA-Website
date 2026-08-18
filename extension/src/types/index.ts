// Extension-specific types shared across popup, content script, and service worker

export interface ExtensionConfig {
  apiBaseUrl: string      // e.g. https://your-app.netlify.app/.netlify/functions
  apiToken: string        // project-scoped token from issue-extension-token
  projectId: string
}

export interface CrawlSession {
  jobId: string
  projectId: string
  apiToken: string
  apiBaseUrl: string
  startUrl: string
  baseDomain: string
  pageLimit: number
  maxDurationMin: number
  startedAt: number       // Date.now()
  status: 'running' | 'paused' | 'stopped' | 'done'
  queue: string[]         // BFS URL queue
  visited: string[]       // deduplicated visited URLs
  crawledCount: number
  errors: string[]
}

// Represents the full metrics collected by the content script
export interface PageMetrics {
  url: string
  timestamp: string
  title: string
  titleLength: number
  metaDescription: string
  descriptionLength: number
  keywords: string
  canonicalUrl: string | null
  robotsMeta: string | null
  langAttr: string | null
  author: string | null
  headerCounts: { h1: number; h2: number; h3: number; h4: number; h5: number; h6: number }
  headers: { level: number; text: string }[]
  imageCount: number
  missingAltCount: number
  missingTitleCount: number
  brokenImages: number
  images: ImageEntry[]
  linkCount: number
  internalLinks: number
  externalLinks: number
  duplicateLinksCount: number
  missingLinkTitleCount: number
  links: LinkEntry[]
  hasAnalyticsScript: boolean
  analyticsScripts: string[]
  hasOpenGraph: boolean
  openGraphTags: Record<string, string>
  hasTwitterCard: boolean
  twitterCardTags: Record<string, string>
  hasSchemaOrg: boolean
  extraMetaTags: { name: string; content: string }[]
  extraLinkTags: { rel: string; href: string }[]
  loadTimeMs: number
  domReadyMs: number
}

export interface ImageEntry {
  src: string
  alt: string
  title: string
  broken: boolean
}

export interface LinkEntry {
  href: string
  text: string
  type: 'standard' | 'anchor' | 'js' | 'mailto'
  title: string
  internal: boolean
  duplicate: boolean
}

// Messages between popup / background / content script
export interface MessageStartCrawl {
  type: 'START_CRAWL'
  session: Omit<CrawlSession, 'queue' | 'visited' | 'crawledCount' | 'errors' | 'status' | 'startedAt'>
}

export interface MessageCrawlControl {
  type: 'PAUSE_CRAWL' | 'STOP_CRAWL' | 'RESUME_CRAWL'
}

export interface MessageCrawlProgress {
  type: 'CRAWL_PROGRESS'
  crawledCount: number
  queueLength: number
  status: CrawlSession['status']
  lastUrl?: string
  errors: string[]
}

export interface MessageAuthLoss {
  type: 'AUTH_LOSS_DETECTED'
  redirectUrl: string
}

export interface MessageRunInstantAudit {
  type: 'RUN_INSTANT_AUDIT'
}

export interface MessageInstantAuditResult {
  type: 'INSTANT_AUDIT_RESULT'
  metrics: PageMetrics
}

export type ExtMessage =
  | MessageStartCrawl
  | MessageCrawlControl
  | MessageCrawlProgress
  | MessageAuthLoss
  | MessageRunInstantAudit
  | MessageInstantAuditResult
