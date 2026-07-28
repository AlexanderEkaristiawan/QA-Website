import { ref } from 'vue'

const NETLIFY_BASE = import.meta.env.VITE_NETLIFY_FUNCTIONS_URL || '/.netlify/functions'

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
      const response = await fetch(`${NETLIFY_BASE}/generate-remediation`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ bugs }),
      })

      if (!response.ok) {
        const err = await response.json().catch(() => ({ error: 'Unknown error' }))
        throw new Error(err.error || `HTTP ${response.status}`)
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
      const response = await fetch(`${NETLIFY_BASE}/generate-playwright`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(testCase),
      })

      if (!response.ok) {
        const err = await response.json().catch(() => ({ error: 'Unknown error' }))
        throw new Error(err.error || `HTTP ${response.status}`)
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

  return { generateRemediationGuide, generatePlaywrightScript, generating, error }
}
