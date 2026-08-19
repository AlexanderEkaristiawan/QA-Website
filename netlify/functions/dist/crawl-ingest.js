"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const firestore_1 = require("./_shared/firestore");
const crypto_1 = require("crypto");
// Validate the Bearer token against the project's stored hash
async function validateToken(db, projectId, authHeader) {
    if (!authHeader?.startsWith('Bearer '))
        return false;
    const rawToken = authHeader.slice(7).trim();
    const tokenHash = (0, crypto_1.createHash)('sha256').update(rawToken).digest('hex');
    const projectDoc = await db.collection('projects').doc(projectId).get();
    if (!projectDoc.exists)
        return false;
    return projectDoc.data()?.extensionApiToken === tokenHash;
}
const handler = async (event) => {
    const origin = event.headers.origin;
    if (event.httpMethod === 'OPTIONS')
        return (0, firestore_1.jsonResponse)(204, {}, origin);
    if (event.httpMethod !== 'POST')
        return (0, firestore_1.jsonResponse)(405, { error: 'Method not allowed' }, origin);
    try {
        const body = JSON.parse(event.body || '{}');
        const { projectId, auditJobId, url, timestamp, metrics } = body;
        if (!projectId || !url || !metrics) {
            return (0, firestore_1.jsonResponse)(400, { error: 'projectId, url, and metrics are required' }, origin);
        }
        const db = (0, firestore_1.getDb)();
        const fv = (0, firestore_1.getFieldValue)();
        // ── Auth: validate project-scoped token ──────────────────────────────────
        const isValid = await validateToken(db, projectId, event.headers.authorization);
        if (!isValid) {
            return (0, firestore_1.jsonResponse)(401, { error: 'Invalid or expired extension API token' }, origin);
        }
        // ── Resolve or create the audit job ──────────────────────────────────────
        let jobId = auditJobId;
        const source = metrics.source || 'extension';
        if (!jobId) {
            // Instant single-page mode with no active job — create ad-hoc job
            const projectDoc = await db.collection('projects').doc(projectId).get();
            const jobRef = await db.collection('audit_jobs').add({
                projectId,
                crawlMode: 'extension-instant',
                status: 'completed',
                timestamp: fv.serverTimestamp(),
                zapScanId: null,
                summaries: {
                    seo: { totalErrors: 0, pageCount: 0, status: 'running' },
                    security: { highAlerts: 0, mediumAlerts: 0, lowAlerts: 0, missingHeaders: [], status: 'pending' },
                    performance: { performance: 0, accessibility: 0, seo: 0, bestPractices: 0, status: 'pending' },
                },
                errors: [],
            });
            jobId = jobRef.id;
        }
        // ── Write page doc to sub-collection ─────────────────────────────────────
        const pageData = {
            url: String(url).slice(0, 2048), // guard against oversized URLs
            source,
            timestamp: timestamp || new Date().toISOString(),
            // Core metrics
            title: metrics.title ?? '',
            titleLength: metrics.titleLength ?? 0,
            metaDescription: metrics.metaDescription ?? '',
            descriptionLength: metrics.descriptionLength ?? 0,
            brokenImages: metrics.brokenImages ?? 0,
            loadTimeMs: metrics.loadTimeMs ?? 0,
            domReadyMs: metrics.domReadyMs ?? 0,
            // SEO structure
            canonicalUrl: metrics.canonicalUrl ?? null,
            robotsMeta: metrics.robotsMeta ?? null,
            headerCounts: metrics.headerCounts ?? null,
            missingAltCount: metrics.missingAltCount ?? 0,
            missingTitleCount: metrics.missingTitleCount ?? 0,
            duplicateLinksCount: metrics.duplicateLinksCount ?? 0,
            imageCount: metrics.imageCount ?? 0,
            linkCount: metrics.linkCount ?? 0,
            internalLinks: metrics.internalLinks ?? 0,
            externalLinks: metrics.externalLinks ?? 0,
            // Social / analytics
            hasAnalyticsScript: metrics.hasAnalyticsScript ?? false,
            hasOpenGraph: metrics.hasOpenGraph ?? false,
            hasTwitterCard: metrics.hasTwitterCard ?? false,
            hasSchemaOrg: metrics.hasSchemaOrg ?? false,
            // Links list (store up to 100 to cap doc size)
            links: Array.isArray(metrics.links) ? metrics.links.slice(0, 100) : [],
        };
        await db.collection('audit_jobs').doc(jobId).collection('pages').add(pageData);
        // ── Increment SEO summary on the job doc ──────────────────────────────────
        await db.collection('audit_jobs').doc(jobId).update({
            'summaries.seo.pageCount': fv.increment(1),
            'summaries.seo.status': 'running',
        });
        // ── Auto-Bug Creation ─────────────────────────────────────────────────────
        // Drafts bugs when broken images detected or load time exceeds threshold
        const projectDoc = await db.collection('projects').doc(projectId).get();
        const projectData = projectDoc.data();
        const performanceThresholdMs = projectData.performanceThresholdMs ?? 2000;
        const autoBugs = [];
        if ((metrics.brokenImages ?? 0) > 0) {
            autoBugs.push({
                title: `[Auto-Draft] ${metrics.brokenImages} Broken Image(s) on ${String(url).slice(0, 80)}`,
                source: 'SEO',
                severity: 'High',
                description: `The Chrome Extension crawl detected ${metrics.brokenImages} broken image(s) on this page. Broken images harm SEO and user experience. URL: ${url}`,
            });
        }
        if ((metrics.loadTimeMs ?? 0) > performanceThresholdMs) {
            autoBugs.push({
                title: `[Auto-Draft] Slow Page Load (${Math.round(metrics.loadTimeMs)}ms) on ${String(url).slice(0, 80)}`,
                source: 'PERFORMANCE',
                severity: metrics.loadTimeMs > performanceThresholdMs * 2 ? 'Urgent' : 'Medium',
                description: `Page load time of ${Math.round(metrics.loadTimeMs)}ms exceeds the project threshold of ${performanceThresholdMs}ms. URL: ${url}`,
            });
        }
        if (autoBugs.length > 0) {
            const projectRef = db.collection('projects').doc(projectId);
            for (const bug of autoBugs) {
                await db.runTransaction(async (tx) => {
                    const projSnap = await tx.get(projectRef);
                    const counter = (projSnap.data()?.bugCounter || 0) + 1;
                    const shortId = `QAS-${counter}`;
                    tx.update(projectRef, { bugCounter: counter });
                    const bugRef = db.collection('bug_list').doc();
                    tx.set(bugRef, {
                        projectId,
                        shortId,
                        title: bug.title,
                        source: bug.source,
                        severity: bug.severity,
                        status: 'Not started',
                        tags: ['Auto-Draft', 'Extension'],
                        assignees: [],
                        description: bug.description,
                        remediationGuide: null,
                        commentCount: 0,
                        screenshotUrls: [],
                        createdAt: fv.serverTimestamp(),
                        lastEditedTime: fv.serverTimestamp(),
                    });
                });
            }
        }
        return (0, firestore_1.jsonResponse)(200, {
            success: true,
            jobId,
            autoBugsCreated: autoBugs.length,
        }, origin);
    }
    catch (err) {
        console.error('crawl-ingest error:', err);
        return (0, firestore_1.jsonResponse)(500, { error: err.message || 'Internal server error' }, origin);
    }
};
exports.handler = handler;
