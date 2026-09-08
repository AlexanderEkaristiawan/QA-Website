<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import type { ExtensionConfig } from '@/types'

const props = defineProps<{
  config: ExtensionConfig
}>()

const category = ref<'text' | 'boundary' | 'users' | 'security' | 'financial' | 'custom'>('text')
const customPrompt = ref('')
const format = ref<'json' | 'csv' | 'list'>('list')
const count = ref(5)
const locale = ref('International & Indonesian')

// Text Generator specifics
const textLengthType = ref<'characters' | 'words' | 'sentences' | 'paragraphs'>('characters')
const textLengthValue = ref(150)

const generating = ref(false)
const error = ref<string | null>(null)
const output = ref('')
const copied = ref(false)
const autofillStatus = ref('')
const showQuotaDetails = ref(false)

// Gemini Quota & Usage Tracking
interface GeminiUsageStats {
  date: string // e.g. "2026-09-07"
  dailyRequests: number
  dailyTokens: number
  lastPromptTokens: number
  lastCompletionTokens: number
  lastTotalTokens: number
  lastModel: string
  lastTimestamp: number
}

const DAILY_REQUEST_LIMIT = 1500
const DAILY_TOKEN_LIMIT = 1000000

const usageStats = ref<GeminiUsageStats>({
  date: new Date().toISOString().slice(0, 10),
  dailyRequests: 0,
  dailyTokens: 0,
  lastPromptTokens: 0,
  lastCompletionTokens: 0,
  lastTotalTokens: 0,
  lastModel: 'gemini-3.5-flash',
  lastTimestamp: Date.now(),
})

onMounted(async () => {
  await loadUsageStats()
})

async function loadUsageStats() {
  try {
    const data = await chrome.storage.local.get('qas_gemini_usage')
    const today = new Date().toISOString().slice(0, 10)
    if (data.qas_gemini_usage) {
      const stored = data.qas_gemini_usage as GeminiUsageStats
      if (stored.date === today) {
        usageStats.value = stored
      } else {
        // New day — reset daily counters
        usageStats.value = {
          date: today,
          dailyRequests: 0,
          dailyTokens: 0,
          lastPromptTokens: stored.lastPromptTokens || 0,
          lastCompletionTokens: stored.lastCompletionTokens || 0,
          lastTotalTokens: stored.lastTotalTokens || 0,
          lastModel: stored.lastModel || 'gemini-3.5-flash',
          lastTimestamp: stored.lastTimestamp || Date.now(),
        }
        await chrome.storage.local.set({ qas_gemini_usage: usageStats.value })
      }
    }
  } catch (err) {
    console.warn('Could not load Gemini usage stats:', err)
  }
}

async function recordUsage(tokens: { promptTokens?: number; completionTokens?: number; totalTokens?: number }, model: string) {
  const today = new Date().toISOString().slice(0, 10)
  const promptT = tokens.promptTokens || 0
  const compT = tokens.completionTokens || 0
  const totalT = tokens.totalTokens || (promptT + compT) || 150

  let currentDailyReqs = usageStats.value.date === today ? usageStats.value.dailyRequests : 0
  let currentDailyTokens = usageStats.value.date === today ? usageStats.value.dailyTokens : 0

  usageStats.value = {
    date: today,
    dailyRequests: currentDailyReqs + 1,
    dailyTokens: currentDailyTokens + totalT,
    lastPromptTokens: promptT,
    lastCompletionTokens: compT,
    lastTotalTokens: totalT,
    lastModel: model || 'gemini-3.5-flash',
    lastTimestamp: Date.now(),
  }

  try {
    await chrome.storage.local.set({ qas_gemini_usage: usageStats.value })
  } catch (err) {
    console.warn('Could not save Gemini usage:', err)
  }
}

// Computed Quota metrics
const requestPercentUsed = computed(() => {
  return Math.min(100, Math.round((usageStats.value.dailyRequests / DAILY_REQUEST_LIMIT) * 100))
})

