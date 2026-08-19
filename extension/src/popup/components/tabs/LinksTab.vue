<script setup lang="ts">
import { ref, computed } from 'vue'
import type { PageMetrics } from '@/types'

const props = defineProps<{
  metrics: PageMetrics
}>()

const filterType = ref<'all' | 'internal' | 'external' | 'duplicates'>('all')

const filteredLinks = computed(() => {
  if (filterType.value === 'internal') return props.metrics.links.filter(l => l.internal)
  if (filterType.value === 'external') return props.metrics.links.filter(l => !l.internal)
  if (filterType.value === 'duplicates') return props.metrics.links.filter(l => l.duplicate)
  return props.metrics.links
})
</script>

<template>
  <div class="space-y-3">
    <!-- Link Stats Cards -->
    <div class="grid grid-cols-4 gap-2 text-center">
      <div class="card p-2">
        <span class="text-[10px] font-semibold text-gray-400 block">TOTAL</span>
        <span class="text-sm font-bold text-gray-900">{{ metrics.linkCount }}</span>
      </div>
      <div class="card p-2">
        <span class="text-[10px] font-semibold text-gray-400 block">INTERNAL</span>
        <span class="text-sm font-bold text-indigo-600">{{ metrics.internalLinks }}</span>
      </div>
      <div class="card p-2">
        <span class="text-[10px] font-semibold text-gray-400 block">EXTERNAL</span>
        <span class="text-sm font-bold text-gray-700">{{ metrics.externalLinks }}</span>
      </div>
      <div class="card p-2">
        <span class="text-[10px] font-semibold text-gray-400 block">DUPLICATES</span>
        <span class="text-sm font-bold" :class="metrics.duplicateLinksCount > 0 ? 'text-amber-600' : 'text-green-600'">
          {{ metrics.duplicateLinksCount }}
        </span>
      </div>
    </div>

    <!-- Filter Buttons -->
    <div class="flex gap-1.5">
      <button
        v-for="btn in [
          { key: 'all', label: `All (${metrics.links.length})` },
          { key: 'internal', label: `Internal (${metrics.internalLinks})` },
          { key: 'external', label: `External (${metrics.externalLinks})` },
          { key: 'duplicates', label: `Duplicates (${metrics.duplicateLinksCount})` },
        ] as const"
        :key="btn.key"
        @click="filterType = btn.key"
        class="btn text-[11px] py-1 px-2 flex-1"
        :class="filterType === btn.key ? 'btn-primary' : 'btn-secondary'"
      >
        {{ btn.label }}
      </button>
    </div>

    <!-- Links List -->
    <div class="card p-3 space-y-2">
      <span class="text-xs font-semibold text-gray-500 block">LINKS BREAKDOWN ({{ filteredLinks.length }})</span>

      <div v-if="filteredLinks.length === 0" class="text-xs text-gray-400 py-3 text-center">
        No links match the selected filter.
      </div>

      <div v-else class="space-y-1.5 max-h-[280px] overflow-y-auto pr-1">
        <div
          v-for="(link, idx) in filteredLinks"
          :key="idx"
          class="p-2 rounded border border-gray-100 bg-gray-50/50 hover:bg-gray-50 text-xs transition-colors space-y-1"
        >
          <div class="flex items-center justify-between gap-2">
            <span class="font-medium text-gray-900 truncate flex-1">{{ link.text || '(No anchor text)' }}</span>
            <div class="flex items-center gap-1 flex-shrink-0">
              <span
                class="badge text-[9px] px-1"
                :class="link.internal ? 'bg-indigo-50 text-indigo-700' : 'bg-gray-100 text-gray-600'"
              >
                {{ link.internal ? 'Internal' : 'External' }}
              </span>
              <span v-if="link.type !== 'standard'" class="badge badge-neutral text-[9px] px-1">
                {{ link.type }}
              </span>
              <span v-if="link.duplicate" class="badge badge-warn text-[9px] px-1">
                Duplicate
              </span>
            </div>
          </div>
          <p class="font-mono text-[10px] text-gray-500 truncate" :title="link.href">{{ link.href }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
