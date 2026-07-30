<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/composables/useAuth'
import { useNotificationStore } from '@/composables/useFirestore'
import type { Notification } from '@/types'
import { formatTimestampFull } from '@/types'

const authStore = useAuthStore()
const notificationStore = useNotificationStore()
const router = useRouter()

const notifications = ref<Notification[]>([])
const loading = ref(true)
let unsubscribe: (() => void) | null = null

onMounted(() => {
  if (authStore.currentUser.value) {
    unsubscribe = notificationStore.subscribeNotifications(
      authStore.currentUser.value.uid,
      (data) => {
        notifications.value = data
        loading.value = false
      }
    )
  } else {
    loading.value = false
  }
})

onUnmounted(() => {
  unsubscribe?.()
})

const unreadCount = computed(() => notifications.value.filter(n => !n.read).length)

async function markAllRead() {
  if (!authStore.currentUser.value) return
  await notificationStore.markAllAsRead(authStore.currentUser.value.uid)
}

async function handleNotificationClick(notification: Notification) {
  if (!notification.read) {
    await notificationStore.markAsRead(notification.id)
  }
  if (notification.link) {
    router.push(notification.link)
  }
}
</script>

<template>
  <div class="max-w-3xl mx-auto">
    <div class="mb-6 flex items-center justify-between flex-wrap gap-4">
      <div>
        <h1 class="text-2xl font-bold text-gray-900">Notifications</h1>
        <p class="mt-1 text-sm text-gray-500">System alerts and project updates</p>
      </div>
      <button 
        v-if="unreadCount > 0" 
        @click="markAllRead" 
        class="text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
      >
        Mark all as read
      </button>
    </div>

    <div v-if="loading" class="flex items-center justify-center py-16">
      <div class="h-8 w-8 rounded-full border-4 border-indigo-500 border-t-transparent animate-spin"></div>
    </div>

    <div v-else-if="notifications.length === 0" class="card p-16 text-center">
      <p class="text-5xl mb-4">🔕</p>
      <h3 class="text-lg font-semibold text-gray-900">You're all caught up</h3>
      <p class="mt-1 text-sm text-gray-500">No new notifications at the moment.</p>
    </div>

    <div v-else class="card overflow-hidden">
      <div class="divide-y divide-gray-100">
        <div 
          v-for="notification in notifications" 
          :key="notification.id"
          @click="handleNotificationClick(notification)"
          class="p-4 sm:px-6 hover:bg-gray-50 cursor-pointer transition-colors relative"
          :class="notification.read ? 'opacity-70' : 'bg-indigo-50/30'"
        >
          <!-- Unread indicator dot -->
          <div v-if="!notification.read" class="absolute left-3 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-indigo-600"></div>
          
          <div class="flex items-start justify-between gap-4" :class="!notification.read ? 'ml-3' : 'ml-0'">
            <div class="min-w-0 flex-1">
              <h4 class="text-sm font-semibold text-gray-900 mb-1" :class="notification.read ? 'font-medium' : 'font-bold'">
                {{ notification.title }}
              </h4>
              <p class="text-sm text-gray-600 leading-snug">{{ notification.message }}</p>
              <p class="text-xs text-gray-400 mt-2">{{ formatTimestampFull(notification.createdAt) }}</p>
            </div>
            <div v-if="notification.link" class="flex-shrink-0 text-gray-400">
              <span class="text-xl">›</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