const requestsRemaining = computed(() => {
  return Math.max(0, DAILY_REQUEST_LIMIT - usageStats.value.dailyRequests)
})

const quotaHealth = computed(() => {
  if (requestPercentUsed.value >= 90) return { label: 'Near Limit', class: 'quota-health-danger', dot: 'bg-rose-500' }
  if (requestPercentUsed.value >= 70) return { label: 'Moderate', class: 'quota-health-warning', dot: 'bg-amber-500' }
  return { label: 'Optimal', class: 'quota-health-optimal', dot: 'bg-emerald-500' }
})

// Computed character and word statistics
const outputStats = computed(() => {
  if (!output.value) return null
  const chars = output.value.length
  const words = output.value.trim().split(/\s+/).filter(Boolean).length
  const sentences = output.value.split(/[.!?]+/).filter(Boolean).length
  return { chars, words, sentences }
})

function setTextPreset(topic: string, lenType: 'characters' | 'words' | 'sentences' | 'paragraphs', lenVal: number) {
  customPrompt.value = topic
  textLengthType.value = lenType
  textLengthValue.value = lenVal
}

async function handleGenerate() {
  generating.value = true
  error.value = null
  output.value = ''
  copied.value = false
  autofillStatus.value = ''

  const baseUrl = props.config.apiBaseUrl.replace(/\/$/, '')
  const endpoint = `${baseUrl}/generate-test-data`

  try {
    const payload: Record<string, any> = {
      category: category.value,
      customPrompt: customPrompt.value,
      format: category.value === 'text' ? 'list' : format.value,
      count: count.value,
      locale: locale.value,
    }

    if (category.value === 'text') {
      payload.lengthType = textLengthType.value
      payload.lengthValue = textLengthValue.value
    }

    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(props.config.apiToken ? { 'Authorization': `Bearer ${props.config.apiToken}` } : {}),
      },
      body: JSON.stringify(payload),
    })

    if (!res.ok) {
      const text = await res.text()
      let msg = `Server error ${res.status}`
      try { msg = JSON.parse(text).error || msg } catch { msg = text.slice(0, 150) || msg }
      throw new Error(msg)
    }

    const data = await res.json()
    output.value = data.data || ''

    // Record token usage stats
    await recordUsage(data.usage || {}, data.model || 'gemini-3.5-flash')
  } catch (err: any) {
    error.value = err.message || 'Failed to generate mock data. Ensure the backend server is running.'
  } finally {
    generating.value = false
  }
}

async function copyToClipboard() {
  if (!output.value) return
  await navigator.clipboard.writeText(output.value)
  copied.value = true
  setTimeout(() => { copied.value = false }, 2000)
}

function downloadData() {
  if (!output.value) return
  const ext = category.value === 'text' ? 'txt' : format.value === 'json' ? 'json' : format.value === 'csv' ? 'csv' : 'txt'
  const mime = ext === 'json' ? 'application/json' : 'text/plain'
  const blob = new Blob([output.value], { type: mime })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `mock-data-${category.value}-${Date.now()}.${ext}`
  a.click()
  URL.revokeObjectURL(url)
}

/**
 * Injects the generated test value directly into the focused/active input or textarea in the user's browser tab!
 */
