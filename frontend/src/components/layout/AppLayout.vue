"<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/composables/useAuth'
import Sidebar from './Sidebar.vue'
import Header from './Header.vue'

const authStore = useAuthStore()
const sidebarCollapsed = ref(false)

function toggleSidebar() {
  sidebarCollapsed.value = !sidebarCollapsed.value
}
</script>

<template>
  <div class="flex h-screen overflow-hidden bg-gray-50">
    <!-- Sidebar -->
    <Sidebar :collapsed="sidebarCollapsed" @toggle="toggleSidebar" />

    <!-- Main Content Area -->
    <div class="flex flex-1 flex-col overflow-hidden">
      <!-- Header -->
      <Header :user="authStore.currentUser" @toggle-sidebar="toggleSidebar" />

      <!-- Page Content -->
      <main class="flex-1 overflow-y-auto p-6 scrollbar-thin">
        <router-view />
      </main>
    </div>
  </div>
</template>
"
