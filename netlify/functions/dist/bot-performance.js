"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const firestore_1 = require("./_shared/firestore");
const axios_1 = __importDefault(require("axios"));
function toScore(cat) {
    if (!cat || cat.score === null)
        return 0;
    return Math.round(cat.score * 100);
}
const handler = async (event) => {
    const origin = event.headers.origin;
    if (event.httpMethod === 'OPTIONS')
        return (0, firestore_1.jsonResponse)(204, {}, origin);
    if (event.httpMethod !== 'POST')
        return (0, firestore_1.jsonResponse)(405, { error: 'Method not allowed' }, origin);
    const db = (0, firestore_1.getDb)();
    const fv = (0, firestore_1.getFieldValue)();
    const body = JSON.parse(event.body || '{}');
    const { jobId, projectId, targetUrl } = body;
    if (!jobId || !projectId || !targetUrl) {
        return (0, firestore_1.jsonResponse)(400, { error: 'jobId, projectId, and targetUrl required' }, origin);
    }
    const jobRef = db.collection('audit_jobs').doc(jobId);
    try {
        await jobRef.update({ 'summaries.performance.status': 'running' });
        const apiKey = process.env.PAGESPEED_API_KEY;
        const params = {
            url: targetUrl,
            strategy: 'mobile',
            category: 'performance',
            // Also fetch these
        };
        const requestedCategories = ['performance', 'accessibility', 'best-practices', 'seo'];
        const catParams = requestedCategories.map(c => `category=${c}`).join('&');
        const url = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(targetUrl)}&strategy=mobile&${catParams}${apiKey ? `&key=${apiKey}` : ''}`;
        const response = await axios_1.default.get(url, { timeout: 30000 });
        const data = response.data;
        const scoreCategories = data.lighthouseResult?.categories ?? data.categories;
        const performanceSummary = {
            performance: toScore(scoreCategories?.performance),
            accessibility: toScore(scoreCategories?.accessibility),
            bestPractices: toScore(scoreCategories?.['best-practices']),
            seo: toScore(scoreCategories?.seo),
            status: 'completed',
        };
        // Extract key metrics for sub-collection
        const audits = data.lighthouseResult?.audits || {};
        const metrics = {
            fcp: audits['first-contentful-paint']?.numericValue || 0,
            lcp: audits['largest-contentful-paint']?.numericValue || 0,
            cls: audits['cumulative-layout-shift']?.numericValue || 0,
            speedIndex: audits['speed-index']?.numericValue || 0,
            tti: audits['interactive']?.numericValue || 0,
        };
        // Write to performance_metrics sub-collection (lazy-loaded by UI)
        await jobRef.collection('performance_metrics').add({
            ...metrics,
            timestamp: fv.serverTimestamp(),
        });
        await jobRef.update({ 'summaries.performance': performanceSummary });
        // Auto-create bug if performance is poor
        if (performanceSummary.performance < 50 || performanceSummary.accessibility < 70) {
            const projectRef = db.collection('projects').doc(projectId);
            let shortId = '';
            await db.runTransaction(async (tx) => {
                const proj = await tx.get(projectRef);
                const counter = (proj.data()?.bugCounter || 0) + 1;
                shortId = `QAS-${counter}`;
                tx.update(projectRef, { bugCounter: counter });
            });
            await db.collection('bug_list').add({
                projectId,
                shortId,
                title: `Performance Score: ${performanceSummary.performance}/100`,
                source: 'PERFORMANCE',
                severity: performanceSummary.performance < 50 ? 'Urgent' : 'High',
                status: 'Open',
                tags: ['Performance', 'PageSpeed'],
                assignees: [],
                description: `PageSpeed Insights scores — Performance: ${performanceSummary.performance}, Accessibility: ${performanceSummary.accessibility}, SEO: ${performanceSummary.seo}, Best Practices: ${performanceSummary.bestPractices}. FCP: ${(metrics.fcp / 1000).toFixed(1)}s, LCP: ${(metrics.lcp / 1000).toFixed(1)}s.`,
                remediationGuide: null,
                commentCount: 0,
                screenshotUrls: [],
                createdAt: fv.serverTimestamp(),
                lastEditedTime: fv.serverTimestamp(),
            });
        }
        return (0, firestore_1.jsonResponse)(200, { performanceSummary }, origin);
    }
    catch (err) {
        console.error('Performance bot error:', err);
        await jobRef.update({
            'summaries.performance.status': 'failed',
            errors: fv.arrayUnion({ bot: 'performance', message: err.message, retriesLeft: 1 }),
        }).catch(() => { });
        return (0, firestore_1.jsonResponse)(500, { error: err.message }, origin);
    }
};
exports.handler = handler;
