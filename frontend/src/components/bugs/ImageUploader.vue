<script setup lang="ts">
import { computed, onUnmounted, ref, watch } from 'vue'
import {
  MAX_SCREENSHOTS_PER_BUG,
  validateScreenshotFile,
} from '@/composables/useBugScreenshots'

const props = withDefaults(defineProps<{
  files: File[]
  disabled?: boolean
  maxFiles?: number
}>(), {
  disabled: false,
  maxFiles: MAX_SCREENSHOTS_PER_BUG,
})

const emit = defineEmits<{ (e: 'update:files', files: File[]): void }>()

const input = ref<HTMLInputElement | null>(null)
const error = ref('')
const objectUrls = ref<string[]>([])

const remaining = computed(() => Math.max(0, props.maxFiles - props.files.length))

watch(
  () => props.files,
  files => {
    objectUrls.value.forEach(url => URL.revokeObjectURL(url))
    objectUrls.value = files.map(file => URL.createObjectURL(file))
  },
  { immediate: true }
)

onUnmounted(() => {
  objectUrls.value.forEach(url => URL.revokeObjectURL(url))
})

function selectFiles(event: Event) {
  const selected = Array.from((event.target as HTMLInputElement).files ?? [])
  if (input.value) input.value.value = ''

  const invalid = selected.find(file => validateScreenshotFile(file))
  if (invalid) {
    error.value = validateScreenshotFile(invalid) ?? 'Invalid screenshot.'
    return
  }

  const next = [...props.files, ...selected].slice(0, props.maxFiles)
  if (selected.length + props.files.length > props.maxFiles) {
    error.value = `You can attach at most ${props.maxFiles} screenshots.`
  } else {
    error.value = ''
  }

  emit('update:files', next)
}

function removeFile(index: number) {
  emit('update:files', props.files.filter((_, fileIndex) => fileIndex !== index))
  error.value = ''
}
</script>

<template>
  <div>
    <input
      ref="input"
      type="file"
      accept="image/png, image/jpeg, image/webp"
      multiple
      class="sr-only"
      :disabled="disabled || remaining === 0"
      @change="selectFiles"
    />
    <button
      type="button"
      class="btn-secondary"
      :disabled="disabled || remaining === 0"
      @click="input?.click()"
    >
      Add screenshots
    </button>
    <p class="mt-1 text-xs text-gray-500">
      JPEG, PNG, or WebP. Maximum 2 MB each. {{ remaining }} remaining of {{ maxFiles }}.
    </p>
    <p v-if="error" class="mt-2 text-xs text-red-600">{{ error }}</p>

    <div v-if="files.length" class="mt-3 grid grid-cols-3 gap-2">
      <div
        v-for="(file, index) in files"
        :key="`${file.name}-${file.size}-${index}`"
        class="relative aspect-square overflow-hidden rounded-lg border border-gray-200 bg-gray-50"
      >
        <img :src="objectUrls[index]" :alt="file.name" class="h-full w-full object-cover" />
        <button
          type="button"
          class="absolute right-1 top-1 grid h-6 w-6 place-items-center rounded-full bg-black/65 text-sm text-white"
          :aria-label="`Remove ${file.name}`"
          :disabled="disabled"
          @click="removeFile(index)"
        >x</button>
      </div>
    </div>
  </div>
</template>
