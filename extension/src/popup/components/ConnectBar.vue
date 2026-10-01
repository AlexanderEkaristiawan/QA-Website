<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { ExtensionConfig } from '@/types'

const props = defineProps<{ config: ExtensionConfig }>()
const emit = defineEmits<{ (e: 'update:config', val: ExtensionConfig): void }>()

const isExpanded = ref(false)
const baseUrl = ref('')
const token = ref('')
const projectId = ref('')
const savedMsg = ref(false)
const connectionError = ref('')
const connectionState = ref<'unknown' | 'checking' | 'connected' | 'disconnected'>('unknown')
const isConnected = computed(() => connectionState.value === 'connected')
const projectLabel = computed(() => props.config.projectId ? `Project ${props.config.projectId.slice(0, 12)}` : 'No project connected')

watch(() => props.config, (config) => {
  baseUrl.value = config.apiBaseUrl || 'http://localhost:8888/.netlify/functions'
  token.value = config.apiToken || ''
  projectId.value = config.projectId || ''
  void verifyConnection(config)
}, { immediate: true })

async function verifyConnection(config: ExtensionConfig) {
  if (!config.apiBaseUrl || !config.apiToken || !config.projectId) {
    connectionState.value = 'disconnected'
    connectionError.value = 'Project ID and extension token are required.'
    return
  }

  connectionState.value = 'checking'
  connectionError.value = ''
  try {
    const response = await fetch(`${config.apiBaseUrl}/verify-extension-token?projectId=${encodeURIComponent(config.projectId)}`, {
      headers: { Authorization: `Bearer ${config.apiToken}` },
    })
    if (response.ok) {
      connectionState.value = 'connected'
      return
    }
    const responseText = await response.text()
    const cleanResponseText = responseText.replace(/^\uFEFF/, '').replace(/^ï»¿/, '')
    let body: { error?: string } = {}
    try {
      body = JSON.parse(cleanResponseText || '{}')
    } catch {
      body.error = cleanResponseText.slice(0, 160) || 'The server returned an invalid response.'
    }
    connectionState.value = 'disconnected'
    connectionError.value = body.error || `Connection failed (HTTP ${response.status})`
  } catch (err: any) {
    connectionState.value = 'disconnected'
    connectionError.value = err.message || 'Could not reach the functions URL.'
  }
}

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
          <span class="connection-title">
            {{ connectionState === 'checking' ? 'Checking connection...' : isConnected ? 'Project connected' : 'Project not connected' }}
          </span>
          <span class="connection-detail">{{ projectLabel }}</span>
          <span v-if="connectionError && connectionState === 'disconnected'" class="connection-error">{{ connectionError }}</span>
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
