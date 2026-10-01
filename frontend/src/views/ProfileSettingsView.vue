<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/composables/useAuth'

const authStore = useAuthStore()
const displayName = ref(authStore.currentUser.value?.displayName || '')
const saving = ref(false)
const errorMessage = ref('')
const successMessage = ref('')

async function saveProfile() {
  errorMessage.value = ''
  successMessage.value = ''
  saving.value = true
  try {
    await authStore.updateDisplayName(displayName.value)
    displayName.value = authStore.currentUser.value?.displayName || displayName.value.trim()
    successMessage.value = 'Your display name has been updated.'
  } catch (err: any) {
    errorMessage.value = err.message || 'Could not update your profile.'
  } finally {
    saving.value = false
  }
}
</script>

<template>
  <div class="mx-auto max-w-3xl space-y-6">
    <div>
      <h1 class="text-2xl font-bold text-gray-900">Profile Settings</h1>
      <p class="mt-1 text-sm text-gray-500">Update the name shown in your QA-Suite account.</p>
    </div>

    <form class="card max-w-xl space-y-5 p-5 sm:p-6" @submit.prevent="saveProfile">
      <div class="flex items-center gap-4 border-b border-gray-100 pb-5">
        <div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary-100 text-xl font-bold text-primary-700">
          {{ (authStore.currentUser.value?.displayName || 'U').charAt(0).toUpperCase() }}
        </div>
        <div class="min-w-0">
          <p class="truncate font-semibold text-gray-900">{{ authStore.currentUser.value?.displayName || 'User' }}</p>
          <p class="truncate text-sm text-gray-500">{{ authStore.currentUser.value?.email }}</p>
        </div>
      </div>

      <label class="block space-y-1.5">
        <span class="text-sm font-medium text-gray-700">Username / display name</span>
        <input
          v-model="displayName"
          class="input"
          type="text"
          autocomplete="nickname"
          minlength="2"
          maxlength="50"
          required
          placeholder="Your name"
        />
        <span class="block text-xs text-gray-500">This name appears in the account menu and your workspace profile.</span>
      </label>

      <div v-if="errorMessage" role="alert" class="rounded-lg border border-rose-200 bg-rose-50 p-3 text-sm text-rose-700">
        {{ errorMessage }}
      </div>
      <div v-if="successMessage" role="status" class="rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-800">
        {{ successMessage }}
      </div>

      <div class="flex justify-end border-t border-gray-100 pt-4">
        <button type="submit" class="btn-primary" :disabled="saving || !displayName.trim()">
          {{ saving ? 'Saving…' : 'Save changes' }}
        </button>
      </div>
    </form>
  </div>
</template>
