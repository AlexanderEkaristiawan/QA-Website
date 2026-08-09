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
