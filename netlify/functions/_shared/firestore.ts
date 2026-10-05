import * as admin from 'firebase-admin'
import { config as loadEnv } from 'dotenv'
import { resolve } from 'path'
import { jsonResponse, corsHeaders } from './response'

export { jsonResponse, corsHeaders }

// Netlify injects production variables; this also supports the repository's local netlify/.env file.
loadEnv({ path: resolve(process.cwd(), 'netlify/.env') })

// Normalise a private-key string regardless of how Netlify stored it.
// Handles: escaped \\n sequences, literal \n, Windows \r\n, and bare \r.
function normalizePrivateKey(raw: string): string {
  // If the key already contains real newlines we're done
  if (raw.includes('\n')) return raw
  // Convert escaped sequences to real newlines
  return raw.replace(/\\n/g, '\n').replace(/\\r/g, '')
}

// Safely parse the FIREBASE_SERVICE_ACCOUNT_KEY JSON, working around the
// common Netlify edge case where literal newlines inside the JSON string
// break JSON.parse.
function parseServiceAccountJson(raw: string): Record<string, string> {
  // First attempt: standard parse
  try {
    return JSON.parse(raw)
  } catch (_) {
    // Second attempt: the private_key value has unescaped newlines — re-escape them
    const sanitized = raw.replace(
      /("private_key"\s*:\s*")([\s\S]*?)("(?:\s*,|\s*}))/g,
      (_match, before, keyValue, after) =>
        before + keyValue.replace(/\n/g, '\\n').replace(/\r/g, '') + after
    )
    try {
      return JSON.parse(sanitized)
    } catch (err: any) {
      throw new Error(`Failed to parse FIREBASE_SERVICE_ACCOUNT_KEY as JSON: ${err.message}`)
    }
  }
}

// Initialize Firebase Admin once (lazy singleton)
function initAdmin(): admin.app.App {
  if (admin.apps.length > 0) return admin.apps[0]!

  let serviceAccount: admin.ServiceAccount | undefined

  // Option 1: Discrete env vars — most reliable, avoids JSON escaping issues
  if (process.env.FIREBASE_PRIVATE_KEY && process.env.FIREBASE_CLIENT_EMAIL) {
    serviceAccount = {
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: normalizePrivateKey(process.env.FIREBASE_PRIVATE_KEY),
    }
  }
  // Option 2: Single JSON or Base64-encoded service account key
  else if (process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
    let serviceAccountJson = process.env.FIREBASE_SERVICE_ACCOUNT_KEY
      .trim()
      .replace(/^\uFEFF/, '')
      .replace(/^ï»¿/, '')

    if (!serviceAccountJson.startsWith('{')) {
      // Treat as Base64
      try {
        serviceAccountJson = Buffer.from(serviceAccountJson, 'base64').toString('utf8')
      } catch (err: any) {
        throw new Error(`Failed to decode Base64 FIREBASE_SERVICE_ACCOUNT_KEY: ${err.message}`)
      }
    }

    const parsed = parseServiceAccountJson(serviceAccountJson)
    serviceAccount = {
      projectId: parsed.project_id || process.env.FIREBASE_PROJECT_ID,
      clientEmail: parsed.client_email,
      privateKey: parsed.private_key ? normalizePrivateKey(parsed.private_key) : undefined,
    }
  }

  if (!serviceAccount?.privateKey || !serviceAccount?.clientEmail) {
    throw new Error(
      'Firebase credentials not properly configured. ' +
      'Set FIREBASE_PRIVATE_KEY + FIREBASE_CLIENT_EMAIL (recommended) ' +
      'or FIREBASE_SERVICE_ACCOUNT_KEY in your Netlify environment variables.'
    )
  }

  return admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    projectId: process.env.FIREBASE_PROJECT_ID || serviceAccount.projectId,
  })
}

export function getDb(): admin.firestore.Firestore {
  initAdmin()
  return admin.firestore()
}

export function getAuth(): admin.auth.Auth {
  initAdmin()
  return admin.auth()
}

export function getFieldValue() {
  return admin.firestore.FieldValue
}

export function getTimestamp() {
  return admin.firestore.Timestamp
}
