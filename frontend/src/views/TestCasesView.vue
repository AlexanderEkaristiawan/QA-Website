<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { useTestCaseStore, useProjectStore } from '@/composables/useFirestore'
import { useAI } from '@/composables/useAI'
import type { TestCase, Project } from '@/types'
import { formatTimestampFull } from '@/types'

const route = useRoute()
const projectStore = useProjectStore()
const testCaseStore = useTestCaseStore()
const { generatePlaywrightScript, generating } = useAI()

const project = ref<Project | null>(null)
const testCases = ref<TestCase[]>([])
const loading = ref(true)
const selectedTestCase = ref<TestCase | null>(null)
const showCreateForm = ref(false)
const creating = ref(false)
const createError = ref('')
const newTestCase = ref({
  title: '',
  preconditions: '',
  steps: '',
  expectedResult: '',
  testData: '',
  tags: '',
})
const showSandboxWarning = ref(false)
const pendingDownload = ref<{ script: string; title: string } | null>(null)
const generatingFor = ref<string | null>(null)
let unsubscribe: (() => void) | null = null

onMounted(async () => {
  const projectId = route.params.id as string
  project.value = await projectStore.getProject(projectId)
  if (projectId) {
    unsubscribe = testCaseStore.subscribeTestCases(projectId, (data) => {
      testCases.value = data
      loading.value = false
    })
  }
})

onUnmounted(() => {
  unsubscribe?.()
})

function openTestCase(tc: TestCase) {
  selectedTestCase.value = tc
}

function closeTestCase() {
  selectedTestCase.value = null
}

function resetCreateForm() {
  newTestCase.value = {
    title: '',
    preconditions: '',
    steps: '',
    expectedResult: '',
    testData: '',
    tags: '',
  }
  createError.value = ''
}

async function createManualTestCase() {
  const projectId = route.params.id as string
  const steps = newTestCase.value.steps
    .split('\n')
    .map(step => step.trim())
    .filter(Boolean)

  if (!newTestCase.value.title.trim() || !newTestCase.value.expectedResult.trim() || steps.length === 0) {
    createError.value = 'Title, at least one step, and expected result are required.'
    return
  }

  creating.value = true
  createError.value = ''
  try {
    await testCaseStore.createTestCase({
      projectId,
      title: newTestCase.value.title.trim(),
      preconditions: newTestCase.value.preconditions.trim(),
      steps,
      expectedResult: newTestCase.value.expectedResult.trim(),
      testData: newTestCase.value.testData.trim() || undefined,
      tags: newTestCase.value.tags
        .split(',')
        .map(tag => tag.trim())
        .filter(Boolean),
      createdBy: project.value?.ownerId,
    })
    showCreateForm.value = false
    resetCreateForm()
  } catch (err: any) {
    createError.value = err.message || 'Failed to create test case.'
  } finally {
    creating.value = false
  }
}

async function updateStatus(tc: TestCase, status: TestCase['status']) {
  await testCaseStore.updateTestCase(tc.id, { status })
  if (selectedTestCase.value?.id === tc.id) selectedTestCase.value.status = status
}

/**
 * Generate a Playwright script for a test case.
 * Shows a sandbox warning before downloading.
 */
async function generateScript(tc: TestCase) {
  if (!project.value) return
  generatingFor.value = tc.id

  try {
    const script = await generatePlaywrightScript({
      title: tc.title,
      preconditions: tc.preconditions,
      steps: tc.steps,
      expectedResult: tc.expectedResult,
      targetUrl: project.value.targetUrl,
      testData: tc.testData,
    })

    // Save script to Firestore
    await testCaseStore.updateTestCase(tc.id, { playwrightScript: script })

    // Update local state
    if (selectedTestCase.value?.id === tc.id) selectedTestCase.value.playwrightScript = script
    const idx = testCases.value.findIndex(t => t.id === tc.id)
    if (idx !== -1) testCases.value[idx].playwrightScript = script

    // Prompt sandbox warning before download
    pendingDownload.value = { script, title: tc.title }
    showSandboxWarning.value = true
  } finally {
    generatingFor.value = null
  }
}

