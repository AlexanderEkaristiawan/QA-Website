<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useProjectStore } from '@/composables/useFirestore'

type Breadcrumb = {
  label: string
  to?: string
}

const route = useRoute()
const projectStore = useProjectStore()
const projectName = ref('')

watch(
  () => route.params.id,
  async (id) => {
    projectName.value = ''
    if (typeof id !== 'string') return
    const project = await projectStore.getProject(id)
    if (project && route.params.id === id) projectName.value = project.name
  },
  { immediate: true },
)

const breadcrumbs = computed<Breadcrumb[]>(() => {
  const projectId = typeof route.params.id === 'string' ? route.params.id : ''
  const items: Breadcrumb[] = []

  if (route.name === 'Dashboard') return [{ label: 'Dashboard', to: '/dashboard' }]
  if (route.name === 'Projects') return [{ label: 'Projects', to: '/projects' }]
  if (route.name === 'Notifications') return [{ label: 'Notifications', to: '/notifications' }]

  if (projectId) {
    items.push({ label: 'Projects', to: '/projects' })
    items.push({ label: projectName.value || 'Project', to: `/projects/${projectId}` })
  }

  const pageLabels: Record<string, string> = {
    ProjectHome: 'Page Audits',
    AuditResults: 'Audit Results',
    BugList: 'Bugs',
    TestCases: 'Test Cases',
    TrendHistory: 'History',
  }
  const pageLabel = pageLabels[String(route.name)]
  if (pageLabel && route.name !== 'ProjectHome') items.push({ label: pageLabel })

  return items
})
</script>

<template>
  <nav v-if="breadcrumbs.length" aria-label="Breadcrumb" class="mb-4">
    <ol class="flex min-w-0 items-center gap-2 text-sm text-gray-500">
      <li v-for="(crumb, index) in breadcrumbs" :key="`${crumb.label}-${index}`" class="flex min-w-0 items-center gap-2">
        <span v-if="index > 0" aria-hidden="true" class="text-gray-300">/</span>
        <RouterLink
          v-if="crumb.to && index < breadcrumbs.length - 1"
          :to="crumb.to"
          class="truncate transition-colors hover:text-indigo-600"
        >
          {{ crumb.label }}
        </RouterLink>
        <span v-else class="truncate font-medium text-gray-800" aria-current="page">
          {{ crumb.label }}
        </span>
      </li>
    </ol>
  </nav>
</template>
