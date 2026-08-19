import { auth } from '@/firebase/config'

export const ALLOWED_SCREENSHOT_TYPES = ['image/jpeg', 'image/png', 'image/webp'] as const
export const MAX_SCREENSHOT_BYTES = 2 * 1024 * 1024
export const MAX_SCREENSHOTS_PER_BUG = 6
const UPLOAD_TIMEOUT_MS = 60_000

const NETLIFY_BASE = import.meta.env.VITE_NETLIFY_FUNCTIONS_URL || '/.netlify/functions'

function withTimeout<T>(promise: Promise<T>, ms: number, message: string): Promise<T> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error(message)), ms)
    promise.then(
      value => {
        clearTimeout(timer)
        resolve(value)
      },
      error => {
        clearTimeout(timer)
        reject(error)
      }
    )
  })
}

export function inferContentType(file: File): string {
  if (file.type && ALLOWED_SCREENSHOT_TYPES.includes(file.type as (typeof ALLOWED_SCREENSHOT_TYPES)[number])) {
    return file.type
  }

  const ext = file.name.split('.').pop()?.toLowerCase()
  if (ext === 'png') return 'image/png'
  if (ext === 'webp') return 'image/webp'
  if (ext === 'jpg' || ext === 'jpeg') return 'image/jpeg'
  return file.type || 'image/jpeg'
}

export function validateScreenshotFile(file: File): string | null {
  const contentType = inferContentType(file)
  if (!ALLOWED_SCREENSHOT_TYPES.includes(contentType as (typeof ALLOWED_SCREENSHOT_TYPES)[number])) {
    return 'Screenshots must be JPEG, PNG, or WebP.'
  }
  if (file.size >= MAX_SCREENSHOT_BYTES) {
    return 'Each screenshot must be smaller than 2 MB.'
  }
  return null
}

function readFileAsBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      const result = reader.result
      if (typeof result !== 'string') {
        reject(new Error(`Failed to read "${file.name}".`))
        return
      }
      const comma = result.indexOf(',')
      resolve(comma >= 0 ? result.slice(comma + 1) : result)
    }
    reader.onerror = () => reject(new Error(`Failed to read "${file.name}".`))
    reader.readAsDataURL(file)
  })
}

async function uploadSingleScreenshot(
  projectId: string,
  bugShortId: string,
  userId: string,
  file: File
): Promise<string> {
  const dataBase64 = await readFileAsBase64(file)
  const contentType = inferContentType(file)

  let response: Response
  try {
    response = await withTimeout(
      fetch(`${NETLIFY_BASE}/upload-bug-screenshot`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          projectId,
          userId,
          bugShortId,
          fileName: file.name,
          contentType,
          dataBase64,
        }),
      }),
      UPLOAD_TIMEOUT_MS,
      `Upload timed out for "${file.name}". Check that Netlify functions are running and Cloudinary env vars are set.`
    )
  } catch {
    throw new Error(
      'Could not reach the upload service. From the project root run: netlify functions:serve --port 8888'
    )
  }

  const responseType = response.headers.get('content-type') || ''
  const payload = responseType.includes('application/json')
    ? await response.json().catch(() => ({}))
    : { error: await response.text().catch(() => '') }
  if (!response.ok) {
    throw new Error(
      payload.error || `Upload failed for "${file.name}" (HTTP ${response.status}).`
    )
  }

  if (!payload.url || typeof payload.url !== 'string') {
    throw new Error(`Upload succeeded for "${file.name}" but no image URL was returned.`)
  }

  return payload.url
}

export async function uploadBugScreenshots(
  projectId: string,
  bugShortId: string,
  files: File[]
): Promise<string[]> {
  if (files.length > MAX_SCREENSHOTS_PER_BUG) {
    throw new Error(`You can attach at most ${MAX_SCREENSHOTS_PER_BUG} screenshots per bug.`)
  }

  await auth.authStateReady()
  const userId = auth.currentUser?.uid
  if (!userId) {
    throw new Error('You must be signed in to upload screenshots.')
  }

  const urls: string[] = []
  for (const file of files) {
    const invalid = validateScreenshotFile(file)
    if (invalid) throw new Error(invalid)
    urls.push(await uploadSingleScreenshot(projectId, bugShortId, userId, file))
  }

  return urls
}