async function autofillActivePageInput() {
  if (!output.value) return
  autofillStatus.value = ''

  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
    if (!tab?.id) throw new Error('No active browser tab found.')

    let textToInsert = output.value
    if (category.value !== 'text' && format.value === 'json') {
      try {
        const parsed = JSON.parse(output.value)
        if (Array.isArray(parsed) && parsed.length > 0) {
          const first = parsed[0]
          textToInsert = typeof first === 'object' ? (first.fullName || first.email || first.payload || JSON.stringify(first)) : String(first)
        }
      } catch {
        textToInsert = output.value.split('\n')[0]
      }
    }

    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      args: [textToInsert],
      func: (valToFill: string) => {
        const active = document.activeElement as HTMLInputElement | HTMLTextAreaElement | null
        if (active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA' || active.getAttribute('contenteditable') === 'true')) {
          if (active.getAttribute('contenteditable') === 'true') {
            active.innerText = valToFill
          } else {
            active.value = valToFill
          }
          active.dispatchEvent(new Event('input', { bubbles: true }))
          active.dispatchEvent(new Event('change', { bubbles: true }))
          return true
        }

        // If no active element, find the first visible input or textarea on the page
        const firstInput = document.querySelector('textarea, input:not([type="hidden"]):not([type="submit"]):not([type="button"])') as HTMLInputElement | HTMLTextAreaElement | null
        if (firstInput) {
          firstInput.focus()
          firstInput.value = valToFill
          firstInput.dispatchEvent(new Event('input', { bubbles: true }))
          firstInput.dispatchEvent(new Event('change', { bubbles: true }))
          return true
        }
        return false
      },
    })

    autofillStatus.value = '✓ Filled into active web page field!'
    setTimeout(() => { autofillStatus.value = '' }, 2500)
  } catch (err: any) {
    autofillStatus.value = `Failed: ${err.message}`
  }
}
</script>

