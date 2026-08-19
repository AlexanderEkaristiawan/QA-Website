<script setup lang="ts">
import { computed } from 'vue'
import type { PageMetrics } from '@/types'

const props = defineProps<{
  metrics: PageMetrics
  titleRange?: { min: number; max: number }
  descRange?: { min: number; max: number }
}>()

const tMin = computed(() => props.titleRange?.min ?? 30)
const tMax = computed(() => props.titleRange?.max ?? 65)
const dMin = computed(() => props.descRange?.min ?? 120)
const dMax = computed(() => props.descRange?.max ?? 320)

const isTitleGood = computed(() => props.metrics.titleLength >= tMin.value && props.metrics.titleLength <= tMax.value)
const isDescGood = computed(() => props.metrics.descriptionLength >= dMin.value && props.metrics.descriptionLength <= dMax.value)

const originUrl = computed(() => {
  try {
    return new URL(props.metrics.url).origin
  } catch {
    return ''
  }
})

function openUrl(path: string) {
  if (!originUrl.value) return
  chrome.tabs.create({ url: `${originUrl.value}/${path}` })
}
</script>

<template>
  <div class="space-y-3">
    <!-- Title Section -->
    <div class="card space-y-1.5">
      <div class="flex items-center justify-between">
        <span class="text-xs font-semibold text-gray-500">PAGE TITLE</span>
        <span class="badge" :class="isTitleGood ? 'badge-good' : 'badge-warn'">
          {{ metrics.titleLength }} chars (ideal {{ tMin }}-{{ tMax }})
        </span>
      </div>
      <p class="text-sm font-semibold text-gray-900 break-words">{{ metrics.title || '(Missing title tag)' }}</p>
    </div>

    <!-- Meta Description -->
    <div class="card space-y-1.5">
      <div class="flex items-center justify-between">
        <span class="text-xs font-semibold text-gray-500">META DESCRIPTION</span>
        <span class="badge" :class="isDescGood ? 'badge-good' : 'badge-warn'">
          {{ metrics.descriptionLength }} chars (ideal {{ dMin }}-{{ dMax }})
        </span>
      </div>
      <p class="text-xs text-gray-700 break-words leading-relaxed">
        {{ metrics.metaDescription || '(Missing meta description)' }}
      </p>
    </div>

    <!-- Key Metadata Grid -->
    <div class="grid grid-cols-2 gap-2">
      <div class="card p-2.5 space-y-1">
        <span class="text-[11px] font-semibold text-gray-400 block">CANONICAL URL</span>
        <p class="text-xs font-mono text-gray-800 truncate" :title="metrics.canonicalUrl || 'None'">
          {{ metrics.canonicalUrl ? '✓ Present' : '❌ Missing' }}
        </p>
      </div>

      <div class="card p-2.5 space-y-1">
        <span class="text-[11px] font-semibold text-gray-400 block">ROBOTS META</span>
        <p class="text-xs font-mono text-gray-800 truncate" :title="metrics.robotsMeta || 'None'">
          {{ metrics.robotsMeta || 'Default (Index, Follow)' }}
        </p>
      </div>

      <div class="card p-2.5 space-y-1">
        <span class="text-[11px] font-semibold text-gray-400 block">LANGUAGE (lang)</span>
        <p class="text-xs font-mono text-gray-800">{{ metrics.langAttr || 'None declared' }}</p>
      </div>

      <div class="card p-2.5 space-y-1">
        <span class="text-[11px] font-semibold text-gray-400 block">AUTHOR</span>
        <p class="text-xs font-mono text-gray-800 truncate">{{ metrics.author || 'None' }}</p>
      </div>
    </div>

    <!-- Analytics & Tracking -->
    <div class="card p-3 space-y-2">
      <div class="flex items-center justify-between">
        <span class="text-xs font-semibold text-gray-500">ANALYTICS & SCRIPTS</span>
        <span class="badge" :class="metrics.hasAnalyticsScript ? 'badge-good' : 'badge-neutral'">
          {{ metrics.hasAnalyticsScript ? `${metrics.analyticsScripts.length} Detected` : 'None Found' }}
        </span>
      </div>
      <div v-if="metrics.analyticsScripts.length" class="flex flex-wrap gap-1">
        <span v-for="src in metrics.analyticsScripts" :key="src" class="pill-tag text-[10px] text-gray-600 font-mono truncate max-w-full">
          {{ src.split('/').slice(2, 3).join('') || src }}
        </span>
      </div>
    </div>

    <!-- Quick Server Files Access -->
    <div class="card p-3 space-y-2">
      <span class="text-xs font-semibold text-gray-500 block">SITE RESOURCES</span>
      <div class="flex gap-2">
        <button @click="openUrl('robots.txt')" class="btn btn-secondary text-xs flex-1">
          📄 View robots.txt
        </button>
        <button @click="openUrl('sitemap.xml')" class="btn btn-secondary text-xs flex-1">
          🗺️ View sitemap.xml
        </button>
      </div>
    </div>
  </div>
</template>
