"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const crypto_1 = require("crypto");
const firestore_1 = require("./_shared/firestore");
const handler = async (event) => {
    const origin = event.headers.origin;
    if (event.httpMethod === 'OPTIONS')
        return (0, firestore_1.jsonResponse)(204, {}, origin);
    if (event.httpMethod !== 'POST')
        return (0, firestore_1.jsonResponse)(405, { error: 'Method not allowed' }, origin);
    try {
        const body = JSON.parse(event.body || '{}');
        const { projectId, auditJobId } = body;
        const authHeader = event.headers.authorization;
        if (!projectId || !auditJobId || !authHeader?.startsWith('Bearer ')) {
            return (0, firestore_1.jsonResponse)(400, { error: 'projectId, auditJobId, and extension token are required' }, origin);
        }
        const tokenHash = (0, crypto_1.createHash)('sha256').update(authHeader.slice(7).trim()).digest('hex');
        const db = (0, firestore_1.getDb)();
        const projectDoc = await db.collection('projects').doc(projectId).get();
        if (!projectDoc.exists || projectDoc.data()?.extensionApiToken !== tokenHash) {
            return (0, firestore_1.jsonResponse)(401, { error: 'Invalid or expired extension API token' }, origin);
        }
        const jobRef = db.collection('audit_jobs').doc(auditJobId);
        const jobDoc = await jobRef.get();
        if (!jobDoc.exists)
            return (0, firestore_1.jsonResponse)(404, { error: 'Audit job not found' }, origin);
        if (jobDoc.data()?.projectId !== projectId) {
            return (0, firestore_1.jsonResponse)(403, { error: 'Audit job does not belong to this project' }, origin);
        }
        await jobRef.update({
            status: 'completed',
            'summaries.seo.status': 'completed',
        });
        return (0, firestore_1.jsonResponse)(200, { success: true }, origin);
    }
    catch (err) {
        console.error('finalize-crawl error:', err);
        return (0, firestore_1.jsonResponse)(500, { error: err.message || 'Internal server error' }, origin);
    }
};
exports.handler = handler;
