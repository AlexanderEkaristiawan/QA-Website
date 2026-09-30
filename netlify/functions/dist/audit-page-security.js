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
    const body = JSON.parse(event.body || '{}');
    const { projectId, url } = body;
    if (!projectId || !url)
        return (0, firestore_1.jsonResponse)(400, { error: 'projectId and url required' }, origin);
    const db = (0, firestore_1.getDb)();
    const scanRef = await db.collection('page_security_audits').add({
        projectId,
        url,
        status: 'starting',
        highAlerts: 0,
        mediumAlerts: 0,
        lowAlerts: 0,
        createdAt: new Date().toISOString(),
    });
    try {
        const zapUrl = getZapUrl();
        const apiKey = getZapKey();
        const contextName = `qas_page_${scanRef.id}`;
        const context = await axios_1.default.get(`${zapUrl}/JSON/context/action/newContext/`, {
            params: { apikey: apiKey, contextName }, timeout: 8000,
        });
        const contextId = context.data.contextId;
        await axios_1.default.get(`${zapUrl}/JSON/context/action/includeInContext/`, {
            params: { apikey: apiKey, contextName, regex: `${url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}.*` }, timeout: 5000,
        });
        const spider = await axios_1.default.get(`${zapUrl}/JSON/spider/action/scan/`, {
            params: { apikey: apiKey, url, contextId, maxChildren: 10, recurse: true }, timeout: 8000,
        });
        const scan = await axios_1.default.get(`${zapUrl}/JSON/ascan/action/scan/`, {
            params: { apikey: apiKey, url, contextId, recurse: true }, timeout: 8000,
        });
        await scanRef.update({
            status: 'scanning',
            zapScanId: scan.data.scan,
            zapSpiderId: spider.data.scan,
            contextId,
        });
        return (0, firestore_1.jsonResponse)(200, { scanId: scanRef.id, status: 'scanning' }, origin);
    }
    catch (err) {
        await scanRef.update({ status: 'unavailable', error: err.message || 'ZAP is not reachable' });
        return (0, firestore_1.jsonResponse)(200, { scanId: scanRef.id, status: 'unavailable', error: err.message }, origin);
    }
};
exports.handler = handler;
