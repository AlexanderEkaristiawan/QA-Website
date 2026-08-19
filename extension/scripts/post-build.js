import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')
const distDir = path.resolve(rootDir, 'dist')

// Copy manifest.json
const manifestSrc = path.join(rootDir, 'manifest.json')
const manifestDist = path.join(distDir, 'manifest.json')
if (fs.existsSync(manifestSrc)) {
  fs.copyFileSync(manifestSrc, manifestDist)
  console.log('✓ Copied manifest.json to dist/')
}

// Copy assets folder
const assetsSrc = path.join(rootDir, 'assets')
const assetsDist = path.join(distDir, 'assets')
if (fs.existsSync(assetsSrc)) {
  if (!fs.existsSync(assetsDist)) fs.mkdirSync(assetsDist, { recursive: true })
  fs.cpSync(assetsSrc, assetsDist, { recursive: true })
  console.log('✓ Copied assets/ to dist/assets/')
}

console.log('Extension dist ready to load in Chrome (chrome://extensions -> Load unpacked -> select "extension/dist")')
