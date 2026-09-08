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
const { generatePlaywrightScript, generateTestCasesFromStory } = useAI()

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

// --- Feature: AI Test Case Generator from Story State ---
const showAiStoryModal = ref(false)
const storyInput = ref('')
const storyFocusTypes = ref<string[]>(['positive', 'negative', 'edge-case', 'security'])
const storyCount = ref(6)
const generatingStory = ref(false)
const storyError = ref('')
const importSuccessMsg = ref('')

interface GeneratedScenarioItem {
  id: string
  selected: boolean
  title: string
  type: 'positive' | 'negative' | 'edge-case' | 'security'
  preconditions: string
  steps: string[]
  expectedResult: string
  testData?: string
  tags: string[]
}
const generatedScenarios = ref<GeneratedScenarioItem[]>([])
const importingScenarios = ref(false)

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

    await testCaseStore.updateTestCase(tc.id, { playwrightScript: script })

    if (selectedTestCase.value?.id === tc.id) selectedTestCase.value.playwrightScript = script
    const idx = testCases.value.findIndex(t => t.id === tc.id)
    if (idx !== -1) testCases.value[idx].playwrightScript = script

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
    case 'Passed': return 'bg-emerald-100 text-emerald-800 border border-emerald-200'
    case 'Failed': return 'bg-rose-100 text-rose-800 border border-rose-200'
    default: return 'bg-slate-100 text-slate-700 border border-slate-200'
  }
}

function getTypeBadgeClass(type: string): string {
  switch (type) {
    case 'positive': return 'bg-emerald-50 text-emerald-700 border-emerald-200'
    case 'negative': return 'bg-rose-50 text-rose-700 border-rose-200'
    case 'edge-case': return 'bg-amber-50 text-amber-700 border-amber-200'
    case 'security': return 'bg-purple-50 text-purple-700 border-purple-200'
    default: return 'bg-indigo-50 text-indigo-700 border-indigo-200'
  }
}

// --- Story Generator Methods ---
function setStoryPreset(presetText: string) {
  storyInput.value = presetText
}

async function handleGenerateScenarios() {
  if (!storyInput.value.trim()) {
    storyError.value = 'Please enter a user story or feature requirements.'
    return
  }

  generatingStory.value = true
  storyError.value = ''
  generatedScenarios.value = []

  try {
    const results = await generateTestCasesFromStory({
      story: storyInput.value.trim(),
      targetUrl: project.value?.targetUrl,
      count: storyCount.value,
      focusTypes: storyFocusTypes.value,
    })

    generatedScenarios.value = results.map((item, idx) => ({
      ...item,
      id: `scen_${Date.now()}_${idx}`,
      selected: true,
    }))
  } catch (err: any) {
    storyError.value = err.message || 'Failed to generate test cases.'
  } finally {
    generatingStory.value = false
  }
}

function toggleSelectAllScenarios() {
  const allSelected = generatedScenarios.value.every(s => s.selected)
  generatedScenarios.value.forEach(s => { s.selected = !allSelected })
}

async function importSelectedScenarios() {
  const selected = generatedScenarios.value.filter(s => s.selected)
  if (selected.length === 0) return

  const projectId = route.params.id as string
  importingScenarios.value = true
  importSuccessMsg.value = ''

  try {
    const toImport = selected.map(s => ({
      projectId,
      title: s.title,
      preconditions: s.preconditions,
      steps: s.steps,
      expectedResult: s.expectedResult,
      testData: s.testData || undefined,
      tags: [...(s.tags || []), s.type],
      createdBy: project.value?.ownerId,
    }))

    await testCaseStore.createBatchTestCases(toImport)
    importSuccessMsg.value = `Successfully imported ${selected.length} test case(s)!`

    setTimeout(() => {
      showAiStoryModal.value = false
      generatedScenarios.value = []
      storyInput.value = ''
      importSuccessMsg.value = ''
    }, 1200)
  } catch (err: any) {
    storyError.value = `Import failed: ${err.message}`
  } finally {
    importingScenarios.value = false
  }
}
</script>

