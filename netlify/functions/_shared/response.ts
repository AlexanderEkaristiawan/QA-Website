import { config as loadEnv } from 'dotenv'
import { resolve } from 'path'
import { existsSync } from 'fs'

// Automatically load local .env for development
const envPaths = [
  resolve(process.cwd(), 'netlify/.env'),
  resolve(process.cwd(), '../netlify/.env'),
  resolve(process.cwd(), '.env'),
  resolve(__dirname, '../../.env'),
  resolve(__dirname, '../../../netlify/.env'),
  resolve(__dirname, '../../netlify/.env')
]
for (const p of envPaths) {
  if (existsSync(p)) {
    loadEnv({ path: p })
  }
}

// CORS helper — allow only trusted origins in production.
// Returns a fully-defined Record<string, string> so that it satisfies
// Netlify's HandlerResponse header index signature (no undefined values).
export function corsHeaders(origin?: string): Record<string, string> {
  const allowed = (process.env.ALLOWED_ORIGINS?.split(',') ?? []).map(s => s.trim()).filter(Boolean)
  if (allowed.length === 0) {
    allowed.push('http://localhost:5173', 'http://localhost:5175', 'http://localhost:8888')
  }
  const o = origin ?? '*'
  const isLocalDevOrigin = /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/i.test(o)

  if (process.env.NODE_ENV !== 'production' && isLocalDevOrigin) {
    return {
      'Access-Control-Allow-Origin': o,
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
    }
  }

  if (process.env.NODE_ENV === 'production' && !allowed.includes(o)) {
    return {
      'Access-Control-Allow-Origin': allowed[0],
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
    }
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
    headers: { ...corsHeaders(origin), 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  }
}
