<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'

type DevicePreset = 'responsive' | 'iphone' | 'ipad' | 'desktop' | 'custom'

const preset = ref<DevicePreset>('responsive')
const width = ref(666)
const height = ref(815)
const url = ref('')
const statusMessage = ref('')
const isApplying = ref(false)
const applySuccess = ref(false)
const isActive = ref(false) // true while viewport override is active on the tab

const presets: Array<{ key: DevicePreset; label: string; width?: number; height?: number }> = [
  { key: 'responsive', label: 'Responsive' },
  { key: 'iphone', label: 'iPhone 14', width: 393, height: 852 },
  { key: 'ipad', label: 'iPad Air', width: 820, height: 1180 },
  { key: 'desktop', label: 'MacBook Air', width: 1280, height: 800 },
  { key: 'custom', label: 'Custom' },
]

onMounted(async () => {
  // lastFocusedWindow is more reliable than currentWindow from a side panel
  const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true })
  if (tab?.url && /^https?:\/\//i.test(tab.url)) {
    url.value = tab.url
  }
})

function selectPreset(selected: DevicePreset) {
  preset.value = selected
  const device = presets.find(item => item.key === selected)
  if (device?.width && device.height) {
    width.value = device.width
    height.value = device.height
  }
}

function normalizeUrl(value: string): string | null {
  const candidate = value.trim()
  if (!candidate) return null
  const normalized = /^https?:\/\//i.test(candidate) ? candidate : `https://${candidate}`
  try {
    const parsed = new URL(normalized)
    return parsed.protocol === 'http:' || parsed.protocol === 'https:' ? parsed.href : null
  } catch {
    return null
  }
}

async function applyViewport() {
  isApplying.value = true
  applySuccess.value = false
  statusMessage.value = ''
  const mobile = preset.value === 'iphone' || preset.value === 'ipad'
  try {
    const resp = await chrome.runtime.sendMessage({
      type: 'SET_VIEWPORT',
      width: width.value,
      height: height.value,
      mobile,
    })
    if (resp?.ok) {
      isActive.value = true
      applySuccess.value = true
      setTimeout(() => { applySuccess.value = false }, 1800)
    } else {
      statusMessage.value = resp?.error ?? 'Could not set viewport.'
    }
  } catch {
    statusMessage.value = 'Could not reach the background service worker.'
  } finally {
    isApplying.value = false
  }
}

async function clearViewport() {
  statusMessage.value = ''
  try {
    await chrome.runtime.sendMessage({ type: 'CLEAR_VIEWPORT' })
    isActive.value = false
  } catch {
    statusMessage.value = 'Could not clear viewport.'
  }
}

async function loadUrl() {
  const normalized = normalizeUrl(url.value)
  if (!normalized) {
    statusMessage.value = 'Enter a valid http or https URL.'
    return
  }
  url.value = normalized
  statusMessage.value = ''
  try {
    // Set viewport override first, then navigate
    const mobile = preset.value === 'iphone' || preset.value === 'ipad'
    const vpResp = await chrome.runtime.sendMessage({
      type: 'SET_VIEWPORT',
      width: width.value,
      height: height.value,
      mobile,
    })
    if (!vpResp?.ok) {
      statusMessage.value = vpResp?.error ?? 'Could not set viewport.'
      return
    }
    isActive.value = true
    const navResp = await chrome.runtime.sendMessage({ type: 'NAVIGATE_TAB', url: normalized })
    if (!navResp?.ok) {
      statusMessage.value = navResp?.error ?? 'Could not navigate the tab.'
    }
  } catch {
    statusMessage.value = 'Could not reach the background service worker.'
  }
}

function rotate() {
  const currentWidth = width.value
  width.value = height.value
  height.value = currentWidth
  preset.value = 'custom'
}

// Live apply: debounce dimension/preset changes by 500ms (only if already active)
let applyTimer: ReturnType<typeof setTimeout> | null = null
watch([width, height], () => {
  if (!isActive.value) return
  if (applyTimer) clearTimeout(applyTimer)
  applyTimer = setTimeout(() => applyViewport(), 500)
})
</script>

