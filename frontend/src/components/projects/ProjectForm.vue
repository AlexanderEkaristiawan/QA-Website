<script setup lang="ts">
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
const ownershipVerified = ref(false)
const loading = ref(false)
const error = ref('')

async function handleSubmit() {
  if (!name.value || !targetUrl.value) {
    error.value = 'Name and Target URL are required'
    return
  }

  if (!ownershipVerified.value) {
    error.value = 'You must confirm domain ownership before creating the project.'
    return
  }

  if (!authStore.currentUser.value) return

  loading.value = true
  error.value = ''

  try {
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
      ownerId: authStore.currentUser.value.uid,
      name: name.value,
      targetUrl: targetUrl.value,
      authSettings,
      ownershipVerified: ownershipVerified.value,
    } as any) // Type assertion since members and bugCounter are handled in the store
    
    emit('created', id)
  } catch (err: any) {
    error.value = err.message || 'Failed to create project'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
    <div class="card w-full max-w-lg">
      <div class="card-header flex items-center justify-between">
        <h2 class="text-lg font-semibold text-gray-900">New QA Project</h2>
        <button @click="emit('close')" class="text-gray-400 hover:text-gray-600 text-xl">✕</button>
      </div>

      <form @submit.prevent="handleSubmit" class="card-body space-y-5">
        <div>
          <label class="label">Project Name</label>
          <input v-model="name" type="text" class="input" placeholder="e.g. My Website Audit" required />
        </div>

        <div>
          <label class="label">Target URL</label>
          <input v-model="targetUrl" type="url" class="input" placeholder="https://example.com" required />
          <p class="text-xs text-gray-500 mt-1">Must include http:// or https://</p>
        </div>

        <div>
          <label class="label">Authentication (Optional)</label>
          <select v-model="authType" class="input">
            <option value="none">No Authentication (Public Site)</option>
            <option value="basic">Basic Auth (.htpasswd)</option>
            <option value="session">Session Cookie</option>
          </select>
        </div>

        <div v-if="authType === 'basic'" class="grid grid-cols-2 gap-4 rounded-lg bg-gray-50 p-4 border border-gray-100">
          <div>
            <label class="label text-xs">Username</label>
            <input v-model="basicAuthUsername" type="text" class="input text-sm" />
          </div>
          <div>
            <label class="label text-xs">Password</label>
            <input v-model="basicAuthPassword" type="password" class="input text-sm" />
          </div>
        </div>

        <div v-if="authType === 'session'" class="rounded-lg bg-gray-50 p-4 border border-gray-100">
          <label class="label text-xs">Session Cookie String</label>
          <input v-model="sessionCookie" type="text" class="input text-sm" placeholder="session_id=abc123xyz" />
        </div>

        <!-- Authorization Confirmation Checkbox -->
        <div class="rounded-lg border border-amber-200 bg-amber-50 p-4">
          <label class="flex items-start gap-3 cursor-pointer">
            <input 
              v-model="ownershipVerified" 
              type="checkbox" 
              class="mt-1 h-4 w-4 rounded border-amber-300 text-amber-600 focus:ring-amber-500" 
              id="ownership-checkbox"
            />
            <div class="text-sm">
              <span class="font-semibold text-amber-900 block">I confirm authorization</span>
              <span class="text-amber-800 text-xs">I am the owner or have explicit permission to run automated security, SEO, and performance audits against this target URL.</span>
            </div>
          </label>
        </div>

        <div v-if="error" class="rounded-lg bg-red-50 border border-red-200 p-3 text-sm text-red-700 flex items-center gap-2">
          <span>⚠</span> {{ error }}
        </div>

        <div class="flex justify-end gap-3 pt-2">
          <button type="button" @click="emit('close')" class="btn-secondary">Cancel</button>
          <button type="submit" class="btn-primary" :disabled="loading" id="create-project-btn">
            <span v-if="loading" class="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
            <span v-else>Create Project</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
