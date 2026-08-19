"<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/composables/useAuth'
import Sidebar from './Sidebar.vue'
import Header from './Header.vue'

const authStore = useAuthStore()
const sidebarCollapsed = ref(false)
const mobileSidebarOpen = ref(false)

function toggleSidebar() {
  if (window.innerWidth < 1024) {
    mobileSidebarOpen.value = !mobileSidebarOpen.value
    return
  }
  sidebarCollapsed.value = !sidebarCollapsed.value
}

function closeMobileSidebar() {
  mobileSidebarOpen.value = false
}
</script>

<template>
  <div class="flex h-screen overflow-hidden bg-gray-50">
    <!-- Sidebar -->
    <Sidebar
      :collapsed="sidebarCollapsed"
      :mobile-open="mobileSidebarOpen"
      @toggle="toggleSidebar"
      @close-mobile="closeMobileSidebar"
    />

    <!-- Main Content Area -->
    <div class="flex flex-1 flex-col overflow-hidden">
      <!-- Header -->
      <Header :collapsed="sidebarCollapsed" :user="authStore.currentUser" @toggle-sidebar="toggleSidebar" />

      <!-- Page Content -->
      <main class="min-w-0 flex-1 overflow-y-auto p-4 scrollbar-thin sm:p-6">
        <router-view />
      </main>
    </div>
  </div>
</template>
"