<template>
  <div class="simulator-shell">
    <section class="card simulator-controls">
      <div class="simulator-heading">
        <div>
          <span class="simulator-title">Screen Simulator</span>
          <p class="simulator-subtitle">Emulates a device viewport on the current tab.</p>
        </div>
        <span class="badge" :class="isActive ? (applySuccess ? 'badge-success' : 'badge-active') : 'badge-neutral'">
          {{ applySuccess ? '✓ Applied' : isActive ? `${width} × ${height}px ●` : `${width} × ${height}px` }}
        </span>
      </div>

      <label class="simulator-label" for="simulator-url">Target URL</label>
      <div class="simulator-url-row">
        <input
          id="simulator-url"
          v-model="url"
          class="input"
          type="url"
          placeholder="https://example.com"
          @keydown.enter="loadUrl"
        />
        <button type="button" class="btn btn-primary" @click="loadUrl">Load</button>
      </div>

      <div class="simulator-section-label">Device preset</div>
      <div class="simulator-preset-grid">
        <button
          v-for="device in presets"
          :key="device.key"
          type="button"
          class="btn simulator-preset"
          :class="preset === device.key ? 'btn-primary' : 'btn-secondary'"
          @click="selectPreset(device.key)"
        >
          {{ device.label }}
        </button>
      </div>

      <div class="simulator-dimensions">
        <label>
          <span>Width</span>
          <input v-model.number="width" class="input" type="number" min="1" max="3000" @input="preset = 'custom'" />
        </label>
        <button type="button" class="btn btn-secondary simulator-rotate" title="Swap width and height" @click="rotate">↕</button>
        <label>
          <span>Height</span>
          <input v-model.number="height" class="input" type="number" min="1" max="3000" @input="preset = 'custom'" />
        </label>
      </div>

      <div class="simulator-action-row">
        <button
          type="button"
          class="btn btn-primary simulator-apply-btn"
          :disabled="isApplying"
          @click="applyViewport"
        >
          <span v-if="isApplying">Applying…</span>
          <span v-else-if="applySuccess">✓ Viewport set</span>
          <span v-else>Apply Viewport</span>
        </button>
        <button
          v-if="isActive"
          type="button"
          class="btn btn-secondary simulator-reset-btn"
          title="Clear viewport override and restore normal tab rendering"
          @click="clearViewport"
        >
          Reset
        </button>
      </div>

      <p v-if="statusMessage" class="simulator-error">{{ statusMessage }}</p>
      <p class="simulator-note">
        <span v-if="isActive">Viewport override is <strong>active</strong> on the current tab. Click Reset to restore normal rendering.</span>
        <span v-else>Overrides only the tab's CSS viewport (like DevTools device mode) — the browser window stays the same size.</span>
      </p>
    </section>
  </div>
</template>

<style scoped>
.simulator-shell {
  display: grid;
  gap: 12px;
}
.simulator-controls {
  display: grid;
  gap: 9px;
}
.simulator-heading,
.simulator-url-row,
.simulator-dimensions {
  display: flex;
  align-items: center;
  gap: 8px;
}
.simulator-heading {
  justify-content: space-between;
}
.simulator-title {
  display: block;
  color: var(--ink);
  font-size: 12px;
  font-weight: 760;
}
.simulator-subtitle,
.simulator-note,
.simulator-error {
  margin: 2px 0 0;
  color: var(--muted);
  font-size: 10px;
}
.simulator-label,
.simulator-section-label,
.simulator-dimensions label span {
  color: var(--muted);
  font-size: 10px;
  font-weight: 700;
}
.simulator-url-row .input {
  min-width: 0;
  flex: 1;
}
.simulator-preset-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 6px;
}
.simulator-preset {
  min-height: 30px;
  padding: 5px 6px;
  font-size: 10px;
}
.simulator-dimensions label {
  display: grid;
  flex: 1;
  gap: 4px;
}
.simulator-dimensions .input {
  min-width: 0;
}
.simulator-rotate {
  align-self: end;
  min-width: 34px;
  padding: 5px;
}
.simulator-error {
  color: var(--danger);
}
.badge-active {
  background: var(--primary, #0f62fe) !important;
  color: #fff !important;
}
.badge-success {
  background: var(--success, #16a34a) !important;
  color: #fff !important;
}
.simulator-action-row {
  display: flex;
  gap: 6px;
}
.simulator-apply-btn {
  flex: 1;
  justify-content: center;
  font-size: 11px;
}
.simulator-reset-btn {
  font-size: 11px;
  padding: 5px 10px;
}
.simulator-apply-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>