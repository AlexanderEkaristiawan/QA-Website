"<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuditStore } from '@/composables/useFirestore'
import type { AuditJob } from '@/types'

const route = useRoute()
const router = useRouter()
const auditStore = useAuditStore()

const audit = ref<AuditJob | null>(null)
const loading = ref(true)

onMounted(async () => {
  const auditId = route.params.auditId as string
  audit.value = await auditStore.getAuditJob(auditId)
  loading.value = false
})

function getScoreColor(score: number): string {
  if (score >= 90) return 'text-score-good'
  if (score >= 50) return 'text-score-medium'
  return 'text-score-bad'
}

function goBack() {
  router.push(`/projects/${route.params.id}`)
}
</script>

<template>
  <div v-if="loading" class="flex items-center justify-center py-12">
    <span class="animate-spin text-2xl">⟳</span>
  </div>

  <div v-else-if="!audit" class="card p-12 text-center">
    <p class="text-4xl mb-4">❌</p>
    <h3 class="text-lg font-semibold text-gray-900">Audit not found</h3>
    <button @click="goBack" class="btn-primary mt-4">Go Back</button>
  </div>

  <div v-else>
    <div class="mb-8">
      <button @click="goBack" class="text-sm text-primary-600 hover:text-primary-700 mb-2">← Back to Project</button>
      <h1 class="text-2xl font-bold text-gray-900">Audit Results</h1>
      <p class="mt-1 text-gray-500">{{ audit.timestamp?.toDate?.().toLocaleString() || 'Processing...' }}</p>
    </div>

    <!-- Status Badge -->
    <div class="mb-6">
      <span
        class="badge"
        :class="{
          'badge-success': audit.status === 'completed',
          'badge-warning': audit.status === 'running',
          'badge-danger': audit.status === 'failed',
        }"
      >
        {{ audit.status.toUpperCase() }}
      </span>
    </div>

    <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <!-- Performance Scores -->
      <div class="card p-6">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">🚀 Performance</h3>
        <div class="space-y-4">
          <div v-for="(score, key) in audit.performanceSummary" :key="key" class="flex items-center justify-between">
            <span class="text-sm text-gray-600 capitalize">{{ key.replace(/([A-Z])/g, ' $1') }}</span>
            <span class="text-lg font-bold" :class="getScoreColor(score)">{{ score }}</span>
          </div>
        </div>
      </div>

      <!-- Security Alerts -->
      <div class="card p-6">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">🔒 Security</h3>
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <span class="text-sm text-gray-600">High Risk</span>
            <span class="badge-danger">{{ audit.securitySummary.highAlerts }}</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-sm text-gray-600">Medium Risk</span>
            <span class="badge-warning">{{ audit.securitySummary.mediumAlerts }}</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-sm text-gray-600">Low Risk</span>
            <span class="badge-info">{{ audit.securitySummary.lowAlerts }}</span>
          </div>
        </div>
      </div>

      <!-- SEO Summary -->
      <div class="card p-6">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">🔍 SEO</h3>
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <span class="text-sm text-gray-600">Pages Crawled</span>
            <span class="text-lg font-bold text-gray-900">{{ audit.seoSummary.pageCount }}</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-sm text-gray-600">Issues Found</span>
            <span class="text-lg font-bold text-red-600">{{ audit.seoSummary.totalErrors }}</span>
          </div>
        </div>
      </div>

      <!-- Missing Headers -->
      <div class="card p-6">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">🛡️ Missing Headers</h3>
        <div v-if="audit.securitySummary.missingHeaders.length" class="space-y-2">
          <div v-for="header in audit.securitySummary.missingHeaders" :key="header" class="badge-danger">
            {{ header }}
          </div>
        </div>
        <p v-else class="text-sm text-gray-500">All security headers present</p>
      </div>
    </div>
  </div>
</template>
"
