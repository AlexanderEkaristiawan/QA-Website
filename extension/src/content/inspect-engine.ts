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
      sendEngineMessage({
        type: 'INSPECT_ELEMENT_SELECTED',
        details,
      })
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

  // ── 4. MARGIN & DISTANCE MEASUREMENT TOOL ──────────────────────────────────
  else if (tool === 'margin') {
    let selectedFirst: HTMLElement | null = null
    let selectedSecond: HTMLElement | null = null
    let hoveredElement: HTMLElement | null = null

    // Container for all margin overlays
    const marginContainer = document.createElement('div')
    marginContainer.id = 'qas-margin-container'
    marginContainer.style.cssText = `
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: 2147483646;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    `
    overlayRoot.appendChild(marginContainer)

    // SVG canvas for crisp lines, end ticks, and projections
    const svgCanvas = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    svgCanvas.style.cssText = `
      position: absolute;
      inset: 0;
      width: 100vw;
      height: 100vh;
      pointer-events: none;
      overflow: visible;
    `
    marginContainer.appendChild(svgCanvas)

    // HTML layer for element highlight boxes and distance badges
    const htmlLayer = document.createElement('div')
    htmlLayer.style.cssText = `
      position: absolute;
      inset: 0;
      pointer-events: none;
    `
    marginContainer.appendChild(htmlLayer)

    // Floating HUD at top-center
    const hud = document.createElement('div')
    hud.id = 'qas-margin-hud'
    hud.style.cssText = `
      position: fixed;
      top: 16px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(15, 23, 42, 0.94);
      color: #e2e8f0;
      border: 1px solid rgba(255, 255, 255, 0.16);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(0,0,0,0.2);
      backdrop-filter: blur(10px);
      border-radius: 9999px;
      padding: 6px 16px;
      font-size: 11px;
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 12px;
      pointer-events: auto;
      z-index: 2147483647;
      user-select: none;
      white-space: nowrap;
      transition: all 0.15s ease;
    `
    marginContainer.appendChild(hud)

    const createHudResetBtn = (label = '↺ Reset') => {
      const btn = document.createElement('button')
      btn.type = 'button'
      btn.style.cssText = `
        background: rgba(255, 255, 255, 0.12);
        color: #ffffff;
        border: 1px solid rgba(255, 255, 255, 0.2);
        padding: 3px 10px;
        border-radius: 9999px;
        font-size: 10px;
        font-weight: 600;
        cursor: pointer;
        transition: background 0.1s;
      `
      btn.textContent = label
      btn.onmouseenter = () => { btn.style.background = 'rgba(255, 255, 255, 0.25)' }
      btn.onmouseleave = () => { btn.style.background = 'rgba(255, 255, 255, 0.12)' }
      btn.onclick = (e) => {
        e.stopPropagation()
        resetSelection()
      }
      return btn
    }

    const resetSelection = () => {
      selectedFirst = null
      selectedSecond = null
      hoveredElement = null
      state.selectedElement = null
      svgCanvas.replaceChildren()
      htmlLayer.replaceChildren()
      updateHud('init')
    }

    const updateHud = (
      step: 'init' | 'first' | 'locked',
      el1?: HTMLElement | null,
      el2?: HTMLElement | null,
      hGap?: number,
      vGap?: number
    ) => {
      hud.replaceChildren()

      const icon = document.createElement('span')
      icon.textContent = '📐'
      hud.appendChild(icon)

      const title = document.createElement('span')
      title.style.cssText = 'font-weight: 700; color: #f59e0b; margin-right: 4px;'
      title.textContent = 'Margin Inspector'
      hud.appendChild(title)

      if (step === 'init') {
        const text = document.createElement('span')
        text.style.color = '#cbd5e1'
        text.textContent = 'Click 1st object to start measuring'
        hud.appendChild(text)
      } else if (step === 'first' && el1) {
        const rect1 = el1.getBoundingClientRect()
        const text1 = document.createElement('span')
        text1.style.cssText = 'background: rgba(245, 158, 11, 0.2); color: #fbbf24; padding: 2px 6px; border-radius: 4px; font-weight: 600; font-family: monospace;'
        text1.textContent = `[1] <${el1.tagName.toLowerCase()}> ${Math.round(rect1.width)}×${Math.round(rect1.height)}px`
        hud.appendChild(text1)

        const arrow = document.createElement('span')
        arrow.style.color = '#94a3b8'
        arrow.textContent = '──'
        hud.appendChild(arrow)

        const hint = document.createElement('span')
        hint.style.color = '#38bdf8'
        hint.textContent = 'Hover or click 2nd object'
        hud.appendChild(hint)

        const resetBtn = createHudResetBtn()
        hud.appendChild(resetBtn)
      } else if (step === 'locked' && el1 && el2) {
        const rect1 = el1.getBoundingClientRect()
        const rect2 = el2.getBoundingClientRect()

        const text1 = document.createElement('span')
        text1.style.cssText = 'background: rgba(245, 158, 11, 0.2); color: #fbbf24; padding: 2px 6px; border-radius: 4px; font-weight: 600; font-family: monospace;'
        text1.textContent = `[1] <${el1.tagName.toLowerCase()}> ${Math.round(rect1.width)}×${Math.round(rect1.height)}`
        hud.appendChild(text1)

        const badge = document.createElement('span')
        badge.style.cssText = 'background: #ef4444; color: #ffffff; padding: 3px 9px; border-radius: 9999px; font-weight: 700; font-family: monospace; display: flex; align-items: center; gap: 8px;'
        badge.textContent = `↔ ${hGap ?? 0}px  |  ↕ ${vGap ?? 0}px`
        hud.appendChild(badge)

        const text2 = document.createElement('span')
        text2.style.cssText = 'background: rgba(56, 189, 248, 0.2); color: #38bdf8; padding: 2px 6px; border-radius: 4px; font-weight: 600; font-family: monospace;'
        text2.textContent = `[2] <${el2.tagName.toLowerCase()}> ${Math.round(rect2.width)}×${Math.round(rect2.height)}`
        hud.appendChild(text2)

        const resetBtn = createHudResetBtn('↺ Measure New Pair')
        hud.appendChild(resetBtn)
      }
    }

    const renderElementBox = (
      el: HTMLElement,
      type: 'first' | 'second' | 'hover-first' | 'hover-second'
    ) => {
      const rect = el.getBoundingClientRect()
      const box = document.createElement('div')
      const isFirst = type === 'first' || type === 'hover-first'
      const isLocked = type === 'first' || type === 'second'
      const borderColor = isFirst ? '#f59e0b' : '#38bdf8'
      const bgColor = isFirst ? 'rgba(245, 158, 11, 0.12)' : 'rgba(56, 189, 248, 0.12)'
      const borderStyle = isLocked ? 'solid' : 'dashed'

      box.style.cssText = `
        position: absolute;
        top: ${rect.top}px;
        left: ${rect.left}px;
        width: ${rect.width}px;
        height: ${rect.height}px;
        border: 2px ${borderStyle} ${borderColor};
        background: ${bgColor};
        border-radius: 3px;
        pointer-events: none;
        box-sizing: border-box;
      `

      const badge = document.createElement('div')
      badge.style.cssText = `
        position: absolute;
        bottom: calc(100% + 4px);
        left: 0;
        background: #0f172a;
        color: ${borderColor};
        border: 1px solid ${borderColor};
        padding: 2px 6px;
        border-radius: 4px;
        font-size: 10px;
        font-weight: 700;
        font-family: monospace;
        white-space: nowrap;
        box-shadow: 0 2px 6px rgba(0,0,0,0.4);
      `
      const prefix = isFirst ? '[1]' : '[2]'
      const lockSuffix = !isLocked ? ' (click to select)' : ''
      badge.textContent = `${prefix} <${el.tagName.toLowerCase()}> • ${Math.round(rect.width)}×${Math.round(rect.height)}px${lockSuffix}`
      box.appendChild(badge)
      htmlLayer.appendChild(box)
    }

    const drawMeasurement = (el1: HTMLElement, el2: HTMLElement, isLocked: boolean) => {
      svgCanvas.replaceChildren()
      htmlLayer.replaceChildren()

      renderElementBox(el1, 'first')
      renderElementBox(el2, isLocked ? 'second' : 'hover-second')

      const r1 = el1.getBoundingClientRect()
      const r2 = el2.getBoundingClientRect()

      const hSeparated = r1.right <= r2.left || r2.right <= r1.left
      const leftRect = r1.left <= r2.left ? r1 : r2
      const rightRect = r1.left <= r2.left ? r2 : r1
      const hGap = hSeparated ? Math.round(rightRect.left - leftRect.right) : 0

      const vSeparated = r1.bottom <= r2.top || r2.bottom <= r1.top
      const topRect = r1.top <= r2.top ? r1 : r2
      const bottomRect = r1.top <= r2.top ? r2 : r1
      const vGap = vSeparated ? Math.round(bottomRect.top - topRect.bottom) : 0

      const overlapX1 = Math.max(r1.left, r2.left)
      const overlapX2 = Math.min(r1.right, r2.right)
      const overlapW = Math.max(0, overlapX2 - overlapX1)

      const overlapY1 = Math.max(r1.top, r2.top)
      const overlapY2 = Math.min(r1.bottom, r2.bottom)
      const overlapH = Math.max(0, overlapY2 - overlapY1)

      const is2Inside1 = r2.left >= r1.left - 1 && r2.right <= r1.right + 1 && r2.top >= r1.top - 1 && r2.bottom <= r1.bottom + 1
      const is1Inside2 = r1.left >= r2.left - 1 && r1.right <= r2.right + 1 && r1.top >= r2.top - 1 && r1.bottom <= r2.bottom + 1

      const appendSvgLine = (x1: number, y1: number, x2: number, y2: number, color = '#ef4444', dashed = false) => {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line')
        line.setAttribute('x1', String(x1))
        line.setAttribute('y1', String(y1))
        line.setAttribute('x2', String(x2))
        line.setAttribute('y2', String(y2))
        line.setAttribute('stroke', color)
        line.setAttribute('stroke-width', '2')
        if (dashed) {
          line.setAttribute('stroke-dasharray', '4,3')
          line.setAttribute('opacity', '0.7')
        }
        svgCanvas.appendChild(line)
      }

      const appendDistanceBadge = (x: number, y: number, text: string) => {
        const badge = document.createElement('div')
        badge.style.cssText = `
          position: absolute;
          top: ${y}px;
          left: ${x}px;
          transform: translate(-50%, -50%);
          background: #0f172a;
          color: #ffffff;
          border: 1.5px solid #ef4444;
          padding: 3px 7px;
          border-radius: 4px;
          font-size: 11px;
          font-weight: 700;
          font-family: monospace;
          white-space: nowrap;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.6);
          pointer-events: none;
          z-index: 2;
        `
        badge.textContent = text
        htmlLayer.appendChild(badge)
      }

      const drawVLineWithCaps = (x: number, y1: number, y2: number, label: string) => {
        const yTop = Math.min(y1, y2)
        const yBot = Math.max(y1, y2)
        if (yBot - yTop <= 0) return
        appendSvgLine(x, yTop, x, yBot, '#ef4444')
        appendSvgLine(x - 7, yTop, x + 7, yTop, '#ef4444')
        appendSvgLine(x - 7, yBot, x + 7, yBot, '#ef4444')
        appendDistanceBadge(x, (yTop + yBot) / 2, `↕ ${label}`)
      }

      const drawHLineWithCaps = (y: number, x1: number, x2: number, label: string) => {
        const xLeft = Math.min(x1, x2)
        const xRight = Math.max(x1, x2)
        if (xRight - xLeft <= 0) return
        appendSvgLine(xLeft, y, xRight, y, '#ef4444')
        appendSvgLine(xLeft, y - 7, xLeft, y + 7, '#ef4444')
        appendSvgLine(xRight, y - 7, xRight, y + 7, '#ef4444')
        appendDistanceBadge((xLeft + xRight) / 2, y, `↔ ${label}`)
      }

      if (is2Inside1 || is1Inside2) {
        // Nested: Inner element inside Outer element
        const outer = is2Inside1 ? r1 : r2
        const inner = is2Inside1 ? r2 : r1
        const topGap = Math.round(inner.top - outer.top)
        const botGap = Math.round(outer.bottom - inner.bottom)
        const leftGap = Math.round(inner.left - outer.left)
        const rightGap = Math.round(outer.right - inner.right)

        const innerMidX = inner.left + inner.width / 2
        const innerMidY = inner.top + inner.height / 2

        if (topGap > 0) drawVLineWithCaps(innerMidX, outer.top, inner.top, `${topGap}px`)
        if (botGap > 0) drawVLineWithCaps(innerMidX, inner.bottom, outer.bottom, `${botGap}px`)
        if (leftGap > 0) drawHLineWithCaps(innerMidY, outer.left, inner.left, `${leftGap}px`)
        if (rightGap > 0) drawHLineWithCaps(innerMidY, inner.right, outer.right, `${rightGap}px`)
      } else if (vGap > 0 && overlapW > 0) {
        // Vertically separated with horizontal overlap
        const midX = overlapX1 + overlapW / 2
        drawVLineWithCaps(midX, topRect.bottom, bottomRect.top, `${vGap}px`)
      } else if (hGap > 0 && overlapH > 0) {
        // Horizontally separated with vertical overlap
        const midY = overlapY1 + overlapH / 2
        drawHLineWithCaps(midY, leftRect.right, rightRect.left, `${hGap}px`)
      } else if (hGap > 0 && vGap > 0) {
        // Diagonal separation: both gaps exist
        const midX = rightRect.left + rightRect.width / 2
        const midY = topRect.top + topRect.height / 2

        // Horizontal dimension line with projection
        drawHLineWithCaps(midY, leftRect.right, rightRect.left, `${hGap}px`)
        const rightAnchorY = topRect === leftRect ? rightRect.top : rightRect.bottom
        appendSvgLine(rightRect.left, midY, rightRect.left, rightAnchorY, '#ef4444', true)

        // Vertical dimension line with projection
        drawVLineWithCaps(midX, topRect.bottom, bottomRect.top, `${vGap}px`)
        const topAnchorX = bottomRect === rightRect ? topRect.right : topRect.left
        appendSvgLine(topAnchorX, topRect.bottom, midX, topRect.bottom, '#ef4444', true)
      } else if (overlapW > 0 && overlapH > 0) {
        // Partial intersection / overlap
        const ovBox = document.createElement('div')
        ovBox.style.cssText = `
          position: absolute;
          top: ${overlapY1}px;
          left: ${overlapX1}px;
          width: ${overlapW}px;
          height: ${overlapH}px;
          background: rgba(239, 68, 68, 0.2);
          border: 1.5px dashed #ef4444;
          border-radius: 2px;
          pointer-events: none;
        `
        htmlLayer.appendChild(ovBox)
        appendDistanceBadge(overlapX1 + overlapW / 2, overlapY1 + overlapH / 2, `Overlap: ${overlapW}×${overlapH}px`)
      }

      updateHud(isLocked ? 'locked' : 'first', el1, el2, hGap, vGap)

      if (isLocked) {
        sendEngineMessage({
          type: 'MARGIN_DISTANCE_MEASURED',
          first: extractElementDetails(el1),
          second: extractElementDetails(el2),
          hDistance: hGap,
          vDistance: vGap,
        })
      }
    }

    const refreshActiveView = () => {
      if (selectedFirst && selectedSecond) {
        drawMeasurement(selectedFirst, selectedSecond, true)
      } else if (selectedFirst && hoveredElement) {
        drawMeasurement(selectedFirst, hoveredElement, false)
      } else if (selectedFirst) {
        svgCanvas.replaceChildren()
        htmlLayer.replaceChildren()
        renderElementBox(selectedFirst, 'first')
        updateHud('first', selectedFirst)
      } else if (hoveredElement) {
        svgCanvas.replaceChildren()
        htmlLayer.replaceChildren()
        renderElementBox(hoveredElement, 'hover-first')
      }
    }

    updateHud('init')

    const onClick = (e: MouseEvent) => {
      e.preventDefault()
      e.stopPropagation()

      const target = getValidTarget(e.target as Element)
      if (!target) return

      if (!selectedFirst) {
        selectedFirst = target as HTMLElement
        selectedSecond = null
        state.selectedElement = selectedFirst
        refreshActiveView()
        sendEngineMessage({
          type: 'INSPECT_ELEMENT_SELECTED',
          details: extractElementDetails(selectedFirst),
        })
      } else if (!selectedSecond) {
        if (target === selectedFirst) return
        selectedSecond = target as HTMLElement
        refreshActiveView()
      } else {
        selectedFirst = target as HTMLElement
        selectedSecond = null
        state.selectedElement = selectedFirst
        refreshActiveView()
        sendEngineMessage({
          type: 'INSPECT_ELEMENT_SELECTED',
          details: extractElementDetails(selectedFirst),
        })
      }
    }

    const onPointerMove = (e: PointerEvent) => {
      const target = getValidTarget(e.target as Element)
      if (!target || target === document.documentElement || target === document.body) {
        if (!selectedSecond && hoveredElement) {
          hoveredElement = null
          refreshActiveView()
        }
        return
      }

      if (target === hoveredElement) return
      hoveredElement = target as HTMLElement

      if (!selectedFirst) {
        svgCanvas.replaceChildren()
        htmlLayer.replaceChildren()
        renderElementBox(hoveredElement, 'hover-first')
      } else if (!selectedSecond && hoveredElement !== selectedFirst) {
        drawMeasurement(selectedFirst, hoveredElement, false)
      }
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        resetSelection()
        return
      }

      const targetEl = selectedSecond || selectedFirst
      if (!targetEl) return
      const step = e.shiftKey ? 10 : 1
      let handled = true

      if (e.key === 'ArrowUp') {
        applySpacingNudge(targetEl, 'margin', 'top', -step)
      } else if (e.key === 'ArrowDown') {
        applySpacingNudge(targetEl, 'margin', 'bottom', step)
      } else if (e.key === 'ArrowLeft') {
        applySpacingNudge(targetEl, 'margin', 'left', -step)
      } else if (e.key === 'ArrowRight') {
        applySpacingNudge(targetEl, 'margin', 'right', step)
      } else {
        handled = false
      }

      if (handled) {
        e.preventDefault()
        refreshActiveView()
      }
    }

    let scrollRaf: number | null = null
    const onScrollOrResize = () => {
      if (scrollRaf) cancelAnimationFrame(scrollRaf)
      scrollRaf = requestAnimationFrame(() => {
        refreshActiveView()
      })
    }

    window.addEventListener('click', onClick, true)
    window.addEventListener('pointermove', onPointerMove, true)
    window.addEventListener('keydown', onKeyDown, true)
    window.addEventListener('scroll', onScrollOrResize, { passive: true })
    window.addEventListener('resize', onScrollOrResize, { passive: true })

    state.cleanupFns.push(() => {
      window.removeEventListener('click', onClick, true)
      window.removeEventListener('pointermove', onPointerMove, true)
      window.removeEventListener('keydown', onKeyDown, true)
      window.removeEventListener('scroll', onScrollOrResize)
      window.removeEventListener('resize', onScrollOrResize)
      if (scrollRaf) cancelAnimationFrame(scrollRaf)
      marginContainer.remove()
    })
  }

  // ── 5. PADDING ADJUSTER TOOL ────────────────────────────────────────────────
  else if (tool === 'padding') {
    const boxOverlay = document.createElement('div')
    boxOverlay.style.cssText = `
      position: absolute;
      pointer-events: none;
      border: 2px solid #ef4444;
      background: transparent;
      display: none;
    `
    overlayRoot.appendChild(boxOverlay)

    const paddingLayer = document.createElement('div')
    paddingLayer.style.cssText = 'position:absolute;inset:0;pointer-events:none;'
    overlayRoot.appendChild(paddingLayer)

    const renderPaddingOverlay = (element: HTMLElement, hover = false) => {
      const rect = element.getBoundingClientRect()
      const styles = window.getComputedStyle(element)
      const borderTop = parseFloat(styles.borderTopWidth) || 0
      const borderRight = parseFloat(styles.borderRightWidth) || 0
      const borderBottom = parseFloat(styles.borderBottomWidth) || 0
      const borderLeft = parseFloat(styles.borderLeftWidth) || 0
      const paddingTop = parseFloat(styles.paddingTop) || 0
      const paddingRight = parseFloat(styles.paddingRight) || 0
      const paddingBottom = parseFloat(styles.paddingBottom) || 0
      const paddingLeft = parseFloat(styles.paddingLeft) || 0
      const accent = hover ? '#a855f7' : '#ec4899'
      const stripe = `repeating-linear-gradient(135deg, ${hover ? 'rgba(168,85,247,0.28)' : 'rgba(236,72,153,0.28)'} 0px, ${hover ? 'rgba(168,85,247,0.28)' : 'rgba(236,72,153,0.28)'} 2px, rgba(255,255,255,0.16) 2px, rgba(255,255,255,0.16) 6px)`
      const side = (top: number, left: number, width: number, height: number, label: string) => {
        if (width <= 0 || height <= 0) return
        const region = document.createElement('div')
        region.style.cssText = `position:absolute;top:${top}px;left:${left}px;width:${width}px;height:${height}px;box-sizing:border-box;background:${stripe};border:1px solid ${accent};pointer-events:none;`
        const badge = document.createElement('span')
        badge.style.cssText = `position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background:${accent};color:#fff;border-radius:3px;padding:1px 4px;font:700 10px/1 monospace;white-space:nowrap;box-shadow:0 1px 3px rgba(0,0,0,0.25);`
        badge.textContent = label
        region.appendChild(badge)
        paddingLayer.appendChild(region)
      }

      paddingLayer.replaceChildren()
      boxOverlay.style.display = 'block'
      boxOverlay.style.top = `${rect.top}px`
      boxOverlay.style.left = `${rect.left}px`
      boxOverlay.style.width = `${rect.width}px`
      boxOverlay.style.height = `${rect.height}px`
      const contentBox = document.createElement('div')
      contentBox.style.cssText = `position:absolute;top:${rect.top + borderTop + paddingTop}px;left:${rect.left + borderLeft + paddingLeft}px;width:${Math.max(0, rect.width - borderLeft - borderRight - paddingLeft - paddingRight)}px;height:${Math.max(0, rect.height - borderTop - borderBottom - paddingTop - paddingBottom)}px;box-sizing:border-box;border:2px dashed #10b981;background:rgba(16,185,129,0.08);pointer-events:none;`
      paddingLayer.appendChild(contentBox)
      side(rect.top + borderTop, rect.left + borderLeft, rect.width - borderLeft - borderRight, paddingTop, `T ${Math.round(paddingTop)}px`)
      side(rect.top + rect.height - borderBottom - paddingBottom, rect.left + borderLeft, rect.width - borderLeft - borderRight, paddingBottom, `B ${Math.round(paddingBottom)}px`)
      side(rect.top + borderTop + paddingTop, rect.left + borderLeft, paddingLeft, rect.height - borderTop - borderBottom - paddingTop - paddingBottom, `L ${Math.round(paddingLeft)}px`)
      side(rect.top + borderTop + paddingTop, rect.left + rect.width - borderRight - paddingRight, paddingRight, rect.height - borderTop - borderBottom - paddingTop - paddingBottom, `R ${Math.round(paddingRight)}px`)
      const summary = document.createElement('div')
      summary.style.cssText = `position:absolute;top:${rect.top + rect.height / 2}px;left:${rect.left + rect.width / 2}px;transform:translate(-50%,-50%);background:${accent};color:#fff;border:1px solid #fdf2f8;border-radius:4px;padding:3px 6px;font:700 10px monospace;white-space:nowrap;pointer-events:none;box-shadow:0 2px 6px rgba(0,0,0,0.35);`
      summary.textContent = `Padding ${Math.round(paddingTop)} / ${Math.round(paddingRight)} / ${Math.round(paddingBottom)} / ${Math.round(paddingLeft)}px`
      paddingLayer.appendChild(summary)
    }

    const onClick = (e: MouseEvent) => {
      e.preventDefault()
      e.stopPropagation()
      const target = getValidTarget(e.target as Element)
      if (!target) return

      state.selectedElement = target as HTMLElement
      renderPaddingOverlay(state.selectedElement)

      const details = extractElementDetails(state.selectedElement)
      sendEngineMessage({
        type: 'INSPECT_ELEMENT_SELECTED',
        details,
      })
    }

    const onPointerMove = (e: PointerEvent) => {
      const target = getValidTarget(e.target as Element)
      if (!target || target === state.selectedElement) return
      renderPaddingOverlay(target as HTMLElement, true)
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        state.selectedElement = null
        boxOverlay.style.display = 'none'
        paddingLayer.replaceChildren()
        return
      }
      if (!state.selectedElement) return
      const step = e.shiftKey ? 10 : 1
      const decrease = e.altKey ? -1 : 1
      const allSides = e.metaKey || e.ctrlKey
      let handled = true

      if (allSides && (e.key === 'ArrowUp' || e.key === 'ArrowDown')) {
        const delta = (e.key === 'ArrowDown' ? 1 : -1) * step * decrease
        ;(['top', 'right', 'bottom', 'left'] as const).forEach(side => {
          applySpacingNudge(state.selectedElement as HTMLElement, 'padding', side, delta)
        })
      } else if (e.key === 'ArrowUp') {
        applySpacingNudge(state.selectedElement, 'padding', 'top', -step * decrease)
      } else if (e.key === 'ArrowDown') {
        applySpacingNudge(state.selectedElement, 'padding', 'bottom', step * decrease)
      } else if (e.key === 'ArrowLeft') {
        applySpacingNudge(state.selectedElement, 'padding', 'left', -step * decrease)
      } else if (e.key === 'ArrowRight') {
        applySpacingNudge(state.selectedElement, 'padding', 'right', step * decrease)
      } else {
        handled = false
      }

      if (handled) {
        e.preventDefault()
        renderPaddingOverlay(state.selectedElement)
      }
    }

    window.addEventListener('pointermove', onPointerMove, true)
    window.addEventListener('click', onClick, true)
    window.addEventListener('keydown', onKeyDown, true)

    state.cleanupFns.push(() => {
      window.removeEventListener('click', onClick, true)
      window.removeEventListener('keydown', onKeyDown, true)
      window.removeEventListener('pointermove', onPointerMove, true)
      boxOverlay.remove()
      paddingLayer.remove()
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

    sendEngineMessage({
      type: 'A11Y_ISSUES_FOUND',
      count: issueCount,
    })

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

function sendEngineMessage(message: Record<string, unknown>) {
  const runtime = typeof chrome !== 'undefined' ? chrome.runtime : undefined
  runtime?.sendMessage(message).catch(() => {})
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
