<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { useBugStore, useCommentStore } from '@/composables/useFirestore'
import { useAI } from '@/composables/useAI'
import { useAuthStore } from '@/composables/useAuth'
import type { BugItem, Comment } from '@/types'
import {
  getSeverityColor,
  getBugStatusColor,
  formatTimestampFull,
  formatTimestamp,
} from '@/types'

const route = useRoute()
const bugStore = useBugStore()
const commentStore = useCommentStore()
const authStore = useAuthStore()
const { generateRemediationGuide, generating } = useAI()

const bugs = ref<BugItem[]>([])
const loading = ref(true)
const selectedBug = ref<BugItem | null>(null)
const comments = ref<Comment[]>([])
const newComment = ref('')
const remediationGuide = ref<string | null>(null)
const generatingGuide = ref(false)
const addingComment = ref(false)
const filterStatus = ref<BugItem['status'] | 'All'>('All')
const filterSeverity = ref<BugItem['severity'] | 'All'>('All')
const filterSource = ref<'All' | 'SEO' | 'SECURITY' | 'PERFORMANCE' | 'MANUAL'>('All')
let unsubscribeBugs: (() => void) | null = null
let unsubscribeComments: (() => void) | null = null

const projectId = computed(() => route.params.id as string)

const filteredBugs = computed(() => {
  return bugs.value.filter(b => {
    if (filterStatus.value !== 'All' && b.status !== filterStatus.value) return false
    if (filterSeverity.value !== 'All' && b.severity !== filterSeverity.value) return false
    if (filterSource.value !== 'All' && b.source !== filterSource.value) return false
    return true
  })
})

const statusCounts = computed(() => {
  const counts: Record<string, number> = {}
  for (const b of bugs.value) counts[b.status] = (counts[b.status] || 0) + 1
  return counts
})

onMounted(() => {
  unsubscribeBugs = bugStore.subscribeBugs(
    projectId.value,
    (data) => { bugs.value = data; loading.value = false },
    () => { loading.value = false }
  )
})

onUnmounted(() => {
  unsubscribeBugs?.()
  unsubscribeComments?.()
})

function openBug(bug: BugItem) {
  selectedBug.value = bug
  comments.value = []
  unsubscribeComments?.()
  unsubscribeComments = commentStore.subscribeComments(bug.id, (data) => {
    comments.value = data
  })
}

function closeBug() {
  selectedBug.value = null
  unsubscribeComments?.()
  unsubscribeComments = null
  comments.value = []
}

async function updateStatus(bug: BugItem, status: BugItem['status']) {
  await bugStore.updateBug(bug.id, { status })
  if (selectedBug.value?.id === bug.id) selectedBug.value.status = status
}

async function addComment() {
  if (!newComment.value.trim() || !selectedBug.value || !authStore.currentUser.value) return
  addingComment.value = true
  try {
    await commentStore.addComment(selectedBug.value.id, {
      userId: authStore.currentUser.value.uid,
      message: newComment.value.trim(),
      timestamp: new Date(),
      displayName: authStore.currentUser.value.displayName || 'User',
    })
    newComment.value = ''
  } finally {
    addingComment.value = false
  }
}

async function generateGuide() {
  generatingGuide.value = true
  const bugsForAI = bugs.value
    .filter(b => b.status !== 'Resolved')
    .map(b => ({ title: b.title, description: b.description, source: b.source, severity: b.severity }))
  const guide = await generateRemediationGuide(bugsForAI)
  remediationGuide.value = guide
  generatingGuide.value = false
}

const BUG_STATUSES: BugItem['status'][] = ['Not started', 'Open', 'In Progress', 'In Review', 'Resolved']
const BUG_SEVERITIES: BugItem['severity'][] = ['Urgent', 'High', 'Medium', 'Low']
const SOURCES = ['All', 'SEO', 'SECURITY', 'PERFORMANCE', 'MANUAL'] as const

