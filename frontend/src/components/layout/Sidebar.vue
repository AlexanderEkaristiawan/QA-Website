"<script setup lang="ts">
import { onUnmounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useAuthStore } from '@/composables/useAuth'
import { useProjectStore } from '@/composables/useFirestore'
import type { Project } from '@/types'
import qaLogo from '@/assets/qa-logo.png'

defineProps<{ collapsed: boolean; mobileOpen: boolean }>()
const emit = defineEmits<{ toggle: []; closeMobile: [] }>()

const route = useRoute()
const authStore = useAuthStore()
const projectStore = useProjectStore()
const projects = ref<Project[]>([])
const projectsLoading = ref(false)
const projectsExpanded = ref(route.path.startsWith('/projects'))
let unsubscribeProjects: (() => void) | null = null

const navigation = [
  { name: 'Dashboard', path: '/dashboard', icon: '📊' },
  { name: 'Projects', path: '/projects', icon: '📁' },
]

const isActive = (path: string) => route.path.startsWith(path)

watch(() => authStore.currentUser.value?.uid, (userId) => {
  unsubscribeProjects?.()
  unsubscribeProjects = null
  projects.value = []
  if (!userId) return

  projectsLoading.value = true
  unsubscribeProjects = projectStore.subscribeProjects(userId, (items) => {
    projects.value = items
    projectsLoading.value = false
  })
}, { immediate: true })

watch(() => route.path, (path) => {
  if (path.startsWith('/projects')) projectsExpanded.value = true
})

onUnmounted(() => unsubscribeProjects?.())

function closeNavigation() {
  emit('closeMobile')
}
</script>

<template>
  <aside
    class="fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-gray-200 bg-white transition-transform duration-300 lg:static lg:z-auto lg:translate-x-0 lg:transition-[width]"
    :class="[
      collapsed ? 'lg:w-16' : 'lg:w-64',
      mobileOpen ? 'translate-x-0' : '-translate-x-full',
    ]"
  >
    <div
      class="relative flex h-16 items-center border-b border-gray-200"
      :class="collapsed ? 'justify-center px-2' : 'justify-between px-4'"
    >
      <div v-if="!collapsed" class="flex items-center gap-2">
        <img :src="qaLogo" alt="QA-Suite logo" class="h-10 w-10 rounded-sm object-cover" />
        <span class="text-sm font-medium text-gray-500">Suite</span>
      </div>
      <div v-else>
        <img :src="qaLogo" alt="QA-Suite logo" class="h-8 w-8 rounded-sm object-cover" />
      </div>
      <button
        @click="emit('toggle')"
        class="text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        :class="collapsed
          ? 'absolute -right-3 top-1/2 z-10 h-8 w-8 -translate-y-1/2 rounded-full border border-gray-200 bg-white shadow-sm'
          : 'rounded-lg p-1.5'"
      >
        <span v-if="collapsed">→</span>
        <span v-else>←</span>
      </button>
    </div>

    <nav class="flex-1 space-y-1 overflow-y-auto px-3 py-4">
      <router-link
        v-for="item in navigation.filter(item => item.name === 'Dashboard')"
        :key="item.name"
        :to="item.path"
        class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors"
        :class="isActive(item.path) ? 'bg-primary-50 text-primary-700' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'"
        @click="closeNavigation"
      >
        <span class="text-lg">{{ item.icon }}</span>
        <span v-if="!collapsed">{{ item.name }}</span>
      </router-link>

      <div v-if="!collapsed" class="space-y-1">
        <div class="flex items-center gap-1">
          <router-link
            to="/projects"
            class="flex min-w-0 flex-1 items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors"
            :class="isActive('/projects') ? 'bg-primary-50 text-primary-700' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'"
            @click="closeNavigation"
          >
            <span class="text-lg">📁</span>
            <span class="truncate">Projects</span>
          </router-link>
          <button
            type="button"
            class="rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-800"
            :aria-expanded="projectsExpanded"
            aria-label="Toggle project list"
            @click="projectsExpanded = !projectsExpanded"
          >
            <i class="fa-solid fa-chevron-down text-xs transition-transform" :class="projectsExpanded ? 'rotate-180' : ''"></i>
          </button>
        </div>

        <div v-if="projectsExpanded" class="ml-5 space-y-1 border-l border-gray-200 pl-3">
          <p v-if="projectsLoading" class="px-3 py-2 text-xs text-gray-400">Loading projects…</p>
          <p v-else-if="projects.length === 0" class="px-3 py-2 text-xs text-gray-400">No projects yet</p>
          <router-link
            v-for="project in projects"
            :key="project.id"
            :to="`/projects/${project.id}`"
            class="block truncate rounded-lg px-3 py-2 text-sm transition-colors"
            :class="route.params.id === project.id ? 'bg-primary-50 font-semibold text-primary-700' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'"
            :title="project.name"
            @click="closeNavigation"
          >
            {{ project.name }}
          </router-link>
        </div>
      </div>

      <router-link
        v-else
        to="/projects"
        class="flex items-center justify-center rounded-lg px-3 py-2.5 text-lg transition-colors"
        :class="isActive('/projects') ? 'bg-primary-50 text-primary-700' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'"
        title="Projects"
        @click="closeNavigation"
      >
        📁
      </router-link>
    </nav>

    <div class="border-t border-gray-200 p-4">
      <div v-if="!collapsed" class="flex items-center gap-3">
        <div class="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-primary-700 text-sm font-semibold">
          {{ authStore.currentUser.value?.displayName?.charAt(0)?.toUpperCase() || 'U' }}
        </div>
        <div class="min-w-0 flex-1">
          <p class="text-sm font-medium text-gray-900 truncate">{{ authStore.currentUser.value?.displayName }}</p>
          <p class="text-xs text-gray-500 truncate">{{ authStore.currentUser.value?.email }}</p>
        </div>
      </div>
    </div>
  </aside>
  <button
    v-if="mobileOpen"
    type="button"
    aria-label="Close navigation"
    class="fixed inset-0 z-30 bg-gray-900/40 lg:hidden"
    @click="emit('closeMobile')"
  />
</template>
"
