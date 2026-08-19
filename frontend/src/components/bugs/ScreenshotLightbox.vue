<script setup lang="ts">
import { computed, onMounted, onUnmounted, watch } from 'vue'

const props = defineProps<{
  urls: string[]
  index: number
}>()

const emit = defineEmits<{
  close: []
  'update:index': [index: number]
}>()

const currentUrl = computed(() => props.urls[props.index] ?? '')
const canPrev = computed(() => props.index > 0)
const canNext = computed(() => props.index < props.urls.length - 1)

function prev() {
  if (canPrev.value) emit('update:index', props.index - 1)
}

function next() {
  if (canNext.value) emit('update:index', props.index + 1)
}

function onKey(event: KeyboardEvent) {
  if (event.key === 'Escape') emit('close')
  if (event.key === 'ArrowLeft') prev()
  if (event.key === 'ArrowRight') next()
}

onMounted(() => window.addEventListener('keydown', onKey))
onUnmounted(() => window.removeEventListener('keydown', onKey))

watch(() => props.index, () => {
  if (props.index < 0 || props.index >= props.urls.length) emit('close')
})
</script>

<template>
  <div
    class="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4"
    @click="emit('close')"
  >
    <button
      type="button"
      class="absolute right-4 top-4 text-2xl text-white/80 hover:text-white"
      aria-label="Close screenshot"
      @click="emit('close')"
    >✕</button>

    <button
      v-if="canPrev"
      type="button"
      class="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/15 px-3 py-2 text-xl text-white hover:bg-white/25"
      aria-label="Previous screenshot"
      @click.stop="prev"
    >‹</button>

    <img
      :src="currentUrl"
      alt="Bug screenshot"
      class="max-h-[90vh] max-w-[90vw] rounded-lg object-contain"
      @click.stop
    />

    <button
      v-if="canNext"
      type="button"
      class="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/15 px-3 py-2 text-xl text-white hover:bg-white/25"
      aria-label="Next screenshot"
      @click.stop="next"
    >›</button>

    <p class="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-white/70">
      {{ index + 1 }} / {{ urls.length }}
    </p>
  </div>
</template>
