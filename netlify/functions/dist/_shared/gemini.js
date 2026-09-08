"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.callGeminiWithUsage = callGeminiWithUsage;
exports.callGemini = callGemini;
const axios_1 = __importDefault(require("axios"));
// Only fast, confirmed-working models — keep list short to stay within 30s Netlify local timeout
const GEMINI_MODELS = [
    'gemini-3.5-flash',
    'gemini-3.5-flash-lite',
];
// Per-model timeout: 12s × 2 models = 24s max, safely under Netlify's 30s local limit
// In production Netlify functions have up to 26s (default) or 15min (background)
const PER_MODEL_TIMEOUT_MS = 12000;
async function callGeminiWithUsage(prompt, maxOutputTokens = 2048, temperature = 0.7) {
    const key = process.env.GEMINI_API_KEY;
    if (!key || key === 'your_gemini_api_key') {
        throw new Error('GEMINI_API_KEY not configured in netlify/.env');
    }
    let lastError = null;
    for (const model of GEMINI_MODELS) {
        try {
            const response = await axios_1.default.post(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`, {
                contents: [{ parts: [{ text: prompt }] }],
                generationConfig: { temperature, maxOutputTokens },
            }, { timeout: PER_MODEL_TIMEOUT_MS });
            const text = response.data?.candidates?.[0]?.content?.parts?.[0]?.text;
            if (text) {
                console.log(`✅ Gemini responded via ${model}`);
                const usageRaw = response.data?.usageMetadata;
                return {
                    text: text,
                    model,
                    usage: usageRaw ? {
                        promptTokens: usageRaw.promptTokenCount || 0,
                        completionTokens: usageRaw.candidatesTokenCount || 0,
                        totalTokens: usageRaw.totalTokenCount || 0,
                    } : undefined,
                };
            }
        }
        catch (err) {
            const status = err.response?.status;
            lastError = err;
            console.warn(`⚠️ Gemini model ${model} failed (${status ?? err.message}), trying next model...`);
            if (status === 400 || status === 403) {
                break;
            }
        }
    }
    const errMsg = lastError?.response?.data?.error?.message || lastError?.message || 'Unknown error';
    const status = lastError?.response?.status;
    if (status === 429) {
        throw new Error('Gemini API rate limit reached. Please wait a minute and try again.');
    }
    if (status === 503) {
        throw new Error('Gemini API is temporarily overloaded. This is a temporary issue — please try again in a few moments.');
    }
    if (errMsg.includes('timeout') || errMsg.includes('ECONNRESET')) {
        throw new Error('Gemini API request timed out. The model may be under high load — please try again shortly.');
    }
    throw new Error(`Gemini API error: ${errMsg}`);
}
async function callGemini(prompt, maxOutputTokens = 2048, temperature = 0.7) {
    const res = await callGeminiWithUsage(prompt, maxOutputTokens, temperature);
    return res.text;
}
