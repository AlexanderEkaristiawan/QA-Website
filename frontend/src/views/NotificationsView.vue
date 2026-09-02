<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/composables/useAuth";
import { useNotificationStore } from "@/composables/useFirestore";
import type { Notification } from "@/types";
import { formatTimestampFull } from "@/types";

const authStore = useAuthStore();
const notificationStore = useNotificationStore();
const router = useRouter();

const notifications = ref<Notification[]>([]);
const loading = ref(true);
let unsubscribe: (() => void) | null = null;

onMounted(() => {
  if (authStore.currentUser.value) {
    unsubscribe = notificationStore.subscribeNotifications(
      authStore.currentUser.value.uid,
      (data) => {
        notifications.value = data;
        loading.value = false;
      },
    );
  } else {
    loading.value = false;
  }
});

onUnmounted(() => {
  unsubscribe?.();
});

const unreadCount = computed(
  () => notifications.value.filter((n) => !n.read).length,
);

async function markAllRead() {
  if (!authStore.currentUser.value) return;
  await notificationStore.markAllAsRead(authStore.currentUser.value.uid);
}

async function handleNotificationClick(notification: Notification) {
  if (!notification.read) {
    await notificationStore.markAsRead(notification.id);
  }
  if (notification.link) {
    router.push(notification.link);
  }
}

function getNotificationIcon(title: string, message: string) {
  const text = `${title} ${message}`.toLowerCase();
  if (
    text.includes("error") ||
    text.includes("failed") ||
    text.includes("alert") ||
    text.includes("critical")
  ) {
    return {
      icon: "fa-solid fa-triangle-exclamation",
      bg: "bg-red-100 text-red-600",
    };
  }
  if (
    text.includes("passed") ||
    text.includes("success") ||
    text.includes("resolved") ||
    text.includes("completed")
  ) {
    return {
      icon: "fa-solid fa-circle-check",
      bg: "bg-green-100 text-green-600",
    };
  }
  if (text.includes("bug") || text.includes("issue")) {
    return {
      icon: "fa-solid fa-bug",
      bg: "bg-amber-100 text-amber-600",
    };
  }
  if (
    text.includes("audit") ||
    text.includes("crawl") ||
    text.includes("scan")
  ) {
    return {
      icon: "fa-solid fa-shield-halved",
      bg: "bg-purple-100 text-purple-600",
    };
  }
  if (text.includes("test") || text.includes("suite")) {
    return {
      icon: "fa-solid fa-flask",
      bg: "bg-blue-100 text-blue-600",
    };
  }
  return {
    icon: "fa-solid fa-bell",
    bg: "bg-indigo-100 text-indigo-600",
  };
}
</script>

<template>
  <div class="max-w-3xl mx-auto">
    <div class="mb-6 flex items-center justify-between flex-wrap gap-4">
      <div>
        <div class="flex items-center gap-2.5">
          <i class="fa-solid fa-bell text-xl text-indigo-600"></i>
          <h1 class="text-2xl font-bold text-gray-900">Notifications</h1>
        </div>
        <p class="mt-1 text-sm text-gray-500">
          System alerts and project updates
        </p>
      </div>
      <button
        v-if="unreadCount > 0"
        @click="markAllRead"
        class="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
      >
        <i class="fa-solid fa-check-double text-xs"></i>
        <span>Mark all as read</span>
      </button>
    </div>

    <div v-if="loading" class="flex items-center justify-center py-16">
      <div
        class="h-8 w-8 rounded-full border-4 border-indigo-500 border-t-transparent animate-spin"
      ></div>
    </div>

    <div v-else-if="notifications.length === 0" class="card p-16 text-center">
      <div
        class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-gray-400"
      >
        <i class="fa-solid fa-bell-slash text-2xl"></i>
      </div>
      <h3 class="text-lg font-semibold text-gray-900">You're all caught up</h3>
      <p class="mt-1 text-sm text-gray-500">
        No new notifications at the moment.
      </p>
    </div>

    <div v-else class="card overflow-hidden">
      <div class="divide-y divide-gray-100">
        <div
          v-for="notification in notifications"
          :key="notification.id"
          @click="handleNotificationClick(notification)"
          class="p-4 sm:px-6 hover:bg-gray-50 cursor-pointer transition-colors relative flex items-start gap-4"
          :class="notification.read ? 'opacity-75' : 'bg-indigo-50/30'"
        >
          <!-- Unread indicator dot -->
          <div
            v-if="!notification.read"
            class="absolute left-2 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-indigo-600"
          ></div>

          <div
            class="flex-shrink-0 mt-0.5"
            :class="!notification.read ? 'ml-2' : 'ml-0'"
          >
            <div
              class="flex h-9 w-9 items-center justify-center rounded-lg"
              :class="
                getNotificationIcon(notification.title, notification.message).bg
              "
            >
              <i
                :class="
                  getNotificationIcon(notification.title, notification.message)
                    .icon
                "
                class="text-sm"
              ></i>
            </div>
          </div>

          <div class="min-w-0 flex-1">
            <h4
              class="text-sm font-semibold text-gray-900 mb-1"
              :class="notification.read ? 'font-medium' : 'font-bold'"
            >
              {{ notification.title }}
            </h4>
            <p class="text-sm text-gray-600 leading-snug">
              {{ notification.message }}
            </p>
            <p class="text-xs text-gray-400 mt-2 flex items-center gap-1.5">
              <i class="fa-regular fa-clock text-[11px]"></i>
              <span>{{ formatTimestampFull(notification.createdAt) }}</span>
            </p>
          </div>

          <div
            v-if="notification.link"
            class="flex-shrink-0 self-center text-gray-400"
          >
            <i class="fa-solid fa-chevron-right text-xs"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
