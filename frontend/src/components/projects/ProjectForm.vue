"<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/composables/useAuth'
import { useProjectStore } from '@/composables/useFirestore'

const emit = defineEmits<{ close: []; created: [id: string] }>()

const authStore = useAuthStore()
const projectStore = useProjectStore()

const name = ref('')
const targetUrl = ref('')
const authType = ref<'none' | 'basic' | 'session'>('none')
const basicAuthUsername = ref('')
const basicAuthPassword = ref('')
const sessionCookie = ref('')
const loading = ref(false)
const error = ref('')

async function handleSubmit() {
  if (!name.value || !targetUrl.value) {
    error.value = 'Name and Target URL are required'
    return
  }

  if (!authStore.currentUser.value) return

  loading.value = true
  error.value = ''

  try {
    // Clean undefined fields — Firestore rejects undefined values
    const authSettings: Record<string, any> = {
      authType: authType.value,
    }
    if (authType.value === 'basic') {
      authSettings.basicAuthUsername = basicAuthUsername.value || ''
      authSettings.basicAuthPassword = basicAuthPassword.value || ''
    }
    if (authType.value === 'session') {
      authSettings.sessionCookie = sessionCookie.value || ''
    }

    const id = await projectStore.createProject({
      userId: authStore.currentUser.value.uid,
      name: name.value,
      targetUrl: targetUrl.value,
      authSettings,
    })
    emit('created', id)
  } catch (err: any) {
    error.value = err.message || 'Failed to create project'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
    <div class="card w-full max-w-lg">
      <div class="card-header flex items-center justify-between">
        <h2 class="text-lg font-semibold">New Project</h2>
        <button @click="emit('close')" class="text-gray-400 hover:text-gray-600">✕</button>
      </div>

      <form @submit.prevent="handleSubmit" class="card-body space-y-4">
        <div>
          <label class="label">Project Name</label>
          <input v-model="name" type="text" class="input" placeholder="My Website Audit" required />
        </div>

        <div>
          <label class="label">Target URL</label>
          <input v-model="targetUrl" type="url" class="input" placeholder="https://example.com" required />
        </div>

        <div>
          <label class="label">Authentication Type</label>
          <select v-model="authType" class="input">
            <option value="none">No Authentication</option>
            <option value="basic">Basic Auth</option>
            <option value="session">Session Cookie</option>
          </select>
        </div>

        <div v-if="authType === 'basic'" class="grid grid-cols-2 gap-4">
          <div>
            <label class="label">Username</label>
            <input v-model="basicAuthUsername" type="text" class="input" />
          </div>
          <div>
            <label class="label">Password</label>
            <input v-model="basicAuthPassword" type="password" class="input" />
          </div>
        </div>

        <div v-if="authType === 'session'">
          <label class="label">Session Cookie</label>
          <input v-model="sessionCookie" type="text" class="input" placeholder="Cookie: session=abc123" />
        </div>

        <div v-if="error" class="rounded-lg bg-red-50 p-3 text-sm text-red-700">{{ error }}</div>

        <div class="flex justify-end gap-3">
          <button type="button" @click="emit('close')" class="btn-secondary">Cancel</button>
          <button type="submit" class="btn-primary" :disabled="loading">
            <span v-if="loading" class="animate-spin">⟳</span>
            Create Project
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
"
