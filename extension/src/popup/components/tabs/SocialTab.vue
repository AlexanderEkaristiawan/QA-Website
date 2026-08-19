<script setup lang="ts">
import type { PageMetrics } from '@/types'

defineProps<{
  metrics: PageMetrics
}>()
</script>

<template>
  <div class="space-y-3">
    <!-- Structured Data Status -->
    <div class="card p-3 flex items-center justify-between">
      <div>
        <span class="text-xs font-semibold text-gray-900 block">Schema.org Structured Data (JSON-LD)</span>
        <span class="text-[11px] text-gray-500">Rich snippets for Google Search</span>
      </div>
      <span class="badge" :class="metrics.hasSchemaOrg ? 'badge-good' : 'badge-warn'">
        {{ metrics.hasSchemaOrg ? '✓ Detected' : '❌ Not Found' }}
      </span>
    </div>

    <!-- OpenGraph (Facebook / LinkedIn) -->
    <div class="card p-3 space-y-2">
      <div class="flex items-center justify-between">
        <span class="text-xs font-semibold text-gray-700">OPENGRAPH META (og:*)</span>
        <span class="badge" :class="metrics.hasOpenGraph ? 'badge-good' : 'badge-neutral'">
          {{ metrics.hasOpenGraph ? `${Object.keys(metrics.openGraphTags).length} Tags` : 'None' }}
        </span>
      </div>

      <div v-if="!metrics.hasOpenGraph" class="text-xs text-gray-400 py-2">
        No OpenGraph (og:*) tags found on this page.
      </div>

      <div v-else class="space-y-1.5 max-h-[160px] overflow-y-auto">
        <div
          v-for="(val, key) in metrics.openGraphTags"
          :key="key"
          class="p-1.5 rounded bg-gray-50 border border-gray-100 text-xs"
        >
          <span class="font-mono text-[10px] text-indigo-600 font-bold block">{{ key }}</span>
          <span class="text-gray-800 break-words">{{ val }}</span>
        </div>
      </div>
    </div>

    <!-- Twitter Card -->
    <div class="card p-3 space-y-2">
      <div class="flex items-center justify-between">
        <span class="text-xs font-semibold text-gray-700">TWITTER CARD (twitter:*)</span>
        <span class="badge" :class="metrics.hasTwitterCard ? 'badge-good' : 'badge-neutral'">
          {{ metrics.hasTwitterCard ? `${Object.keys(metrics.twitterCardTags).length} Tags` : 'None' }}
        </span>
      </div>

      <div v-if="!metrics.hasTwitterCard" class="text-xs text-gray-400 py-2">
        No Twitter Card tags found on this page.
      </div>

      <div v-else class="space-y-1.5 max-h-[160px] overflow-y-auto">
        <div
          v-for="(val, key) in metrics.twitterCardTags"
          :key="key"
          class="p-1.5 rounded bg-gray-50 border border-gray-100 text-xs"
        >
          <span class="font-mono text-[10px] text-sky-600 font-bold block">{{ key }}</span>
          <span class="text-gray-800 break-words">{{ val }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
