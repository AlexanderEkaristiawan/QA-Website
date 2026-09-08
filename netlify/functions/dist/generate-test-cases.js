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
            { role: 'system', content: 'You are a Principal QA Engineer specializing in test scenario design, acceptance criteria verification, and test coverage.' },
            { role: 'user', content: prompt },
        ],
        temperature: 0.4,
        max_tokens: 3000,
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
        const { story, targetUrl, count = 6, focusTypes } = body;
        if (!story || typeof story !== 'string' || !story.trim()) {
            return (0, response_1.jsonResponse)(400, { error: 'User story / feature description is required' }, origin);
        }
        const prompt = `You are a Lead QA Automation & Manual Testing Architect.
Analyze the following user story / feature requirements and generate a balanced, comprehensive suite of ${count} QA test cases.

## Feature / User Story:
"""
${story.trim()}
"""
Target URL Context: ${targetUrl || 'Web Application'}
${focusTypes && Array.isArray(focusTypes) && focusTypes.length > 0 ? `Focus specifically on these test types: ${focusTypes.join(', ')}` : 'Ensure a strong balance of: Positive (Happy Path), Negative (Error Handling), Edge Cases (Boundary / Stress), and Security (Validation / Auth / Input Sanitization).'}

## Required Output Format:
Return ONLY a valid, parseable JSON array of objects. Do NOT include markdown text outside the JSON.
Each object in the array MUST match this exact TypeScript structure:
[
  {
    "title": "Clear, concise action-oriented test case title",
    "type": "positive" | "negative" | "edge-case" | "security",
    "preconditions": "Prerequisite state or setup needed before execution",
    "steps": [
      "1. Action step one",
      "2. Action step two",
      "3. Action step three"
    ],
    "expectedResult": "Precise, verifiable expected outcome",
    "testData": "Relevant test payload or mock values (optional, string)",
    "tags": ["tag1", "tag2"]
  }
]

Ensure all steps are actionable, realistic, and directly testable.`;
        let rawOutput;
        try {
            rawOutput = await (0, gemini_1.callGemini)(prompt, 3000, 0.4);
        }
        catch (geminiErr) {
            if (getOpenAIKey() && getOpenAIKey() !== 'your_openai_api_key') {
                try {
                    rawOutput = await callOpenAI(prompt);
                }
                catch (openaiErr) {
                    throw new Error(`AI generation failed: ${geminiErr.message} | Fallback OpenAI: ${openaiErr.message}`);
                }
            }
            else {
                throw geminiErr;
            }
        }
        // Clean JSON code fences if included
        let cleaned = rawOutput.trim();
        if (cleaned.startsWith('```json')) {
            cleaned = cleaned.replace(/^```json\s*/i, '').replace(/\s*```$/, '').trim();
        }
        else if (cleaned.startsWith('```')) {
            cleaned = cleaned.replace(/^```\s*/i, '').replace(/\s*```$/, '').trim();
        }
        // Parse JSON
        let testCases;
        try {
            // Find array substring if model included leading/trailing commentary
            const startIdx = cleaned.indexOf('[');
            const endIdx = cleaned.lastIndexOf(']');
            if (startIdx !== -1 && endIdx !== -1 && endIdx > startIdx) {
                cleaned = cleaned.substring(startIdx, endIdx + 1);
            }
            testCases = JSON.parse(cleaned);
        }
        catch (parseErr) {
            console.error('Failed to parse AI output as JSON:', cleaned);
            throw new Error(`Failed to parse generated test cases: ${parseErr.message}`);
        }
        if (!Array.isArray(testCases)) {
            throw new Error('AI response was not a valid array of test cases');
        }
        // Normalize and sanitize fields
        const sanitizedTestCases = testCases.map((tc, idx) => ({
            title: tc.title || `Test Scenario ${idx + 1}`,
            type: ['positive', 'negative', 'edge-case', 'security'].includes(tc.type) ? tc.type : 'positive',
            preconditions: tc.preconditions || 'None',
            steps: Array.isArray(tc.steps) ? tc.steps : [String(tc.steps || 'Execute scenario')],
            expectedResult: tc.expectedResult || 'System behaves as expected',
            testData: tc.testData || '',
            tags: Array.isArray(tc.tags) && tc.tags.length > 0 ? tc.tags : [tc.type || 'general'],
        }));
        return (0, response_1.jsonResponse)(200, { testCases: sanitizedTestCases }, origin);
    }
    catch (err) {
        console.error('generate-test-cases error:', err);
        return (0, response_1.jsonResponse)(500, { error: err.message }, origin);
    }
};
exports.handler = handler;
