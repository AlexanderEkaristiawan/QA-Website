import type { Handler, HandlerEvent } from '@netlify/functions'
import axios from 'axios'
import { createHash, randomUUID } from 'crypto'
import { getDb, jsonResponse } from './_shared/firestore'
import { canUploadBugAssets } from './_shared/project-access'

const MAX_BYTES = 2 * 1024 * 1024
const ALLOWED_TYPES = new Set(['image/jpeg', 'image/png', 'image/webp'])

function base64ByteLength(base64: string): number {
  const padding = base64.endsWith('==') ? 2 : base64.endsWith('=') ? 1 : 0
  return Math.floor((base64.length * 3) / 4) - padding
}

function safeFileName(name: string): string {
  return name.replace(/[^a-zA-Z0-9._-]/g, '-').slice(0, 120)
}

function signCloudinaryParams(params: Record<string, string>, apiSecret: string): string {
  const payload = Object.keys(params)
    .sort()
    .map(key => `${key}=${params[key]}`)
    .join('&')
  return createHash('sha1').update(payload + apiSecret).digest('hex')
}

export const handler: Handler = async (event: HandlerEvent) => {
  const origin = event.headers.origin

  if (event.httpMethod === 'OPTIONS') return jsonResponse(204, {}, origin)
  if (event.httpMethod !== 'POST') return jsonResponse(405, { error: 'Method not allowed' }, origin)

  const cloudName = process.env.CLOUDINARY_CLOUD_NAME
  const apiKey = process.env.CLOUDINARY_API_KEY
  const apiSecret = process.env.CLOUDINARY_API_SECRET

  if (!cloudName || !apiKey || !apiSecret) {
    return jsonResponse(
      503,
      { error: 'Screenshot uploads are not configured. Set CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET in Netlify.' },
      origin
    )
  }

  try {
    const body = JSON.parse(event.body || '{}')
    const { projectId, userId, bugShortId, fileName, contentType, dataBase64 } = body

    if (!projectId || !userId || !bugShortId || !fileName || !contentType || !dataBase64) {
      return jsonResponse(
        400,
        { error: 'projectId, userId, bugShortId, fileName, contentType, and dataBase64 are required' },
        origin
      )
    }

    if (!ALLOWED_TYPES.has(String(contentType))) {
      return jsonResponse(400, { error: 'Screenshots must be JPEG, PNG, or WebP.' }, origin)
    }

    const bytes = base64ByteLength(String(dataBase64))
    if (bytes <= 0 || bytes >= MAX_BYTES) {
      return jsonResponse(400, { error: 'Each screenshot must be smaller than 2 MB.' }, origin)
    }

    const db = getDb()
    const projectDoc = await db.collection('projects').doc(String(projectId)).get()
    if (!projectDoc.exists) {
      return jsonResponse(404, { error: 'Project not found' }, origin)
    }

    const project = projectDoc.data()!
    if (!canUploadBugAssets(project, String(userId))) {
      return jsonResponse(403, { error: 'Permission denied' }, origin)
    }

    const folder = `qa-suite/projects/${projectId}/bugs/${bugShortId}`
    const publicId = `${randomUUID()}-${safeFileName(String(fileName)).replace(/\.[^.]+$/, '')}`
    const timestamp = Math.round(Date.now() / 1000)

    const paramsToSign: Record<string, string> = {
      folder,
      public_id: publicId,
      timestamp: String(timestamp),
    }
    const signature = signCloudinaryParams(paramsToSign, apiSecret)

    const form = new URLSearchParams()
    form.append('file', `data:${contentType};base64,${dataBase64}`)
    form.append('api_key', apiKey)
    form.append('timestamp', String(timestamp))
    form.append('folder', folder)
    form.append('public_id', publicId)
    form.append('signature', signature)

    const uploadResponse = await axios.post(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      form.toString(),
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, timeout: 55_000 }
    )

    const secureUrl = uploadResponse.data?.secure_url as string | undefined
    if (!secureUrl) {
      return jsonResponse(502, { error: 'Cloudinary upload succeeded but returned no URL.' }, origin)
    }

    return jsonResponse(200, { url: secureUrl }, origin)
  } catch (err: any) {
    const cloudinaryMessage = err?.response?.data?.error?.message
    console.error('upload-bug-screenshot error:', cloudinaryMessage || err.message || err)
    return jsonResponse(500, {
      error: cloudinaryMessage || err.message || 'Screenshot upload failed',
    }, origin)
  }
}
