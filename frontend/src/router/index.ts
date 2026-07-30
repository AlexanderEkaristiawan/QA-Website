import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '@/firebase/config'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/LoginView.vue'),
      meta: { requiresAuth: false },
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('@/views/DashboardView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/projects',
      name: 'Projects',
      component: () => import('@/views/ProjectsView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/projects/:id',
      name: 'ProjectDetail',
      component: () => import('@/views/ProjectDetailView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/projects/:id/audit/:auditId',
      name: 'AuditResults',
      component: () => import('@/views/AuditResultsView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/projects/:id/bugs',
      name: 'BugList',
      component: () => import('@/views/BugListView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/projects/:id/test-cases',
      name: 'TestCases',
      component: () => import('@/views/TestCasesView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/projects/:id/history',
      name: 'TrendHistory',
      component: () => import('@/views/TrendHistoryView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/notifications',
      name: 'Notifications',
      component: () => import('@/views/NotificationsView.vue'),
      meta: { requiresAuth: true },
    },
  ],
})

// Navigation guard for authentication
router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.meta.requiresAuth !== false

  if (requiresAuth) {
    // Wait for auth state to be determined (user property will be null if not logged in)
    await auth.authStateReady()
    const user = auth.currentUser

    if (user) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router

