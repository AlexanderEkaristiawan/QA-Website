"<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/composables/useAuth'
import { useProjectStore, useBugStore, useTestCaseStore } from '@/composables/useFirestore'
import ProjectForm from '@/components/projects/ProjectForm.vue'
import type { Project } from '@/types'

const router = useRouter()
const authStore = useAuthStore()
const projectStore = useProjectStore()
const bugStore = useBugStore()
const testCaseStore = useTestCaseStore()

const projects = ref<Project[]>([])
const loading = ref(true)
const showCreateForm = ref(false)
const loadingExample = ref(false)
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

const loadExampleData = async () => {
  if (!authStore.currentUser.value) return
  loadingExample.value = true
  try {
    const projectId = await projectStore.createProject({
      ownerId: authStore.currentUser.value.uid,
      name: 'Example QA Project',
      targetUrl: 'https://example-corp.com',
      authSettings: { authType: 'none' },
      ownershipVerified: true
    } as any)

    await bugStore.createBug({
      projectId,
      title: 'Missing H1 tag on homepage',
      description: 'The main landing page has multiple H2s but no H1 tag. This negatively impacts SEO rankings.',
      source: 'SEO',
      severity: 'Medium',
      status: 'Open',
      tags: ['SEO', 'Content']
    })

    await bugStore.createBug({
      projectId,
      title: 'Reflected XSS in search query',
      description: 'The search results page reflects the `q` parameter directly into the DOM without sanitization, allowing potential script injection.',
      source: 'SECURITY',
      severity: 'High',
      status: 'Open',
      tags: ['Security', 'XSS']
    })

    await bugStore.createBug({
      projectId,
      title: 'Large LCP due to unoptimized hero image',
      description: 'The hero image is 4MB, causing the Largest Contentful Paint metric to exceed 3 seconds.',
      source: 'PERFORMANCE',
      severity: 'High',
      status: 'In Progress',
      tags: ['Performance', 'Images']
    })

    await testCaseStore.createTestCase({
      projectId,
      title: 'User Login Flow',
      expectedResult: 'User should be authenticated and redirected to their dashboard.',
      preconditions: 'User has a valid account in the system.',
      steps: ['Navigate to /login', 'Enter valid email', 'Enter valid password', 'Click Login button']
    })

    alert('Example data successfully loaded!')
  } catch (err: any) {
    alert('Failed to load example data: ' + err.message)
  } finally {
    loadingExample.value = false
  }
}
</script>

<template>
  <div>
    <div class="mb-8 flex items-center justify-between flex-wrap gap-4">
      <div>
        <h1 class="text-2xl font-bold text-gray-900">Projects</h1>
        <p class="mt-1 text-gray-500">Manage your QA workspaces</p>
      </div>
      <div class="flex items-center gap-3">
        <button @click="loadExampleData" class="btn-secondary" :disabled="loadingExample">
          <span v-if="loadingExample" class="h-4 w-4 rounded-full border-2 border-indigo-500 border-t-transparent animate-spin inline-block mr-1"></span>
          Load Example Data
        </button>
        <button @click="showCreateForm = true" class="btn-primary">+ New Project</button>
      </div>
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
