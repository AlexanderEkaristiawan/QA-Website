"<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useAuthStore } from '@/composables/useAuth'

defineProps<{ collapsed: boolean }>()
const emit = defineEmits<{ toggle: [] }>()

const route = useRoute()
const authStore = useAuthStore()

const navigation = [
  { name: 'Dashboard', path: '/dashboard', icon: '📊' },
  { name: 'Projects', path: '/projects', icon: '📁' },
]

const isActive = (path: string) => route.path.startsWith(path)
</script>

<template>
  <aside
    class="flex flex-col border-r border-gray-200 bg-white transition-all duration-300"
    :class="collapsed ? 'w-16' : 'w-64'"
  >
    <div class="flex h-16 items-center justify-between border-b border-gray-200 px-4">
      <div v-if="!collapsed" class="flex items-center gap-2">
        <span class="text-xl font-bold text-primary-600">QA</span>
        <span class="text-sm font-medium text-gray-500">Suite</span>
      </div>
      <div v-else class="mx-auto">
        <span class="text-xl font-bold text-primary-600">Q</span>
      </div>
      <button @click="emit('toggle')" class="rounded-lg p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
        <span v-if="collapsed">→</span>
        <span v-else>←</span>
      </button>
    </div>

    <nav class="flex-1 space-y-1 px-3 py-4">
      <router-link
        v-for="item in navigation"
        :key="item.name"
        :to="item.path"
        class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors"
        :class="isActive(item.path) ? 'bg-primary-50 text-primary-700' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'"
      >
        <span class="text-lg">{{ item.icon }}</span>
        <span v-if="!collapsed">{{ item.name }}</span>
      </router-link>
    </nav>

    <div class="border-t border-gray-200 p-4">
      <div v-if="!collapsed" class="flex items-center gap-3">
        <div class="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-primary-700 text-sm font-semibold">
          {{ authStore.currentUser?.displayName?.charAt(0)?.toUpperCase() || 'U' }}
        </div>
        <div class="min-w-0 flex-1">
          <p class="text-sm font-medium text-gray-900 truncate">{{ authStore.currentUser?.displayName }}</p>
          <p class="text-xs text-gray-500 truncate">{{ authStore.currentUser?.email }}</p>
        </div>
      </div>
    </div>
  </aside>
</template>
"
