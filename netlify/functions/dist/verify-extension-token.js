"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const crypto_1 = require("crypto");
const firestore_1 = require("./_shared/firestore");
const handler = async (event) => {
    const origin = event.headers.origin;
    if (event.httpMethod === 'OPTIONS')
        return (0, firestore_1.jsonResponse)(204, {}, origin);
    if (event.httpMethod !== 'GET')
        return (0, firestore_1.jsonResponse)(405, { error: 'Method not allowed' }, origin);
    const projectId = event.queryStringParameters?.projectId;
    const authHeader = event.headers.authorization;
    if (!projectId || !authHeader?.startsWith('Bearer ')) {
        return (0, firestore_1.jsonResponse)(401, { connected: false, error: 'Project ID and extension token required' }, origin);
    }
    try {
        const rawToken = authHeader.slice(7).trim();
        const tokenHash = (0, crypto_1.createHash)('sha256').update(rawToken).digest('hex');
        const projectDoc = await (0, firestore_1.getDb)().collection('projects').doc(projectId).get();
        if (!projectDoc.exists || projectDoc.data()?.extensionApiToken !== tokenHash) {
            return (0, firestore_1.jsonResponse)(401, { connected: false, error: 'Invalid or expired extension API token' }, origin);
        }
        return (0, firestore_1.jsonResponse)(200, { connected: true }, origin);
    }
    catch (err) {
        console.error('verify-extension-token error:', err);
        return (0, firestore_1.jsonResponse)(500, { connected: false, error: err.message || 'Internal server error' }, origin);
    }
};
exports.handler = handler;
