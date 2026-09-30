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
    const { scanId } = JSON.parse(event.body || '{}');
    if (!scanId)
        return (0, firestore_1.jsonResponse)(400, { error: 'scanId required' }, origin);
    const db = (0, firestore_1.getDb)();
    const scanRef = db.collection('page_security_audits').doc(scanId);
    const scanDoc = await scanRef.get();
    if (!scanDoc.exists)
        return (0, firestore_1.jsonResponse)(404, { error: 'Security scan not found' }, origin);
    const scan = scanDoc.data();
    if (scan.status === 'unavailable' || scan.status === 'completed')
        return (0, firestore_1.jsonResponse)(200, scan, origin);
    try {
        const zapUrl = getZapUrl();
        const params = { apikey: getZapKey(), scanId: scan.zapScanId };
        const statusResponse = await axios_1.default.get(`${zapUrl}/JSON/ascan/view/status/`, { params, timeout: 5000 });
        const progress = Number(statusResponse.data?.status ?? 0);
        if (progress < 100)
            return (0, firestore_1.jsonResponse)(200, { ...scan, status: 'scanning', progress }, origin);
        const alertsResponse = await axios_1.default.get(`${zapUrl}/JSON/core/view/alerts/`, {
            params: { apikey: getZapKey(), baseurl: scan.url, start: 0, count: 500 }, timeout: 8000,
        });
        const alerts = Array.isArray(alertsResponse.data?.alerts) ? alertsResponse.data.alerts : [];
        const highAlerts = alerts.filter((alert) => alert.riskcode === '3' || alert.risk === 'High').length;
        const mediumAlerts = alerts.filter((alert) => alert.riskcode === '2' || alert.risk === 'Medium').length;
        const lowAlerts = alerts.filter((alert) => alert.riskcode === '1' || alert.risk === 'Low').length;
        const result = { status: 'completed', progress: 100, highAlerts, mediumAlerts, lowAlerts, alerts };
        await scanRef.update(result);
        return (0, firestore_1.jsonResponse)(200, result, origin);
    }
    catch (err) {
        await scanRef.update({ status: 'unavailable', error: err.message || 'ZAP is not reachable' });
        return (0, firestore_1.jsonResponse)(200, { status: 'unavailable', error: err.message }, origin);
    }
};
exports.handler = handler;
