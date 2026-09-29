"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const firestore_1 = require("./_shared/firestore");
const axios_1 = __importDefault(require("axios"));
const handler = async (event) => {
    const origin = event.headers.origin;
    if (event.httpMethod === 'OPTIONS') {
        return (0, firestore_1.jsonResponse)(204, {}, origin);
    }
    if (event.httpMethod !== 'POST') {
        return (0, firestore_1.jsonResponse)(405, { error: 'Method not allowed' }, origin);
    }
    try {
        const body = JSON.parse(event.body || '{}');
        const { url, authSettings } = body;
        if (!url) {
            return (0, firestore_1.jsonResponse)(400, { error: 'URL is required' }, origin);
        }
        const headers = {
            'User-Agent': 'QASuite-PageAuditBot/1.0 (Web Audit Companion)',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        };
        if (authSettings?.authType === 'basic' && authSettings.basicAuthUsername) {
            const token = Buffer.from(`${authSettings.basicAuthUsername}:${authSettings.basicAuthPassword || ''}`).toString('base64');
            headers['Authorization'] = `Basic ${token}`;
        }
        if (authSettings?.authType === 'session' && authSettings.sessionCookie) {
            headers['Cookie'] = authSettings.sessionCookie;
        }
        const startTime = Date.now();
        let response;
        try {
            response = await axios_1.default.get(url, {
                headers,
                timeout: 15000,
                maxRedirects: 5,
                validateStatus: () => true,
            });
        }
        catch (fetchErr) {
            return (0, firestore_1.jsonResponse)(400, { error: `Failed to fetch URL: ${fetchErr.message}` }, origin);
        }
        const loadTimeMs = Date.now() - startTime;
        const statusCode = response.status;
        const html = typeof response.data === 'string' ? response.data : '';
        const issues = [];
        // 1. Title Tag
        const titleMatch = html.match(/<title[^>]*>([^<]*)<\/title>/i);
        const title = titleMatch ? titleMatch[1].trim() : '';
        const titleLength = title.length;
        if (!title) {
            issues.push({
                type: 'missing-title',
                description: 'Page is missing a <title> tag',
                severity: 'Critical',
            });
        }
        else if (titleLength < 30) {
            issues.push({
                type: 'title-short',
                description: `Title tag is too short (${titleLength} chars). Recommended: 30–65 characters.`,
                severity: 'Minor',
            });
        }
        else if (titleLength > 65) {
            issues.push({
                type: 'title-long',
                description: `Title tag is too long (${titleLength} chars). It may be truncated in search results.`,
                severity: 'Minor',
            });
        }
        // 2. Meta Description
        const metaDescMatch = html.match(/<meta\s+name=["']description["'][^>]*content=["']([^"']*)["']/i) ||
            html.match(/<meta\s+content=["']([^"']*)["'][^>]*name=["']description["']/i);
        const metaDescription = metaDescMatch ? metaDescMatch[1].trim() : '';
        const descriptionLength = metaDescription.length;
        if (!metaDescription) {
            issues.push({
                type: 'missing-meta-description',
                description: 'Page is missing a meta description',
                severity: 'Major',
            });
        }
        else if (descriptionLength < 70) {
            issues.push({
                type: 'meta-description-short',
                description: `Meta description is short (${descriptionLength} chars). Recommended: 120–320 characters.`,
                severity: 'Minor',
            });
        }
        else if (descriptionLength > 320) {
            issues.push({
                type: 'meta-description-long',
                description: `Meta description exceeds 320 characters (${descriptionLength} chars).`,
                severity: 'Minor',
            });
        }
        // 3. Heading Hierarchy (H1)
        const h1Matches = html.match(/<h1[^>]*>[\s\S]*?<\/h1>/gi) || [];
        const h1Count = h1Matches.length;
        if (h1Count === 0) {
            issues.push({
                type: 'missing-h1',
                description: 'Page does not contain any <h1> heading tag',
                severity: 'Critical',
            });
        }
        else if (h1Count > 1) {
            issues.push({
                type: 'multiple-h1',
                description: `Page has multiple <h1> tags (${h1Count} found). Search engines recommend one primary <h1> per page.`,
                severity: 'Minor',
            });
        }
        // 4. Images & Missing Alt Attributes
        const imgMatches = html.match(/<img[^>]+>/gi) || [];
        let missingAltCount = 0;
        imgMatches.forEach(imgTag => {
            const hasAlt = /alt=["'][^"']*["']/i.test(imgTag);
            if (!hasAlt)
                missingAltCount++;
        });
        if (missingAltCount > 0) {
            issues.push({
                type: 'missing-alt-text',
                description: `${missingAltCount} image(s) on the page are missing the alt attribute`,
                severity: missingAltCount > 3 ? 'Major' : 'Minor',
            });
        }
        // 5. Canonical Tag
        const canonicalMatch = html.match(/<link\s+[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i) ||
            html.match(/<link\s+[^>]*href=["']([^"']*)["'][^>]*rel=["']canonical["']/i);
        const canonicalUrl = canonicalMatch ? canonicalMatch[1].trim() : null;
        if (!canonicalUrl) {
            issues.push({
                type: 'missing-canonical',
                description: 'Page does not declare a canonical URL tag (<link rel="canonical">)',
                severity: 'Minor',
            });
        }
        // 6. Robots Meta Tag
        const robotsMatch = html.match(/<meta\s+name=["']robots["'][^>]*content=["']([^"']*)["']/i);
        const robotsMeta = robotsMatch ? robotsMatch[1].trim() : null;
        if (robotsMeta && /noindex/i.test(robotsMeta)) {
            issues.push({
                type: 'robots-noindex',
                description: 'Page contains a "noindex" robots directive, preventing indexing in search engines',
                severity: 'Critical',
            });
        }
        // 7. Open Graph Tags
        const hasOpenGraph = /<meta\s+property=["']og:/i.test(html);
        if (!hasOpenGraph) {
            issues.push({
                type: 'missing-og',
                description: 'Page is missing Open Graph (og:) social sharing meta tags',
                severity: 'Minor',
            });
        }
        // 8. HTTP Status Code Check
        if (statusCode >= 400) {
            issues.push({
                type: 'http-error',
                description: `Page returned an error status code (${statusCode})`,
                severity: 'Critical',
            });
        }
        // Calculate SEO Score (0-100)
        let penalty = 0;
        issues.forEach(iss => {
            if (iss.severity === 'Critical')
                penalty += 25;
            else if (iss.severity === 'Major')
                penalty += 12;
            else
                penalty += 5;
        });
        const seoScore = Math.max(0, 100 - penalty);
        const seoStatus = seoScore >= 80 ? 'good' : seoScore >= 50 ? 'warning' : 'error';
        return (0, firestore_1.jsonResponse)(200, {
            success: true,
            data: {
                url,
                statusCode,
                loadTimeMs,
                title,
                titleLength,
                metaDescription,
                descriptionLength,
                h1Count,
                missingAltCount,
                imageCount: imgMatches.length,
                canonicalUrl,
                robotsMeta,
                hasOpenGraph,
                issues,
                seoScore,
                seoStatus,
                auditedAt: new Date().toISOString(),
            },
        }, origin);
    }
    catch (err) {
        console.error('audit-single-page error:', err);
        return (0, firestore_1.jsonResponse)(500, { error: err.message || 'Internal server error' }, origin);
    }
};
exports.handler = handler;