<template>
  <div class="mock-data-mode">
    <!-- Modern Live Gemini Quota Dashboard Card -->
    <div class="card quota-card">
      <div class="quota-header">
        <div class="quota-title-row">
          <span class="quota-indicator" :class="quotaHealth.class"></span>
          <span class="quota-title">Gemini API Status</span>
          <span class="quota-badge">{{ quotaHealth.label }}</span>
        </div>
        <button
          type="button"
          @click="showQuotaDetails = !showQuotaDetails"
          class="quota-toggle-btn"
          :title="showQuotaDetails ? 'Collapse details' : 'View usage breakdown'"
        >
          <span>{{ showQuotaDetails ? '▲ Hide' : '▼ Details' }}</span>
        </button>
      </div>

      <!-- Quick Metrics Bar -->
      <div class="quota-quick-metrics">
        <div class="metric-item">
          <span class="metric-label">Daily Requests</span>
          <span class="metric-val"><strong>{{ usageStats.dailyRequests }}</strong> / 1,500</span>
        </div>
        <div class="metric-divider"></div>
        <div class="metric-item">
          <span class="metric-label">Tokens Today</span>
          <span class="metric-val"><strong>{{ usageStats.dailyTokens.toLocaleString() }}</strong> / 1M</span>
        </div>
        <div class="metric-divider"></div>
        <div class="metric-item">
          <span class="metric-label">Remaining</span>
          <span class="metric-val text-emerald-600"><strong>{{ requestsRemaining }}</strong></span>
        </div>
      </div>

      <!-- Progress bar for Daily Requests -->
      <div class="quota-progress-track">
        <div
          class="quota-progress-fill"
          :style="{ width: `${Math.max(2, requestPercentUsed)}%` }"
          :class="requestPercentUsed > 85 ? 'bg-rose-500' : 'bg-teal-600'"
        ></div>
      </div>

      <!-- Expandable detailed stats breakdown -->
      <div v-if="showQuotaDetails" class="quota-details-panel">
        <div class="details-grid">
          <div class="detail-row">
            <span class="detail-name">Active Model:</span>
            <span class="detail-val font-mono">{{ usageStats.lastModel }}</span>
          </div>
          <div class="detail-row">
            <span class="detail-name">Last Request Tokens:</span>
            <span class="detail-val">
              {{ usageStats.lastTotalTokens }} tokens
              <span class="detail-subval text-slate-400">({{ usageStats.lastPromptTokens }} in / {{ usageStats.lastCompletionTokens }} out)</span>
            </span>
          </div>
          <div class="detail-row">
            <span class="detail-name">Rate Limit Tier:</span>
            <span class="detail-val">15 req/min (Free Tier)</span>
          </div>
          <div class="detail-row">
            <span class="detail-name">Quota Reset:</span>
            <span class="detail-val text-slate-400">Daily at 00:00 UTC</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Category selector buttons -->
    <div>
      <label class="block text-[11px] font-semibold text-gray-600 uppercase tracking-wider mb-1.5">Tool Category</label>
      <div class="category-grid">
        <button
          type="button"
          @click="category = 'text'"
          class="btn category-button text-left p-2 flex items-center gap-2 text-xs"
          :class="category === 'text' ? 'btn-primary' : 'btn-secondary'"
        >
          <span>📝</span>
          <div class="min-w-0">
            <div class="font-semibold leading-tight">Text & Paragraphs</div>
            <div class="text-[9px] opacity-80 truncate">Exact words / char count</div>
          </div>
        </button>

        <button
          type="button"
          @click="category = 'boundary'"
          class="btn category-button text-left p-2 flex items-center gap-2 text-xs"
          :class="category === 'boundary' ? 'btn-primary' : 'btn-secondary'"
        >
          <span>🧱</span>
          <div class="min-w-0">
            <div class="font-semibold leading-tight">Boundary Values</div>
            <div class="text-[9px] opacity-80 truncate">255+ chars, Unicode, Emoji</div>
          </div>
        </button>

        <button
          type="button"
          @click="category = 'users'"
          class="btn category-button text-left p-2 flex items-center gap-2 text-xs"
          :class="category === 'users' ? 'btn-primary' : 'btn-secondary'"
        >
          <span>👤</span>
          <div class="min-w-0">
            <div class="font-semibold leading-tight">User Profiles</div>
            <div class="text-[9px] opacity-80 truncate">Names, Emails, Phones</div>
          </div>
        </button>

        <button
          type="button"
          @click="category = 'security'"
          class="btn category-button text-left p-2 flex items-center gap-2 text-xs"
          :class="category === 'security' ? 'btn-primary' : 'btn-secondary'"
        >
          <span>🛡️</span>
          <div class="min-w-0">
            <div class="font-semibold leading-tight">XSS / SQLi Payloads</div>
            <div class="text-[9px] opacity-80 truncate">Security injection fuzzing</div>
          </div>
        </button>
      </div>

      <div class="category-grid category-grid-secondary">
        <button
          type="button"
          @click="category = 'financial'"
          class="btn category-button text-left p-2 flex items-center gap-2 text-xs"
          :class="category === 'financial' ? 'btn-primary' : 'btn-secondary'"
        >
          <span>💳</span>
          <div class="min-w-0">
            <div class="font-semibold leading-tight">Payment & Cards</div>
            <div class="text-[9px] opacity-80 truncate">Test card numbers, CVVs</div>
          </div>
        </button>

        <button
          type="button"
          @click="category = 'custom'"
          class="btn category-button text-left p-2 flex items-center gap-2 text-xs"
          :class="category === 'custom' ? 'btn-primary' : 'btn-secondary'"
        >
          <span>✍️</span>
          <div class="min-w-0">
            <div class="font-semibold leading-tight">Custom Schema</div>
            <div class="text-[9px] opacity-80 truncate">Freeform QA dataset</div>
          </div>
        </button>
      </div>
    </div>

    <!-- ========================================================== -->
    <!-- Specific Controls: Category === 'text' (Paragraph / Length) -->
    <!-- ========================================================== -->
    <div v-if="category === 'text'" class="card controls-card">
      <!-- Quick Presets -->
      <div>
        <div class="flex items-center justify-between text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-1">
          <span>Quick Topic Presets</span>
        </div>
        <div class="preset-grid">
          <button
            type="button"
            @click="setTextPreset('Role experience and career accomplishments for senior software engineer', 'characters', 200)"
            class="btn btn-secondary text-[10px] py-0.5 px-1.5"
            style="min-height: 22px;"
          >
            💼 Job Experience (200c)
          </button>
          <button
            type="button"
            @click="setTextPreset('Detailed product review praising durability and fast shipping', 'words', 50)"
            class="btn btn-secondary text-[10px] py-0.5 px-1.5"
            style="min-height: 22px;"
          >
            ⭐ Review (50w)
          </button>
          <button
            type="button"
            @click="setTextPreset('Customer support feedback ticket regarding delivery delay', 'characters', 150)"
            class="btn btn-secondary text-[10px] py-0.5 px-1.5"
            style="min-height: 22px;"
          >
            🎫 Ticket (150c)
          </button>
          <button
            type="button"
            @click="setTextPreset('Standard professional dummy placeholder paragraph', 'paragraphs', 2)"
            class="btn btn-secondary text-[10px] py-0.5 px-1.5"
            style="min-height: 22px;"
          >
            📄 2 Paragraphs
          </button>
        </div>
      </div>

      <!-- Custom topic / instruction -->
      <div>
        <label class="block text-[11px] font-semibold text-gray-700 mb-1">Topic / Custom Prompt</label>
        <input
          v-model="customPrompt"
          class="input text-xs"
          placeholder="e.g. Detailed bio of a graphic designer working in tech startup"
        />
      </div>

      <!-- Target Length Mode & Count -->
      <div class="grid grid-cols-2 gap-2">
        <div>
          <label class="block text-[10px] font-semibold text-gray-600 uppercase tracking-wider mb-1">Length Unit</label>
          <select v-model="textLengthType" class="input text-xs" style="min-height: 28px; padding: 3px 6px;">
            <option value="characters">Characters (Chars)</option>
            <option value="words">Words</option>
            <option value="sentences">Sentences</option>
            <option value="paragraphs">Paragraphs</option>
          </select>
        </div>

        <div>
          <label class="block text-[10px] font-semibold text-gray-600 uppercase tracking-wider mb-1">
            Target: {{ textLengthValue }} {{ textLengthType }}
          </label>
          <input
            type="number"
            v-model.number="textLengthValue"
            class="input text-xs"
            style="min-height: 28px; padding: 3px 6px;"
            :min="textLengthType === 'characters' ? 10 : 1"
            :max="textLengthType === 'characters' ? 3000 : 500"
          />
        </div>
      </div>

      <!-- Quick length chips -->
      <div v-if="textLengthType === 'characters'" class="flex items-center gap-1 text-[10px] text-gray-500">
        <span>Quick Chars:</span>
        <button type="button" @click="textLengthValue = 50" class="hover:underline text-indigo-600 font-semibold">50</button>
        <span>•</span>
        <button type="button" @click="textLengthValue = 120" class="hover:underline text-indigo-600 font-semibold">120</button>
        <span>•</span>
        <button type="button" @click="textLengthValue = 255" class="hover:underline text-indigo-600 font-semibold">255 (DB Limit)</button>
        <span>•</span>
        <button type="button" @click="textLengthValue = 500" class="hover:underline text-indigo-600 font-semibold">500</button>
        <span>•</span>
        <button type="button" @click="textLengthValue = 1000" class="hover:underline text-indigo-600 font-semibold">1000</button>
      </div>
      <div v-else-if="textLengthType === 'words'" class="flex items-center gap-1 text-[10px] text-gray-500">
        <span>Quick Words:</span>
        <button type="button" @click="textLengthValue = 15" class="hover:underline text-indigo-600 font-semibold">15</button>
        <span>•</span>
        <button type="button" @click="textLengthValue = 30" class="hover:underline text-indigo-600 font-semibold">30</button>
        <span>•</span>
        <button type="button" @click="textLengthValue = 50" class="hover:underline text-indigo-600 font-semibold">50</button>
        <span>•</span>
        <button type="button" @click="textLengthValue = 100" class="hover:underline text-indigo-600 font-semibold">100</button>
        <span>•</span>
        <button type="button" @click="textLengthValue = 250" class="hover:underline text-indigo-600 font-semibold">250</button>
      </div>

      <button
        type="button"
        @click="handleGenerate"
        class="btn btn-primary w-full text-xs mt-1"
        :disabled="generating"
      >
        <span v-if="generating" class="animate-spin inline-block mr-1">⟳</span>
        <span>{{ generating ? 'Generating text...' : `✨ Generate ${textLengthValue} ${textLengthType}` }}</span>
      </button>
    </div>

    <!-- ========================================================== -->
    <!-- Specific Controls: Other categories (Boundary, Users, etc.) -->
    <!-- ========================================================== -->
    <div v-else class="card controls-card compact-controls">
      <div v-if="category === 'custom'" class="space-y-1">
        <label class="block text-[11px] font-semibold text-gray-600">Requirement Prompt</label>
        <input
          v-model="customPrompt"
          class="input text-xs"
          placeholder="e.g. 5 Indonesian addresses with postal codes and latitude/longitude"
        />
      </div>

      <div class="grid grid-cols-2 gap-2">
        <div>
          <label class="block text-[10px] font-semibold text-gray-600 uppercase tracking-wider mb-1">Format</label>
          <select v-model="format" class="input text-xs" style="min-height: 28px; padding: 3px 6px;">
            <option value="json">JSON Array</option>
            <option value="csv">CSV Sheet</option>
            <option value="list">Line List</option>
          </select>
        </div>

        <div>
          <label class="block text-[10px] font-semibold text-gray-600 uppercase tracking-wider mb-1">Count: {{ count }}</label>
          <input type="range" v-model.number="count" min="3" max="15" step="1" class="w-full" style="accent-color: var(--accent);" />
        </div>
      </div>

      <button
        type="button"
        @click="handleGenerate"
        class="btn btn-primary w-full text-xs"
        :disabled="generating"
      >
        <span v-if="generating" class="animate-spin inline-block mr-1">⟳</span>
        <span>{{ generating ? 'Generating test vectors...' : '🎲 Generate Test Data' }}</span>
      </button>
    </div>

    <!-- Error notice -->
    <div v-if="error" class="card p-2 text-xs" style="background: var(--danger-soft); color: var(--danger); border-color: #f5c5c7;">
      {{ error }}
    </div>

    <!-- Output Preview & Action Bar -->
    <div v-if="output" class="space-y-2">
      <div class="preview-header">
        <div class="flex items-center gap-1.5">
          <span class="font-semibold text-gray-700">Preview</span>
          <!-- Live metrics badge -->
          <span
            v-if="outputStats"
            class="badge"
            style="background: #e0f2fe; color: #0369a1; font-family: monospace;"
          >
            {{ outputStats.chars }} chars | {{ outputStats.words }} words
          </span>
        </div>

        <div class="preview-actions">
          <button
            type="button"
            @click="copyToClipboard"
            class="btn btn-secondary text-[10px] py-1 px-2"
            style="min-height: 24px;"
          >
            <span>{{ copied ? '✓ Copied' : '📋 Copy' }}</span>
          </button>
          <button
            type="button"
            @click="downloadData"
            class="btn btn-secondary text-[10px] py-1 px-2"
            style="min-height: 24px;"
          >
            <span>💾 Download</span>
          </button>
        </div>
      </div>

      <div class="code-preview-container">
        <pre class="code-preview-text">{{ output }}</pre>
      </div>

      <!-- Live Page Autofill Button -->
      <div class="pt-1">
        <button
          type="button"
          @click="autofillActivePageInput"
          class="btn btn-secondary w-full text-xs flex items-center justify-center gap-1.5"
          style="border-color: var(--accent); color: var(--accent);"
          title="Fills value into currently focused input or first form field in active tab"
        >
          <span>⚡</span>
          <span>Fill Text into Active Web Page Field</span>
        </button>
        <p v-if="autofillStatus" class="text-center text-[10px] text-green-700 font-semibold mt-1">
          {{ autofillStatus }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mock-data-mode {
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  display: grid;
  gap: 14px;
}

/* Modern Quota Card */
.quota-card {
  margin: 0;
  padding: 10px 12px;
  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.04);
}

