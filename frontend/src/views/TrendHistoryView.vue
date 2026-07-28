"<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useProjectStore, useAuditStore } from '@/composables/useFirestore'
import TrendChart from '@/components/audit/TrendChart.vue'
import type { Project, AuditJob, TrendDataPoint } from '@/types'

const route = useRoute()
const projectStore = useProjectStore()
const auditStore = useAuditStore()

const project = ref<Project | null>(null)
const auditJobs = ref<AuditJob[]>([])
const loading = ref(true)
const selectedMetric = ref<'performance' | 'accessibility' | 'seo' | 'bestPractices'>('performance')
let unsubscribe: (() => void) | null = null

const trendData = computed<TrendDataPoint[]>(() => {
  return auditJobs.value
    .filter(j => j.status === 'completed' && j.performanceSummary)
    .map(j => ({
      date: j.timestamp?.toDate?.().toLocaleDateString() || 'Unknown',
      performance: j.performanceSummary.performance || 0,
      accessibility: j.performanceSummary.accessibility || 0,
      seo: j.performanceSummary.seo || 0,
      bestPractices: j.performanceSummary.bestPractices || 0,
      securityAlerts: j.securitySummary.highAlerts + j.securitySummary.mediumAlerts + j.securitySummary.lowAlerts,
    }))
    .reverse()
})

onMounted(async () => {
  const projectId = route.params.id as string
  project.value = await projectStore.getProject(projectId)

  if (projectId) {
    unsubscribe = auditStore.subscribeAuditJobs(projectId, (jobs) => {
      auditJobs.value = jobs
      loading.value = false
    })
  }
})

onUnmounted(() => {
  if (unsubscribe) unsubscribe()
})

const metrics = [
  { key: 'performance', label: 'Performance', color: '#22c55e' },
  { key: 'accessibility', label: 'Accessibility', color: '#f59e0b' },
  { key: 'seo', label: 'SEO', color: '#3b82f6' },
  { key: 'bestPractices', label: 'Best Practices', color: '#8b5cf6' },
] as const
</script>

<template>
  <div>
    <div class="mb-8">
      <router-link :to="`/projects/${route.params.id}`" class="text-sm text-primary-600 hover:text-primary-700 mb-2 block">
        ← Back to Project
      </router-link>
      <h1 class="text-2xl font-bold text-gray-900">📈 Historical Trends</h1>
      <p v-if="project" class="mt-1 text-gray-500">{{ project.name }} - {{ project.targetUrl }}</p>
    </div>

    <div v-if="loading" class="flex items-center justify-center py-12">
      <span class="animate-spin text-2xl">⟳</span>
    </div>

    <div v-else-if="trendData.length === 0" class="card p-12 text-center">
      <p class="text-4xl mb-4">📊</p>
      <h3 class="text-lg font-semibold text-gray-900">No trend data yet</h3>
      <p class="mt-1 text-sm text-gray-500">Run multiple audits to see performance trends over time</p>
      <router-link :to="`/projects/${route.params.id}`" class="btn-primary mt-4 inline-block">
        Run an Audit
      </router-link>
    </div>

    <div v-else class="space-y-6">
      <!-- Metric Selector -->
      <div class="flex gap-2">
        <button
          v-for="metric in metrics"
          :key="metric.key"
          @click="selectedMetric = metric.key"
          class="btn"
          :class="selectedMetric === metric.key ? 'btn-primary' : 'btn-secondary'"
        >
          {{ metric.label }}
        </button>
      </div>

      <!-- Chart -->
      <div class="card p-6">
        <TrendChart :data="trendData" :metric="selectedMetric" />
      </div>

      <!-- Data Table -->
      <div class="card">
        <div class="card-header">
          <h3 class="text-lg font-semibold text-gray-900">Audit History</h3>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b border-gray-200 bg-gray-50">
                <th class="px-6 py-3 text-left font-medium text-gray-500">Date</th>
                <th class="px-6 py-3 text-left font-medium text-gray-500">Performance</th>
                <th class="px-6 py-3 text-left font-medium text-gray-500">Accessibility</th>
                <th class="px-6 py-3 text-left font-medium text-gray-500">SEO</th>
                <th class="px-6 py-3 text-left font-medium text-gray-500">Best Practices</th>
                <th class="px-6 py-3 text-left font-medium text-gray-500">Security Alerts</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr v-for="point in trendData" :key="point.date" class="hover:bg-gray-50">
                <td class="px-6 py-4 text-gray-900">{{ point.date }}</td>
                <td class="px-6 py-4">
                  <span class="font-medium" :class="point.performance >= 90 ? 'text-green-600' : point.performance >= 50 ? 'text-yellow-600' : 'text-red-600'">
                    {{ point.performance }}
                  </span>
                </td>
                <td class="px-6 py-4">
                  <span class="font-medium" :class="point.accessibility >= 90 ? 'text-green-600' : point.accessibility >= 50 ? 'text-yellow-600' : 'text-red-600'">
                    {{ point.accessibility }}
                  </span>
                </td>
                <td class="px-6 py-4">
                  <span class="font-medium" :class="point.seo >= 90 ? 'text-green-600' : point.seo >= 50 ? 'text-yellow-600' : 'text-red-600'">
                    {{ point.seo }}
                  </span>
                </td>
                <td class="px-6 py-4">
                  <span class="font-medium" :class="point.bestPractices >= 90 ? 'text-green-600' : point.bestPractices >= 50 ? 'text-yellow-600' : 'text-red-600'">
                    {{ point.bestPractices }}
                  </span>
                </td>
                <td class="px-6 py-4">
                  <span class="font-medium" :class="point.securityAlerts > 5 ? 'text-red-600' : point.securityAlerts > 0 ? 'text-yellow-600' : 'text-green-600'">
                    {{ point.securityAlerts }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
"
