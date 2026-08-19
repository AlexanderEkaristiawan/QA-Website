"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const firestore_1 = require("./_shared/firestore");
const crypto_1 = require("crypto");
const handler = async (event) => {
    const origin = event.headers.origin;
    if (event.httpMethod === 'OPTIONS')
        return (0, firestore_1.jsonResponse)(204, {}, origin);
    if (event.httpMethod !== 'POST')
        return (0, firestore_1.jsonResponse)(405, { error: 'Method not allowed' }, origin);
    try {
        const body = JSON.parse(event.body || '{}');
        const { projectId, userId } = body;
        if (!projectId || !userId) {
            return (0, firestore_1.jsonResponse)(400, { error: 'projectId and userId required' }, origin);
        }
        const db = (0, firestore_1.getDb)();
        const projectDoc = await db.collection('projects').doc(projectId).get();
        if (!projectDoc.exists) {
            return (0, firestore_1.jsonResponse)(404, { error: 'Project not found' }, origin);
        }
        const project = projectDoc.data();
        // RBAC: only owner/admin/developer can issue tokens
        const memberRole = project.members?.[userId];
        if (project.ownerId !== userId && !['owner', 'admin', 'developer'].includes(memberRole || '')) {
            return (0, firestore_1.jsonResponse)(403, { error: 'Permission denied' }, origin);
        }
        // Generate a 32-byte random token prefixed for identification
        const rawToken = `qas_ext_${(0, crypto_1.randomBytes)(24).toString('hex')}`;
        // Store the SHA-256 hash on the project doc (never store raw token server-side)
        const tokenHash = (0, crypto_1.createHash)('sha256').update(rawToken).digest('hex');
        await db.collection('projects').doc(projectId).update({
            extensionApiToken: tokenHash,
            extensionApiTokenIssuedAt: new Date().toISOString(),
        });
        // Return the raw token — client stores it; we only ever keep the hash
        return (0, firestore_1.jsonResponse)(200, { token: rawToken }, origin);
    }
    catch (err) {
        console.error('issue-extension-token error:', err);
        return (0, firestore_1.jsonResponse)(500, { error: err.message || 'Internal server error' }, origin);
    }
};
exports.handler = handler;
