<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/composables/useAuth'
import { useNotificationStore } from '@/composables/useFirestore'
import type { Notification } from '@/types'

defineProps<{ collapsed: boolean }>()

const authStore = useAuthStore()
const router = useRouter()
const notificationStore = useNotificationStore()
const showDropdown = ref(false)

const notifications = ref<Notification[]>([])
let unsubscribe: (() => void) | null = null

const unreadCount = computed(() => notifications.value.filter(n => !n.read).length)

onMounted(() => {
  if (authStore.currentUser.value) {
    unsubscribe = notificationStore.subscribeNotifications(
      authStore.currentUser.value.uid,
      (data) => {
        notifications.value = data
      }
    )
  }
})

onUnmounted(() => {
  unsubscribe?.()
})

const handleLogout = async () => {
  await authStore.logout()
  router.push('/login')
}

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value
}
</script>

<template>
  <header class="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-6">
    <div class="flex items-center gap-4">
      <h2 class="text-xl font-semibold text-gray-800">{{ $route.name }}</h2>
    </div>
    <div class="flex items-center gap-4">
      <!-- Notification Bell -->
      <router-link to="/notifications" class="relative rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors">
        <span class="text-xl">🔔</span>
        <span 
          v-if="unreadCount > 0" 
          class="absolute top-1.5 right-1.5 h-4 w-4 rounded-full bg-red-500 flex items-center justify-center text-[10px] font-bold text-white border-2 border-white"
        >
          {{ unreadCount > 9 ? '9+' : unreadCount }}
        </span>
      </router-link>

      <div class="relative">
        <button
          @click="toggleDropdown"
          class="flex items-center gap-2 rounded-full border border-gray-200 p-1 pr-3 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        >
          <div class="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-primary-700 text-sm font-semibold">
            {{ authStore.currentUser?.displayName?.charAt(0)?.toUpperCase() || 'U' }}
          </div>
          <span class="text-sm font-medium text-gray-700">{{ authStore.currentUser?.displayName || 'User' }}</span>
          <span class="text-xs text-gray-400">▼</span>
        </button>

        <div
          v-if="showDropdown"
          class="absolute right-0 mt-2 w-48 rounded-lg bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5"
          @click.away="showDropdown = false"
        >
          <div class="px-4 py-2 border-b border-gray-100">
            <p class="text-xs text-gray-500">Signed in as</p>
            <p class="text-sm font-medium text-gray-900 truncate">{{ authStore.currentUser?.email }}</p>
          </div>
          <button
            @click="handleLogout"
            class="block w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-50"
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