function getSourceIcon(source: string) {
  const icons: Record<string, string> = { SEO: '🔍', SECURITY: '🛡️', PERFORMANCE: '⚡', MANUAL: '✏️' }
  return icons[source] || '📌'
}
</script>

<template>
  <!-- Header -->
  <div class="mb-6 flex items-center justify-between flex-wrap gap-4">
    <div>
      <h1 class="text-2xl font-bold text-gray-900">🐛 Bug List</h1>
      <p class="mt-1 text-sm text-gray-500">
        {{ bugs.length }} total bugs
        <span v-for="(count, status) in statusCounts" :key="status" class="ml-2">
          · <span class="font-medium">{{ count }}</span> {{ status }}
        </span>
      </p>
    </div>
    <button @click="generateGuide" class="btn-primary" :disabled="generatingGuide || bugs.length === 0" id="gen-remediation-btn">
      <span v-if="generatingGuide" class="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
      🤖 AI Remediation Guide
    </button>
  </div>

  <!-- Filters -->
  <div class="mb-5 flex flex-wrap gap-2">
    <div class="flex items-center gap-1">
      <span class="text-xs text-gray-500 mr-1">Status:</span>
      <button
        v-for="s in ['All', ...BUG_STATUSES]"
        :key="s"
        @click="filterStatus = s as any"
        class="px-3 py-1 text-xs rounded-full border transition-all"
        :class="filterStatus === s
          ? 'bg-indigo-600 text-white border-indigo-600'
          : 'border-gray-200 text-gray-600 hover:border-gray-400'"
      >{{ s }}</button>
    </div>
    <div class="flex items-center gap-1">
      <span class="text-xs text-gray-500 mr-1">Severity:</span>
      <button
        v-for="sev in ['All', ...BUG_SEVERITIES]"
        :key="sev"
        @click="filterSeverity = sev as any"
        class="px-3 py-1 text-xs rounded-full border transition-all"
        :class="filterSeverity === sev
          ? 'bg-indigo-600 text-white border-indigo-600'
          : 'border-gray-200 text-gray-600 hover:border-gray-400'"
      >{{ sev }}</button>
    </div>
  </div>

  <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
    <!-- Bug Table -->
    <div class="lg:col-span-2">
      <div v-if="loading" class="flex items-center justify-center py-16">
        <div class="h-8 w-8 rounded-full border-4 border-indigo-500 border-t-transparent animate-spin"></div>
      </div>

      <div v-else-if="filteredBugs.length === 0" class="card p-12 text-center">
        <p class="text-4xl mb-3">🎉</p>
        <p class="text-gray-500">No bugs match your filters</p>
      </div>

      <div v-else class="card overflow-hidden">
        <!-- Table Header -->
        <div class="grid grid-cols-[auto_1fr_auto_auto_auto] gap-4 px-5 py-3 bg-gray-50 border-b border-gray-200 text-xs font-semibold text-gray-500 uppercase tracking-wide">
          <span>ID</span>
          <span>Title</span>
          <span>Source</span>
          <span>Severity</span>
          <span>Status</span>
        </div>

        <!-- Bug Rows -->
        <div class="divide-y divide-gray-100">
          <div
            v-for="bug in filteredBugs"
            :key="bug.id"
            class="grid grid-cols-[auto_1fr_auto_auto_auto] gap-4 items-center px-5 py-3.5 hover:bg-gray-50 cursor-pointer transition-colors group"
            @click="openBug(bug)"
          >
            <!-- Short ID -->
            <span class="text-xs font-mono font-medium text-indigo-500 whitespace-nowrap">{{ bug.shortId }}</span>

            <!-- Title + Tags -->
            <div class="min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate group-hover:text-indigo-600 transition-colors">{{ bug.title }}</p>
              <div class="flex items-center gap-1.5 mt-1 flex-wrap">
                <span
                  v-for="tag in bug.tags?.slice(0, 3)"
                  :key="tag"
                  class="inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600"
                >{{ tag }}</span>
                <!-- Assignee Avatars -->
                <div v-if="bug.assignees?.length" class="flex -space-x-1.5 ml-1">
                  <div
                    v-for="(uid, i) in bug.assignees.slice(0, 3)"
                    :key="uid"
                    class="h-5 w-5 rounded-full bg-indigo-500 border-2 border-white flex items-center justify-center text-xs text-white font-bold"
                    :title="uid"
                  >{{ uid.charAt(0).toUpperCase() }}</div>
                  <div
                    v-if="bug.assignees.length > 3"
                    class="h-5 w-5 rounded-full bg-gray-400 border-2 border-white flex items-center justify-center text-xs text-white"
                  >+{{ bug.assignees.length - 3 }}</div>
                </div>
                <!-- Comment count -->
                <span v-if="bug.commentCount > 0" class="flex items-center gap-0.5 text-xs text-gray-400 ml-1">
                  💬 {{ bug.commentCount }}
                </span>
              </div>
            </div>

            <!-- Source -->
            <span class="text-sm whitespace-nowrap">{{ getSourceIcon(bug.source) }} {{ bug.source }}</span>

            <!-- Severity pill -->
            <span
              class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold whitespace-nowrap"
              :class="getSeverityColor(bug.severity)"
            >{{ bug.severity }}</span>

            <!-- Status pill -->
            <span
              class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium whitespace-nowrap"
              :class="getBugStatusColor(bug.status)"
            >{{ bug.status }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- AI Remediation Guide Panel -->
    <div class="lg:col-span-1">
      <div class="card h-full">
        <div class="card-header">
          <h3 class="text-base font-semibold text-gray-900">📋 Remediation Guide</h3>
        </div>
        <div class="p-4 overflow-y-auto max-h-[600px]">
          <div v-if="generatingGuide" class="flex items-center justify-center py-12">
            <div class="h-8 w-8 rounded-full border-4 border-indigo-500 border-t-transparent animate-spin"></div>
          </div>
          <div
            v-else-if="remediationGuide"
            class="prose prose-sm max-w-none text-gray-700 text-sm leading-relaxed"
            v-html="remediationGuide.replace(/\n/g, '<br/>')"
          ></div>
          <div v-else class="text-center py-10">
            <p class="text-3xl mb-3">🤖</p>
            <p class="text-sm text-gray-500">Click "AI Remediation Guide" to get AI-powered fix recommendations for all open bugs.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Bug Detail Modal -->
  <div
    v-if="selectedBug"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
    @click="closeBug"
  >
    <div class="card w-full max-w-2xl max-h-[90vh] flex flex-col" @click.stop>
      <!-- Modal Header -->
      <div class="card-header flex items-start justify-between gap-4">
        <div class="min-w-0 flex-1">
          <div class="flex items-center gap-2 mb-1">
            <span class="text-xs font-mono font-bold text-indigo-500">{{ selectedBug.shortId }}</span>
            <span class="text-xs text-gray-400">{{ getSourceIcon(selectedBug.source) }} {{ selectedBug.source }}</span>
          </div>
          <h2 class="text-lg font-semibold text-gray-900 leading-tight">{{ selectedBug.title }}</h2>
        </div>
        <button @click="closeBug" class="text-gray-400 hover:text-gray-600 flex-shrink-0 text-xl leading-none">✕</button>
      </div>

      <!-- Modal Body -->
      <div class="card-body overflow-y-auto space-y-5">
        <!-- Status / Severity row -->
        <div class="grid grid-cols-3 gap-4 text-sm">
          <div>
            <label class="block text-xs text-gray-500 mb-1">Status</label>
            <select
              :value="selectedBug.status"
              @change="updateStatus(selectedBug, ($event.target as HTMLSelectElement).value as BugItem['status'])"
              class="input text-sm"
            >
              <option v-for="s in BUG_STATUSES" :key="s" :value="s">{{ s }}</option>
            </select>
          </div>
          <div>
            <label class="block text-xs text-gray-500 mb-1">Severity</label>
            <span
              class="mt-1 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold"
              :class="getSeverityColor(selectedBug.severity)"
            >{{ selectedBug.severity }}</span>
          </div>
          <div>
            <label class="block text-xs text-gray-500 mb-1">Tags</label>
            <div class="flex flex-wrap gap-1 mt-1">
              <span
                v-for="tag in selectedBug.tags"
                :key="tag"
                class="inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-700"
              >{{ tag }}</span>
              <span v-if="!selectedBug.tags?.length" class="text-xs text-gray-400">None</span>
            </div>
          </div>
        </div>

        <!-- Description -->
        <div>
          <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Description</p>
          <p class="text-sm text-gray-700 leading-relaxed">{{ selectedBug.description }}</p>
        </div>

        <!-- Remediation Guide -->
        <div v-if="selectedBug.remediationGuide" class="rounded-xl bg-green-50 border border-green-200 p-4">
          <p class="text-xs font-semibold text-green-700 uppercase tracking-wide mb-2">🔧 Remediation Guide</p>
          <div class="text-sm text-green-800 leading-relaxed" v-html="selectedBug.remediationGuide.replace(/\n/g, '<br/>')"></div>
        </div>

        <!-- Steps to Reproduce -->
        <div v-if="selectedBug.stepsToReproduce" class="rounded-xl bg-gray-50 p-4">
          <p class="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2">Steps to Reproduce</p>
          <p class="text-sm text-gray-700">{{ selectedBug.stepsToReproduce }}</p>
        </div>

        <!-- Metadata -->
        <div class="border-t border-gray-100 pt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
          <div><span class="text-gray-400">Created</span> <span class="ml-2 text-gray-700">{{ formatTimestamp(selectedBug.createdAt) }}</span></div>
          <div><span class="text-gray-400">Updated</span> <span class="ml-2 text-gray-700">{{ formatTimestamp(selectedBug.lastEditedTime) }}</span></div>
          <div>
            <span class="text-gray-400">Assignees</span>
            <span class="ml-2 text-gray-700">{{ selectedBug.assignees?.length ? selectedBug.assignees.join(', ') : 'None' }}</span>
          </div>
        </div>

        <!-- Comments -->
        <div class="border-t border-gray-100 pt-4">
          <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">💬 Comments ({{ comments.length }})</p>
          <div class="space-y-3 mb-4 max-h-48 overflow-y-auto">
            <div
              v-for="c in comments"
              :key="c.id"
              class="flex gap-3"
            >
              <div class="h-7 w-7 rounded-full bg-indigo-500 flex-shrink-0 flex items-center justify-center text-xs text-white font-bold">
                {{ (c.displayName || c.userId).charAt(0).toUpperCase() }}
              </div>
              <div class="flex-1 rounded-xl bg-gray-50 px-3 py-2">
                <div class="flex items-baseline gap-2">
                  <span class="text-xs font-semibold text-gray-800">{{ c.displayName || 'User' }}</span>
                  <span class="text-xs text-gray-400">{{ formatTimestampFull(c.timestamp) }}</span>
                </div>
                <p class="text-sm text-gray-700 mt-0.5">{{ c.message }}</p>
              </div>
            </div>
            <p v-if="comments.length === 0" class="text-xs text-gray-400 text-center py-2">No comments yet</p>
          </div>

          <!-- Add Comment -->
          <div class="flex gap-2">
            <input
              v-model="newComment"
              type="text"
              placeholder="Add a comment..."
              class="input text-sm flex-1"
              @keyup.enter="addComment"
            />
            <button
              @click="addComment"
              class="btn-primary text-sm px-3"
              :disabled="addingComment || !newComment.trim()"
            >
              <span v-if="addingComment" class="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
              <span v-else">Send</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
