import { ref } from 'vue'

const NETLIFY_BASE = import.meta.env.VITE_NETLIFY_FUNCTIONS_URL || '/.netlify/functions'
const ZAP_POLL_INTERVAL_MS = 30_000

export function useAudit() {
  const starting = ref(false)
  const error = ref<string | null>(null)
  let zapPollTimer: ReturnType<typeof setInterval> | null = null

  /**
   * Start a full audit via Netlify Function.
   * Returns the created jobId from Firestore.
   */
  async function startAudit(projectId: string, userId: string): Promise<string | null> {
    starting.value = true
    error.value = null

    try {
      const response = await fetch(`${NETLIFY_BASE}/start-audit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ projectId, userId }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || `HTTP ${response.status}`)
      }

      return data.jobId as string
    } catch (err: any) {
      error.value = err.message || 'Failed to start audit'
      return null
    } finally {
      starting.value = false
    }
  }

  /**
   * Poll ZAP scan status every 30 seconds.
   * Calls /.netlify/functions/check-zap-status until scan completes or errors.
   * Returns an unsubscribe function to stop polling.
   */
  function startZapPolling(
    jobId: string,
    projectId: string,
    onComplete: (result: { highAlerts: number; mediumAlerts: number; lowAlerts: number }) => void,
    onError?: (msg: string) => void
  ): () => void {
    if (zapPollTimer) clearInterval(zapPollTimer)

    const poll = async () => {
      try {
        const response = await fetch(`${NETLIFY_BASE}/check-zap-status`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ jobId, projectId }),
        })

        const data = await response.json()

        if (data.status === 'completed') {
          stopZapPolling()
          onComplete({
            highAlerts: data.highAlerts ?? 0,
            mediumAlerts: data.mediumAlerts ?? 0,
            lowAlerts: data.lowAlerts ?? 0,
          })
        } else if (data.status === 'error') {
          stopZapPolling()
          onError?.(data.error || 'ZAP scan error')
        }
        // 'running' or 'no_scan' — keep polling
      } catch (err: any) {
        console.warn('ZAP poll failed:', err.message)
        // Don't stop polling on network errors — transient issues
      }
    }

    // Poll immediately then every 30s
    poll()
    zapPollTimer = setInterval(poll, ZAP_POLL_INTERVAL_MS)

    return () => stopZapPolling()
  }

  function stopZapPolling() {
    if (zapPollTimer) {
      clearInterval(zapPollTimer)
      zapPollTimer = null
    }
  }

  return { startAudit, startZapPolling, stopZapPolling, starting, error }
}