.quota-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}

.quota-title-row {
  display: flex;
  align-items: center;
  gap: 6px;
}

.quota-indicator {
  width: 7px;
  height: 7px;
  border-radius: 50%;
}
.quota-health-optimal {
  background: #10b981;
  box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.2);
}
.quota-health-warning {
  background: #f59e0b;
  box-shadow: 0 0 0 2px rgba(245, 158, 11, 0.2);
}
.quota-health-danger {
  background: #ef4444;
  box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.2);
}

.quota-title {
  font-size: 11px;
  font-weight: 700;
  color: #1e293b;
}

.quota-badge {
  font-size: 9px;
  font-weight: 600;
  padding: 1px 5px;
  border-radius: 4px;
  background: #f1f5f9;
  color: #475569;
}

.quota-toggle-btn {
  border: none;
  background: transparent;
  color: #64748b;
  font-size: 10px;
  font-weight: 600;
  cursor: pointer;
  padding: 2px 4px;
  border-radius: 4px;
}
.quota-toggle-btn:hover {
  color: #0f172a;
  background: #f1f5f9;
}

.quota-quick-metrics {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
}

.metric-item {
  display: flex;
  flex-direction: column;
}

.metric-label {
  font-size: 9px;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.02em;
}

.metric-val {
  font-size: 11px;
  color: #1e293b;
  font-family: ui-monospace, SFMono-Regular, monospace;
}

