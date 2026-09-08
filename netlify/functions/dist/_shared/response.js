"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsHeaders = corsHeaders;
exports.jsonResponse = jsonResponse;
const dotenv_1 = require("dotenv");
const path_1 = require("path");
const fs_1 = require("fs");
// Automatically load local .env for development
const envPaths = [
    (0, path_1.resolve)(process.cwd(), 'netlify/.env'),
    (0, path_1.resolve)(process.cwd(), '../netlify/.env'),
    (0, path_1.resolve)(process.cwd(), '.env'),
    (0, path_1.resolve)(__dirname, '../../.env'),
    (0, path_1.resolve)(__dirname, '../../../netlify/.env'),
    (0, path_1.resolve)(__dirname, '../../netlify/.env')
];
for (const p of envPaths) {
    if ((0, fs_1.existsSync)(p)) {
        (0, dotenv_1.config)({ path: p });
    }
}
// CORS helper — allow only trusted origins in production.
// Returns a fully-defined Record<string, string> so that it satisfies
// Netlify's HandlerResponse header index signature (no undefined values).
function corsHeaders(origin) {
    const allowed = (process.env.ALLOWED_ORIGINS?.split(',') ?? []).map(s => s.trim()).filter(Boolean);
    if (allowed.length === 0) {
        allowed.push('http://localhost:5173', 'http://localhost:5175', 'http://localhost:8888');
    }
    const o = origin ?? '*';
    const isLocalDevOrigin = /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/i.test(o);
    if (process.env.NODE_ENV !== 'production' && isLocalDevOrigin) {
        return {
            'Access-Control-Allow-Origin': o,
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
        };
    }
    if (process.env.NODE_ENV === 'production' && !allowed.includes(o)) {
        return {
            'Access-Control-Allow-Origin': allowed[0],
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
        };
    }
    return {
        'Access-Control-Allow-Origin': o,
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
    };
}
// Standard JSON response helper
function jsonResponse(statusCode, body, origin) {
    return {
        statusCode,
        headers: { ...corsHeaders(origin), 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    };
}
