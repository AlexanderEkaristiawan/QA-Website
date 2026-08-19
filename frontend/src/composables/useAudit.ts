import { ref } from 'vue'
import type { CrawlMode } from '@/types'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '@/firebase/config'

const NETLIFY_BASE = import.meta.env.VITE_NETLIFY_FUNCTIONS_URL || '/.netlify/functions'
const ZAP_POLL_INTERVAL_MS = 30_000

// Helper to compute SHA-256 hex string using browser Web Crypto API
async function sha256Hex(text: string): Promise<string> {
  const encoder = new TextEncoder()
  const data = encoder.encode(text)
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
}

function generateClientToken(): string {
  const array = new Uint8Array(24)
  crypto.getRandomValues(array)
  const hex = Array.from(array, b => b.toString(16).padStart(2, '0')).join('')
  return `qas_ext_${hex}`
}

export function useAudit() {
  const starting = ref(false)
  const error = ref<string | null>(null)
  let zapPollTimer: ReturnType<typeof setInterval> | null = null

  /**
   * Start an audit via Netlify Function.
   * Returns the created jobId from Firestore.
   */
  async function startAudit(
    projectId: string,
    userId: string,
    crawlMode: CrawlMode = 'server'
  ): Promise<string | null> {
    starting.value = true
    error.value = null

    try {
      const response = await fetch(`${NETLIFY_BASE}/start-audit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ projectId, userId, crawlMode }),
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
   * Request / rotate a project-scoped Chrome Extension API Token.
   * Uses Netlify Function if reachable, or falls back seamlessly to client-side
   * SHA-256 hash generation and Firestore storage for local development.
   */
  async function issueExtensionToken(projectId: string, userId: string): Promise<string | null> {
    try {
      const response = await fetch(`${NETLIFY_BASE}/issue-extension-token`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ projectId, userId }),
      })

      if (response.ok) {
        const data = await response.json()
        if (data.token) return data.token as string
      }
      throw new Error(`HTTP ${response.status}`)
    } catch (err: any) {
      console.warn('Netlify function unreachable, using client-side token generation fallback:', err.message)
      // Fallback: Generate token in browser and write SHA-256 hash directly to Firestore
      try {
        const rawToken = generateClientToken()
        const tokenHash = await sha256Hex(rawToken)
        const projectRef = doc(db, `projects/${projectId}`)
        await updateDoc(projectRef, {
          extensionApiToken: tokenHash,
          extensionApiTokenIssuedAt: new Date().toISOString(),
        })
        return rawToken
      } catch (fallbackErr: any) {
        console.error('Client-side token generation failed:', fallbackErr)
        return null
      }
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

  return { startAudit, issueExtensionToken, startZapPolling, stopZapPolling, starting, error }
}

