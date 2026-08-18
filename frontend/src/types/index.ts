// === Firestore Timestamp type ===
export interface FireTimestamp {
  toDate(): Date
  seconds: number
  nanoseconds: number
}

// === RBAC ===
export type MemberRole = 'owner' | 'admin' | 'developer' | 'viewer'

// === Project Types ===
export interface Project {
  id: string
  ownerId: string
  name: string
  targetUrl: string
  ownershipVerified: boolean
  authSettings: AuthSettings
  members: Record<string, MemberRole>
  bugCounter: number
  createdAt: FireTimestamp | Date
  // Extension & Crawl Settings
  crawlPageLimit?: number              // default 25
  crawlMaxDurationMin?: number         // default 15 (extension crawl only)
  performanceThresholdMs?: number      // default 2000 (auto-bug drafting)
  titleLengthRange?: { min: number; max: number }        // default { min: 30, max: 65 }
  descriptionLengthRange?: { min: number; max: number }  // default { min: 120, max: 320 }
  extensionApiToken?: string           // project-scoped, hashed, short-lived
  // Legacy — some older docs still have userId
  userId?: string
}

export interface AuthSettings {
  authType: 'none' | 'basic' | 'session'
  basicAuthUsername?: string
  basicAuthPassword?: string
  sessionCookie?: string
  secretRef?: string   // Reference to Netlify env var (never raw credentials)
  expiresAt?: FireTimestamp | Date | null
}

// === Audit Types ===
export type AuditStatus =
  | 'pending'
  | 'running'
  | 'completed'
  | 'failed'
  | 'auth-failed'
  | 'partial-failed'

export type CrawlMode = 'server' | 'extension' | 'extension-instant'

export type BotStatus = 'pending' | 'running' | 'completed' | 'failed' | 'scanning' | 'unavailable'

export interface AuditSummary {
  totalErrors: number
  pageCount: number
  status: BotStatus
}

export interface SecuritySummary {
  highAlerts: number
  mediumAlerts: number
  lowAlerts: number
  missingHeaders: string[]
  status: BotStatus
}

export interface PerformanceSummary {
  performance: number
  accessibility: number
  seo: number
  bestPractices: number
  status: BotStatus
}

export interface AuditSummaries {
  seo: AuditSummary
  security: SecuritySummary
  performance: PerformanceSummary
}

export interface AuditError {
  bot: 'seo' | 'security' | 'performance' | 'preflight'
  message: string
  retriesLeft: number
}

export interface AuditJob {
  id: string
  projectId: string
  status: AuditStatus
  crawlMode?: CrawlMode
  timestamp: FireTimestamp | Date
  zapScanId: string | null
  zapSpiderId?: string
  zapContextId?: string
  summaries: AuditSummaries
  errors: AuditError[]
}

// === Sub-collection types (lazy-loaded) ===
export interface SEOIssue {
  type: string
  description: string
  severity: 'Critical' | 'Major' | 'Minor'
}

export interface PageResult {
  url: string
  statusCode: number
  title: string
  metaDescription: string
  h1Count: number
  missingAlt: number
  brokenLinks: string[]
  canonicalUrl: string | null
  robotsMeta: string | null
  issues: SEOIssue[]
  // Extension crawl fields (populated by extension content script)
  source?: 'server' | 'extension' | 'extension-instant'
  brokenImages?: number
  loadTimeMs?: number
  domReadyMs?: number
  titleLength?: number
  descriptionLength?: number
  missingAltCount?: number
  missingTitleCount?: number
  duplicateLinksCount?: number
  hasCanonical?: boolean
  hasRobotsMeta?: boolean
  hasAnalyticsScript?: boolean
  hasOpenGraph?: boolean
  hasTwitterCard?: boolean
  hasSchemaOrg?: boolean
  headerCounts?: { h1: number; h2: number; h3: number; h4: number; h5: number; h6: number }
  links?: string[]
  timestamp?: string
}

// === Extension Page Metrics (scraped by content script) ===
export interface ExtensionPageMetrics {
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
  images: { src: string; alt: string; title: string; broken: boolean }[]
  linkCount: number
  internalLinks: number
  externalLinks: number
  duplicateLinksCount: number
  missingLinkTitleCount: number
  links: { href: string; text: string; type: 'standard' | 'anchor' | 'js' | 'mailto'; title: string; internal: boolean; duplicate: boolean }[]
  hasAnalyticsScript: boolean
  analyticsScripts: string[]
  hasOpenGraph: boolean
  openGraphTags: Record<string, string>
  hasTwitterCard: boolean
  twitterCardTags: Record<string, string>
  hasSchemaOrg: boolean
  loadTimeMs: number
  domReadyMs: number
}

