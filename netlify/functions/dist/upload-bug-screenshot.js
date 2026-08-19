"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const axios_1 = __importDefault(require("axios"));
const crypto_1 = require("crypto");
const firestore_1 = require("./_shared/firestore");
const project_access_1 = require("./_shared/project-access");
const MAX_BYTES = 2 * 1024 * 1024;
const ALLOWED_TYPES = new Set(['image/jpeg', 'image/png', 'image/webp']);
function base64ByteLength(base64) {
    const padding = base64.endsWith('==') ? 2 : base64.endsWith('=') ? 1 : 0;
    return Math.floor((base64.length * 3) / 4) - padding;
}
function safeFileName(name) {
    return name.replace(/[^a-zA-Z0-9._-]/g, '-').slice(0, 120);
}
function signCloudinaryParams(params, apiSecret) {
    const payload = Object.keys(params)
        .sort()
        .map(key => `${key}=${params[key]}`)
        .join('&');
    return (0, crypto_1.createHash)('sha1').update(payload + apiSecret).digest('hex');
}
const handler = async (event) => {
    const origin = event.headers.origin;
    if (event.httpMethod === 'OPTIONS')
        return (0, firestore_1.jsonResponse)(204, {}, origin);
    if (event.httpMethod !== 'POST')
        return (0, firestore_1.jsonResponse)(405, { error: 'Method not allowed' }, origin);
    const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
    const apiKey = process.env.CLOUDINARY_API_KEY;
    const apiSecret = process.env.CLOUDINARY_API_SECRET;
    if (!cloudName || !apiKey || !apiSecret) {
        return (0, firestore_1.jsonResponse)(503, { error: 'Screenshot uploads are not configured. Set CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET in Netlify.' }, origin);
    }
    try {
        const body = JSON.parse(event.body || '{}');
        const { projectId, userId, bugShortId, fileName, contentType, dataBase64 } = body;
        if (!projectId || !userId || !bugShortId || !fileName || !contentType || !dataBase64) {
            return (0, firestore_1.jsonResponse)(400, { error: 'projectId, userId, bugShortId, fileName, contentType, and dataBase64 are required' }, origin);
        }
        if (!ALLOWED_TYPES.has(String(contentType))) {
            return (0, firestore_1.jsonResponse)(400, { error: 'Screenshots must be JPEG, PNG, or WebP.' }, origin);
        }
        const bytes = base64ByteLength(String(dataBase64));
        if (bytes <= 0 || bytes >= MAX_BYTES) {
            return (0, firestore_1.jsonResponse)(400, { error: 'Each screenshot must be smaller than 2 MB.' }, origin);
        }
        const db = (0, firestore_1.getDb)();
        const projectDoc = await db.collection('projects').doc(String(projectId)).get();
        if (!projectDoc.exists) {
            return (0, firestore_1.jsonResponse)(404, { error: 'Project not found' }, origin);
        }
        const project = projectDoc.data();
        if (!(0, project_access_1.canUploadBugAssets)(project, String(userId))) {
            return (0, firestore_1.jsonResponse)(403, { error: 'Permission denied' }, origin);
        }
        const folder = `qa-suite/projects/${projectId}/bugs/${bugShortId}`;
        const publicId = `${(0, crypto_1.randomUUID)()}-${safeFileName(String(fileName)).replace(/\.[^.]+$/, '')}`;
        const timestamp = Math.round(Date.now() / 1000);
        const paramsToSign = {
            folder,
            public_id: publicId,
            timestamp: String(timestamp),
        };
        const signature = signCloudinaryParams(paramsToSign, apiSecret);
        const form = new URLSearchParams();
        form.append('file', `data:${contentType};base64,${dataBase64}`);
        form.append('api_key', apiKey);
        form.append('timestamp', String(timestamp));
        form.append('folder', folder);
        form.append('public_id', publicId);
        form.append('signature', signature);
        const uploadResponse = await axios_1.default.post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, form.toString(), { headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, timeout: 55000 });
        const secureUrl = uploadResponse.data?.secure_url;
        if (!secureUrl) {
            return (0, firestore_1.jsonResponse)(502, { error: 'Cloudinary upload succeeded but returned no URL.' }, origin);
        }
        return (0, firestore_1.jsonResponse)(200, { url: secureUrl }, origin);
    }
    catch (err) {
        const cloudinaryMessage = err?.response?.data?.error?.message;
        console.error('upload-bug-screenshot error:', cloudinaryMessage || err.message || err);
        return (0, firestore_1.jsonResponse)(500, {
            error: cloudinaryMessage || err.message || 'Screenshot upload failed',
        }, origin);
    }
};
exports.handler = handler;
