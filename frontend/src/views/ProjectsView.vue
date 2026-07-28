"<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/composables/useAuth'
import { useProjectStore } from '@/composables/useFirestore'
import ProjectForm from '@/components/projects/ProjectForm.vue'
import type { Project } from '@/types'

const router = useRouter()
const authStore = useAuthStore()
const projectStore = useProjectStore()

const projects = ref<Project[]>([])
const loading = ref(true)
const showCreateForm = ref(false)
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

const deleteProject = async (id: string) => {
  if (!confirm('Are you sure you want to delete this project?')) return
  await projectStore.deleteProject(id)
}
</script>

<template>
  <div>
    <div class="mb-8 flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-bold text-gray-900">Projects</h1>
        <p class="mt-1 text-gray-500">Manage your QA workspaces</p>
      </div>
      <button @click="showCreateForm = true" class="btn-primary">+ New Project</button>
    </div>

    <!-- Create Project Modal -->
    <ProjectForm
      v-if="showCreateForm"
      @close="showCreateForm = false"
      @created="(id: string) => { showCreateForm = false; router.push(`/projects/${id}`) }"
    />

    <!-- Projects List -->
    <div v-if="loading" class="flex items-center justify-center py-12">
      <span class="animate-spin text-2xl">⟳</span>
    </div>

    <div v-else-if="projects.length === 0" class="card p-12 text-center">
      <p class="text-4xl mb-4">📁</p>
      <h3 class="text-lg font-semibold text-gray-900">No projects yet</h3>
      <p class="mt-1 text-sm text-gray-500">Click "New Project" to get started</p>
    </div>

    <div v-else class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div v-for="project in projects" :key="project.id" class="card">
        <div class="p-6">
          <div class="flex items-start justify-between">
            <div class="min-w-0 flex-1">
              <router-link
                :to="`/projects/${project.id}`"
                class="text-lg font-semibold text-gray-900 hover:text-primary-600 truncate block"
              >
                {{ project.name }}
              </router-link>
              <p class="mt-1 text-sm text-gray-500 truncate">{{ project.targetUrl }}</p>
              <p class="mt-2 text-xs text-gray-400">
                Created {{ project.createdAt?.toDate?.().toLocaleDateString() || 'Just now' }}
              </p>
            </div>
          </div>
          <div class="mt-4 flex items-center gap-2">
            <router-link :to="`/projects/${project.id}`" class="btn-secondary text-xs">Open</router-link>
            <router-link :to="`/projects/${project.id}/history`" class="btn-secondary text-xs">Trends</router-link>
            <button @click="deleteProject(project.id)" class="btn-danger text-xs ml-auto">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
"
