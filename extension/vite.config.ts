import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: { '@': resolve(__dirname, 'src') },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        popup: resolve(__dirname, 'src/popup/popup.html'),
        'src/background/service-worker': resolve(__dirname, 'src/background/service-worker.ts'),
        // Built as a standalone self-contained content script (IIFE) so it can
        // be injected into page tabs via chrome.scripting.executeScript({ files })
        'src/content/inspect-engine': resolve(__dirname, 'src/content/inspect-engine.ts'),
      },
      output: {
        // Content scripts must be IIFE (not ES modules) so they work when
        // injected via chrome.scripting.executeScript files mode
        format: 'es',
        entryFileNames: (chunk) => {
          if (chunk.name === 'src/content/inspect-engine') {
            return '[name].js'
          }
          return '[name].js'
        },
        chunkFileNames: 'chunks/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
  },
})

