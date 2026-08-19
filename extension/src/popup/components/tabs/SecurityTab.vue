<script setup lang="ts">
import { computed } from 'vue'
import type { PageMetrics, SecurityResponseData } from '@/types'

type CheckStatus = 'pass' | 'warn' | 'info'

interface SecurityCheck {
  name: string
  detail: string
  status: CheckStatus
}

const props = defineProps<{ metrics: PageMetrics }>()

const security = computed<SecurityResponseData>(() => props.metrics.security ?? {
  headers: {},
  setCookieHeaders: [],
  source: 'unavailable',
  inspectedUrl: props.metrics.url,
})

function value(name: string): string {
  return security.value.headers[name] ?? ''
}

function required(name: string, valid?: (header: string) => boolean): SecurityCheck {
  const header = value(name)
  if (!header) return { name, detail: 'Not sent by the server.', status: 'warn' }
  if (valid && !valid(header)) return { name, detail: header.slice(0, 110), status: 'warn' }
  return { name, detail: header.slice(0, 110), status: 'pass' }
}

function optional(name: string, description: string): SecurityCheck {
  const header = value(name)
  return header
    ? { name, detail: header.slice(0, 110), status: 'pass' }
    : { name, detail: description, status: 'info' }
}

const coreChecks = computed(() => [
  required('content-security-policy'),
  required('strict-transport-security', header => /max-age\s*=\s*[1-9]/i.test(header)),
  required('x-content-type-options', header => header.toLowerCase().includes('nosniff')),
  required('x-frame-options', header => /deny|sameorigin/i.test(header)),
  required('referrer-policy'),
  required('permissions-policy'),
])

const isolationChecks = computed(() => [
  required('cross-origin-opener-policy', header => /same-origin/i.test(header)),
  required('cross-origin-embedder-policy', header => /require-corp|credentialless/i.test(header)),
  required('cross-origin-resource-policy'),
])

const corsChecks = computed(() => [
  optional('access-control-allow-origin', 'Not set. This is normal when the endpoint is same-origin only.'),
  optional('access-control-allow-credentials', 'Not set.'),
  optional('access-control-allow-headers', 'Not set.'),
  optional('access-control-allow-methods', 'Not set.'),
  optional('access-control-expose-headers', 'Not set.'),
  optional('access-control-max-age', 'Not set.'),
])

const informationChecks = computed(() => [
  optional('clear-site-data', 'Not sent. This is used only for explicit client-data cleanup.'),
  value('server')
    ? { name: 'server', detail: value('server').slice(0, 110), status: 'warn' as const }
    : { name: 'server', detail: 'Not exposed.', status: 'pass' as const },
  value('x-powered-by')
    ? { name: 'x-powered-by', detail: value('x-powered-by').slice(0, 110), status: 'warn' as const }
    : { name: 'x-powered-by', detail: 'Not exposed.', status: 'pass' as const },
])

const legacyChecks = computed(() => ['x-xss-protection', 'expect-ct', 'public-key-pins'].map(name => value(name)
  ? { name, detail: 'Legacy header is still sent.', status: 'warn' as const }
  : { name, detail: 'Not sent.', status: 'pass' as const },
))

const cookieChecks = computed(() => {
  const cookies = security.value.setCookieHeaders
  if (!cookies.length) {
    return security.value.source === 'navigation'
      ? [{ name: 'Set-Cookie flags', detail: 'No cookies were set in this navigation.', status: 'info' as const }]
      : [{ name: 'Set-Cookie flags', detail: 'Available only when the original navigation headers were captured.', status: 'info' as const }]
  }

  const missingSecure = cookies.filter(cookie => !/;\s*secure(?:;|$)/i.test(cookie)).length
  const missingHttpOnly = cookies.filter(cookie => !/;\s*httponly(?:;|$)/i.test(cookie)).length
  const missingSameSite = cookies.filter(cookie => !/;\s*samesite=(lax|strict|none)(?:;|$)/i.test(cookie)).length
  const count = cookies.length
  return [
    { name: 'Secure', detail: missingSecure ? `${missingSecure} of ${count} cookies lack Secure.` : `Present on all ${count} cookies.`, status: missingSecure ? 'warn' as const : 'pass' as const },
    { name: 'HttpOnly', detail: missingHttpOnly ? `${missingHttpOnly} of ${count} cookies lack HttpOnly.` : `Present on all ${count} cookies.`, status: missingHttpOnly ? 'warn' as const : 'pass' as const },
    { name: 'SameSite', detail: missingSameSite ? `${missingSameSite} of ${count} cookies lack SameSite.` : `Present on all ${count} cookies.`, status: missingSameSite ? 'warn' as const : 'pass' as const },
  ]
})

const warningCount = computed(() => [coreChecks.value, isolationChecks.value, corsChecks.value, informationChecks.value, legacyChecks.value, cookieChecks.value]
  .flat().filter(check => check.status === 'warn').length)
</script>

<template>
  <div class="security-tab">
    <div class="security-overview">
      <div>
        <span class="security-overview-label">Response protection</span>
        <strong>{{ warningCount ? `${warningCount} attention items` : 'No attention items' }}</strong>
      </div>
      <span class="badge" :class="warningCount ? 'badge-warn' : 'badge-good'">
        {{ security.source === 'navigation' ? 'Page response' : security.source === 'background-request' ? 'Background request' : 'Unavailable' }}
      </span>
    </div>

    <p v-if="security.source !== 'navigation'" class="security-note">
      Header results were fetched separately from the current page. Cookie flags are unavailable until a navigation response is captured.
    </p>

    <section v-for="group in [
      { title: 'Core protection', checks: coreChecks },
      { title: 'Cross-origin isolation', checks: isolationChecks },
      { title: 'Access control (CORS)', checks: corsChecks },
      { title: 'State security (Set-Cookie)', checks: cookieChecks },
      { title: 'Information control', checks: informationChecks },
      { title: 'Deprecated or legacy', checks: legacyChecks },
    ]" :key="group.title" class="security-group">
      <h2>{{ group.title }}</h2>
      <div class="security-checks">
        <div v-for="check in group.checks" :key="check.name" class="security-check" :class="`is-${check.status}`">
          <span class="security-status" aria-hidden="true"></span>
          <div>
            <code>{{ check.name }}</code>
            <p>{{ check.detail }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
