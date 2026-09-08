import type { Handler, HandlerEvent } from '@netlify/functions'
import { jsonResponse } from './_shared/response'
import { callGemini } from './_shared/gemini'
import axios from 'axios'

function getOpenAIKey(): string | undefined {
  return process.env.OPENAI_API_KEY
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
- Use fenced code blocks with language identifiers.`

    let guide: string
    try {
      guide = await callGemini(prompt, 2048, 0.7)
    } catch (geminiErr: any) {
      if (getOpenAIKey() && getOpenAIKey() !== 'your_openai_api_key') {
        try {
          guide = await callOpenAI(prompt)
        } catch (openaiErr: any) {
          throw new Error(`AI generation failed: ${geminiErr.message} | Fallback OpenAI: ${openaiErr.message}`)
        }
      } else {
        throw geminiErr
      }
    }

    return jsonResponse(200, { guide }, origin)
  } catch (err: any) {
    console.error('generate-remediation error:', err)
    return jsonResponse(500, { error: err.message }, origin)
  }
}
