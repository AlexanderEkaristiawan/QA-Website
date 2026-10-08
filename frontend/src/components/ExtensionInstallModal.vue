<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'

const props = withDefaults(
  defineProps<{
    modelValue: boolean
    downloadUrl?: string
  }>(),
  {
    downloadUrl: '/qa-suite-extension.zip',
  }
)

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  close: []
}>()

const copied = ref(false)
let copyTimeout: number | null = null

function closeModal() {
  emit('update:modelValue', false)
  emit('close')
}

async function copyExtensionsUrl() {
  try {
    await navigator.clipboard.writeText('chrome://extensions')
    copied.value = true
    if (copyTimeout) clearTimeout(copyTimeout)
    copyTimeout = window.setTimeout(() => {
      copied.value = false
    }, 2500)
  } catch (err) {
    // Fallback if clipboard API is restricted
    const input = document.createElement('input')
    input.value = 'chrome://extensions'
    document.body.appendChild(input)
    input.select()
    document.execCommand('copy')
    document.body.removeChild(input)
    copied.value = true
    if (copyTimeout) clearTimeout(copyTimeout)
    copyTimeout = window.setTimeout(() => {
      copied.value = false
    }, 2500)
  }
}

function triggerDownloadAgain() {
  const link = document.createElement('a')
  link.href = props.downloadUrl
  link.download = 'qa-suite-extension.zip'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && props.modelValue) {
    closeModal()
  }
}

watch(
  () => props.modelValue,
  (isOpen) => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }
)

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
  if (copyTimeout) clearTimeout(copyTimeout)
})
</script>

