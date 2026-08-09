import * as admin from 'firebase-admin'
import { jsonResponse, corsHeaders } from './response'

export { jsonResponse, corsHeaders }

// Initialize Firebase Admin once (lazy singleton)
function initAdmin(): admin.app.App {
  if (admin.apps.length > 0) return admin.apps[0]!

  // Service account key provided as a JSON string or Base64 encoded JSON string in Netlify env var
  // NEVER commit this key to the repository
  let serviceAccountJson = process.env.FIREBASE_SERVICE_ACCOUNT_KEY
  if (!serviceAccountJson) {
    throw new Error('FIREBASE_SERVICE_ACCOUNT_KEY env var is not set')
  }

  // Transparently decode Base64 if the string does not start with '{'
  if (!serviceAccountJson.trim().startsWith('{')) {
    try {
      serviceAccountJson = Buffer.from(serviceAccountJson, 'base64').toString('utf8')
    } catch (err: any) {
      throw new Error(`Failed to decode Base64 FIREBASE_SERVICE_ACCOUNT_KEY: ${err.message}`)
    }
  }

  const serviceAccount = JSON.parse(serviceAccountJson) as admin.ServiceAccount

  return admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    projectId: process.env.FIREBASE_PROJECT_ID,
  })
}

export function getDb(): admin.firestore.Firestore {
  initAdmin()
  return admin.firestore()
}

export function getFieldValue() {
  return admin.firestore.FieldValue
}

export function getTimestamp() {
  return admin.firestore.Timestamp
}
