<script setup lang="ts">
import type { PageMetrics } from '@/types'

const props = defineProps<{
  metrics: PageMetrics
}>()

function openTool(tool: string) {
  const enc = encodeURIComponent(props.metrics.url)
  const host = new URL(props.metrics.url).hostname

  switch (tool) {
    case 'pagespeed':
      chrome.tabs.create({ url: `https://pagespeed.web.dev/analysis?url=${enc}` })
      break
    case 'gtmetrix':
      chrome.tabs.create({ url: `https://gtmetrix.com/analyze.html?url=${enc}` })
      break
    case 'richresults':
      chrome.tabs.create({ url: `https://search.google.com/test/rich-results?url=${enc}` })
      break
    case 'securityheaders':
      chrome.tabs.create({ url: `https://securityheaders.com/?q=${enc}&followRedirects=on` })
      break
    case 'ssllabs':
      chrome.tabs.create({ url: `https://www.ssllabs.com/ssltest/analyze.html?d=${host}` })
      break
    case 'w3c':
      chrome.tabs.create({ url: `https://validator.w3.org/nu/?doc=${enc}` })
      break
  }
}
</script>

<template>
  <div class="space-y-3">
    <div class="card p-3 space-y-1">
      <span class="text-xs font-semibold text-gray-900 block">External Testing Shortcuts</span>
      <p class="text-[11px] text-gray-500">Launch third-party diagnostic and auditing tools with the active page URL pre-filled.</p>
    </div>

    <div class="grid grid-cols-2 gap-2">
      <button @click="openTool('pagespeed')" class="btn btn-secondary text-left p-2.5 flex items-start gap-2.5 hover:border-indigo-300">
        <span class="text-lg">⚡</span>
        <div>
          <span class="text-xs font-semibold text-gray-900 block">Google PageSpeed</span>
          <span class="text-[10px] text-gray-500">Core Web Vitals & Perf</span>
        </div>
      </button>

      <button @click="openTool('gtmetrix')" class="btn btn-secondary text-left p-2.5 flex items-start gap-2.5 hover:border-indigo-300">
        <span class="text-lg">📊</span>
        <div>
          <span class="text-xs font-semibold text-gray-900 block">GTmetrix</span>
          <span class="text-[10px] text-gray-500">Waterfall & Load Timing</span>
        </div>
      </button>

      <button @click="openTool('richresults')" class="btn btn-secondary text-left p-2.5 flex items-start gap-2.5 hover:border-indigo-300">
        <span class="text-lg">🔍</span>
        <div>
          <span class="text-xs font-semibold text-gray-900 block">Google Rich Results</span>
          <span class="text-[10px] text-gray-500">Schema & Structured Data</span>
        </div>
      </button>

      <button @click="openTool('securityheaders')" class="btn btn-secondary text-left p-2.5 flex items-start gap-2.5 hover:border-indigo-300">
        <span class="text-lg">🛡️</span>
        <div>
          <span class="text-xs font-semibold text-gray-900 block">Security Headers</span>
          <span class="text-[10px] text-gray-500">CSP, HSTS & Permissions</span>
        </div>
      </button>

      <button @click="openTool('ssllabs')" class="btn btn-secondary text-left p-2.5 flex items-start gap-2.5 hover:border-indigo-300">
        <span class="text-lg">🔒</span>
        <div>
          <span class="text-xs font-semibold text-gray-900 block">Qualys SSL Labs</span>
          <span class="text-[10px] text-gray-500">TLS & Certificate Health</span>
        </div>
      </button>

      <button @click="openTool('w3c')" class="btn btn-secondary text-left p-2.5 flex items-start gap-2.5 hover:border-indigo-300">
        <span class="text-lg">✅</span>
        <div>
          <span class="text-xs font-semibold text-gray-900 block">W3C Validator</span>
          <span class="text-[10px] text-gray-500">HTML5 Markup Conformance</span>
        </div>
      </button>
    </div>
  </div>
</template>
