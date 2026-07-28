import * as admin from 'firebase-admin'

// Initialize Firebase Admin once (lazy singleton)
function initAdmin(): admin.app.App {
  if (admin.apps.length > 0) return admin.apps[0]!

  // Service account key provided as a JSON string in Netlify env var
  // NEVER commit this key to the repository
  const serviceAccountJson = process.env.FIREBASE_SERVICE_ACCOUNT_KEY
  if (!serviceAccountJson) {
    throw new Error('FIREBASE_SERVICE_ACCOUNT_KEY env var is not set')
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

// CORS helper — allow only trusted origins in production
export function corsHeaders(origin?: string) {
  const allowed = process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:5173']
  const o = origin || '*'
  if (process.env.NODE_ENV === 'production' && !allowed.includes(o)) {
    return { 'Access-Control-Allow-Origin': allowed[0] }
  }
  return {
    'Access-Control-Allow-Origin': o,
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
  }
}

// Standard JSON response helper
export function jsonResponse(statusCode: number, body: unknown, origin?: string) {
  return {
    statusCode,
    headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) },
    body: JSON.stringify(body),
  }
}
