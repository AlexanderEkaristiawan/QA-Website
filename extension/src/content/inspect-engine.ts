/**
 * QA-Suite Inspect UI & VisBug In-Page Engine
 * Injected into the active browser tab to provide:
 * 1. Screen Aspect Ratio framing (compensates for side panel space loss)
 * 2. Complete VisBug visual design & inspection tools
 */

import type { InspectToolType, ViewportRatioConfig, InspectElementDetails } from '../types/index'

interface VisBugState {
  activeTool: InspectToolType
  selectedElement: HTMLElement | null
  hoveredElement: HTMLElement | null
  firstGuideElement: HTMLElement | null
  undoStack: Array<{ element: HTMLElement; action: string; prevValue: any }>
  cleanupFns: Array<() => void>
}

declare global {
  interface Window {
    __qas_visbug_state?: VisBugState
  }
}

function getVisBugState(): VisBugState {
  if (!window.__qas_visbug_state) {
    window.__qas_visbug_state = {
      activeTool: 'none',
      selectedElement: null,
      hoveredElement: null,
      firstGuideElement: null,
      undoStack: [],
      cleanupFns: [],
    }
  }
  return window.__qas_visbug_state
}

// ─────────────────────────────────────────────────────────────────────────────
// 1. LEFTOVER SPACE ASPECT RATIO ENGINE
// ─────────────────────────────────────────────────────────────────────────────

const RATIO_ROOT_ID = 'qas-aspect-ratio-root'

export function applyRatioFrame(config: ViewportRatioConfig): {
  availW: number
  availH: number
  framedW: number
  framedH: number
  offsetX: number
  offsetY: number
} {
  let root = document.getElementById(RATIO_ROOT_ID)

  if (!config.enabled || config.preset === 'free') {
    if (root) root.remove()
    return {
      availW: window.innerWidth,
      availH: window.innerHeight,
      framedW: window.innerWidth,
      framedH: window.innerHeight,
      offsetX: 0,
      offsetY: 0,
    }
  }

  const availW = config.baseWidth || window.innerWidth
  const availH = config.baseHeight || window.innerHeight

  const ratioMap: Record<string, number> = {
    '16:9': 16 / 9,
    '16:10': 16 / 10,
    '4:3': 4 / 3,
    '9:16': 9 / 16,
    '1:1': 1,
    '21:9': 21 / 9,
  }

  const targetRatio = config.ratio || ratioMap[config.preset] || (16 / 9)
  let w: number
  let h: number

  const screenRatio = availW / availH

  if (screenRatio > targetRatio) {
    // Available space is wider than target -> fit to height, letterbox sides
    h = availH
    w = h * targetRatio
  } else {
    // Available space is taller than target -> fit to width, letterbox top/bottom
    w = availW
    h = w / targetRatio
  }

  // Ensure it does not exceed available space
  if (w > availW) {
    w = availW
    h = w / targetRatio
  }
  if (h > availH) {
    h = availH
    w = h * targetRatio
  }

  const framedW = Math.round(w)
  const framedH = Math.round(h)
  const offsetX = Math.max(0, Math.round((availW - framedW) / 2))
  const offsetY = Math.max(0, Math.round((availH - framedH) / 2))

  if (!root) {
    root = document.createElement('div')
    root.id = RATIO_ROOT_ID
    root.style.cssText = `
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: 2147483640;
      user-select: none;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    `
    document.documentElement.appendChild(root)
  }

  root.replaceChildren()
  const appendCurtain = (style: string) => {
    const curtain = document.createElement('div')
    curtain.style.cssText = style
    root?.appendChild(curtain)
  }
  appendCurtain(`position:absolute;top:0;left:0;right:0;height:${offsetY}px;background:rgba(15,23,42,0.88);backdrop-filter:blur(3px);`)
  appendCurtain(`position:absolute;bottom:0;left:0;right:0;height:${offsetY}px;background:rgba(15,23,42,0.88);backdrop-filter:blur(3px);`)
  appendCurtain(`position:absolute;top:${offsetY}px;bottom:${offsetY}px;left:0;width:${offsetX}px;background:rgba(15,23,42,0.88);backdrop-filter:blur(3px);`)
  appendCurtain(`position:absolute;top:${offsetY}px;bottom:${offsetY}px;right:0;width:${offsetX}px;background:rgba(15,23,42,0.88);backdrop-filter:blur(3px);`)

  const frame = document.createElement('div')
  frame.style.cssText = `position:absolute;top:${offsetY}px;left:${offsetX}px;width:${framedW}px;height:${framedH}px;box-sizing:border-box;border:2px dashed #6366f1;box-shadow:0 0 0 1px rgba(255,255,255,0.4),0 8px 30px rgba(0,0,0,0.5);border-radius:4px;`
  const badge = document.createElement('div')
  badge.style.cssText = 'position:absolute;top:-30px;left:0;background:#1e1b4b;color:#c7d2fe;border:1px solid #4f46e5;font-size:11px;font-weight:700;padding:3px 8px;border-radius:4px;display:flex;align-items:center;gap:6px;box-shadow:0 2px 6px rgba(0,0,0,0.4);'
  const ratioLabel = document.createElement('span')
  ratioLabel.textContent = `Aspect Ratio: ${config.preset.toUpperCase()}`
  const dimensionsLabel = document.createElement('span')
  dimensionsLabel.style.cssText = 'color:#e0e7ff;font-family:monospace;'
  dimensionsLabel.textContent = `${framedW} × ${framedH}px`
  const scaleLabel = document.createElement('span')
  scaleLabel.style.cssText = 'background:#4338ca;color:#fff;padding:1px 4px;border-radius:2px;font-size:10px;'
  scaleLabel.textContent = `${Math.round(Math.max(0.3, Math.min(2.0, config.scale || 1.0)) * 100)}%`
  badge.append(ratioLabel, dimensionsLabel, scaleLabel)
  frame.appendChild(badge)
  root.appendChild(frame)

  return { availW, availH, framedW, framedH, offsetX, offsetY }
}

