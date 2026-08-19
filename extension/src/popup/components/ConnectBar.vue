<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import type { ExtensionConfig } from '@/types'

const props = defineProps<{ config: ExtensionConfig }>()
const emit = defineEmits<{ (e: 'update:config', val: ExtensionConfig): void }>()

const isExpanded = ref(false)
const baseUrl = ref('')
const token = ref('')
const projectId = ref('')
const savedMsg = ref(false)
const isConnected = computed(() => Boolean(props.config.apiToken && props.config.projectId))
const projectLabel = computed(() => props.config.projectId ? `Project ${props.config.projectId.slice(0, 12)}` : 'No project connected')

onMounted(() => {
  baseUrl.value = props.config.apiBaseUrl || 'http://localhost:8888/.netlify/functions'
  token.value = props.config.apiToken || ''
  projectId.value = props.config.projectId || ''
})

async function saveConfig() {
  const updated: ExtensionConfig = {
    apiBaseUrl: baseUrl.value.trim().replace(/\/$/, ''),
    apiToken: token.value.trim(),
    projectId: projectId.value.trim(),
  }
  await chrome.storage.local.set({ qas_extension_config: updated })
  emit('update:config', updated)
  savedMsg.value = true
  setTimeout(() => {
    savedMsg.value = false
    isExpanded.value = false
  }, 1400)
}
</script>

<template>
  <section class="connection-card" aria-label="Project connection">
    <div class="connection-row">
      <div class="connection-copy">
        <span class="connection-dot" :class="{ 'is-connected': isConnected }" aria-hidden="true"></span>
        <div>
          <span class="connection-title">{{ isConnected ? 'Project connected' : 'Project not connected' }}</span>
          <span class="connection-detail">{{ projectLabel }}</span>
        </div>
      </div>
      <button type="button" class="icon-command" :aria-expanded="isExpanded" @click="isExpanded = !isExpanded">
        {{ isExpanded ? 'Close' : 'Set up' }}
      </button>
    </div>

    <form v-if="isExpanded" class="setup-form" @submit.prevent="saveConfig">
      <label>
        <span class="field-label">Functions URL</span>
        <input v-model="baseUrl" class="input" type="url" placeholder="https://app.netlify.app/.netlify/functions" />
      </label>
      <label>
        <span class="field-label">Project ID</span>
        <input v-model="projectId" class="input" type="text" placeholder="Project ID from QA-Suite" />
      </label>
      <label>
        <span class="field-label">Extension token</span>
        <input v-model="token" class="input font-mono" type="password" placeholder="Project-scoped token" />
        <span class="field-hint">Stored locally in this browser profile.</span>
      </label>
      <div class="setup-footer">
        <span v-if="savedMsg" class="saved-message">Connection saved</span>
        <button type="submit" class="btn btn-primary">Save connection</button>
      </div>
    </form>
  </section>
</template>
