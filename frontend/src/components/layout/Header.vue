<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/composables/useAuth";
import { useNotificationStore } from "@/composables/useFirestore";
import type { Notification } from "@/types";
import { formatTimestampFull } from "@/types";

defineProps<{ collapsed: boolean; user?: unknown }>();
const emit = defineEmits<{ "toggle-sidebar": [] }>();

const authStore = useAuthStore();
const router = useRouter();
const notificationStore = useNotificationStore();

const showUserDropdown = ref(false);
const showNotificationDropdown = ref(false);
const notifications = ref<Notification[]>([]);
let unsubscribe: (() => void) | null = null;

const unreadCount = computed(
  () => notifications.value.filter((n) => !n.read).length,
);
const recentNotifications = computed(() => notifications.value.slice(0, 5));

function handleOutsideClick(e: MouseEvent) {
  const target = e.target as HTMLElement;
  if (!target.closest(".notification-container")) {
    showNotificationDropdown.value = false;
  }
  if (!target.closest(".user-menu-container")) {
    showUserDropdown.value = false;
  }
}

onMounted(() => {
  if (authStore.currentUser.value) {
    unsubscribe = notificationStore.subscribeNotifications(
      authStore.currentUser.value.uid,
      (data) => {
        notifications.value = data;
      },
    );
  }
  document.addEventListener("click", handleOutsideClick);
});

onUnmounted(() => {
  unsubscribe?.();
  document.removeEventListener("click", handleOutsideClick);
});

const handleLogout = async () => {
  showUserDropdown.value = false;
  await authStore.logout();
  router.push("/login");
};

const toggleNotificationDropdown = () => {
  showNotificationDropdown.value = !showNotificationDropdown.value;
  if (showNotificationDropdown.value) {
    showUserDropdown.value = false;
  }
};

const toggleUserDropdown = () => {
  showUserDropdown.value = !showUserDropdown.value;
  if (showUserDropdown.value) {
    showNotificationDropdown.value = false;
  }
};

async function markAllRead() {
  if (!authStore.currentUser.value) return;
  await notificationStore.markAllAsRead(authStore.currentUser.value.uid);
}