function confirmDownload() {
  if (!pendingDownload.value) return
  const blob = new Blob([pendingDownload.value.script], { type: 'text/plain' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${pendingDownload.value.title.replace(/\s+/g, '-').toLowerCase()}.spec.ts`
  a.click()
  URL.revokeObjectURL(url)
  showSandboxWarning.value = false
  pendingDownload.value = null
}

function cancelDownload() {
  showSandboxWarning.value = false
  pendingDownload.value = null
}

function getStatusClass(status: string): string {
  switch (status) {
    case 'Passed': return 'bg-green-100 text-green-800'
    case 'Failed': return 'bg-red-100 text-red-800'
    default: return 'bg-gray-100 text-gray-700'
  }
}
</script>

<template>
  <!-- Header -->
  <div class="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
    <div>
      <h1 class="text-2xl font-bold text-gray-900">✅ Test Cases</h1>
      <p class="mt-1 text-sm text-gray-500">{{ testCases.length }} test case(s) — AI-generated Playwright scripts</p>
    </div>
    <button @click="showCreateForm = true" class="btn-primary w-full sm:w-auto">+ Add Test Case</button>
  </div>

  <div v-if="loading" class="flex items-center justify-center py-16">
    <div class="h-8 w-8 rounded-full border-4 border-indigo-500 border-t-transparent animate-spin"></div>
  </div>

  <div v-else-if="testCases.length === 0" class="card p-6 text-center sm:p-16">
    <p class="text-5xl mb-4">🧪</p>
    <h3 class="text-lg font-semibold text-gray-900">No test cases yet</h3>
    <p class="mt-1 text-sm text-gray-500">Add test cases manually or import from audit results</p>
    <button @click="showCreateForm = true" class="btn-primary mt-5">+ Add Test Case</button>
  </div>

  <div v-else class="space-y-3">
    <div
      v-for="tc in testCases"
      :key="tc.id"
      class="card p-4 hover:shadow-md cursor-pointer transition-all hover:-translate-y-0.5"
      @click="openTestCase(tc)"
    >
      <div class="flex items-start justify-between gap-4">
        <div class="min-w-0 flex-1">
          <div class="flex items-center gap-3 flex-wrap">
            <span
              class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold"
              :class="getStatusClass(tc.status)"
            >{{ tc.status }}</span>
            <h3 class="font-semibold text-gray-900 flex-1">{{ tc.title }}</h3>
            <span v-if="tc.playwrightScript" class="inline-flex items-center gap-1 rounded-full bg-purple-100 px-2 py-0.5 text-xs text-purple-700 font-medium">
              🎭 Playwright Ready
            </span>
          </div>
          <div class="flex items-center gap-3 mt-2 flex-wrap">
            <span v-for="tag in tc.tags?.slice(0, 3)" :key="tag" class="inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">{{ tag }}</span>
            <span v-if="tc.lastRun" class="text-xs text-gray-400">
              Last run: {{ formatTimestampFull(tc.lastRun) }}
            </span>
          </div>
        </div>
        <div class="text-right flex-shrink-0">
          <p class="text-xs text-gray-400">{{ tc.steps.length }} steps</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Manual Test Case Modal -->
  <div
    v-if="showCreateForm"
    class="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/60 p-4 backdrop-blur-sm"
    @click.self="showCreateForm = false"
  >
    <div class="card my-4 w-full max-w-2xl">
      <div class="card-header flex items-center justify-between gap-4">
        <div>
          <h2 class="text-lg font-semibold text-gray-900">Add Test Case</h2>
          <p class="mt-1 text-sm text-gray-500">Create a test case for this project.</p>
        </div>
        <button type="button" @click="showCreateForm = false" class="text-xl text-gray-400 hover:text-gray-600" aria-label="Close">✕</button>
      </div>

      <form @submit.prevent="createManualTestCase" class="card-body space-y-4">
        <div>
          <label class="label" for="test-case-title">Title</label>
          <input id="test-case-title" v-model="newTestCase.title" class="input" placeholder="e.g. User can reset their password" required />
        </div>

        <div>
          <label class="label" for="test-case-preconditions">Preconditions</label>
          <textarea id="test-case-preconditions" v-model="newTestCase.preconditions" class="input min-h-20 resize-y" placeholder="e.g. User has an existing account"></textarea>
        </div>

        <div>
          <label class="label" for="test-case-steps">Steps</label>
          <textarea id="test-case-steps" v-model="newTestCase.steps" class="input min-h-32 resize-y" placeholder="Enter one step per line\nOpen the login page\nEnter valid credentials\nClick Sign in" required></textarea>
          <p class="mt-1 text-xs text-gray-500">Enter one step per line.</p>
        </div>

        <div>
          <label class="label" for="test-case-expected">Expected result</label>
          <textarea id="test-case-expected" v-model="newTestCase.expectedResult" class="input min-h-20 resize-y" placeholder="e.g. The user is redirected to the dashboard" required></textarea>
        </div>

        <div class="grid gap-4 sm:grid-cols-2">
          <div>
            <label class="label" for="test-case-data">Test data <span class="font-normal text-gray-400">(optional)</span></label>
            <textarea id="test-case-data" v-model="newTestCase.testData" class="input min-h-20 resize-y" placeholder="username: tester@example.com"></textarea>
          </div>
          <div>
            <label class="label" for="test-case-tags">Tags <span class="font-normal text-gray-400">(optional)</span></label>
            <input id="test-case-tags" v-model="newTestCase.tags" class="input" placeholder="smoke, login" />
            <p class="mt-1 text-xs text-gray-500">Separate tags with commas.</p>
          </div>
        </div>

        <div v-if="createError" class="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">{{ createError }}</div>

        <div class="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
          <button type="button" @click="showCreateForm = false" class="btn-secondary">Cancel</button>
          <button type="submit" class="btn-primary" :disabled="creating">
            <span v-if="creating" class="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
            {{ creating ? 'Adding...' : 'Add Test Case' }}
          </button>
        </div>
      </form>
    </div>
  </div>

  <!-- Test Case Detail Modal -->
  <div
    v-if="selectedTestCase"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
    @click="closeTestCase"
  >
    <div class="card w-full max-w-3xl max-h-[90vh] flex flex-col" @click.stop>
      <div class="card-header flex items-start justify-between gap-4">
        <div class="min-w-0 flex-1">
          <h2 class="text-lg font-semibold text-gray-900 leading-tight">{{ selectedTestCase.title }}</h2>
          <div class="flex items-center gap-2 mt-1">
            <span
              class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold"
              :class="getStatusClass(selectedTestCase.status)"
            >{{ selectedTestCase.status }}</span>
            <span v-if="selectedTestCase.playwrightScript" class="inline-flex items-center gap-1 rounded-full bg-purple-100 px-2 py-0.5 text-xs text-purple-700 font-medium">🎭 Script Generated</span>
          </div>
        </div>
        <button @click="closeTestCase" class="text-gray-400 hover:text-gray-600 text-xl">✕</button>
      </div>

      <div class="card-body overflow-y-auto space-y-5">
        <!-- Status update -->
        <div class="flex items-center gap-4 flex-wrap">
          <div>
            <label class="block text-xs text-gray-500 mb-1">Status</label>
            <select
              :value="selectedTestCase.status"
              @change="updateStatus(selectedTestCase, ($event.target as HTMLSelectElement).value as TestCase['status'])"
              class="input text-sm w-auto"
            >
              <option value="Untested">Untested</option>
              <option value="Passed">Passed</option>
              <option value="Failed">Failed</option>
            </select>
          </div>
          <div v-if="selectedTestCase.lastRun">
            <label class="block text-xs text-gray-500 mb-1">Last Run</label>
            <span class="text-sm text-gray-700">{{ formatTimestampFull(selectedTestCase.lastRun) }}</span>
          </div>
        </div>

        <!-- Preconditions -->
        <div v-if="selectedTestCase.preconditions">
          <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Preconditions</p>
          <p class="text-sm text-gray-700">{{ selectedTestCase.preconditions }}</p>
        </div>

        <!-- Steps -->
        <div>
          <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Steps ({{ selectedTestCase.steps.length }})</p>
          <ol class="space-y-2">
            <li
              v-for="(step, idx) in selectedTestCase.steps"
              :key="idx"
              class="flex gap-3 text-sm"
            >
              <span class="flex-shrink-0 h-5 w-5 rounded-full bg-indigo-100 text-indigo-700 font-semibold text-xs flex items-center justify-center">{{ idx + 1 }}</span>
              <span class="text-gray-700">{{ step }}</span>
            </li>
          </ol>
        </div>

        <!-- Expected Result -->
        <div>
          <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Expected Result</p>
          <p class="text-sm text-gray-700">{{ selectedTestCase.expectedResult }}</p>
        </div>

        <!-- Test Data -->
        <div v-if="selectedTestCase.testData">
          <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Test Data</p>
          <pre class="text-sm text-gray-700 bg-gray-50 p-3 rounded-lg overflow-x-auto">{{ selectedTestCase.testData }}</pre>
        </div>

        <!-- Playwright Script Section -->
        <div class="border-t border-gray-100 pt-4">
          <div class="flex items-center justify-between mb-3">
            <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide">🎭 Playwright Script</p>
            <button
              @click="generateScript(selectedTestCase)"
              class="btn-primary text-xs px-3 py-1.5"
              :disabled="generatingFor === selectedTestCase.id"
              id="gen-playwright-btn"
            >
              <span v-if="generatingFor === selectedTestCase.id" class="h-3 w-3 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
              {{ selectedTestCase.playwrightScript ? '↻ Regenerate Script' : '🤖 Generate Playwright Script' }}
            </button>
          </div>

          <div v-if="selectedTestCase.playwrightScript" class="space-y-3">
            <div class="rounded-xl bg-gray-900 p-4 overflow-x-auto max-h-64">
              <pre class="text-xs text-green-300 leading-relaxed">{{ selectedTestCase.playwrightScript }}</pre>
            </div>
            <div class="rounded-lg bg-amber-50 border border-amber-200 p-3 text-xs text-amber-800">
              ⚠ <strong>Sandbox only:</strong> This script must run exclusively in an isolated CI/CD environment (e.g. GitHub Actions). Never execute with production credentials.
            </div>
            <button
              @click="pendingDownload = { script: selectedTestCase.playwrightScript!, title: selectedTestCase.title }; showSandboxWarning = true"
              class="btn-secondary text-sm"
            >
              ⬇ Download .spec.ts
            </button>
          </div>

          <div v-else class="rounded-xl border-2 border-dashed border-gray-200 p-8 text-center text-sm text-gray-400">
            Click "Generate Playwright Script" to create an automated E2E test
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Sandbox Warning Modal -->
  <div
    v-if="showSandboxWarning"
    class="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
  >
    <div class="card w-full max-w-md p-8">
      <div class="text-center mb-6">
        <div class="text-5xl mb-3">⚠️</div>
        <h3 class="text-xl font-bold text-gray-900 mb-2">Sandbox Execution Required</h3>
        <p class="text-sm text-gray-600 leading-relaxed">
          This Playwright script is AI-generated and must <strong>only run in an isolated CI/CD environment</strong>
          (e.g. GitHub Actions) — <strong>never in production</strong> and never with live credentials.
        </p>
      </div>
      <div class="rounded-xl bg-red-50 border border-red-200 p-4 mb-6 text-sm text-red-800 space-y-1">
        <p>✗ Do not run with production database credentials</p>
        <p>✗ Do not run against a live production environment</p>
        <p>✓ Use environment variables for all sensitive data</p>
        <p>✓ Run in a sandboxed CI job with limited access</p>
      </div>
      <div class="flex gap-3">
        <button @click="cancelDownload" class="btn-secondary flex-1">Cancel</button>
        <button @click="confirmDownload" class="btn-primary flex-1" id="confirm-download-btn">
          I Understand — Download
        </button>
      </div>
    </div>
  </div>
</template>
