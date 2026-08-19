<script setup lang="ts">
import type { PageMetrics } from '@/types'

defineProps<{
  metrics: PageMetrics
}>()
</script>

<template>
  <div class="space-y-3">
    <!-- Header Counts Summary -->
    <div class="card p-3">
      <span class="text-xs font-semibold text-gray-500 block mb-2">HEADER TAG DISTRIBUTION</span>
      <div class="grid grid-cols-6 gap-1 text-center">
        <div v-for="lvl in [1, 2, 3, 4, 5, 6]" :key="lvl" class="bg-gray-50 rounded p-1.5 border border-gray-100">
          <span class="text-[10px] font-bold text-gray-500 block">H{{ lvl }}</span>
          <span
            class="text-sm font-extrabold"
            :class="lvl === 1 && metrics.headerCounts.h1 === 0 ? 'text-red-500' : lvl === 1 && metrics.headerCounts.h1 === 1 ? 'text-green-600' : 'text-gray-900'"
          >
            {{ (metrics.headerCounts as any)[`h${lvl}`] }}
          </span>
        </div>
      </div>
    </div>

    <!-- H1 Status Alert -->
    <div v-if="metrics.headerCounts.h1 === 0" class="p-2.5 rounded bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
      <span>❌</span>
      <span><strong>Missing H1 Tag!</strong> Every page should have exactly one main &lt;h1&gt; heading.</span>
    </div>
    <div v-else-if="metrics.headerCounts.h1 > 1" class="p-2.5 rounded bg-amber-50 border border-amber-200 text-xs text-amber-700 flex items-center gap-2">
      <span>⚠️</span>
      <span><strong>Multiple H1 Tags ({{ metrics.headerCounts.h1 }})</strong> — Having more than one H1 may confuse crawlers.</span>
    </div>

    <!-- Headers Document Order Tree -->
    <div class="card p-3 space-y-2">
      <span class="text-xs font-semibold text-gray-500 block">HEADINGS IN DOCUMENT ORDER ({{ metrics.headers.length }})</span>
      
      <div v-if="metrics.headers.length === 0" class="text-xs text-gray-400 py-3 text-center">
        No headings (H1-H6) found on this page.
      </div>

      <div v-else class="space-y-1.5 max-h-[300px] overflow-y-auto pr-1">
        <div
          v-for="(h, idx) in metrics.headers"
          :key="idx"
          class="flex items-start gap-2 p-1.5 rounded hover:bg-gray-50 text-xs transition-colors border border-transparent hover:border-gray-100"
          :style="{ paddingLeft: `${(h.level - 1) * 12 + 6}px` }"
        >
          <span
            class="badge text-[10px] px-1.5 py-0.5 uppercase flex-shrink-0"
            :class="h.level === 1 ? 'bg-indigo-100 text-indigo-700 font-bold' : 'bg-gray-100 text-gray-600'"
          >
            H{{ h.level }}
          </span>
          <span class="text-gray-800 break-words flex-1">{{ h.text || '(Empty heading)' }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
