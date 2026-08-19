<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/composables/useAuth'
import { useBugStore } from '@/composables/useFirestore'
import { uploadBugScreenshots } from '@/composables/useBugScreenshots'
import ImageUploader from '@/components/bugs/ImageUploader.vue'
import type { BugSeverity } from '@/types'

const props = defineProps<{ projectId: string }>()
const emit = defineEmits<{ close: []; created: [id: string] }>()

const authStore = useAuthStore()
const bugStore = useBugStore()

const title = ref('')
const description = ref('')
const stepsToReproduce = ref('')
const severity = ref<BugSeverity>('Medium')
const tagsInput = ref('')
const files = ref<File[]>([])
const loading = ref(false)
const uploadStatus = ref('')
const error = ref('')
const createdBug = ref<{ id: string; shortId: string } | null>(null)

const SEVERITIES: BugSeverity[] = ['Urgent', 'High', 'Medium', 'Low']

function parseTags(raw: string): string[] {
  return raw
    .split(',')
    .map(tag => tag.trim())
    .filter(Boolean)
    .slice(0, 8)
}

async function handleSubmit() {
  if (!title.value.trim() || !description.value.trim()) {
    error.value = 'Title and description are required.'
    return
  }

  loading.value = true
  error.value = ''

  try {
    if (!createdBug.value) {
      uploadStatus.value = 'Creating bug…'
      createdBug.value = await bugStore.createBug({
        projectId: props.projectId,
        title: title.value.trim(),
        description: description.value.trim(),
        stepsToReproduce: stepsToReproduce.value.trim(),
        source: 'MANUAL',
        severity: severity.value,
        status: 'Open',
        tags: parseTags(tagsInput.value),
        screenshotUrls: [],
        ...(authStore.currentUser.value?.uid ? { createdBy: authStore.currentUser.value.uid } : {}),
      })
    }

    if (files.value.length) {
      uploadStatus.value = `Uploading ${files.value.length} screenshot${files.value.length === 1 ? '' : 's'}…`
      const screenshotUrls = await uploadBugScreenshots(
        props.projectId,
        createdBug.value.shortId,
        files.value
      )
      await bugStore.updateBug(createdBug.value.id, { screenshotUrls })
    }

    emit('created', createdBug.value.id)
  } catch (err: unknown) {
    error.value = err instanceof Error ? err.message : 'Failed to create bug'
    uploadStatus.value = ''
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
    <div class="card w-full max-w-lg max-h-[90vh] flex flex-col">
      <div class="card-header flex items-center justify-between">
        <h2 class="text-lg font-semibold text-gray-900">Report a bug</h2>
        <button type="button" class="text-gray-400 hover:text-gray-600 text-xl" @click="emit('close')">✕</button>
      </div>

      <form class="card-body space-y-4 overflow-y-auto" @submit.prevent="handleSubmit">
        <div>
          <label class="label">Title</label>
          <input v-model="title" type="text" class="input" placeholder="e.g. Checkout button does nothing on mobile" required />
        </div>

        <div>
          <label class="label">Description</label>
          <textarea
            v-model="description"
            class="input min-h-[96px]"
            placeholder="What happened, and what did you expect instead?"
            required
          />
        </div>

        <div>
          <label class="label">Steps to reproduce (optional)</label>
          <textarea
            v-model="stepsToReproduce"
            class="input min-h-[72px]"
            placeholder="1. Open the page&#10;2. Click…"
          />
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="label">Severity</label>
            <select v-model="severity" class="input">
              <option v-for="level in SEVERITIES" :key="level" :value="level">{{ level }}</option>
            </select>
          </div>
          <div>
            <label class="label">Tags</label>
            <input v-model="tagsInput" type="text" class="input" placeholder="Front-End, Chrome" />
            <p class="mt-1 text-xs text-gray-500">Comma-separated</p>
          </div>
        </div>

        <div>
          <label class="label">Screenshots</label>
          <ImageUploader v-model:files="files" :disabled="loading" />
        </div>

        <div v-if="error" class="rounded-lg bg-red-50 border border-red-200 p-3 text-sm text-red-700">
          {{ error }}
        </div>
        <p v-else-if="uploadStatus" class="text-sm text-indigo-600">{{ uploadStatus }}</p>

        <div class="flex justify-end gap-3 pt-2">
          <button type="button" class="btn-secondary" :disabled="loading" @click="emit('close')">Cancel</button>
          <button type="submit" class="btn-primary" :disabled="loading">
            <span v-if="loading" class="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
            <span v-else>Create bug</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
