import { ref } from 'vue'

// In dev (5175), Vite proxies /.netlify/functions → localhost:8888
// In dev:stack (8888) or production, it hits the same origin
const NETLIFY_BASE = import.meta.env.VITE_NETLIFY_FUNCTIONS_URL || '/.netlify/functions'

async function callFunction(url: string, body: unknown): Promise<Response> {
  const opts: RequestInit = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  }

  // Try primary URL first (goes via Vite proxy to 8888 when on 5175)
  try {
    const res = await fetch(url, opts)
    // If we got a non-HTML response treat it as valid regardless of status
    const ct = res.headers.get('content-type') ?? ''
    if (ct.includes('application/json')) return res
    // HTML response means the function server isn't running on this path — fall through
    if (!res.ok) {
      const text = await res.text()
      throw new Error(`Server returned ${res.status}: ${text.slice(0, 200)}`)
    }
    return res
  } catch (firstErr: any) {
    // In dev, try hitting 8888 directly (fallback for when proxy is not available)
    if (import.meta.env.DEV && !url.startsWith('http')) {
      const directUrl = `http://localhost:8888${url}`
      try {
        const res = await fetch(directUrl, opts)
        return res
      } catch (fallbackErr: any) {
        // Both failed — throw a combined helpful error
        throw new Error(
          `Functions server unreachable. Make sure "npm run dev:stack" is running (not "npm run dev"). Original: ${firstErr.message}`
        )
      }
    }
    throw firstErr
  }
}

export function useAI() {
  const generating = ref(false)
  const error = ref<string | null>(null)

  /**
   * Generate a remediation guide via Netlify Function.
   * API keys are stored server-side — never exposed to the client bundle.
   */
  async function generateRemediationGuide(
    bugs: Array<{ title: string; description: string; source: string; severity: string }>
  ): Promise<string> {
    generating.value = true
    error.value = null

    try {
      const response = await callFunction(`${NETLIFY_BASE}/generate-remediation`, { bugs })

      if (!response.ok) {
        const text = await response.text()
        let message = `HTTP ${response.status}`
        try { message = JSON.parse(text).error ?? message } catch { message = text.slice(0, 200) || message }
        throw new Error(message)
      }

      const data = await response.json()
      return data.guide as string
    } catch (err: any) {
      error.value = err.message || 'AI generation failed'
      return `Error generating remediation guide: ${error.value}`
    } finally {
      generating.value = false
    }
  }

  /**
   * Generate a Playwright TypeScript test script via Netlify Function.
   * IMPORTANT: The returned script must only run in an isolated sandbox (CI/CD).
   */
  async function generatePlaywrightScript(
    testCase: {
      title: string
      preconditions: string
      steps: string[]
      expectedResult: string
      targetUrl: string
      testData?: string
    }
  ): Promise<string> {
    generating.value = true
    error.value = null

    try {
      const response = await callFunction(`${NETLIFY_BASE}/generate-playwright`, testCase)

      if (!response.ok) {
        const text = await response.text()
        let message = `HTTP ${response.status}`
        try { message = JSON.parse(text).error ?? message } catch { message = text.slice(0, 200) || message }
        throw new Error(message)
      }

      const data = await response.json()
      return data.script as string
    } catch (err: any) {
      error.value = err.message || 'Script generation failed'
      return `// Error generating Playwright script: ${error.value}`
    } finally {
      generating.value = false
    }
  }

  /**
   * Generate a suite of QA test cases from a user story or requirements.
   */
  async function generateTestCasesFromStory(params: {
    story: string
    targetUrl?: string
    count?: number
    focusTypes?: string[]
  }): Promise<Array<{
    title: string
    type: 'positive' | 'negative' | 'edge-case' | 'security'
    preconditions: string
    steps: string[]
    expectedResult: string
    testData?: string
    tags: string[]
  }>> {
    generating.value = true
    error.value = null

    try {
      const response = await callFunction(`${NETLIFY_BASE}/generate-test-cases`, params)

      if (!response.ok) {
        const text = await response.text()
        let message = `HTTP ${response.status}`
        try { message = JSON.parse(text).error ?? message } catch { message = text.slice(0, 200) || message }
        throw new Error(message)
      }

      const data = await response.json()
      return data.testCases || []
    } catch (err: any) {
      error.value = err.message || 'Failed to generate test cases'
      throw err
    } finally {
      generating.value = false
    }
  }

  /**
   * Generate synthetic QA test data and edge cases.
   */
  async function generateTestData(params: {
    category: string
    customPrompt?: string
    count?: number
    format?: string
    locale?: string
  }): Promise<{ data: string; category: string; format: string }> {
    generating.value = true
    error.value = null

    try {
      const response = await callFunction(`${NETLIFY_BASE}/generate-test-data`, params)

      if (!response.ok) {
        const text = await response.text()
        let message = `HTTP ${response.status}`
        try { message = JSON.parse(text).error ?? message } catch { message = text.slice(0, 200) || message }
        throw new Error(message)
      }

      const data = await response.json()
      return data
    } catch (err: any) {
      error.value = err.message || 'Failed to generate test data'
      throw err
    } finally {
      generating.value = false
    }
  }

  return {
    generateRemediationGuide,
    generatePlaywrightScript,
    generateTestCasesFromStory,
    generateTestData,
    generating,
    error,
  }
}

