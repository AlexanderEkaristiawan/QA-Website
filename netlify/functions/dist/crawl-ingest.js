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
        else {
            const jobDoc = await db.collection('audit_jobs').doc(jobId).get();
            if (!jobDoc.exists)
                return (0, firestore_1.jsonResponse)(404, { error: 'Audit job not found' }, origin);
            if (jobDoc.data()?.projectId !== projectId) {
                return (0, firestore_1.jsonResponse)(403, { error: 'Audit job does not belong to this project' }, origin);
            }
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
        const normalizedUrl = normalizePageUrl(String(url));
        const pageId = (0, crypto_1.createHash)('sha256').update(normalizedUrl).digest('hex').slice(0, 40);
        const pageRef = db.collection('audit_jobs').doc(jobId).collection('pages').doc(pageId);
        const existingPage = await pageRef.get();
        const isNewPage = !existingPage.exists;
        await pageRef.set({ ...pageData, url: normalizedUrl }, { merge: true });
        // ── Increment SEO summary on the job doc ──────────────────────────────────
        if (isNewPage) {
            await db.collection('audit_jobs').doc(jobId).update({
                'summaries.seo.pageCount': fv.increment(1),
                'summaries.seo.status': 'running',
            });
        }
        // ── Sync to project's tracked customPages (Page Audits table) ────────────
        try {
            const projectRef = db.collection('projects').doc(projectId);
            const projSnap = await projectRef.get();
            if (projSnap.exists) {
                const projData = projSnap.data() || {};
                let customPages = Array.isArray(projData.customPages) ? [...projData.customPages] : [];
                const existingIdx = customPages.findIndex(p => normalizePageUrl(p.url).toLowerCase() === normalizedUrl.toLowerCase());
                let pathname = '/';
                try {
                    pathname = new URL(normalizedUrl).pathname || '/';
                }
                catch { }
                const seoIssues = [];
                if (!metrics.title)
                    seoIssues.push({ type: 'missing-title', description: 'Missing title tag', severity: 'Critical' });
                if (!metrics.metaDescription)
                    seoIssues.push({ type: 'missing-meta-description', description: 'Missing meta description', severity: 'Major' });
                if ((metrics.headerCounts?.h1 ?? 0) === 0)
                    seoIssues.push({ type: 'missing-h1', description: 'Missing H1 heading', severity: 'Major' });
                if ((metrics.missingAltCount ?? 0) > 0)
                    seoIssues.push({ type: 'missing-alt-tags', description: `${metrics.missingAltCount} images missing alt text`, severity: 'Minor' });
                const seoScore = Math.max(0, 100 - (seoIssues.length * 12));
                const seoStatus = seoIssues.length === 0 ? 'good' : 'warning';
                const pageEntry = {
                    id: existingIdx >= 0 ? customPages[existingIdx].id : `page_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
                    projectId,
                    url: normalizedUrl,
                    path: pathname,
                    title: metrics.title || pathname,
                    source: source || 'crawled',
                    statusCode: 200,
                    seoScore,
                    seoStatus,
                    issues: seoIssues,
                    h1Count: metrics.headerCounts?.h1 ?? 0,
                    missingAltCount: metrics.missingAltCount ?? 0,
                    titleLength: metrics.titleLength ?? 0,
                    metaDescription: metrics.metaDescription ?? '',
                    descriptionLength: metrics.descriptionLength ?? 0,
                    canonicalUrl: metrics.canonicalUrl ?? null,
                    robotsMeta: metrics.robotsMeta ?? null,
                    hasOpenGraph: metrics.hasOpenGraph ?? false,
                    seoAuditedAt: new Date().toISOString(),
                    createdAt: existingIdx >= 0 ? customPages[existingIdx].createdAt : new Date().toISOString(),
                    updatedAt: new Date().toISOString(),
                };
                if (existingIdx >= 0) {
                    customPages[existingIdx] = { ...customPages[existingIdx], ...pageEntry };
                }
                else {
                    customPages = [pageEntry, ...customPages];
                }
                await projectRef.update({ customPages });
            }
        }
        catch (syncErr) {
            console.warn('Could not sync to customPages in crawl-ingest:', syncErr);
        }
        // ── Auto-Bug Creation ─────────────────────────────────────────────────────
        // Drafts bugs when broken images detected or load time exceeds threshold
        const projectDoc = await db.collection('projects').doc(projectId).get();
        const projectData = projectDoc.data();
        const performanceThresholdMs = projectData.performanceThresholdMs === 2000
            ? 3000
            : projectData.performanceThresholdMs ?? 3000;
        const autoBugs = [];
        if (isNewPage && (metrics.brokenImages ?? 0) > 0) {
            autoBugs.push({
                title: `[Auto-Draft] ${metrics.brokenImages} Broken Image(s) on ${String(url).slice(0, 80)}`,
                source: 'SEO',
                severity: 'High',
                description: `The Chrome Extension crawl detected ${metrics.brokenImages} broken image(s) on this page. Broken images harm SEO and user experience. URL: ${url}`,
            });
        }
        if (isNewPage && (metrics.loadTimeMs ?? 0) > performanceThresholdMs) {
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
function normalizePageUrl(rawUrl) {
    try {
        const parsed = new URL(rawUrl);
        parsed.hash = '';
        if (parsed.pathname.length > 1)
            parsed.pathname = parsed.pathname.replace(/\/+$/, '');
        return parsed.toString();
    }
    catch {
        return rawUrl;
    }
}
