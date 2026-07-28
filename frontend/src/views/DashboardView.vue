"<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/composables/useAuth'
import { useProjectStore } from '@/composables/useFirestore'
import type { Project } from '@/types'

const router = useRouter()
const authStore = useAuthStore()
const projectStore = useProjectStore()

const projects = ref<Project[]>([])
const loading = ref(true)
let unsubscribe: (() => void) | null = null

onMounted(() => {
  if (!authStore.currentUser.value) return

  unsubscribe = projectStore.subscribeProjects(authStore.currentUser.value.uid, (data) => {
    projects.value = data
    loading.value = false
  })
})

onUnmounted(() => {
  if (unsubscribe) unsubscribe()
})

function formatDate(ts: any): string {
  if (!ts) return 'Just now'
  if (ts.toDate) return ts.toDate().toLocaleDateString()
  if (ts instanceof Date) return ts.toLocaleDateString()
  return String(ts)
}
</script>

<template>
  <div>
    <div class="mb-8">
      <h1 class="text-2xl font-bold text-gray-900">Dashboard</h1>
      <p class="mt-1 text-gray-500">Overview of your QA projects and recent audits</p>
    </div>

    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <div class="card p-6">
        <div class="flex items-center gap-4">
          <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">📁</div>
          <div>
            <p class="text-sm text-gray-500">Total Projects</p>
            <p class="text-2xl font-bold text-gray-900">{{ projects.length }}</p>
          </div>
        </div>
      </div>
      <div class="card p-6">
        <div class="flex items-center gap-4">
          <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-600">✅</div>
          <div>
            <p class="text-sm text-gray-500">Recent Audits</p>
            <p class="text-2xl font-bold text-gray-900">--</p>
          </div>
        </div>
      </div>
      <div class="card p-6">
        <div class="flex items-center gap-4">
          <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-100 text-yellow-600">🐛</div>
          <div>
            <p class="text-sm text-gray-500">Open Bugs</p>
            <p class="text-2xl font-bold text-gray-900">--</p>
          </div>
        </div>
      </div>
      <div class="card p-6">
        <div class="flex items-center gap-4">
          <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600">📊</div>
          <div>
            <p class="text-sm text-gray-500">Avg Performance</p>
            <p class="text-2xl font-bold text-gray-900">--</p>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-8">
      <div class="mb-4 flex items-center justify-between">
        <h2 class="text-lg font-semibold text-gray-900">Recent Projects</h2>
        <router-link to="/projects" class="btn-primary text-sm">View All</router-link>
      </div>

      <div v-if="loading" class="flex items-center justify-center py-12">
        <span class="animate-spin text-2xl">⟳</span>
      </div>

      <div v-else-if="projects.length === 0" class="card p-12 text-center">
        <p class="text-4xl mb-4">🚀</p>
        <h3 class="text-lg font-semibold text-gray-900">No projects yet</h3>
        <p class="mt-1 text-sm text-gray-500">Create your first project to start auditing</p>
        <router-link to="/projects" class="btn-primary mt-4 inline-block">Create Project</router-link>
      </div>

      <div v-else class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <router-link
          v-for="project in projects.slice(0, 6)"
          :key="project.id"
          :to="`/projects/${project.id}`"
          class="card p-6 hover:shadow-md transition-shadow"
        >
          <h3 class="font-semibold text-gray-900 truncate">{{ project.name }}</h3>
          <p class="mt-1 text-sm text-gray-500 truncate">{{ project.targetUrl }}</p>
          <div class="mt-4 flex items-center gap-2 text-sm text-gray-500">
            <span>{{ formatDate(project.createdAt) }}</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
"