export interface Vulnerability {
  alert: string
  risk: 'High' | 'Medium' | 'Low' | 'Informational'
  description: string
  url: string
  solution: string
  evidence: string
  cweid?: string
}

export interface PerformanceMetric {
  fcp: number
  lcp: number
  cls: number
  speedIndex: number
  tti: number
  timestamp: FireTimestamp | Date
}

// === Bug & Remediation Types ===
export type BugStatus = 'Not started' | 'Open' | 'In Progress' | 'In Review' | 'Resolved'
export type BugSeverity = 'Urgent' | 'High' | 'Medium' | 'Low'

export interface BugItem {
  id: string
  projectId: string
  shortId: string            // e.g. 'QAS-12' — generated via Firestore transaction on bugCounter
  title: string
  source: 'SEO' | 'SECURITY' | 'PERFORMANCE' | 'MANUAL'
  severity: BugSeverity
  status: BugStatus
  tags: string[]
  assignees: string[]        // Array of userIds
  description: string
  remediationGuide: string | null
  commentCount: number
  createdAt: FireTimestamp | Date
  lastEditedTime?: FireTimestamp | Date
  createdBy?: string
  stepsToReproduce?: string
  screenCapture?: string
}

// === Comment (sub-collection of bug_list/{bugId}/comments) ===
export interface Comment {
  id: string
  userId: string
  message: string
  timestamp: FireTimestamp | Date
  displayName?: string
  avatarUrl?: string
}

// === Test Case Types ===
export type TestCaseStatus = 'Passed' | 'Failed' | 'Untested'

export interface TestCase {
  id: string
  projectId: string
  title: string
  status: TestCaseStatus
  lastRun: FireTimestamp | Date | null
  steps: string[]
  expectedResult: string
  preconditions: string
  playwrightScript: string | null   // AI-generated .ts code — run only in isolated sandbox/CI
  tags?: string[]
  testData?: string
  createdAt: FireTimestamp | Date
  lastEditedTime?: FireTimestamp | Date
  createdBy?: string
}

export interface TestRun {
  id: string
  testCaseId: string
  status: 'Passed' | 'Failed'
  runAt: FireTimestamp | Date
  duration?: number
  errorMessage?: string
  runBy?: string
}

// === User Types ===
export interface AppUser {
  uid: string
  email: string
  displayName: string
  photoURL?: string
  avatarUrl?: string
}

// === Notification Types ===
export interface Notification {
  id: string
  userId: string
  title: string
  message: string
  read: boolean
  link: string
  createdAt: FireTimestamp | Date
}

// === Chart Types ===
export interface TrendDataPoint {
  date: string
  performance: number
  accessibility: number
  seo: number
  bestPractices: number
  securityAlerts: number
}

// === Helpers ===
export function formatTimestamp(ts: FireTimestamp | Date | undefined | null): string {
  if (!ts) return 'Just now'
  const date = 'toDate' in ts ? ts.toDate() : (ts as Date)
  return date.toLocaleDateString()
}

export function formatTimestampFull(ts: FireTimestamp | Date | undefined | null): string {
  if (!ts) return 'Processing...'
  const date = 'toDate' in ts ? ts.toDate() : (ts as Date)
  return date.toLocaleString()
}

export function toDate(ts: FireTimestamp | Date | undefined | null): Date | null {
  if (!ts) return null
  if ('toDate' in ts) return ts.toDate()
  return ts as Date
}

export function getBotStatusColor(status: BotStatus): string {
  switch (status) {
    case 'completed': return 'text-green-600'
    case 'running': case 'scanning': return 'text-yellow-600'
    case 'failed': return 'text-red-600'
    case 'unavailable': return 'text-orange-500'
    default: return 'text-gray-400'
  }
}

export function getSeverityColor(severity: BugSeverity): string {
  switch (severity) {
    case 'Urgent': return 'bg-red-100 text-red-800'
    case 'High': return 'bg-orange-100 text-orange-800'
    case 'Medium': return 'bg-yellow-100 text-yellow-800'
    case 'Low': return 'bg-blue-100 text-blue-800'
    default: return 'bg-gray-100 text-gray-800'
  }
}

export function getBugStatusColor(status: BugStatus): string {
  switch (status) {
    case 'Not started': return 'bg-gray-100 text-gray-700'
    case 'Open': return 'bg-blue-100 text-blue-800'
    case 'In Progress': return 'bg-yellow-100 text-yellow-800'
    case 'In Review': return 'bg-purple-100 text-purple-800'
    case 'Resolved': return 'bg-green-100 text-green-800'
    default: return 'bg-gray-100 text-gray-700'
  }
}
