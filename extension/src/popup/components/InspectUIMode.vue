<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import type {
  ExtensionConfig,
  InspectToolType,
  InspectElementDetails,
  ExtMessage,
} from '@/types'

defineProps<{
  config: ExtensionConfig
}>()

// ── VisBug Active Tool State ────────────────────────────────────────────────
const activeTool = ref<InspectToolType>('none')
const selectedElement = ref<InspectElementDetails | null>(null)
const a11yIssueCount = ref<number | null>(null)
const statusMessage = ref<string>('')

// ── Engine injection path (must match the built dist path) ──────────────────
// The file is declared in manifest.json web_accessible_resources so
// chrome.scripting.executeScript({ files: [...] }) can inject it.
const ENGINE_FILE = 'src/content/inspect-engine.js'

onMounted(async () => {
  chrome.runtime.onMessage.addListener(handleMessage)
})

onUnmounted(async () => {
  chrome.runtime.onMessage.removeListener(handleMessage)
  await callEngine('cleanup')
})

function handleMessage(msg: ExtMessage) {
  if (msg.type === 'INSPECT_ELEMENT_SELECTED') {
    selectedElement.value = msg.details
  } else if (msg.type === 'A11Y_ISSUES_FOUND') {
    a11yIssueCount.value = msg.count
  }
}

// ── Tab helpers ──────────────────────────────────────────────────────────────
async function getActiveTabId(): Promise<number | null> {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
  if (!tab?.id || !tab.url || tab.url.startsWith('chrome://') || tab.url.startsWith('edge://')) {
    return null
  }
  return tab.id
}

/**
 * Ensure the engine script is injected into the current tab, then run a
 * command via window.__qas_engine(cmd, ...args).
 * The engine file is injected with { world: 'MAIN' } so it shares the page's
 * window object and can manipulate the DOM freely.
 */
async function callEngine(cmd: string, ...args: any[]): Promise<any> {
  const tabId = await getActiveTabId()
  if (!tabId) {
    showStatus('⚠️ No accessible tab found. Navigate to a webpage first.')
    return null
  }

  try {
    // Step 1: Inject the engine only when this page does not already have it.
    // Re-injecting an ES script in MAIN creates duplicate top-level bindings.
    const readyResults = await chrome.scripting.executeScript({
      target: { tabId },
      func: () => typeof window.__qas_engine === 'function',
      world: 'MAIN',
    })
    if (!readyResults[0]?.result) {
      await chrome.scripting.executeScript({
        target: { tabId },
        files: [ENGINE_FILE],
        world: 'MAIN',
      })
    }

    // Step 2: Call the command via the global dispatcher
    const results = await chrome.scripting.executeScript({
      target: { tabId },
      func: (command: string, cmdArgs: any[]) => {
        if (typeof window.__qas_engine !== 'function') {
          throw new Error('QAS engine not ready')
        }
        return window.__qas_engine(command, ...cmdArgs)
      },
      args: [cmd, args],
      world: 'MAIN',
    })
    return results[0]?.result ?? null
  } catch (err: any) {
    console.warn(`[InspectUI] callEngine(${cmd}) error:`, err)
    showStatus(`Error: ${err.message ?? err}`)
    return null
  }
}

// ── VisBug Tools Handlers ───────────────────────────────────────────────────
async function selectTool(tool: InspectToolType) {
  activeTool.value = activeTool.value === tool ? 'none' : tool
  selectedElement.value = null
  a11yIssueCount.value = null
  await callEngine('setTool', activeTool.value)
}

async function undoAction() {
  const undone = await callEngine('undoAction')
  showStatus(undone ? '✓ Reverted last change' : 'Nothing to undo')
}

async function applyNudgeSpacing(type: 'margin' | 'padding', dir: 'top' | 'right' | 'bottom' | 'left', delta: number) {
  await callEngine('nudgeSpacing', type, dir, delta)
}

async function applyLiveColor(prop: 'color' | 'backgroundColor' | 'borderColor', colorVal: string) {
  await callEngine('applyColor', prop, colorVal)
}

function showStatus(msg: string) {
  statusMessage.value = msg
  setTimeout(() => { statusMessage.value = '' }, 2500)
}
</script>

