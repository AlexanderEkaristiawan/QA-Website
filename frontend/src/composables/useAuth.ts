import { ref, computed } from 'vue'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  type User,
} from 'firebase/auth'
import { auth } from '@/firebase/config'
import type { AppUser } from '@/types'

// Module-level state so all consumers share the same instance
const currentUser = ref<AppUser | null>(null)
const loading = ref(true)

export function useAuthStore() {
  const isAuthenticated = computed(() => currentUser.value !== null)

  function init() {
    loading.value = true
    onAuthStateChanged(auth, (user: User | null) => {
      if (user) {
        currentUser.value = {
          uid: user.uid,
          email: user.email || '',
          displayName: user.displayName || user.email?.split('@')[0] || 'User',
          photoURL: user.photoURL || undefined,
        }
      } else {
        currentUser.value = null
      }
      loading.value = false
    })
  }

  async function login(email: string, password: string) {
    const cred = await signInWithEmailAndPassword(auth, email, password)
    return cred.user
  }

  async function register(email: string, password: string, displayName: string) {
    const cred = await createUserWithEmailAndPassword(auth, email, password)
    await updateProfile(cred.user, { displayName })
    return cred.user
  }

  async function logout() {
    await signOut(auth)
    currentUser.value = null
  }

  return {
    currentUser,
    loading,
    isAuthenticated,
    init,
    login,
    register,
    logout,
  }
}

