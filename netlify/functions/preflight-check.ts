import type { Handler, HandlerEvent } from '@netlify/functions'
import { getDb, getFieldValue, jsonResponse } from './_shared/firestore'
import axios from 'axios'

interface AuthSettings {
  authType: 'none' | 'basic' | 'session'
  basicAuthUsername?: string
  basicAuthPassword?: string
  sessionCookie?: string
}

async function validateAuth(targetUrl: string, authSettings: AuthSettings): Promise<{ ok: boolean; statusCode: number; message: string }> {
  const headers: Record<string, string> = {
    'User-Agent': 'QASuite-Preflight/1.0',
  }

  if (authSettings.authType === 'basic' && authSettings.basicAuthUsername) {
    const token = Buffer.from(`${authSettings.basicAuthUsername}:${authSettings.basicAuthPassword || ''}`).toString('base64')
    headers['Authorization'] = `Basic ${token}`
  }

  if (authSettings.authType === 'session' && authSettings.sessionCookie) {
    headers['Cookie'] = authSettings.sessionCookie
  }

  try {
    const response = await axios.get(targetUrl, {
      headers,
      timeout: 8000,
      maxRedirects: 3,
      validateStatus: () => true,
    })

    if (response.status === 401 || response.status === 403) {
      return {
        ok: false,
        statusCode: response.status,
        message: `Authentication failed — server returned ${response.status}. Check your credentials.`,
      }
    }

    if (response.status >= 400) {
      return {
        ok: false,
        statusCode: response.status,
        message: `Target URL returned HTTP ${response.status}. Check the URL is correct.`,
      }
    }

    return { ok: true, statusCode: response.status, message: 'Auth validated successfully' }
  } catch (err: any) {
    return { ok: false, statusCode: 0, message: `Could not reach target URL: ${err.message}` }
  }
}

export const handler: Handler = async (event: HandlerEvent) => {
  const origin = event.headers.origin

  if (event.httpMethod === 'OPTIONS') return jsonResponse(204, {}, origin)
  if (event.httpMethod !== 'POST') return jsonResponse(405, { error: 'Method not allowed' }, origin)

  const db = getDb()
  const fv = getFieldValue()
  const body = JSON.parse(event.body || '{}')
  const { jobId, projectId, targetUrl, authSettings = { authType: 'none' } } = body

  if (!jobId || !projectId || !targetUrl) {
    return jsonResponse(400, { error: 'jobId, projectId, and targetUrl required' }, origin)
  }

  const jobRef = db.collection('audit_jobs').doc(jobId)
  const result = await validateAuth(targetUrl, authSettings as AuthSettings)

  if (!result.ok) {
    await jobRef.update({
      status: 'auth-failed',
      errors: fv.arrayUnion({ bot: 'preflight', message: result.message, retriesLeft: 0 }),
    })

    // Create a notification for the project owner
    await db.collection('projects').doc(projectId).get().then(async (snap) => {
      if (snap.exists) {
        const ownerId = snap.data()?.ownerId
        if (ownerId) {
          await db.collection('notifications').add({
            userId: ownerId,
            title: 'Audit Auth Failed',
            message: result.message,
            read: false,
            link: `/projects/${projectId}`,
            createdAt: fv.serverTimestamp(),
          })
        }
      }
    }).catch(() => {})

    return jsonResponse(200, { ok: false, statusCode: result.statusCode, message: result.message }, origin)
  }

  return jsonResponse(200, { ok: true, statusCode: result.statusCode, message: result.message }, origin)
}
