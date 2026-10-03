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

// CORS helper — allows the Netlify site, Chrome extension origins, and
// any custom origins listed in ALLOWED_ORIGINS (comma-separated env var).
// Returns a fully-defined Record<string, string> so that it satisfies
// Netlify's HandlerResponse header index signature (no undefined values).
export function corsHeaders(origin?: string): Record<string, string> {
  const o = origin ?? ''

  // Always allow Chrome extensions regardless of environment
  const isChromeExtension = o.startsWith('chrome-extension://')

  // Always allow localhost during development
  const isLocalDevOrigin = /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/i.test(o)

  // Explicitly allowed origins from env var (e.g. your Netlify site URL)
  const allowed = (process.env.ALLOWED_ORIGINS?.split(',') ?? []).map(s => s.trim()).filter(Boolean)

  const effectiveOrigin =
    isChromeExtension || isLocalDevOrigin || allowed.includes(o) || allowed.length === 0
      ? (o || '*')
      : (allowed[0] ?? '*')

  return {
    'Access-Control-Allow-Origin': effectiveOrigin,
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