<template>
  <Teleport to="body">
    <Transition name="ext-modal">
      <div
        v-if="modelValue"
        class="ext-modal-backdrop"
        @click.self="closeModal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="ext-modal-title"
      >
        <div class="ext-modal-container">
          <!-- Main Modal Card -->
          <div class="ext-modal-card">
            <!-- Header Glow Banner -->
            <div class="ext-card-header">
              <!-- Animated Celebration Badge -->
              <div class="ext-badge-wrapper">
                <span class="ext-badge-pill">
                  <span class="ext-badge-dot"></span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                  </svg>
                  <span>Download Started</span>
                </span>
                <span class="ext-badge-filename">qa-suite-extension.zip</span>
              </div>

              <!-- Title & Close -->
              <div class="flex items-start justify-between gap-4 mt-2">
                <div>
                  <h2 id="ext-modal-title" class="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
                    How to Install in Google Chrome
                  </h2>
                  <p class="text-sm text-gray-600 mt-1">
                    Follow these 4 simple steps to start testing in under 60 seconds.
                  </p>
                </div>
                <button
                  type="button"
                  @click="closeModal"
                  class="ext-close-btn"
                  title="Close guide"
                  aria-label="Close"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                  </svg>
                </button>
              </div>
            </div>

            <!-- Steps Container -->
            <div class="ext-steps-list">
              <!-- Step 1: Unzip -->
              <div class="ext-step-item">
                <div class="ext-step-number bg-gradient-to-br from-indigo-500 to-indigo-600 text-white shadow-indigo-200">
                  1
                </div>
                <div class="ext-step-content">
                  <div class="flex items-center justify-between gap-2 flex-wrap">
                    <h3 class="text-sm font-semibold text-gray-900">
                      Extract (Unzip) the downloaded file
                    </h3>
                    <span class="text-xs px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 font-medium">
                      Step 1 of 4
                    </span>
                  </div>
                  <p class="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                    Open your <strong>Downloads</strong> folder, right-click <code class="ext-code-inline">qa-suite-extension.zip</code>, and choose <strong>"Extract All..."</strong> (or double-click to unzip).
                  </p>
                  <div class="ext-hint-box bg-indigo-50/70 border-indigo-100 text-indigo-900">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-indigo-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                    <span>This creates a normal folder named <strong>qa-suite-extension</strong> containing the extension files.</span>
                  </div>
                </div>
              </div>

              <!-- Step 2: Open chrome://extensions -->
              <div class="ext-step-item">
                <div class="ext-step-number bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-blue-200">
                  2
                </div>
                <div class="ext-step-content">
                  <div class="flex items-center justify-between gap-2 flex-wrap">
                    <h3 class="text-sm font-semibold text-gray-900">
                      Open Chrome's Extensions page
                    </h3>
                    <span class="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 font-medium">
                      Step 2 of 4
                    </span>
                  </div>
                  <p class="text-xs sm:text-sm text-gray-600 mt-1">
                    Open a new tab in Chrome, then copy and paste this into the address bar:
                  </p>
                  
                  <!-- Copy Box -->
                  <div class="ext-url-box">
                    <div class="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-blue-500 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd" />
                      </svg>
                      <span class="font-mono text-xs sm:text-sm font-semibold text-gray-800 selection:bg-blue-200">
                        chrome://extensions
                      </span>
                    </div>
                    <button
                      type="button"
                      @click="copyExtensionsUrl"
                      class="ext-copy-btn"
                      :class="{ 'copied': copied }"
                    >
                      <svg v-if="!copied" xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M7 3.5A1.5 1.5 0 018.5 2h3.879a1.5 1.5 0 011.06.44l3.122 3.12a1.5 1.5 0 01.439 1.061V16.5A1.5 1.5 0 0115.5 18h-7A1.5 1.5 0 017 16.5v-13z" />
                        <path d="M5 6.5A1.5 1.5 0 003.5 8v10A1.5 1.5 0 005 19.5h7A1.5 1.5 0 0013.5 18v-1H5V6.5z" />
                      </svg>
                      <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                      <span>{{ copied ? 'Copied!' : 'Copy' }}</span>
                    </button>
                  </div>
                  <p class="text-[11px] text-gray-400 mt-1">
                    Or click Chrome menu <span class="font-semibold text-gray-600">⋮</span> (top-right) &rarr; <strong>Extensions</strong> &rarr; <strong>Manage Extensions</strong>.
                  </p>
                </div>
              </div>

              <!-- Step 3: Turn on Developer Mode -->
              <div class="ext-step-item">
                <div class="ext-step-number bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-amber-200">
                  3
                </div>
                <div class="ext-step-content">
                  <div class="flex items-center justify-between gap-2 flex-wrap">
                    <h3 class="text-sm font-semibold text-gray-900">
                      Enable "Developer mode"
                    </h3>
                    <span class="text-xs px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 font-medium">
                      Step 3 of 4
                    </span>
                  </div>
                  <p class="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                    Look at the <strong>top-right corner</strong> of the Chrome Extensions page and toggle the <strong>Developer mode</strong> switch to <strong>ON</strong>.
                  </p>
                  <!-- Visual UI Simulation for Developer Mode -->
                  <div class="ext-simulation-row">
                    <span class="text-xs text-gray-500 font-medium">Preview:</span>
                    <div class="ext-devmode-pill">
                      <span class="text-xs font-semibold text-gray-700">Developer mode</span>
                      <div class="ext-mock-toggle active">
                        <div class="ext-mock-toggle-dot"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Step 4: Click Load Unpacked -->
              <div class="ext-step-item">
                <div class="ext-step-number bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-emerald-200">
                  4
                </div>
                <div class="ext-step-content">
                  <div class="flex items-center justify-between gap-2 flex-wrap">
                    <h3 class="text-sm font-semibold text-gray-900">
                      Click "Load unpacked" & choose folder
                    </h3>
                    <span class="text-xs px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-medium">
                      Step 4 of 4
                    </span>
                  </div>
                  <p class="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                    Click the <strong>"Load unpacked"</strong> button in the top-left bar, then select the extracted <strong>qa-suite-extension</strong> folder from Step 1.
                  </p>
                  <!-- Visual UI Simulation for Load Unpacked -->
                  <div class="ext-simulation-row">
                    <span class="text-xs text-gray-500 font-medium">Click this button:</span>
                    <div class="ext-load-unpacked-btn">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                      </svg>
                      <span>Load unpacked</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Pro Tip Banner -->
            <div class="ext-protip">
              <span class="text-lg flex-shrink-0">🧩</span>
              <p class="text-xs text-gray-700 leading-normal">
                <strong>Pro-Tip:</strong> Click the puzzle icon in Chrome's top bar and click the <strong>Pin 📌</strong> icon next to <strong>QA Suite Companion</strong> so it's always accessible!
              </p>
            </div>

            <!-- Modal Footer -->
            <div class="ext-modal-footer">
              <button
                type="button"
                @click="triggerDownloadAgain"
                class="ext-re-download-btn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 3a1 1 0 00-1 1v7.586l-2.293-2.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L11 11.586V4a1 1 0 00-1-1z" clip-rule="evenodd" />
                  <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                </svg>
                <span>Download Again</span>
              </button>

              <button
                type="button"
                @click="closeModal"
                class="ext-done-btn"
              >
                <span>Got it, let's test! 🚀</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
/* ── Backdrop & Container ─────────────────────────────────────────────────── */
.ext-modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 99999;
  background: rgba(15, 23, 42, 0.72);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  overflow-y: auto;
}

.ext-modal-container {
  width: 100%;
  max-width: 36rem; /* 576px */
  margin: auto;
}

.ext-modal-card {
  background: #ffffff;
  border-radius: 1.25rem;
  box-shadow: 0 25px 50px -12px rgba(15, 23, 42, 0.25), 0 0 0 1px rgba(15, 23, 42, 0.06);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

/* ── Header ───────────────────────────────────────────────────────────────── */
.ext-card-header {
  padding: 1.5rem 1.5rem 1rem 1.5rem;
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
  border-bottom: 1px solid #f1f5f9;
}

.ext-badge-wrapper {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.ext-badge-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  background: #ecfdf5;
  border: 1px solid #a7f3d0;
  color: #065f46;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.2rem 0.625rem;
  border-radius: 9999px;
}

.ext-badge-dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 9999px;
  background: #10b981;
  box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.2);
  animation: extPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.ext-badge-filename {
  font-size: 0.75rem;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  color: #64748b;
  background: #f1f5f9;
  padding: 0.15rem 0.5rem;
  border-radius: 0.375rem;
}

