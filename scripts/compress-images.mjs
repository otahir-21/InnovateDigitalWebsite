/**
 * Compresses oversized images in /public recursively.
 * - JPG/JPEG → quality 82, max 1600px wide
 * - PNG      → quality 85 (PNG→PNG via sharp), max 1600px wide
 * Skips files already under 300KB.
 * Run: node scripts/compress-images.mjs
 */

import sharp from 'sharp'
import { readdir, stat } from 'fs/promises'
import { join, extname } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const PUBLIC_DIR = join(__dirname, '..', 'public')
const MAX_WIDTH = 1600
const SKIP_BELOW_BYTES = 300_000  // skip files already < 300KB
const JPEG_QUALITY = 82
const PNG_QUALITY = 85

async function getFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...(await getFiles(full)))
    } else {
      files.push(full)
    }
  }
  return files
}

async function compressFile(filePath) {
  const ext = extname(filePath).toLowerCase()
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) return

  const { size: before } = await stat(filePath)
  if (before < SKIP_BELOW_BYTES) return

  try {
    const img = sharp(filePath).resize({ width: MAX_WIDTH, withoutEnlargement: true })

    let compressed
    if (ext === '.png') {
      compressed = await img.png({ quality: PNG_QUALITY, compressionLevel: 9 }).toBuffer()
    } else {
      compressed = await img.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toBuffer()
    }

    if (compressed.length < before) {
      await sharp(compressed).toFile(filePath)
      const saved = Math.round((before - compressed.length) / 1024)
      const pct = Math.round(((before - compressed.length) / before) * 100)
      console.log(`  ✅ ${filePath.replace(PUBLIC_DIR, '')} — saved ${saved}KB (${pct}%)`)
    } else {
      console.log(`  ⏭  ${filePath.replace(PUBLIC_DIR, '')} — already optimal`)
    }
  } catch (err) {
    console.error(`  ❌ ${filePath.replace(PUBLIC_DIR, '')} — ${err.message}`)
  }
}

console.log('🖼  Compressing images in /public...\n')
const files = await getFiles(PUBLIC_DIR)
let count = 0
for (const f of files) {
  const ext = extname(f).toLowerCase()
  if (['.jpg', '.jpeg', '.png'].includes(ext)) {
    await compressFile(f)
    count++
  }
}
console.log(`\nDone. Checked ${count} images.`)
