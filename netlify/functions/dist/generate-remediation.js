"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const response_1 = require("./_shared/response");
const gemini_1 = require("./_shared/gemini");
const axios_1 = __importDefault(require("axios"));
function getOpenAIKey() {
    return process.env.OPENAI_API_KEY;
}
async function callOpenAI(prompt) {
    const key = getOpenAIKey();
    if (!key)
        throw new Error('OPENAI_API_KEY not configured');
    const response = await axios_1.default.post('https://api.openai.com/v1/chat/completions', {
        model: 'gpt-4o-mini',
        messages: [
            { role: 'system', content: 'You are a senior DevOps and QA engineer providing structured remediation guides.' },
            { role: 'user', content: prompt },
        ],
        temperature: 0.7,
        max_tokens: 2048,
    }, {
        headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
        timeout: 30000,
    });
    return response.data.choices[0].message.content;
}
const handler = async (event) => {
    const origin = event.headers.origin;
    if (event.httpMethod === 'OPTIONS')
        return (0, response_1.jsonResponse)(204, {}, origin);
    if (event.httpMethod !== 'POST')
        return (0, response_1.jsonResponse)(405, { error: 'Method not allowed' }, origin);
    try {
        const body = JSON.parse(event.body || '{}');
        const { bugs } = body;
        if (!bugs || !Array.isArray(bugs)) {
            return (0, response_1.jsonResponse)(400, { error: 'bugs array required' }, origin);
        }
        const bugsText = bugs
            .map(b => `- [${b.severity}] [${b.source}] ${b.title}: ${b.description}`)
            .join('\n');
        const prompt = `You are a Principal DevOps and Lead QA Automation Architect. Review these detected bugs and audit issues:

## Detected Issues:
${bugsText || 'No specific issues provided. Outline best practices for Web Core Vitals, OWASP Security Headers, and SEO indexing.'}

Generate a clear, high-impact, and beautifully structured Remediation Guide in clean GitHub-Flavored Markdown.

### Required Structure:
## 1. 📊 Executive Summary & Priority Matrix
- Provide a summary table: Issue Category | Severity | Business Risk | Priority (P0/P1/P2/P3)
- Brief business impact narrative (SEO drops, security breach risks, bounce rate degradation).

## 2. 🔍 Root Cause Breakdown
- For each distinct issue, explain the exact technical reason why it occurred (e.g. render-blocking resources, absent HTTP security headers, missing canonical/h1 tags).

## 3. 🛠️ Actionable Step-by-Step Fixes
- Provide ready-to-use code patches and configuration blocks with language tags (e.g. \`\`\`nginx, \`\`\`typescript, \`\`\`html, \`\`\`apache).
- Include verification steps (e.g. curl command or test check).

### Formatting Rules:
- STRICTLY DO NOT use ASCII box-drawing characters (such as ┌, ┐, └, ┘, │, ─), ASCII diagrams, or mock terminal drawings.
- Use standard markdown tables with pipe syntax (| Header 1 | Header 2 |).
- Use clear bullet points with bold keywords.
- Use fenced code blocks with language identifiers.`;
        let guide;
        try {
            guide = await (0, gemini_1.callGemini)(prompt, 2048, 0.7);
        }
        catch (geminiErr) {
            if (getOpenAIKey() && getOpenAIKey() !== 'your_openai_api_key') {
                try {
                    guide = await callOpenAI(prompt);
                }
                catch (openaiErr) {
                    throw new Error(`AI generation failed: ${geminiErr.message} | Fallback OpenAI: ${openaiErr.message}`);
                }
            }
            else {
                throw geminiErr;
            }
        }
        return (0, response_1.jsonResponse)(200, { guide }, origin);
    }
    catch (err) {
        console.error('generate-remediation error:', err);
        return (0, response_1.jsonResponse)(500, { error: err.message }, origin);
    }
};
exports.handler = handler;
