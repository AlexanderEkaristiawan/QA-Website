import type { Handler, HandlerEvent } from '@netlify/functions'
import { jsonResponse } from './_shared/firestore'
import axios from 'axios'

function getGeminiKey(): string | undefined {
  return process.env.GEMINI_API_KEY
}
function getOpenAIKey(): string | undefined {
  return process.env.OPENAI_API_KEY
}

async function callGemini(prompt: string): Promise<string> {
  const key = getGeminiKey()
  if (!key) throw new Error('GEMINI_API_KEY not configured')
  const response = await axios.post(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${key}`,
    {
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { temperature: 0.7, maxOutputTokens: 2048 },
    },
    { timeout: 30000 }
  )
  return response.data.candidates[0].content.parts[0].text as string
}

async function callOpenAI(prompt: string): Promise<string> {
  const key = getOpenAIKey()
  if (!key) throw new Error('OPENAI_API_KEY not configured')
  const response = await axios.post(
    'https://api.openai.com/v1/chat/completions',
    {
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You are a senior DevOps and QA engineer providing structured remediation guides.' },
        { role: 'user', content: prompt },
      ],
      temperature: 0.7,
      max_tokens: 2048,
    },
    {
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      timeout: 30000,
    }
  )
  return response.data.choices[0].message.content as string
}

export const handler: Handler = async (event: HandlerEvent) => {
  const origin = event.headers.origin

  if (event.httpMethod === 'OPTIONS') return jsonResponse(204, {}, origin)
  if (event.httpMethod !== 'POST') return jsonResponse(405, { error: 'Method not allowed' }, origin)

  try {
    const body = JSON.parse(event.body || '{}')
    const { bugs } = body

    if (!bugs || !Array.isArray(bugs)) {
      return jsonResponse(400, { error: 'bugs array required' }, origin)
    }

    const bugsText = (bugs as any[])
      .map(b => `- [${b.severity}] [${b.source}] ${b.title}: ${b.description}`)
      .join('\n')

    const prompt = `You are a senior DevOps and QA engineer. Review these failing audit metrics and bugs. Generate a comprehensive, actionable Remediation Guide with:

1) **Executive Summary** — Overview of risks, business impact, and priority order
2) **Root Cause Analysis** — For each issue category, explain the technical root cause
3) **Step-by-Step Fixes** — Detailed code/configuration fixes for each issue with code snippets

## Issues Found:
${bugsText || 'No specific issues. Provide general SEO, Security, and Performance best practices.'}

Format each section clearly. Use markdown. Include specific code examples, HTTP headers, and configuration snippets where relevant.`

    let guide: string
    try {
      guide = await callGemini(prompt)
    } catch {
      guide = await callOpenAI(prompt) // Fallback
    }

    return jsonResponse(200, { guide }, origin)
  } catch (err: any) {
    console.error('generate-remediation error:', err)
    return jsonResponse(500, { error: err.message }, origin)
  }
}
