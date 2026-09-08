<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { ExtensionConfig } from '@/types'
import ConnectBar from './components/ConnectBar.vue'
import InstantAudit from './components/InstantAudit.vue'
import CrawlMode from './components/CrawlMode.vue'
import MockDataMode from './components/MockDataMode.vue'
import logoIcon from '../../assets/icon48.png'

const activeMode = ref<'instant' | 'mockdata' | 'crawl'>('instant')
const config = ref<ExtensionConfig>({
  apiBaseUrl: 'http://localhost:8888/.netlify/functions',
  apiToken: '',
  projectId: '',
})

onMounted(async () => {
  const data = await chrome.storage.local.get('qas_extension_config')
  if (data.qas_extension_config) {
    config.value = {
      apiBaseUrl: data.qas_extension_config.apiBaseUrl || 'http://localhost:8888/.netlify/functions',
      apiToken: data.qas_extension_config.apiToken || '',
      projectId: data.qas_extension_config.projectId || '',
    }
  }
})
</script>

<template>
  <main class="extension-shell">
    <header class="app-header">
      <div class="brand-row">
        <div class="brand">
          <img class="brand-mark" :src="logoIcon" alt="" aria-hidden="true" />
          <div class="brand-copy">
            <h1 class="brand-name">QA-Suite</h1>
            <p class="brand-subtitle">Website inspection companion</p>
          </div>
        </div>
        <span class="build-tag">v1.0</span>
      </div>

      <nav class="mode-switch" aria-label="Audit mode">
        <button type="button" class="mode-button" :class="{ 'is-active': activeMode === 'instant' }" :aria-pressed="activeMode === 'instant'" @click="activeMode = 'instant'">
          Page audit
        </button>
        <button type="button" class="mode-button" :class="{ 'is-active': activeMode === 'mockdata' }" :aria-pressed="activeMode === 'mockdata'" @click="activeMode = 'mockdata'">
          Mock data
        </button>
        <button type="button" class="mode-button" :class="{ 'is-active': activeMode === 'crawl' }" :aria-pressed="activeMode === 'crawl'" @click="activeMode = 'crawl'">
          Crawl
        </button>
      </nav>
    </header>

    <section class="panel-content">
      <ConnectBar :config="config" @update:config="config = $event" />
      <InstantAudit v-if="activeMode === 'instant'" :config="config" />
      <MockDataMode v-else-if="activeMode === 'mockdata'" :config="config" />
      <CrawlMode v-else :config="config" />
    </section>
  </main>
</template>