.metric-divider {
  width: 1px;
  height: 20px;
  background: #e2e8f0;
}

.quota-progress-track {
  width: 100%;
  height: 4px;
  background: #e2e8f0;
  border-radius: 999px;
  overflow: hidden;
}

.quota-progress-fill {
  height: 100%;
  border-radius: 999px;
  transition: width 0.3s ease;
}

.quota-details-panel {
  margin-top: 8px;
  padding-top: 8px;
  border-top: 1px solid #e2e8f0;
}

.details-grid {
  display: grid;
  gap: 4px;
}

.detail-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 10px;
}

.detail-name {
  color: #64748b;
}

.detail-val {
  color: #1e293b;
  font-weight: 500;
}

.detail-subval {
  font-size: 9px;
  margin-left: 2px;
}

/* Category Grid & Buttons */
.category-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
}

.category-grid-secondary {
  margin-top: 8px;
}

.category-button {
  min-height: 58px;
  justify-content: flex-start;
  padding: 9px 10px;
  border-radius: 8px;
  text-align: left;
}

.category-button > span:first-child {
  width: 22px;
  flex: 0 0 22px;
  text-align: center;
  font-size: 16px;
}

.controls-card {
  display: grid;
  gap: 13px;
  padding: 14px;
  margin: 0;
}

.compact-controls {
  gap: 12px;
}

.preset-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.preset-grid .btn {
  min-height: 28px !important;
  padding: 4px 8px !important;
  border-radius: 999px;
}

.preview-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.preview-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 6px;
}

@media (max-width: 390px) {
  .category-grid {
    grid-template-columns: 1fr;
  }

  .preview-header {
    align-items: flex-start;
    flex-direction: column;
  }

  .preview-actions {
    justify-content: flex-start;
  }
}

.code-preview-container {
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  background: #0f172a;
  color: #38bdf8;
  border: 1px solid #334155;
  border-radius: 6px;
  padding: 10px;
  max-height: 240px;
  overflow-y: auto;
  overflow-x: hidden;
}

.code-preview-text {
  margin: 0;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 11px;
  line-height: 1.5;
  white-space: pre-wrap;
  word-break: break-word;
  overflow-wrap: anywhere;
  color: #38bdf8;
}

.code-preview-container::-webkit-scrollbar {
  width: 6px;
}
.code-preview-container::-webkit-scrollbar-track {
  background: #0f172a;
}
.code-preview-container::-webkit-scrollbar-thumb {
  background: #334155;
  border-radius: 3px;
}
</style>
