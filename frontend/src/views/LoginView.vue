"<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/composables/useAuth'

const router = useRouter()
const authStore = useAuthStore()

const isLogin = ref(true)
const email = ref('')
const password = ref('')
const displayName = ref('')
const error = ref('')
const loading = ref(false)

async function handleSubmit() {
  error.value = ''
  loading.value = true

  try {
    if (isLogin.value) {
      await authStore.login(email.value, password.value)
    } else {
      await authStore.register(email.value, password.value, displayName.value)
    }
    router.push('/dashboard')
  } catch (err: any) {
    error.value = err.message || 'Authentication failed'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="flex min-h-screen items-center justify-center bg-gradient-to-br from-primary-600 to-primary-900 px-4">
    <div class="w-full max-w-md">
      <div class="mb-8 text-center">
        <h1 class="text-4xl font-bold text-white">QA-Suite</h1>
        <p class="mt-2 text-primary-200">Intelligent QA Platform</p>
      </div>

      <div class="card p-8">
        <div class="mb-6 text-center">
          <h2 class="text-2xl font-bold text-gray-900">{{ isLogin ? 'Welcome Back' : 'Create Account' }}</h2>
          <p class="mt-1 text-sm text-gray-500">
            {{ isLogin ? 'Sign in to your workspace' : 'Register for a new workspace' }}
          </p>
        </div>

        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div v-if="!isLogin">
            <label class="label">Display Name</label>
            <input v-model="displayName" type="text" class="input" placeholder="John Doe" required />
          </div>

          <div>
            <label class="label">Email</label>
            <input v-model="email" type="email" class="input" placeholder="you@example.com" required />
          </div>

          <div>
            <label class="label">Password</label>
            <input v-model="password" type="password" class="input" placeholder="••••••••" required minlength="6" />
          </div>

          <div v-if="error" class="rounded-lg bg-red-50 p-3 text-sm text-red-700">
            {{ error }}
          </div>

          <button type="submit" class="btn-primary w-full" :disabled="loading">
            <span v-if="loading" class="animate-spin">⟳</span>
            {{ isLogin ? 'Sign In' : 'Create Account' }}
          </button>
        </form>

        <div class="mt-6 text-center">
          <button
            @click="isLogin = !isLogin; error = ''"
            class="text-sm text-primary-600 hover:text-primary-700"
          >
            {{ isLogin ? "Don't have an account? Register" : 'Already have an account? Sign in' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
"