<template>
  <!-- Header & Toolbar -->
  <div class="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
    <div>
      <div class="flex items-center gap-2.5">
        <h1 class="text-2xl font-bold text-gray-900">Test Cases</h1>
        <span class="inline-flex items-center rounded-full bg-indigo-50 border border-indigo-200 px-2.5 py-0.5 text-xs font-semibold text-indigo-700">
          {{ testCases.length }} total
        </span>
      </div>
      <p class="mt-1 text-sm text-gray-500">Manage QA manual test scenarios & AI-powered Playwright automations</p>
    </div>

    <!-- Actions -->
    <div class="flex items-center gap-2 flex-wrap sm:flex-nowrap">
      <button
        @click="showAiStoryModal = true"
        class="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 px-3.5 py-2 text-sm font-semibold text-white shadow hover:from-indigo-700 hover:to-violet-700 transition-all"
        title="Convert user story or acceptance criteria into a test case suite"
      >
        <i class="fa-solid fa-wand-magic-sparkles text-amber-300"></i>
        <span>AI Generate from Story</span>
      </button>

      <button
        @click="showCreateForm = true"
        class="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-3.5 py-2 text-sm font-semibold text-white shadow hover:bg-slate-800 transition-colors"
      >
        <i class="fa-solid fa-plus text-xs"></i>
        <span>Add Test Case</span>
      </button>
    </div>
  </div>

  <!-- Loading State -->
  <div v-if="loading" class="flex items-center justify-center py-20">
    <div class="h-8 w-8 rounded-full border-4 border-indigo-600 border-t-transparent animate-spin"></div>
  </div>

  <!-- Empty State -->
  <div v-else-if="testCases.length === 0" class="card p-8 text-center sm:p-16 border-2 border-dashed border-slate-200">
    <div class="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 text-2xl mb-4">
      <i class="fa-solid fa-vial-circle-check"></i>
    </div>
    <h3 class="text-lg font-semibold text-gray-900">No test cases in this project yet</h3>
    <p class="mt-1 text-sm text-gray-500 max-w-md mx-auto">
      Create test cases manually or use our AI Generator to instantly build test suites from your feature requirements.
    </p>

    <div class="mt-6 flex flex-wrap items-center justify-center gap-3">
      <button
        @click="showAiStoryModal = true"
        class="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-indigo-700"
      >
        <i class="fa-solid fa-wand-magic-sparkles text-amber-300"></i>
        <span>Generate from User Story</span>
      </button>
      <button @click="showCreateForm = true" class="btn-secondary">
        <i class="fa-solid fa-plus mr-1"></i> Add Manually
      </button>
    </div>
  </div>

  <!-- Test Cases List -->
  <div v-else class="space-y-3">
    <div
      v-for="tc in testCases"
      :key="tc.id"
      class="card p-4 hover:shadow-md cursor-pointer transition-all hover:-translate-y-0.5 border border-slate-200 hover:border-indigo-300"
      @click="openTestCase(tc)"
    >
      <div class="flex items-start justify-between gap-4">
        <div class="min-w-0 flex-1">
          <div class="flex items-center gap-2.5 flex-wrap">
            <span
              class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold"
              :class="getStatusClass(tc.status)"
            >
              {{ tc.status }}
            </span>
            <h3 class="font-semibold text-gray-900 flex-1 text-base">{{ tc.title }}</h3>
            <span v-if="tc.playwrightScript" class="inline-flex items-center gap-1.5 rounded-full bg-purple-100 border border-purple-200 px-2.5 py-0.5 text-xs text-purple-700 font-medium">
              <i class="fa-solid fa-code text-purple-600 text-xs"></i> Playwright Ready
            </span>
          </div>

          <div class="flex items-center gap-2.5 mt-2.5 flex-wrap">
            <span v-for="tag in tc.tags?.slice(0, 4)" :key="tag" class="inline-flex items-center rounded-md bg-slate-100 border border-slate-200 px-2 py-0.5 text-xs text-slate-600 font-medium">
              #{{ tag }}
            </span>
            <span v-if="tc.lastRun" class="text-xs text-gray-400">
              <i class="fa-regular fa-clock mr-1"></i> Last run: {{ formatTimestampFull(tc.lastRun) }}
            </span>
          </div>
        </div>

        <div class="text-right flex-shrink-0 flex flex-col items-end justify-between">
          <span class="inline-flex items-center gap-1 text-xs text-slate-500 font-medium bg-slate-50 px-2 py-1 rounded border border-slate-200">
            <i class="fa-solid fa-list-check text-slate-400"></i> {{ tc.steps.length }} step{{ tc.steps.length === 1 ? '' : 's' }}
          </span>
        </div>
      </div>
    </div>
  </div>

  <!-- ========================================================================= -->
  <!-- MODAL: AI Test Case Generator from User Story -->
  <!-- ========================================================================= -->
  <div
    v-if="showAiStoryModal"
    class="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/60 p-4 backdrop-blur-sm"
    @click.self="showAiStoryModal = false"
  >
    <div class="card my-4 w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl border border-slate-200">
      <!-- Modal Header -->
      <div class="card-header flex items-center justify-between border-b border-slate-200 pb-4">
        <div class="flex items-center gap-3">
          <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-600 text-white shadow-sm">
            <i class="fa-solid fa-wand-magic-sparkles text-lg"></i>
          </div>
          <div>
            <h2 class="text-lg font-bold text-gray-900">AI Test Case Generator</h2>
            <p class="text-xs text-gray-500">Transform user stories & acceptance criteria into structured QA test suites</p>
          </div>
        </div>
        <button type="button" @click="showAiStoryModal = false" class="text-xl text-gray-400 hover:text-gray-600" aria-label="Close">✕</button>
      </div>

      <!-- Modal Body -->
      <div class="card-body overflow-y-auto p-6 space-y-6">
        <!-- Story / Requirements Input -->
        <div>
          <div class="flex items-center justify-between mb-2">
            <label class="text-sm font-semibold text-gray-900">Feature Description / Acceptance Criteria</label>
            <div class="flex items-center gap-1.5 text-xs text-indigo-600">
              <span class="text-gray-400">Quick Presets:</span>
              <button
                type="button"
                @click="setStoryPreset('As a registered user, I want to reset my password using an email verification OTP code within 10 minutes so that I can regain access if I forgot it.')"
                class="hover:underline text-indigo-600 font-medium"
              >
                Password Reset
              </button>
              <span class="text-gray-300">•</span>
              <button
                type="button"
                @click="setStoryPreset('As a shopper, I want to search products by keyword, filter by price range and rating, and sort results by lowest price or popularity.')"
                class="hover:underline text-indigo-600 font-medium"
              >
                Search & Filter
              </button>
              <span class="text-gray-300">•</span>
              <button
                type="button"
                @click="setStoryPreset('As an authenticated customer, I want to apply a discount promo code during checkout, calculate real-time cart total deduction, and pay with a credit card.')"
                class="hover:underline text-indigo-600 font-medium"
              >
                Checkout & Promo
              </button>
            </div>
          </div>
          <textarea
            v-model="storyInput"
            class="input min-h-28 resize-y text-sm font-normal"
            placeholder="Paste your Jira user story, acceptance criteria, or PRD requirement here... e.g. 'Users must be able to upload a profile picture in JPG/PNG format under 5MB...'"
          ></textarea>
        </div>

        <!-- Options: Focus Types & Count -->
        <div class="grid gap-4 sm:grid-cols-2 rounded-xl bg-slate-50 border border-slate-200 p-4">
          <div>
            <label class="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">Test Coverage Types</label>
            <div class="grid grid-cols-2 gap-2 text-xs">
              <label class="flex items-center gap-2 font-medium text-slate-700 cursor-pointer">
                <input type="checkbox" value="positive" v-model="storyFocusTypes" class="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />
                <span>🟢 Positive (Happy Path)</span>
              </label>
              <label class="flex items-center gap-2 font-medium text-slate-700 cursor-pointer">
                <input type="checkbox" value="negative" v-model="storyFocusTypes" class="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />
                <span>🔴 Negative (Error Handling)</span>
              </label>
              <label class="flex items-center gap-2 font-medium text-slate-700 cursor-pointer">
                <input type="checkbox" value="edge-case" v-model="storyFocusTypes" class="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />
                <span>🟠 Edge Cases (Boundary)</span>
              </label>
              <label class="flex items-center gap-2 font-medium text-slate-700 cursor-pointer">
                <input type="checkbox" value="security" v-model="storyFocusTypes" class="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />
                <span>🟣 Security & Validation</span>
              </label>
            </div>
          </div>

          <div class="flex flex-col justify-between">
            <div>
              <label class="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">Scenario Count: {{ storyCount }}</label>
              <input type="range" v-model.number="storyCount" min="3" max="10" step="1" class="w-full accent-indigo-600" />
              <div class="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>3 Quick</span>
                <span>6 Balanced</span>
                <span>10 Comprehensive</span>
              </div>
            </div>

            <div class="mt-3 flex justify-end">
              <button
                type="button"
                @click="handleGenerateScenarios"
                class="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-700 disabled:opacity-50 transition-all"
                :disabled="generatingStory || !storyInput.trim()"
              >
                <span v-if="generatingStory" class="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
                <i v-else class="fa-solid fa-bolt text-amber-300"></i>
                <span>{{ generatingStory ? 'Analyzing Requirements...' : 'Generate Scenarios' }}</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Error & Success alerts -->
        <div v-if="storyError" class="rounded-lg border border-rose-200 bg-rose-50 p-3 text-sm text-rose-700 flex items-center gap-2">
          <i class="fa-solid fa-circle-exclamation"></i>
          <span>{{ storyError }}</span>
        </div>
        <div v-if="importSuccessMsg" class="rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-700 flex items-center gap-2">
          <i class="fa-solid fa-circle-check"></i>
          <span>{{ importSuccessMsg }}</span>
        </div>

        <!-- Generated Test Cases Preview List -->
        <div v-if="generatedScenarios.length > 0" class="space-y-4 pt-2">
          <div class="flex items-center justify-between border-b border-slate-200 pb-2">
            <div class="flex items-center gap-2">
              <h3 class="font-bold text-gray-900 text-sm">Generated Test Scenarios ({{ generatedScenarios.length }})</h3>
              <span class="text-xs text-slate-500">
                ({{ generatedScenarios.filter(s => s.selected).length }} selected)
              </span>
            </div>
            <button
              type="button"
              @click="toggleSelectAllScenarios"
              class="text-xs text-indigo-600 font-semibold hover:underline"
            >
              {{ generatedScenarios.every(s => s.selected) ? 'Deselect All' : 'Select All' }}
            </button>
          </div>

          <div class="space-y-3">
            <div
              v-for="scen in generatedScenarios"
              :key="scen.id"
              class="rounded-xl border p-4 transition-all"
              :class="scen.selected ? 'border-indigo-300 bg-indigo-50/20 shadow-sm' : 'border-slate-200 bg-slate-50/50 opacity-70'"
            >
              <div class="flex items-start gap-3">
                <input
                  type="checkbox"
                  v-model="scen.selected"
                  class="mt-1 h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                />
                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-2 flex-wrap mb-1.5">
                    <span class="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold capitalize" :class="getTypeBadgeClass(scen.type)">
                      {{ scen.type }}
                    </span>
                    <h4 class="font-bold text-gray-900 text-sm">{{ scen.title }}</h4>
                  </div>

                  <div class="text-xs text-slate-600 space-y-1.5 mt-2">
                    <p v-if="scen.preconditions && scen.preconditions !== 'None'">
                      <strong class="text-slate-700">Preconditions:</strong> {{ scen.preconditions }}
                    </p>

                    <div>
                      <strong class="text-slate-700">Steps:</strong>
                      <ol class="list-decimal list-inside pl-1 space-y-0.5 mt-0.5">
                        <li v-for="(step, sIdx) in scen.steps" :key="sIdx" class="text-slate-600">
                          {{ step.replace(/^\d+\.\s*/, '') }}
                        </li>
                      </ol>
                    </div>

                    <p>
                      <strong class="text-slate-700">Expected:</strong> {{ scen.expectedResult }}
                    </p>

                    <p v-if="scen.testData">
                      <strong class="text-slate-700">Mock Data:</strong> <code class="bg-slate-100 px-1 py-0.5 rounded text-slate-800">{{ scen.testData }}</code>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal Footer -->
      <div class="card-footer flex items-center justify-between border-t border-slate-200 p-4 bg-slate-50">
        <button type="button" @click="showAiStoryModal = false" class="btn-secondary">Close</button>
        <button
          v-if="generatedScenarios.length > 0"
          type="button"
          @click="importSelectedScenarios"
          class="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-emerald-700 disabled:opacity-50"
          :disabled="importingScenarios || generatedScenarios.filter(s => s.selected).length === 0"
        >
          <span v-if="importingScenarios" class="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
          <i v-else class="fa-solid fa-file-import"></i>
          <span>Import Selected ({{ generatedScenarios.filter(s => s.selected).length }}) Cases</span>
        </button>
      </div>
    </div>
  </div>

  <!-- ========================================================================= -->
  <!-- MODAL: Manual Test Case Creation Modal -->
  <!-- ========================================================================= -->
  <div
    v-if="showCreateForm"
    class="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/60 p-4 backdrop-blur-sm"
    @click.self="showCreateForm = false"
  >
    <div class="card my-4 w-full max-w-2xl border border-slate-200 shadow-2xl">
      <div class="card-header flex items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <h2 class="text-lg font-bold text-gray-900">Add Manual Test Case</h2>
          <p class="mt-0.5 text-xs text-gray-500">Create a new test scenario for this project.</p>
        </div>
        <button type="button" @click="showCreateForm = false" class="text-xl text-gray-400 hover:text-gray-600" aria-label="Close">✕</button>
      </div>

      <form @submit.prevent="createManualTestCase" class="card-body space-y-4 p-6">
        <div>
          <label class="label" for="test-case-title">Title</label>
          <input id="test-case-title" v-model="newTestCase.title" class="input" placeholder="e.g. User can reset their password" required />
        </div>

        <div>
          <label class="label" for="test-case-preconditions">Preconditions</label>
          <textarea id="test-case-preconditions" v-model="newTestCase.preconditions" class="input min-h-20 resize-y text-sm" placeholder="e.g. User has an existing registered account"></textarea>
        </div>

        <div>
          <label class="label" for="test-case-steps">Steps</label>
          <textarea id="test-case-steps" v-model="newTestCase.steps" class="input min-h-28 resize-y text-sm" placeholder="Enter one step per line&#10;1. Open the login page&#10;2. Enter valid credentials&#10;3. Click Sign in" required></textarea>
          <p class="mt-1 text-xs text-gray-500">Enter one step per line.</p>
        </div>

        <div>
          <label class="label" for="test-case-expected">Expected result</label>
          <textarea id="test-case-expected" v-model="newTestCase.expectedResult" class="input min-h-20 resize-y text-sm" placeholder="e.g. The user is redirected to the dashboard" required></textarea>
        </div>

        <div class="grid gap-4 sm:grid-cols-2">
          <div>
            <label class="label" for="test-case-data">Test data <span class="font-normal text-gray-400">(optional)</span></label>
            <textarea id="test-case-data" v-model="newTestCase.testData" class="input min-h-20 resize-y text-sm font-mono" placeholder="username: tester@example.com"></textarea>
          </div>
          <div>
            <label class="label" for="test-case-tags">Tags <span class="font-normal text-gray-400">(optional)</span></label>
            <input id="test-case-tags" v-model="newTestCase.tags" class="input text-sm" placeholder="smoke, login, auth" />
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

  <!-- ========================================================================= -->
  <!-- MODAL: Test Case Detail Modal -->
  <!-- ========================================================================= -->
  <div
    v-if="selectedTestCase"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
    @click="closeTestCase"
  >
    <div class="card w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl border border-slate-200" @click.stop>
      <div class="card-header flex items-start justify-between gap-4 border-b border-slate-200 pb-4">
        <div class="min-w-0 flex-1">
          <h2 class="text-lg font-bold text-gray-900 leading-tight">{{ selectedTestCase.title }}</h2>
          <div class="flex items-center gap-2 mt-2 flex-wrap">
            <span
              class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold"
              :class="getStatusClass(selectedTestCase.status)"
            >{{ selectedTestCase.status }}</span>
            <span v-if="selectedTestCase.playwrightScript" class="inline-flex items-center gap-1 rounded-full bg-purple-100 border border-purple-200 px-2.5 py-0.5 text-xs text-purple-700 font-medium">
              <i class="fa-solid fa-code text-xs"></i> Playwright Script Generated
            </span>
          </div>
        </div>
        <button @click="closeTestCase" class="text-gray-400 hover:text-gray-600 text-xl">✕</button>
      </div>

      <div class="card-body overflow-y-auto space-y-5 p-6">
        <!-- Status update -->
        <div class="flex items-center gap-4 flex-wrap bg-slate-50 p-3 rounded-xl border border-slate-200">
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Status</label>
            <select
              :value="selectedTestCase.status"
              @change="updateStatus(selectedTestCase, ($event.target as HTMLSelectElement).value as TestCase['status'])"
              class="input text-xs py-1.5 w-auto font-semibold"
            >
              <option value="Untested">Untested</option>
              <option value="Passed">Passed</option>
              <option value="Failed">Failed</option>
            </select>
          </div>
          <div v-if="selectedTestCase.lastRun">
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Last Run</label>
            <span class="text-xs text-gray-700">{{ formatTimestampFull(selectedTestCase.lastRun) }}</span>
          </div>
        </div>

        <!-- Preconditions -->
        <div v-if="selectedTestCase.preconditions">
          <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Preconditions</p>
          <p class="text-sm text-gray-700 bg-slate-50 p-3 rounded-lg border border-slate-200">{{ selectedTestCase.preconditions }}</p>
        </div>

        <!-- Steps -->
        <div>
          <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Steps ({{ selectedTestCase.steps.length }})</p>
          <ol class="space-y-2">
            <li
              v-for="(step, idx) in selectedTestCase.steps"
              :key="idx"
              class="flex gap-3 text-sm bg-white p-2.5 rounded-lg border border-slate-200 shadow-sm"
            >
              <span class="flex-shrink-0 h-5 w-5 rounded-full bg-indigo-100 text-indigo-700 font-bold text-xs flex items-center justify-center">{{ idx + 1 }}</span>
              <span class="text-gray-800">{{ step.replace(/^\d+\.\s*/, '') }}</span>
            </li>
          </ol>
        </div>

        <!-- Expected Result -->
        <div>
          <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Expected Result</p>
          <p class="text-sm text-emerald-800 bg-emerald-50/70 border border-emerald-200 p-3 rounded-lg font-medium">{{ selectedTestCase.expectedResult }}</p>
        </div>

        <!-- Test Data -->
        <div v-if="selectedTestCase.testData">
          <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Test Data</p>
          <pre class="text-xs text-slate-800 bg-slate-50 p-3 rounded-lg border border-slate-200 overflow-x-auto font-mono">{{ selectedTestCase.testData }}</pre>
        </div>

        <!-- Playwright Script Section -->
        <div class="border-t border-gray-100 pt-4">
          <div class="flex items-center justify-between mb-3">
            <p class="text-xs font-bold text-gray-700 uppercase tracking-wide flex items-center gap-1.5">
              <i class="fa-solid fa-laptop-code text-purple-600"></i>
              <span>Playwright TypeScript Automation</span>
            </p>
            <button
              @click="generateScript(selectedTestCase)"
              class="btn-primary text-xs px-3 py-1.5"
              :disabled="generatingFor === selectedTestCase.id"
              id="gen-playwright-btn"
            >
              <span v-if="generatingFor === selectedTestCase.id" class="h-3 w-3 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
              <i v-else class="fa-solid fa-code mr-1"></i>
              {{ selectedTestCase.playwrightScript ? '↻ Regenerate Script' : 'Generate Playwright Script' }}
            </button>
          </div>

          <div v-if="selectedTestCase.playwrightScript" class="space-y-3">
            <div class="rounded-xl bg-slate-900 p-4 overflow-x-auto max-h-64 shadow-inner">
              <pre class="text-xs text-emerald-400 leading-relaxed font-mono">{{ selectedTestCase.playwrightScript }}</pre>
            </div>
            <div class="rounded-lg bg-amber-50 border border-amber-200 p-3 text-xs text-amber-800 flex items-start gap-2">
              <i class="fa-solid fa-triangle-exclamation text-amber-600 mt-0.5"></i>
              <span><strong>Sandbox only:</strong> This script must run exclusively in an isolated CI/CD environment (e.g. GitHub Actions). Never execute with production credentials.</span>
            </div>
            <button
              @click="pendingDownload = { script: selectedTestCase.playwrightScript!, title: selectedTestCase.title }; showSandboxWarning = true"
              class="btn-secondary text-xs inline-flex items-center gap-2"
            >
              <i class="fa-solid fa-download"></i>
              <span>Download .spec.ts</span>
            </button>
          </div>

          <div v-else class="rounded-xl border-2 border-dashed border-gray-200 p-8 text-center text-sm text-gray-400">
            Click "Generate Playwright Script" to convert this manual test case into an automated E2E script.
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
    <div class="card w-full max-w-md p-8 border border-slate-200 shadow-2xl">
      <div class="text-center mb-6">
        <div class="text-5xl mb-3">⚠️</div>
        <h3 class="text-xl font-bold text-gray-900 mb-2">Sandbox Execution Required</h3>
        <p class="text-sm text-gray-600 leading-relaxed">
          This Playwright script is AI-generated and must <strong>only run in an isolated CI/CD environment</strong>
          (e.g. GitHub Actions) — <strong>never in production</strong> and never with live credentials.
        </p>
      </div>
      <div class="rounded-xl bg-rose-50 border border-rose-200 p-4 mb-6 text-xs text-rose-800 space-y-1.5 font-medium">
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
