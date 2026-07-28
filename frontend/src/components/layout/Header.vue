"<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/composables/useAuth'
import type { AppUser } from '@/types'

defineProps<{ user: AppUser | null }>()
const emit = defineEmits<{ toggleSidebar: [] }>()

const router = useRouter()
const authStore = useAuthStore()

async function handleLogout() {
  await authStore.logout()
  router.push('/login')
}
</script>

<template>
  <header class="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-6">
    <div class="flex items-center gap-4">
      <button @click="emit('toggleSidebar')" class="rounded-lg p-2 text-gray-500 hover:bg-gray-100 lg:hidden">
        <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <h1 class="text-lg font-semibold text-gray-900">QA-Suite</h1>
    </div>

    <div class="flex items-center gap-4">
      <router-link to="/projects" class="btn-secondary text-sm">New Project</router-link>
      <div class="flex items-center gap-3">
        <div class="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-primary-700 text-sm font-semibold">
          {{ user?.displayName?.charAt(0)?.toUpperCase() || 'U' }}
        </div>
        <div class="hidden md:block">
          <p class="text-sm font-medium text-gray-900">{{ user?.displayName }}</p>
        </div>
        <button @click="handleLogout" class="text-sm text-gray-500 hover:text-gray-700">Logout</button>
      </div>
    </div>
  </header>
</template>
"
