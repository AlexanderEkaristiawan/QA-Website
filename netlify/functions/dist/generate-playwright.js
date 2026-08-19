"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const response_1 = require("./_shared/response");
const axios_1 = __importDefault(require("axios"));
async function callGemini(prompt) {
    const key = process.env.GEMINI_API_KEY;
    if (!key)
        throw new Error('GEMINI_API_KEY not configured');
    const response = await axios_1.default.post(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${key}`, {
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.3, maxOutputTokens: 4096 },
    }, { timeout: 45000 });
    return response.data.candidates[0].content.parts[0].text;
}
async function callOpenAI(prompt) {
    const key = process.env.OPENAI_API_KEY;
    if (!key)
        throw new Error('OPENAI_API_KEY not configured');
    const response = await axios_1.default.post('https://api.openai.com/v1/chat/completions', {
        model: 'gpt-4o-mini',
        messages: [
            { role: 'system', content: 'You are an expert QA automation engineer specializing in Playwright end-to-end testing with TypeScript.' },
            { role: 'user', content: prompt },
        ],
        temperature: 0.3,
        max_tokens: 4096,
    }, {
        headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
        timeout: 45000,
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
        const { title, preconditions, steps, expectedResult, targetUrl, testData } = body;
        if (!title || !steps) {
            return (0, response_1.jsonResponse)(400, { error: 'title and steps are required' }, origin);
        }
        const stepsText = Array.isArray(steps) ? steps.map((s, i) => `  ${i + 1}. ${s}`).join('\n') : steps;
        const prompt = `You are an expert Playwright automation engineer. Convert this manual test case into a complete, production-ready Playwright TypeScript (.ts) end-to-end test script.

## Test Case Details
- **Title:** ${title}
- **Target URL:** ${targetUrl || 'https://example.com'}
- **Preconditions:** ${preconditions || 'None'}
- **Test Data:** ${testData || 'None'}
- **Steps:**
${stepsText}
- **Expected Result:** ${expectedResult || 'Test should pass all assertions'}

## Requirements
1. Use Playwright Test with TypeScript (\`import { test, expect } from '@playwright/test'\`)
2. Use \`page.goto()\`, \`page.click()\`, \`page.fill()\`, \`page.waitForSelector()\`, \`expect(page).toHaveURL()\`, etc.
3. Include proper \`beforeEach\` setup (navigation) and \`afterEach\` cleanup if needed
4. Add meaningful assertions for each expected outcome
5. Handle async/await correctly throughout
6. Add comments explaining each step
7. Use resilient selectors (prefer \`data-testid\`, \`role\`, \`label\` over CSS selectors)
8. Include a descriptive \`test.describe\` block
9. DO NOT include production credentials — use environment variables (\`process.env.TEST_USERNAME\`, etc.)

## IMPORTANT SANDBOX NOTE
This script is designed to run ONLY in an isolated CI/CD environment (e.g., GitHub Actions).
DO NOT execute with production credentials or in a live environment without explicit authorization.

Return ONLY valid TypeScript code with no markdown fences, no explanations — just the raw .ts file content.`;
        let script;
        try {
            script = await callGemini(prompt);
        }
        catch {
            script = await callOpenAI(prompt);
        }
        // Strip any markdown code fences if AI included them
        script = script.replace(/^```typescript\n?/i, '').replace(/^```ts\n?/i, '').replace(/```$/m, '').trim();
        return (0, response_1.jsonResponse)(200, { script }, origin);
    }
    catch (err) {
        console.error('generate-playwright error:', err);
        return (0, response_1.jsonResponse)(500, { error: err.message }, origin);
    }
};
exports.handler = handler;
