import type { Handler, HandlerEvent } from '@netlify/functions'
import { jsonResponse } from './_shared/response'
import { callGemini, callGeminiWithUsage } from './_shared/gemini'
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
        { role: 'system', content: 'You are a QA Test Data & Fuzzing Specialist.' },
        { role: 'user', content: prompt },
      ],
      temperature: 0.5,
      max_tokens: 3000,
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
    const {
      category = 'users',
      customPrompt = '',
      count = 5,
      format = 'json',
      locale = 'International / Indonesian',
    } = body

    let promptContext = ''

    if (category === 'users') {
      promptContext = `Generate ${count} realistic mock user profiles suitable for QA testing. Include fields: id, fullName, email, phone, address, role, dateOfBirth, status. Locale preference: ${locale}. Include a mix of standard and realistic test names.`
    } else if (category === 'boundary') {
      promptContext = `Generate a QA boundary value testing suite of ${count} edge-case strings and payload test cases for input fields. Include:
1. Max length boundary string (255+ characters)
2. Unicode, accents, non-Latin alphabets (Cyrillic, Arabic, Chinese, Japanese)
3. Emoji sequences & ZWJ characters
4. Whitespace variations (leading, trailing, non-breaking spaces, tab/newlines)
5. Zero, negative, and extreme numeric boundary numbers (e.g., -1, 0, 9999999999999999, Float overflow)
6. Special symbols (< > & " ' ; % $ @ # !)`
    } else if (category === 'security') {
      promptContext = `Generate a safe QA security fuzzing test payload list with ${count} items for testing web input validation and sanitization. Include categories:
- XSS vectors (e.g. <script>alert(1)</script>, <img src=x onerror=alert(1)>)
- SQL Injection probes (e.g. ' OR '1'='1, 1; DROP TABLE test;)
- Path traversal (e.g. ../../../../etc/passwd)
- Template injection (e.g. {{7*7}}, \${7*7})
- Command injection characters (& | ; \` $)`
    } else if (category === 'financial') {
      promptContext = `Generate ${count} mock test payment entries for sandbox testing. Include:
- Sandbox test card numbers (Visa 4242..., Mastercard 5555..., Amex 3782...)
- Expiration dates (valid future dates and 1 expired date for testing error flows)
- CVV codes (3 and 4 digits)
- Currency values with boundary decimals (e.g. 0.01, 9999.99, 0.00)`
    } else if (category === 'text') {
      const lengthType = body.lengthType || 'characters'
      const lengthValue = body.lengthValue || 120
      const topic = customPrompt || 'Realistic form description / dummy text'

      promptContext = `Generate a realistic text paragraph/sentence for QA form testing.
Requirement:
- Topic / Content: ${topic}
- Length Constraint: Exactly ${lengthValue} ${lengthType}.
- Ensure the text sounds natural, coherent, and precisely satisfies the ${lengthValue} ${lengthType} constraint (do not exceed or fall short).
- Return ONLY the generated text with no quotes or meta commentary.`
    } else {
      promptContext = `Generate QA test data according to this custom requirement:
"${customPrompt || 'Realistic form test data'}"
Generate approx ${count} realistic data items.`
    }

    const prompt = `You are an expert QA Automation and Test Data Architect.
${promptContext}

## Required Format:
${
  format === 'json'
    ? `Output ONLY valid JSON (an array of objects if structured, or an array of strings). No surrounding explanation.`
    : format === 'csv'
    ? `Output ONLY clean CSV format with column headers on the first line. No markdown fences, no extra text.`
    : `Output clean plain text lines with one item or scenario per line.`
}`

    let rawOutput: string
    let modelUsed = 'gemini-3.5-flash'
    let usageInfo: any = null

    try {
      const geminiRes = await callGeminiWithUsage(prompt, 3000, 0.4)
      rawOutput = geminiRes.text
      modelUsed = geminiRes.model
      usageInfo = geminiRes.usage
    } catch (geminiErr: any) {
      if (getOpenAIKey() && getOpenAIKey() !== 'your_openai_api_key') {
        try {
          rawOutput = await callOpenAI(prompt)
          modelUsed = 'gpt-4o-mini'
          usageInfo = { promptTokens: 0, completionTokens: 0, totalTokens: 0 }
        } catch (openaiErr: any) {
          throw new Error(`AI generation failed: ${geminiErr.message} | Fallback OpenAI: ${openaiErr.message}`)
        }
      } else {
        throw geminiErr
      }
    }

    let cleaned = rawOutput.trim()
    // Strip code fences if model returned them
    if (cleaned.startsWith('```json') || cleaned.startsWith('```csv') || cleaned.startsWith('```text')) {
      cleaned = cleaned.replace(/^```[a-z]*\n?/i, '').replace(/```$/m, '').trim()
    } else if (cleaned.startsWith('```')) {
      cleaned = cleaned.replace(/^```\n?/i, '').replace(/```$/m, '').trim()
    }

    return jsonResponse(200, {
      data: cleaned,
      category,
      format,
      usage: usageInfo || {
        promptTokens: 0,
        completionTokens: 0,
        totalTokens: 0,
      },
      model: modelUsed,
    }, origin)
  } catch (err: any) {
    console.error('generate-test-data error:', err)
    return jsonResponse(500, { error: err.message }, origin)
  }
}
