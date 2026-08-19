"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const firestore_1 = require("./_shared/firestore");
const axios_1 = __importDefault(require("axios"));
function getZapUrl() {
    return process.env.ZAP_API_URL || 'http://localhost:8080';
}
function getZapKey() {
    return process.env.ZAP_API_KEY || 'zapapikey';
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
    const { jobId, projectId } = body;
    if (!jobId || !projectId) {
        return (0, firestore_1.jsonResponse)(400, { error: 'jobId and projectId required' }, origin);
    }
    const jobRef = db.collection('audit_jobs').doc(jobId);
    const jobDoc = await jobRef.get();
    if (!jobDoc.exists) {
        return (0, firestore_1.jsonResponse)(404, { error: 'Job not found' }, origin);
    }
    const job = jobDoc.data();
    const zapScanId = job.zapScanId;
    if (!zapScanId) {
        return (0, firestore_1.jsonResponse)(200, { status: 'no_scan', progress: 0 }, origin);
    }
    try {
        const zapUrl = getZapUrl();
        const apiKey = getZapKey();
        // Check scan progress
        const statusRes = await axios_1.default.get(`${zapUrl}/JSON/ascan/view/status/`, {
            params: { apikey: apiKey, scanId: zapScanId },
            timeout: 8000,
        });
        const progress = parseInt(statusRes.data.status || '0');
        if (progress < 100) {
            return (0, firestore_1.jsonResponse)(200, { status: 'running', progress }, origin);
        }
        // Scan complete — fetch alerts
        const alertsRes = await axios_1.default.get(`${zapUrl}/JSON/alert/view/alerts/`, {
            params: { apikey: apiKey, start: 0, count: 200 },
            timeout: 8000,
        });
        const alerts = alertsRes.data.alerts || [];
        const highAlerts = alerts.filter(a => a.risk === 'High').length;
        const mediumAlerts = alerts.filter(a => a.risk === 'Medium').length;
        const lowAlerts = alerts.filter(a => a.risk === 'Low').length;
        // Fetch security headers check
        const headersRes = await axios_1.default.get(`${zapUrl}/JSON/pscan/view/recordsToScan/`, {
            params: { apikey: apiKey },
            timeout: 5000,
        }).catch(() => ({ data: {} }));
        // Write vulnerabilities to sub-collection (lazy-load only)
        const batch = db.batch();
        for (const alert of alerts.slice(0, 100)) {
            const vulnRef = jobRef.collection('vulnerabilities').doc();
            batch.set(vulnRef, {
                alert: alert.alert,
                risk: alert.risk,
                description: alert.description,
                url: alert.url,
                solution: alert.solution,
                evidence: alert.evidence || '',
                cweid: alert.cweid,
            });
        }
        await batch.commit();
        // Common expected security headers
        const requiredHeaders = ['Content-Security-Policy', 'X-Content-Type-Options', 'X-Frame-Options', 'Strict-Transport-Security', 'Referrer-Policy'];
        const headerAlerts = alerts.filter(a => requiredHeaders.some(h => a.alert?.includes(h)));
        const missingHeaders = [...new Set(headerAlerts.map(a => {
                const found = requiredHeaders.find(h => a.alert?.includes(h));
                return found || a.alert;
            }))];
        await jobRef.update({
            'summaries.security': {
                highAlerts,
                mediumAlerts,
                lowAlerts,
                missingHeaders,
                status: 'completed',
            },
        });
        // Auto-create security bugs
        if (highAlerts > 0) {
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
                title: `${highAlerts} High Risk Security Vulnerabilities`,
                source: 'SECURITY',
                severity: 'Urgent',
                status: 'Open',
                tags: ['Security', 'ZAP', 'Critical'],
                assignees: [],
                description: `OWASP ZAP scan found ${highAlerts} high-risk, ${mediumAlerts} medium-risk, and ${lowAlerts} low-risk vulnerabilities.`,
                remediationGuide: null,
                commentCount: 0,
                screenshotUrls: [],
                createdAt: fv.serverTimestamp(),
                lastEditedTime: fv.serverTimestamp(),
            });
        }
        if (missingHeaders.length > 0) {
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
                title: `Missing Security Headers: ${missingHeaders.join(', ')}`,
                source: 'SECURITY',
                severity: 'High',
                status: 'Open',
                tags: ['Security', 'Headers'],
                assignees: [],
                description: `Security headers missing from response: ${missingHeaders.join(', ')}. These protect against XSS, clickjacking, and MIME-sniffing attacks.`,
                remediationGuide: null,
                commentCount: 0,
                screenshotUrls: [],
                createdAt: fv.serverTimestamp(),
                lastEditedTime: fv.serverTimestamp(),
            });
        }
        return (0, firestore_1.jsonResponse)(200, { status: 'completed', progress: 100, highAlerts, mediumAlerts, lowAlerts }, origin);
    }
    catch (err) {
        console.error('check-zap-status error:', err);
        return (0, firestore_1.jsonResponse)(200, { status: 'error', error: err.message, progress: 0 }, origin);
    }
};
exports.handler = handler;
