import * as admin from 'firebase-admin'
import { config as loadEnv } from 'dotenv'
import { resolve } from 'path'
import { jsonResponse, corsHeaders } from './response'

export { jsonResponse, corsHeaders }

// Netlify injects production variables; this also supports the repository's local netlify/.env file.
loadEnv({ path: resolve(process.cwd(), 'netlify/.env') })

// Initialize Firebase Admin once (lazy singleton)
function initAdmin(): admin.app.App {
  if (admin.apps.length > 0) return admin.apps[0]!

  let serviceAccount: admin.ServiceAccount | undefined

  // Option 1: Discrete env vars (significantly smaller payload size)
  if (process.env.FIREBASE_PRIVATE_KEY && process.env.FIREBASE_CLIENT_EMAIL) {
    serviceAccount = {
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    }
  } 
  // Option 2: Single JSON or Base64 string
  else if (process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
    let serviceAccountJson = process.env.FIREBASE_SERVICE_ACCOUNT_KEY.trim()
    if (!serviceAccountJson.startsWith('{')) {
      try {
        serviceAccountJson = Buffer.from(serviceAccountJson, 'base64').toString('utf8')
      } catch (err: any) {
        throw new Error(`Failed to decode Base64 FIREBASE_SERVICE_ACCOUNT_KEY: ${err.message}`)
      }
    }
    const parsed = JSON.parse(serviceAccountJson)
    serviceAccount = {
      projectId: parsed.project_id || process.env.FIREBASE_PROJECT_ID,
      clientEmail: parsed.client_email,
      privateKey: parsed.private_key ? parsed.private_key.replace(/\\n/g, '\n') : undefined,
    }
  }

  if (!serviceAccount || !serviceAccount.privateKey || !serviceAccount.clientEmail) {
    throw new Error('Firebase credentials not properly configured (FIREBASE_PRIVATE_KEY + FIREBASE_CLIENT_EMAIL or FIREBASE_SERVICE_ACCOUNT_KEY required)')
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