async function handleNotificationClick(notification: Notification) {
  showNotificationDropdown.value = false;
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
  <header
    class="flex min-h-16 items-center justify-between gap-3 border-b border-gray-200 bg-white px-4 sm:px-6"
  >
    <div class="flex items-center gap-4">
      <button
        type="button"
        aria-label="Toggle navigation"
        class="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 lg:hidden"
        @click="emit('toggle-sidebar')"
      >
        <i class="fa-solid fa-bars text-lg"></i>
      </button>
      <h2 class="min-w-0 truncate text-xl font-semibold text-gray-800">
        {{ $route.name }}
      </h2>
    </div>
    <div class="flex items-center gap-2 sm:gap-4">
      <!-- Notification Icon & Dropdown Panel -->
      <div class="relative notification-container">
        <button
          type="button"
          aria-label="Notifications"
          @click="toggleNotificationDropdown"
          class="relative rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors focus:outline-none"
        >
          <i class="fa-solid fa-bell text-lg"></i>
          <span
            v-if="unreadCount > 0"
            class="absolute top-1.5 right-1.5 h-4 w-4 rounded-full bg-red-500 flex items-center justify-center text-[10px] font-bold text-white border-2 border-white"
          >
            {{ unreadCount > 9 ? "9+" : unreadCount }}
          </span>
        </button>

        <!-- Dropdown Panel -->
        <div
          v-if="showNotificationDropdown"
          class="absolute right-0 mt-2 w-80 sm:w-96 rounded-xl bg-white shadow-xl ring-1 ring-black ring-opacity-5 z-50 overflow-hidden"
        >
          <div
            class="px-4 py-3 border-b border-gray-100 flex items-center justify-between bg-gray-50/50"
          >
            <div class="flex items-center gap-2">
              <span class="text-sm font-semibold text-gray-900"
                >Notifications</span
              >
              <span
                v-if="unreadCount > 0"
                class="rounded-full bg-indigo-100 text-indigo-700 px-2 py-0.5 text-xs font-semibold"
              >
                {{ unreadCount }} new
              </span>
            </div>
            <button
              v-if="unreadCount > 0"
              @click="markAllRead"
              class="text-xs font-medium text-indigo-600 hover:text-indigo-800 flex items-center gap-1 transition-colors"
            >
              <i class="fa-solid fa-check-double text-[10px]"></i>
              <span>Mark all read</span>
            </button>
          </div>

          <div class="max-h-80 overflow-y-auto divide-y divide-gray-100">
            <div
              v-if="notifications.length === 0"
              class="p-6 text-center text-gray-500"
            >
              <div
                class="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-400"
              >
                <i class="fa-solid fa-bell-slash text-base"></i>
              </div>
              <p class="text-sm font-medium text-gray-700">No notifications</p>
              <p class="text-xs text-gray-400 mt-0.5">You're all caught up!</p>
            </div>

            <div
              v-for="notification in recentNotifications"
              :key="notification.id"
              @click="handleNotificationClick(notification)"
              class="p-3.5 hover:bg-gray-50 cursor-pointer transition-colors flex items-start gap-3 relative"
              :class="notification.read ? 'opacity-70' : 'bg-indigo-50/20'"
            >
              <div
                v-if="!notification.read"
                class="absolute left-1.5 top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-indigo-600"
              ></div>
              <div
                class="flex-shrink-0 mt-0.5"
                :class="!notification.read ? 'ml-1' : 'ml-0'"
              >
                <div
                  class="flex h-7 w-7 items-center justify-center rounded-md"
                  :class="
                    getNotificationIcon(
                      notification.title,
                      notification.message,
                    ).bg
                  "
                >
                  <i
                    :class="
                      getNotificationIcon(
                        notification.title,
                        notification.message,
                      ).icon
                    "
                    class="text-xs"
                  ></i>
                </div>
              </div>
              <div class="min-w-0 flex-1">
                <p
                  class="text-xs font-semibold text-gray-900 truncate"
                  :class="notification.read ? 'font-medium' : 'font-bold'"
                >
                  {{ notification.title }}
                </p>
                <p class="text-xs text-gray-600 line-clamp-2 mt-0.5">
                  {{ notification.message }}
                </p>
                <p
                  class="text-[10px] text-gray-400 mt-1 flex items-center gap-1"
                >
                  <i class="fa-regular fa-clock text-[9px]"></i>
                  <span>{{
                    formatTimestampFull(notification.createdAt)
                  }}</span>
                </p>
              </div>
            </div>
          </div>

          <div class="border-t border-gray-100 bg-gray-50/50 p-2 text-center">
            <router-link
              to="/notifications"
              @click="showNotificationDropdown = false"
              class="block w-full py-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
            >
              View all notifications
              <i class="fa-solid fa-arrow-right text-[10px] ml-1"></i>
            </router-link>
          </div>
        </div>
      </div>

      <!-- User Menu -->
      <div class="relative user-menu-container">
        <button
          @click="toggleUserDropdown"
          class="flex items-center gap-2 rounded-full border border-gray-200 p-1 pr-3 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        >
          <div
            class="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-primary-700 text-sm font-semibold"
          >
            {{
              authStore.currentUser?.displayName?.charAt(0)?.toUpperCase() ||
              "U"
            }}
          </div>
          <span class="hidden text-sm font-medium text-gray-700 sm:inline">{{
            authStore.currentUser?.displayName || "User"
          }}</span>
          <i
            class="fa-solid fa-chevron-down text-xs text-gray-400 hidden sm:inline"
          ></i>
        </button>

        <div
          v-if="showUserDropdown"
          class="absolute right-0 mt-2 w-48 rounded-lg bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 z-50"
        >
          <div class="px-4 py-2 border-b border-gray-100">
            <p class="text-xs text-gray-500">Signed in as</p>
            <p class="text-sm font-medium text-gray-900 truncate">
              {{ authStore.currentUser?.email }}
            </p>
          </div>
          <button
            @click="handleLogout"
            class="flex items-center w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-50"
          >
            <i class="fa-solid fa-arrow-right-from-bracket mr-2 text-xs"></i>
            <span>Sign out</span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
