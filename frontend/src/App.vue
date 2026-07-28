<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useAuthStore } from '@/composables/useAuth'
import AppLayout from '@/components/layout/AppLayout.vue'

const authStore = useAuthStore()
const route = useRoute()

// Determine if current route should show the app layout (sidebar + header)
const requiresLayout = ref(false)

watch(
  () => route.meta.requiresAuth,
  (val) => {
    requiresLayout.value = val !== false
  },
  { immediate: true }
)

onMounted(() => {
  authStore.init()
})
</script>

<template>
  <AppLayout v-if="requiresLayout && authStore.isAuthenticated">
    <router-view />
  </AppLayout>
  <router-view v-else />
</template>