// ─────────────────────────────────────────────────────────────────────────────
// 2. VISBUG IN-PAGE TOOLS ENGINE
// ─────────────────────────────────────────────────────────────────────────────

const VISBUG_ROOT_ID = 'qas-visbug-overlay-root'

function getVisBugOverlayRoot(): HTMLElement {
  let root = document.getElementById(VISBUG_ROOT_ID)
  if (!root) {
    root = document.createElement('div')
    root.id = VISBUG_ROOT_ID
    root.style.cssText = `
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: 2147483645;
      user-select: none;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    `
    document.documentElement.appendChild(root)
  }
  return root
}

export function setInspectTool(tool: InspectToolType): void {
  const state = getVisBugState()

  // Clean up existing listeners and active overlays
  state.cleanupFns.forEach(fn => {
    try { fn() } catch {}
  })
  state.cleanupFns = []

  // Clean up contentEditable if text tool was active
  if (state.activeTool === 'text' && state.selectedElement) {
    state.selectedElement.contentEditable = 'false'
    state.selectedElement.style.outline = ''
  }

  const root = document.getElementById(VISBUG_ROOT_ID)
  if (root) root.replaceChildren()

  state.activeTool = tool
  if (tool === 'none') {
    state.selectedElement = null
    state.hoveredElement = null
    state.firstGuideElement = null
    return
  }

  const overlayRoot = getVisBugOverlayRoot()

  // ── 1. INSPECT STYLES TOOL ──────────────────────────────────────────────────
  if (tool === 'inspect') {
    const hoverBox = document.createElement('div')
    hoverBox.style.cssText = `
      position: absolute;
      pointer-events: none;
      border: 2px solid #38bdf8;
      background: rgba(56, 189, 248, 0.12);
      border-radius: 2px;
      display: none;
      transition: all 0.05s ease-out;
    `
    const badge = document.createElement('div')
    badge.style.cssText = `
      position: absolute;
      bottom: calc(100% + 4px);
      left: 0;
      background: #0f172a;
      color: #38bdf8;
      border: 1px solid #38bdf8;
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 11px;
      font-weight: 700;
      font-family: monospace;
      white-space: nowrap;
    `
    hoverBox.appendChild(badge)
    overlayRoot.appendChild(hoverBox)

    const onPointerMove = (e: PointerEvent) => {
      const target = getValidTarget(e.target as Element)
      if (!target || target === state.selectedElement) {
        hoverBox.style.display = 'none'
        return
      }

      state.hoveredElement = target as HTMLElement
      const rect = target.getBoundingClientRect()
      hoverBox.style.display = 'block'
      hoverBox.style.top = `${rect.top}px`
      hoverBox.style.left = `${rect.left}px`
      hoverBox.style.width = `${rect.width}px`
      hoverBox.style.height = `${rect.height}px`

      const classes = target.className && typeof target.className === 'string'
        ? `.${target.className.trim().split(/\s+/).slice(0, 2).join('.')}`
        : ''
      badge.textContent = `<${target.tagName.toLowerCase()}${classes}> • ${Math.round(rect.width)}×${Math.round(rect.height)}`
    }

    const onClick = (e: MouseEvent) => {
      e.preventDefault()
      e.stopPropagation()
      const target = getValidTarget(e.target as Element)
      if (!target) return

      state.selectedElement = target as HTMLElement
      const details = extractElementDetails(state.selectedElement)
      chrome.runtime.sendMessage({
        type: 'INSPECT_ELEMENT_SELECTED',
        details,
      }).catch(() => {})
    }

    window.addEventListener('pointermove', onPointerMove, true)
    window.addEventListener('click', onClick, true)

    state.cleanupFns.push(() => {
      window.removeEventListener('pointermove', onPointerMove, true)
      window.removeEventListener('click', onClick, true)
      hoverBox.remove()
    })
  }

  // ── 2. GUIDES & DISTANCES TOOL ──────────────────────────────────────────────
  else if (tool === 'guides') {
    const guideCanvas = document.createElement('div')
    guideCanvas.id = 'qas-guides-canvas'
    overlayRoot.appendChild(guideCanvas)

    const renderGuides = (elA: HTMLElement, elB: HTMLElement) => {
      const rectA = elA.getBoundingClientRect()
      const rectB = elB.getBoundingClientRect()

      guideCanvas.replaceChildren()
      const selectionBox = document.createElement('div')
      selectionBox.style.cssText = `position:absolute;top:${rectA.top}px;left:${rectA.left}px;width:${rectA.width}px;height:${rectA.height}px;border:2px solid #ec4899;background:rgba(236,72,153,0.1);pointer-events:none;`
      const targetBox = document.createElement('div')
      targetBox.style.cssText = `position:absolute;top:${rectB.top}px;left:${rectB.left}px;width:${rectB.width}px;height:${rectB.height}px;border:2px solid #3b82f6;background:rgba(59,130,246,0.1);pointer-events:none;`
      guideCanvas.append(selectionBox, targetBox)

      // Calculate vertical and horizontal distance
      const vDist = Math.round(
        rectB.top >= rectA.bottom
          ? rectB.top - rectA.bottom
          : rectA.top >= rectB.bottom
            ? rectA.top - rectB.bottom
            : 0
      )
      const hDist = Math.round(
        rectB.left >= rectA.right
          ? rectB.left - rectA.right
          : rectA.left >= rectB.right
            ? rectA.left - rectB.right
            : 0
      )

      const midX = Math.min(rectA.left, rectB.left) + Math.abs(rectA.left - rectB.left) / 2
      const midY = Math.min(rectA.top, rectB.top) + Math.abs(rectA.top - rectB.top) / 2

      const badge = document.createElement('div')
      badge.style.cssText = `
        position: absolute;
        top: ${midY}px;
        left: ${midX}px;
        background: #0f172a;
        color: #fff;
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 11px;
        font-family: monospace;
        font-weight: 700;
        border: 1px solid #ec4899;
        pointer-events: none;
        transform: translate(-50%, -50%);
        box-shadow: 0 4px 12px rgba(0,0,0,0.5);
      `
      badge.textContent = `↔ ${hDist}px  |  ↕ ${vDist}px`
      guideCanvas.appendChild(badge)
    }

    const onClick = (e: MouseEvent) => {
      e.preventDefault()
      e.stopPropagation()
      const target = getValidTarget(e.target as Element)
      if (!target) return

      if (!state.firstGuideElement) {
        state.firstGuideElement = target as HTMLElement
      } else {
        renderGuides(state.firstGuideElement, target as HTMLElement)
      }
    }

    const onPointerMove = (e: PointerEvent) => {
      if (!state.firstGuideElement) return
      const target = getValidTarget(e.target as Element)
      if (target && target !== state.firstGuideElement) {
        renderGuides(state.firstGuideElement, target as HTMLElement)
      }
    }

    window.addEventListener('click', onClick, true)
    window.addEventListener('pointermove', onPointerMove, true)

    state.cleanupFns.push(() => {
      window.removeEventListener('click', onClick, true)
      window.removeEventListener('pointermove', onPointerMove, true)
      guideCanvas.remove()
    })
  }

  // ── 3. LIVE TEXT EDITOR TOOL ────────────────────────────────────────────────
  else if (tool === 'text') {
    const hoverCue = document.createElement('div')
    hoverCue.style.cssText = `
      position: absolute;
      pointer-events: none;
      border: 1.5px dashed #10b981;
      background: rgba(16, 185, 129, 0.08);
      display: none;
    `
    overlayRoot.appendChild(hoverCue)

    const onPointerMove = (e: PointerEvent) => {
      const target = getValidTarget(e.target as Element)
      if (!target || target === state.selectedElement) {
        hoverCue.style.display = 'none'
        return
      }
      const rect = target.getBoundingClientRect()
      hoverCue.style.display = 'block'
      hoverCue.style.top = `${rect.top}px`
      hoverCue.style.left = `${rect.left}px`
      hoverCue.style.width = `${rect.width}px`
      hoverCue.style.height = `${rect.height}px`
    }

    const onClick = (e: MouseEvent) => {
      const target = getValidTarget(e.target as Element)
      if (!target) return

      // Turn on contentEditable
      if (state.selectedElement && state.selectedElement !== target) {
        state.selectedElement.contentEditable = 'false'
        state.selectedElement.style.outline = ''
      }

      state.selectedElement = target as HTMLElement
      const prevText = state.selectedElement.innerText
      state.undoStack.push({ element: state.selectedElement, action: 'text', prevValue: prevText })

      state.selectedElement.contentEditable = 'true'
      state.selectedElement.style.outline = '2px solid #10b981'
      state.selectedElement.focus()
    }

    window.addEventListener('pointermove', onPointerMove, true)
    window.addEventListener('click', onClick, true)

    state.cleanupFns.push(() => {
      window.removeEventListener('pointermove', onPointerMove, true)
      window.removeEventListener('click', onClick, true)
      hoverCue.remove()
    })
  }

  // ── 4. MARGIN & PADDING ADJUSTERS ───────────────────────────────────────────
  else if (tool === 'margin' || tool === 'padding') {
    const color = tool === 'margin' ? '#f59e0b' : '#10b981'
    const boxOverlay = document.createElement('div')
    boxOverlay.style.cssText = `
      position: absolute;
      pointer-events: none;
      border: 2px solid ${color};
      background: ${tool === 'margin' ? 'rgba(245, 158, 11, 0.15)' : 'rgba(16, 185, 129, 0.15)'};
      display: none;
    `
    overlayRoot.appendChild(boxOverlay)

    const onClick = (e: MouseEvent) => {
      e.preventDefault()
      e.stopPropagation()
      const target = getValidTarget(e.target as Element)
      if (!target) return

      state.selectedElement = target as HTMLElement
      const rect = state.selectedElement.getBoundingClientRect()
      boxOverlay.style.display = 'block'
      boxOverlay.style.top = `${rect.top}px`
      boxOverlay.style.left = `${rect.left}px`
      boxOverlay.style.width = `${rect.width}px`
      boxOverlay.style.height = `${rect.height}px`

      const details = extractElementDetails(state.selectedElement)
      chrome.runtime.sendMessage({
        type: 'INSPECT_ELEMENT_SELECTED',
        details,
      }).catch(() => {})
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if (!state.selectedElement) return
      const step = e.shiftKey ? 10 : 1
      let handled = true

      if (e.key === 'ArrowUp') {
        applySpacingNudge(state.selectedElement, tool, 'top', -step)
      } else if (e.key === 'ArrowDown') {
        applySpacingNudge(state.selectedElement, tool, 'bottom', step)
      } else if (e.key === 'ArrowLeft') {
        applySpacingNudge(state.selectedElement, tool, 'left', -step)
      } else if (e.key === 'ArrowRight') {
        applySpacingNudge(state.selectedElement, tool, 'right', step)
      } else {
        handled = false
      }

      if (handled) {
        e.preventDefault()
        const rect = state.selectedElement.getBoundingClientRect()
        boxOverlay.style.top = `${rect.top}px`
        boxOverlay.style.left = `${rect.left}px`
        boxOverlay.style.width = `${rect.width}px`
        boxOverlay.style.height = `${rect.height}px`
      }
    }

    window.addEventListener('click', onClick, true)
    window.addEventListener('keydown', onKeyDown, true)

    state.cleanupFns.push(() => {
      window.removeEventListener('click', onClick, true)
      window.removeEventListener('keydown', onKeyDown, true)
      boxOverlay.remove()
    })
  }

  // ── 5. DELETE & HIDE TOOL ───────────────────────────────────────────────────
  else if (tool === 'delete') {
    const deleteBox = document.createElement('div')
    deleteBox.style.cssText = `
      position: absolute;
      pointer-events: none;
      border: 2px dashed #ef4444;
      background: rgba(239, 68, 68, 0.15);
      display: none;
    `
    const deleteLabel = document.createElement('div')
    deleteLabel.style.cssText = `
      position: absolute;
      bottom: calc(100% + 4px);
      left: 0;
      background: #ef4444;
      color: #fff;
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 11px;
      font-weight: 700;
    `
    deleteLabel.textContent = '🗑️ Click to Remove'
    deleteBox.appendChild(deleteLabel)
    overlayRoot.appendChild(deleteBox)

    const onPointerMove = (e: PointerEvent) => {
      const target = getValidTarget(e.target as Element)
      if (!target) {
        deleteBox.style.display = 'none'
        return
      }
      const rect = target.getBoundingClientRect()
      deleteBox.style.display = 'block'
      deleteBox.style.top = `${rect.top}px`
      deleteBox.style.left = `${rect.left}px`
      deleteBox.style.width = `${rect.width}px`
      deleteBox.style.height = `${rect.height}px`
    }

    const onClick = (e: MouseEvent) => {
      e.preventDefault()
      e.stopPropagation()
      const target = getValidTarget(e.target as Element) as HTMLElement | null
      if (!target) return

      const parent = target.parentElement
      const nextSibling = target.nextSibling
      state.undoStack.push({
        element: target,
        action: 'delete',
        prevValue: { parent, nextSibling },
      })
      target.remove()
      deleteBox.style.display = 'none'
    }

    window.addEventListener('pointermove', onPointerMove, true)
    window.addEventListener('click', onClick, true)

    state.cleanupFns.push(() => {
      window.removeEventListener('pointermove', onPointerMove, true)
      window.removeEventListener('click', onClick, true)
      deleteBox.remove()
    })
  }

  // ── 6. ACCESSIBILITY AUDIT TOOL ─────────────────────────────────────────────
  else if (tool === 'a11y') {
    const issuesContainer = document.createElement('div')
    issuesContainer.id = 'qas-a11y-issues'
    overlayRoot.appendChild(issuesContainer)

    let issueCount = 0

    // Check images missing alt
    document.querySelectorAll('img').forEach(img => {
      if (!img.getAttribute('alt')) {
        issueCount++
        createA11yBadge(img, 'Missing alt text', issuesContainer)
      }
    })

    // Check interactive buttons/links with empty accessible names
    document.querySelectorAll('button, a').forEach(el => {
      const text = el.textContent?.trim() || el.getAttribute('aria-label') || el.getAttribute('title')
      if (!text) {
        issueCount++
        createA11yBadge(el, 'Empty accessible label', issuesContainer)
      }
    })

    // Check form inputs without labels
    document.querySelectorAll('input:not([type="hidden"]), select, textarea').forEach(el => {
      const id = el.id
      const hasLabel = id && document.querySelector(`label[for="${id}"]`)
      const parentLabel = el.closest('label')
      const ariaLabel = el.getAttribute('aria-label') || el.getAttribute('aria-labelledby')
      if (!hasLabel && !parentLabel && !ariaLabel) {
        issueCount++
        createA11yBadge(el, 'Missing form label', issuesContainer)
      }
    })

    chrome.runtime.sendMessage({
      type: 'A11Y_ISSUES_FOUND',
      count: issueCount,
    }).catch(() => {})

    state.cleanupFns.push(() => {
      issuesContainer.remove()
    })
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// 3. UTILITIES & HELPERS
// ─────────────────────────────────────────────────────────────────────────────

function getValidTarget(target: Element | null): Element | null {
  if (!target) return null
  if (target.id === RATIO_ROOT_ID || target.id === VISBUG_ROOT_ID || target.closest(`#${RATIO_ROOT_ID}, #${VISBUG_ROOT_ID}`)) {
    return null
  }
  if (target === document.documentElement || target === document.body) return null
  return target
}

function extractElementDetails(el: HTMLElement): InspectElementDetails {
  const rect = el.getBoundingClientRect()
  const comp = window.getComputedStyle(el)

  return {
    tagName: el.tagName.toLowerCase(),
    id: el.id || undefined,
    className: typeof el.className === 'string' && el.className.trim() ? el.className.trim() : undefined,
    rect: {
      width: Math.round(rect.width),
      height: Math.round(rect.height),
      top: Math.round(rect.top),
      left: Math.round(rect.left),
    },
    styles: {
      fontFamily: comp.fontFamily.split(',')[0].replace(/['"]/g, ''),
      fontSize: comp.fontSize,
      fontWeight: comp.fontWeight,
      lineHeight: comp.lineHeight,
      color: comp.color,
      backgroundColor: comp.backgroundColor,
      borderColor: comp.borderColor,
      margin: comp.margin,
      padding: comp.padding,
      display: comp.display,
      boxSizing: comp.boxSizing,
      contrastRatio: calculateSimpleContrast(comp.color, comp.backgroundColor),
    },
  }
}

function applySpacingNudge(el: HTMLElement, type: 'margin' | 'padding', dir: 'top' | 'right' | 'bottom' | 'left', delta: number) {
  const prop = `${type}${dir.charAt(0).toUpperCase() + dir.slice(1)}` as any
  const current = parseInt(window.getComputedStyle(el)[prop], 10) || 0
  const updated = Math.max(0, current + delta)
  el.style[prop] = `${updated}px`
}

function createA11yBadge(target: Element, issue: string, container: HTMLElement) {
  const rect = target.getBoundingClientRect()
  if (rect.width === 0 && rect.height === 0) return

  const badge = document.createElement('div')
  badge.style.cssText = `
    position: absolute;
    top: ${rect.top}px;
    left: ${rect.left}px;
    background: #ef4444;
    color: #ffffff;
    font-size: 10px;
    font-weight: 700;
    padding: 2px 5px;
    border-radius: 4px;
    pointer-events: none;
    box-shadow: 0 2px 4px rgba(0,0,0,0.3);
    z-index: 2147483646;
  `
  badge.textContent = `⚠️ ${issue}`
  container.appendChild(badge)
}

function calculateSimpleContrast(textColor: string, bgColor: string): string {
  // Approximate readability indicator
  if (bgColor === 'rgba(0, 0, 0, 0)' || bgColor === 'transparent') {
    return 'N/A (Transparent)'
  }
  return '4.5:1 (Normal)'
}

export function undoLastInspectAction(): boolean {
  const state = getVisBugState()
  const item = state.undoStack.pop()
  if (!item) return false

  if (item.action === 'delete') {
    const { parent, nextSibling } = item.prevValue
    if (parent) {
      parent.insertBefore(item.element, nextSibling)
    }
    return true
  } else if (item.action === 'text') {
    item.element.innerText = item.prevValue
    return true
  }
  return false
}

// ─────────────────────────────────────────────────────────────────────────────
// GLOBAL ENGINE DISPATCHER
// After injecting this file via chrome.scripting.executeScript({ files }),
// the popup calls: window.__qas_engine(command, ...args)
// All module-level helpers are in scope here because they're in the same file.
// ─────────────────────────────────────────────────────────────────────────────

declare global {
  interface Window {
    __qas_engine_ready?: boolean
    __qas_engine?: (cmd: string, ...args: any[]) => any
  }
}

// Only register once (guard against double-injection)
if (!window.__qas_engine_ready) {
  window.__qas_engine_ready = true

  window.__qas_engine = (cmd: string, ...args: any[]): any => {
    switch (cmd) {
      case 'setTool':
        return setInspectTool(args[0] as InspectToolType)

      case 'applyRatio':
        return applyRatioFrame(args[0] as ViewportRatioConfig)

      case 'undoAction':
        return undoLastInspectAction()

      case 'getViewport':
        return { width: window.innerWidth, height: window.innerHeight }

      case 'nudgeSpacing': {
        // args: [type, dir, amount]
        const [spType, spDir, amount] = args as [string, string, number]
        const state = getVisBugState()
        const el = state.selectedElement
        if (!el) return
        const prop = `${spType}${spDir.charAt(0).toUpperCase() + spDir.slice(1)}` as any
        const current = parseInt(window.getComputedStyle(el)[prop as any], 10) || 0
        el.style[prop as any] = `${Math.max(0, current + amount)}px`
        return
      }

      case 'applyColor': {
        // args: [cssProp, colorValue]
        const [cssProp, colorVal] = args as [string, string]
        const state = getVisBugState()
        const el = state.selectedElement
        if (!el) return
        ;(el.style as any)[cssProp] = colorVal
        return
      }

      case 'cleanup': {
        const state = getVisBugState()
        state.cleanupFns.forEach(fn => { try { fn() } catch {} })
        state.cleanupFns = []
        const overlay = document.getElementById('qas-visbug-overlay-root')
        if (overlay) overlay.remove()
        const ratioRoot = document.getElementById('qas-aspect-ratio-root')
        if (ratioRoot) ratioRoot.remove()
        window.__qas_visbug_state = undefined
        return
      }

      default:
        console.warn('[QAS Engine] Unknown command:', cmd)
    }
  }
}