<template>
  <div class="inspect-mode-shell space-y-3">
    <!-- Header Notice -->
    <div class="card p-2.5 inspect-header-card flex items-center justify-between">
      <div>
        <span class="text-xs font-bold text-indigo-950 block">Inspect UI &amp; VisBug</span>
        <p class="text-[10px] text-indigo-700">Point-and-click in-page design &amp; aspect ratio tuning</p>
      </div>
      <span
        class="badge text-[10px] font-bold"
        :class="activeTool !== 'none' ? 'badge-good' : 'badge-neutral'"
      >
        {{ activeTool !== 'none' ? `Active: ${activeTool.toUpperCase()}` : 'Standby' }}
      </span>
    </div>

    <!-- Status Alert -->
    <div v-if="statusMessage" class="p-2 rounded inspect-status text-xs font-medium text-center">
      {{ statusMessage }}
    </div>

    <!-- VisBug Design & Inspect Tools -->
    <div class="card p-3 space-y-2.5">
      <div class="flex items-center justify-between">
        <span class="text-[11px] font-bold text-gray-800 uppercase tracking-wider flex items-center gap-1.5">
          <span>🛠️</span>
          <span>VisBug Design Tools</span>
        </span>
        <button
          v-if="activeTool !== 'none'"
          type="button"
          @click="selectTool('none')"
          class="text-[10px] text-red-600 hover:underline font-bold"
        >
          ✕ Turn Off Tools
        </button>
      </div>

      <div class="grid grid-cols-3 gap-1.5">
        <!-- Inspect Styles -->
        <button
          type="button"
          @click="selectTool('inspect')"
          class="btn p-2 text-left flex flex-col justify-between rounded-lg transition-all"
          :class="activeTool === 'inspect' ? 'btn-primary ring-2 ring-indigo-400' : 'btn-secondary'"
        >
          <span class="text-base">🔍</span>
          <div>
            <div class="font-bold text-[11px] leading-tight">Inspect</div>
            <div class="text-[9px] opacity-75">CSS &amp; fonts</div>
          </div>
        </button>

        <!-- Guides & Distances -->
        <button
          type="button"
          @click="selectTool('guides')"
          class="btn p-2 text-left flex flex-col justify-between rounded-lg transition-all"
          :class="activeTool === 'guides' ? 'btn-primary ring-2 ring-indigo-400' : 'btn-secondary'"
        >
          <span class="text-base">📏</span>
          <div>
            <div class="font-bold text-[11px] leading-tight">Guides</div>
            <div class="text-[9px] opacity-75">Pixel distance</div>
          </div>
        </button>

        <!-- Edit Text -->
        <button
          type="button"
          @click="selectTool('text')"
          class="btn p-2 text-left flex flex-col justify-between rounded-lg transition-all"
          :class="activeTool === 'text' ? 'btn-primary ring-2 ring-indigo-400' : 'btn-secondary'"
        >
          <span class="text-base">✏️</span>
          <div>
            <div class="font-bold text-[11px] leading-tight">Edit Text</div>
            <div class="text-[9px] opacity-75">Inline edit</div>
          </div>
        </button>

        <!-- Margins -->
        <button
          type="button"
          @click="selectTool('margin')"
          class="btn p-2 text-left flex flex-col justify-between rounded-lg transition-all"
          :class="activeTool === 'margin' ? 'btn-primary ring-2 ring-indigo-400' : 'btn-secondary'"
        >
          <span class="text-base">📐</span>
          <div>
            <div class="font-bold text-[11px] leading-tight">Margin</div>
            <div class="text-[9px] opacity-75">Visual spacing</div>
          </div>
        </button>

        <!-- Padding -->
        <button
          type="button"
          @click="selectTool('padding')"
          class="btn p-2 text-left flex flex-col justify-between rounded-lg transition-all"
          :class="activeTool === 'padding' ? 'btn-primary ring-2 ring-indigo-400' : 'btn-secondary'"
        >
          <span class="text-base">📦</span>
          <div>
            <div class="font-bold text-[11px] leading-tight">Padding</div>
            <div class="text-[9px] opacity-75">Inner spacing</div>
          </div>
        </button>

        <!-- Color Palette -->
        <button
          type="button"
          @click="selectTool('color')"
          class="btn p-2 text-left flex flex-col justify-between rounded-lg transition-all"
          :class="activeTool === 'color' ? 'btn-primary ring-2 ring-indigo-400' : 'btn-secondary'"
        >
          <span class="text-base">🎨</span>
          <div>
            <div class="font-bold text-[11px] leading-tight">Color</div>
            <div class="text-[9px] opacity-75">Tweak colors</div>
          </div>
        </button>

        <!-- Delete & Hide -->
        <button
          type="button"
          @click="selectTool('delete')"
          class="btn p-2 text-left flex flex-col justify-between rounded-lg transition-all"
          :class="activeTool === 'delete' ? 'btn-primary ring-2 ring-indigo-400' : 'btn-secondary'"
        >
          <span class="text-base">🗑️</span>
          <div>
            <div class="font-bold text-[11px] leading-tight">Delete</div>
            <div class="text-[9px] opacity-75">Remove items</div>
          </div>
        </button>

        <!-- Move & Position -->
        <button
          type="button"
          @click="selectTool('move')"
          class="btn p-2 text-left flex flex-col justify-between rounded-lg transition-all"
          :class="activeTool === 'move' ? 'btn-primary ring-2 ring-indigo-400' : 'btn-secondary'"
        >
          <span class="text-base">✋</span>
          <div>
            <div class="font-bold text-[11px] leading-tight">Move</div>
            <div class="text-[9px] opacity-75">Drag &amp; drop</div>
          </div>
        </button>

        <!-- Accessibility Audit -->
        <button
          type="button"
          @click="selectTool('a11y')"
          class="btn p-2 text-left flex flex-col justify-between rounded-lg transition-all"
          :class="activeTool === 'a11y' ? 'btn-primary ring-2 ring-indigo-400' : 'btn-secondary'"
        >
          <span class="text-base">♿</span>
          <div>
            <div class="font-bold text-[11px] leading-tight">A11y</div>
            <div class="text-[9px] opacity-75">Contrast &amp; alt</div>
          </div>
        </button>
      </div>

      <!-- Quick Action Buttons: Undo & Reset -->
      <div class="flex items-center gap-2 pt-1 border-t border-gray-100">
        <button
          type="button"
          @click="undoAction"
          class="btn btn-secondary text-xs py-1 px-2.5 flex-1 flex items-center justify-center gap-1"
        >
          <span>↩️</span>
          <span>Undo Last Action</span>
        </button>

        <button
          type="button"
          @click="selectTool('none')"
          class="btn btn-secondary text-xs py-1 px-2.5 flex-1 flex items-center justify-center gap-1 text-gray-600"
        >
          <span>✕</span>
          <span>Clear Tools</span>
        </button>
      </div>
    </div>

    <!-- Margin & Distance Tool Guidance Banner -->
    <div v-if="activeTool === 'margin'" class="card p-3 bg-amber-50 border-amber-200 text-xs text-amber-900 space-y-2">
      <div class="flex items-center justify-between font-bold">
        <span class="flex items-center gap-1.5 text-amber-950">
          <span>📐</span>
          <span>Object Distance &amp; Margin</span>
        </span>
        <button
          type="button"
          @click="selectTool('margin')"
          class="text-[10px] text-amber-800 hover:text-amber-950 underline font-semibold"
        >
          ↺ Reset Pair
        </button>
      </div>
      <p class="text-[11px] text-amber-800 leading-relaxed">
        Click the <strong>1st object</strong> on your page, then click the <strong>2nd object</strong>.
        The exact horizontal &amp; vertical distance in pixels and alignment guides are displayed directly on the screen.
      </p>
      <div class="text-[10px] text-amber-700 bg-amber-100/70 p-1.5 rounded flex items-center gap-1">
        <span>💡</span>
        <span>Tip: Hover over elements to preview distances in real time • Press ESC to clear.</span>
      </div>
    </div>

    <!-- ================================================================= -->
    <!-- SECTION 3: LIVE ELEMENT INSPECTION CARD                           -->
    <!-- ================================================================= -->
    <div v-if="selectedElement" class="card p-3 space-y-2 border-indigo-200 bg-white shadow-sm">
      <div class="flex items-center justify-between border-b border-gray-100 pb-1.5">
        <div class="flex items-center gap-1.5 min-w-0">
          <span class="badge badge-neutral uppercase font-mono text-[10px]">
            &lt;{{ selectedElement.tagName }}&gt;
          </span>
          <span v-if="selectedElement.id" class="text-[10px] font-mono text-indigo-600 truncate">
            #{{ selectedElement.id }}
          </span>
          <span v-if="selectedElement.className" class="text-[10px] font-mono text-gray-500 truncate">
            .{{ selectedElement.className.split(' ')[0] }}
          </span>
        </div>
        <span class="text-[10px] font-mono text-gray-500 font-semibold">
          {{ selectedElement.rect.width }} × {{ selectedElement.rect.height }}px
        </span>
      </div>

      <!-- Typography & Dimensions Grid -->
      <div class="grid grid-cols-2 gap-2 text-[11px]">
        <div class="bg-gray-50 p-1.5 rounded border border-gray-100">
          <span class="text-[9px] text-gray-400 block uppercase font-semibold">Font Family</span>
          <span class="font-medium text-gray-800 truncate block">{{ selectedElement.styles.fontFamily }}</span>
        </div>
        <div class="bg-gray-50 p-1.5 rounded border border-gray-100">
          <span class="text-[9px] text-gray-400 block uppercase font-semibold">Size &amp; Weight</span>
          <span class="font-medium text-gray-800 block">{{ selectedElement.styles.fontSize }} • {{ selectedElement.styles.fontWeight }}</span>
        </div>
      </div>

      <!-- Spacing Quick Nudge Controller (for Margin / Padding tool) -->
      <div v-if="activeTool === 'margin' || activeTool === 'padding'" class="space-y-1.5 pt-1">
        <span class="text-[10px] font-bold uppercase text-gray-500 block">
          Nudge {{ activeTool === 'margin' ? 'Margin' : 'Padding' }}
        </span>
        <div class="grid grid-cols-4 gap-1 text-center">
          <button type="button" @click="applyNudgeSpacing(activeTool as any, 'top', 5)" class="btn btn-secondary text-[10px] py-1">▲ Top +5</button>
          <button type="button" @click="applyNudgeSpacing(activeTool as any, 'bottom', 5)" class="btn btn-secondary text-[10px] py-1">▼ Bot +5</button>
          <button type="button" @click="applyNudgeSpacing(activeTool as any, 'left', 5)" class="btn btn-secondary text-[10px] py-1">◀ Left +5</button>
          <button type="button" @click="applyNudgeSpacing(activeTool as any, 'right', 5)" class="btn btn-secondary text-[10px] py-1">▶ Right +5</button>
        </div>
      </div>

      <!-- Color Tweakers (for Color tool) -->
      <div v-if="activeTool === 'color'" class="space-y-2 pt-1 border-t border-gray-100">
        <span class="text-[10px] font-bold uppercase text-gray-500 block">Element Colors</span>
        <div class="grid grid-cols-2 gap-2 text-xs">
          <label class="flex items-center gap-1.5">
            <span class="text-[10px] text-gray-600 font-semibold">Text:</span>
            <input
              type="color"
              :value="selectedElement.styles.color"
              @input="(e) => applyLiveColor('color', (e.target as HTMLInputElement).value)"
              class="w-6 h-6 rounded cursor-pointer border border-gray-300"
            />
          </label>
          <label class="flex items-center gap-1.5">
            <span class="text-[10px] text-gray-600 font-semibold">Background:</span>
            <input
              type="color"
              :value="selectedElement.styles.backgroundColor"
              @input="(e) => applyLiveColor('backgroundColor', (e.target as HTMLInputElement).value)"
              class="w-6 h-6 rounded cursor-pointer border border-gray-300"
            />
          </label>
        </div>
      </div>
    </div>

    <!-- Accessibility Issue Banner -->
    <div v-if="activeTool === 'a11y' && a11yIssueCount !== null" class="card p-3 bg-amber-50 border-amber-200 text-xs text-amber-900 space-y-1">
      <div class="flex items-center gap-1.5 font-bold">
        <span>⚠️</span>
        <span>Found {{ a11yIssueCount }} Accessibility Warning(s) on Page</span>
      </div>
      <p class="text-[11px] text-amber-700">
        Review the red tags placed over images missing alt text, inputs without labels, or elements with poor contrast.
      </p>
    </div>
  </div>
</template>

<style scoped>
.inspect-mode-shell {
  width: 100%;
  box-sizing: border-box;
}
.inspect-header-card {
  background: linear-gradient(to right, rgba(238, 242, 255, 0.7), rgba(245, 243, 255, 0.7));
  border-color: #e0e7ff;
}
.inspect-status {
  background: #eef2ff;
  border: 1px solid #c7d2fe;
  color: #3730a3;
}
</style>
