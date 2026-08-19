<script setup lang="ts">
import type { PageMetrics } from '@/types'

const props = defineProps<{
  metrics: PageMetrics
}>()

function openPageSpeed() {
  const url = encodeURIComponent(props.metrics.url)
  chrome.tabs.create({ url: `https://pagespeed.web.dev/analysis?url=${url}` })
}
</script>

<template>
  <div class="space-y-3">
    <!-- Image Stats Summary Cards -->
    <div class="grid grid-cols-4 gap-2 text-center">
      <div class="card p-2">
        <span class="text-[10px] font-semibold text-gray-400 block">TOTAL</span>
        <span class="text-sm font-bold text-gray-900">{{ metrics.imageCount }}</span>
      </div>
      <div class="card p-2">
        <span class="text-[10px] font-semibold text-gray-400 block">MISSING ALT</span>
        <span class="text-sm font-bold" :class="metrics.missingAltCount > 0 ? 'text-amber-600' : 'text-green-600'">
          {{ metrics.missingAltCount }}
        </span>
      </div>
      <div class="card p-2">
        <span class="text-[10px] font-semibold text-gray-400 block">MISSING TITLE</span>
        <span class="text-sm font-bold text-gray-700">{{ metrics.missingTitleCount }}</span>
      </div>
      <div class="card p-2">
        <span class="text-[10px] font-semibold text-gray-400 block">BROKEN</span>
        <span class="text-sm font-bold" :class="metrics.brokenImages > 0 ? 'text-red-600' : 'text-green-600'">
          {{ metrics.brokenImages }}
        </span>
      </div>
    </div>

    <!-- Broken Images Alert -->
    <div v-if="metrics.brokenImages > 0" class="p-2.5 rounded bg-red-50 border border-red-200 text-xs text-red-700 flex items-center justify-between">
      <span>⚠️ <strong>{{ metrics.brokenImages }} Broken Image(s) detected!</strong></span>
      <span class="text-[10px] text-red-500">Will auto-draft bug</span>
    </div>

    <!-- Image List Preview -->
    <div class="card p-3 space-y-2">
      <div class="flex items-center justify-between">
        <span class="text-xs font-semibold text-gray-500">IMAGES PREVIEW ({{ metrics.images.length }})</span>
        <button @click="openPageSpeed" class="text-xs text-indigo-600 hover:text-indigo-700 font-medium">
          ⚡ PageSpeed Audit →
        </button>
      </div>

      <div v-if="metrics.images.length === 0" class="text-xs text-gray-400 py-3 text-center">
        No &lt;img&gt; tags found on this page.
      </div>

      <div v-else class="space-y-2 max-h-[300px] overflow-y-auto pr-1">
        <div
          v-for="(img, idx) in metrics.images"
          :key="idx"
          class="flex items-start gap-2.5 p-2 rounded border border-gray-100 bg-gray-50/50 hover:bg-gray-50 text-xs transition-colors"
        >
          <!-- Thumbnail preview with broken fallback -->
          <div class="w-10 h-10 rounded bg-gray-200 flex-shrink-0 overflow-hidden flex items-center justify-center border border-gray-200">
            <img
              v-if="!img.broken && img.src"
              :src="img.src"
              :alt="img.alt"
              class="w-full h-full object-cover"
              @error="(e) => (e.target as HTMLElement).style.display = 'none'"
            />
            <span v-else class="text-xs text-gray-400">🖼️</span>
          </div>

          <div class="flex-1 min-w-0 space-y-1">
            <p class="font-mono text-[11px] text-gray-700 truncate" :title="img.src">{{ img.src }}</p>
            <div class="flex flex-wrap items-center gap-1.5 text-[10px]">
              <span class="badge" :class="img.alt ? 'badge-good' : 'badge-warn'">
                alt: {{ img.alt ? `"${img.alt.slice(0, 20)}"` : 'MISSING' }}
              </span>
              <span v-if="img.broken" class="badge badge-bad">BROKEN</span>
              <span v-if="!img.title" class="text-gray-400">no title</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
