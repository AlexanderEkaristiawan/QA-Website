import { ref } from 'vue'
import axios from 'axios'
import type { PerformanceSummary } from '@/types'

const PAGESPEED_API = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed'

export function usePageSpeed() {
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function runPageSpeed(url: string): Promise<PerformanceSummary | null> {
    loading.value = true
    error.value = null

    try {
      const apiKey = import.meta.env.VITE_PAGESPEED_API_KEY
      if (!apiKey) {
        throw new Error('PageSpeed API key not configured. Set VITE_PAGESPEED_API_KEY in .env')
      }

      const response = await axios.get(PAGESPEED_API, {
        params: {
          url,
          key: apiKey,
          strategy: 'mobile',
          category: ['performance', 'accessibility', 'seo', 'best-practices'],
        },
      })

      const categories = response.data.lighthouseResult?.categories
      if (!categories) {
        throw new Error('Invalid PageSpeed API response structure')
      }

      return {
        performance: Math.round((categories.performance?.score || 0) * 100),
        accessibility: Math.round((categories.accessibility?.score || 0) * 100),
        seo: Math.round((categories.seo?.score || 0) * 100),
        bestPractices: Math.round((categories['best-practices']?.score || 0) * 100),
      }
    } catch (err: any) {
      const message = err.response?.data?.error?.message || err.message || 'PageSpeed API call failed'
      error.value = message
      console.error('PageSpeed Error:', message)
      return null
    } finally {
      loading.value = false
    }
  }

  return { runPageSpeed, loading, error }
}