.ext-close-btn {
  color: #94a3b8;
  padding: 0.375rem;
  border-radius: 0.5rem;
  transition: all 0.15s ease;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.ext-close-btn:hover {
  color: #334155;
  background: #f1f5f9;
}

/* ── Steps List ───────────────────────────────────────────────────────────── */
.ext-steps-list {
  padding: 1.25rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.125rem;
}

.ext-step-item {
  display: flex;
  align-items: flex-start;
  gap: 0.875rem;
}

.ext-step-number {
  width: 2rem;
  height: 2rem;
  border-radius: 0.625rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.875rem;
  flex-shrink: 0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
}

.ext-step-content {
  flex: 1;
  min-width: 0;
}

.ext-code-inline {
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  color: #0f172a;
  padding: 0.1rem 0.35rem;
  border-radius: 0.375rem;
  font-size: 0.8em;
  font-weight: 600;
}

.ext-hint-box {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  border-width: 1px;
  font-size: 0.75rem;
  margin-top: 0.5rem;
}

/* ── Step 2 Copy Box ──────────────────────────────────────────────────────── */
.ext-url-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 0.625rem;
  padding: 0.5rem 0.75rem;
  margin-top: 0.5rem;
}

.ext-copy-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  background: #ffffff;
  border: 1px solid #cbd5e1;
  color: #334155;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.625rem;
  border-radius: 0.375rem;
  cursor: pointer;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  transition: all 0.15s ease;
}
.ext-copy-btn:hover {
  background: #f8fafc;
  border-color: #94a3b8;
  color: #0f172a;
}
.ext-copy-btn.copied {
  background: #ecfdf5;
  border-color: #6ee7b7;
  color: #047857;
}

/* ── UI Simulations ───────────────────────────────────────────────────────── */
.ext-simulation-row {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  margin-top: 0.5rem;
  flex-wrap: wrap;
}

.ext-devmode-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  padding: 0.35rem 0.75rem;
  border-radius: 0.5rem;
}

.ext-mock-toggle {
  width: 2.25rem;
  height: 1.25rem;
  background: #cbd5e1;
  border-radius: 9999px;
  padding: 2px;
  display: flex;
  align-items: center;
  transition: background 0.2s ease;
}
.ext-mock-toggle.active {
  background: #2563eb;
  justify-content: flex-end;
}
.ext-mock-toggle-dot {
  width: 1rem;
  height: 1rem;
  border-radius: 9999px;
  background: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.ext-load-unpacked-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  background: #ffffff;
  border: 1px solid #93c5fd;
  color: #1d4ed8;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.3rem 0.625rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(37, 99, 235, 0.1);
}

/* ── Pro-tip ──────────────────────────────────────────────────────────────── */
.ext-protip {
  margin: 0 1.5rem;
  padding: 0.75rem 1rem;
  background: #f8fafc;
  border: 1px dashed #cbd5e1;
  border-radius: 0.75rem;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

/* ── Footer ───────────────────────────────────────────────────────────────── */
.ext-modal-footer {
  padding: 1.25rem 1.5rem;
  background: #f8fafc;
  border-top: 1px solid #f1f5f9;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.ext-re-download-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.8125rem;
  color: #64748b;
  font-weight: 500;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  transition: all 0.15s ease;
}
.ext-re-download-btn:hover {
  color: #0f172a;
  background: #f1f5f9;
}

.ext-done-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.625rem 1.25rem;
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  color: #ffffff;
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: 0.625rem;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
  transition: all 0.15s ease;
  cursor: pointer;
}
.ext-done-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(37, 99, 235, 0.4);
  background: linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%);
}
.ext-done-btn:active {
  transform: translateY(0);
}

/* ── Modal Entrance & Exit Transitions ────────────────────────────────────── */
.ext-modal-enter-active,
.ext-modal-leave-active {
  transition: opacity 0.28s ease, backdrop-filter 0.28s ease;
}

.ext-modal-enter-from,
.ext-modal-leave-to {
  opacity: 0;
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(0px);
}

.ext-modal-enter-active .ext-modal-card {
  animation: extCardBounceIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.ext-modal-leave-active .ext-modal-card {
  animation: extCardFadeOut 0.2s ease forwards;
}

@keyframes extCardBounceIn {
  0% {
    opacity: 0;
    transform: scale(0.92) translateY(24px);
  }
  70% {
    opacity: 1;
    transform: scale(1.01) translateY(-2px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

@keyframes extCardFadeOut {
  0% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  100% {
    opacity: 0;
    transform: scale(0.96) translateY(12px);
  }
}

@keyframes extPulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.15);
  }
}
</style>
