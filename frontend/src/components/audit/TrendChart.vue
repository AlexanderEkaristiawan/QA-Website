"<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js'
import type { TrendDataPoint } from '@/types'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler)

const props = defineProps<{
  data: TrendDataPoint[]
  metric: keyof TrendDataPoint
}>()

const chartOptions = computed(() => ({
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    intersect: false,
    mode: 'index' as const,
  },
  plugins: {
    legend: {
      display: true,
      position: 'top' as const,
    },
    tooltip: {
      backgroundColor: '#1f2937',
      titleColor: '#f9fafb',
      bodyColor: '#d1d5db',
      padding: 12,
      cornerRadius: 8,
    },
  },
  scales: {
    y: {
      min: 0,
      max: 100,
      ticks: {
        stepSize: 20,
        color: '#9ca3af',
      },
      grid: {
        color: '#f3f4f6',
      },
    },
    x: {
      ticks: {
        color: '#9ca3af',
      },
      grid: {
        display: false,
      },
    },
  },
}))

const chartData = computed(() => ({
  labels: props.data.map(d => d.date),
  datasets: [
    {
      label: props.metric.charAt(0).toUpperCase() + props.metric.slice(1),
      data: props.data.map(d => d[props.metric] as number),
      borderColor: '#6366f1',
      backgroundColor: 'rgba(99, 102, 241, 0.1)',
      fill: true,
      tension: 0.4,
      pointRadius: 4,
      pointHoverRadius: 6,
      pointBackgroundColor: '#6366f1',
      pointBorderColor: '#fff',
      pointBorderWidth: 2,
    },
  ],
}))
</script>

<template>
  <div class="h-80">
    <Line v-if="data.length > 0" :data="chartData" :options="chartOptions" />
    <div v-else class="flex h-full items-center justify-center">
      <p class="text-gray-500">No data available for chart</p>
    </div>
  </div>
</template>
"
