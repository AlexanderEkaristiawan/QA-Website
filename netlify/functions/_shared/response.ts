// CORS helper — allow only trusted origins in production.
// Returns a fully-defined Record<string, string> so that it satisfies
// Netlify's HandlerResponse header index signature (no undefined values).
export function corsHeaders(origin?: string): Record<string, string> {
  const allowed = (process.env.ALLOWED_ORIGINS?.split(',') ?? []).map(s => s.trim()).filter(Boolean)
  if (allowed.length === 0) allowed.push('http://localhost:5173')
  const o = origin ?? '*'

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
