import { createRouter, createWebHistory } from 'vue-router'

import PublicLayout from '@/layouts/PublicLayout.vue'

import HomeView from '@/views/Public/HomeView.vue'
import DashboardView from '@/views/Auth/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'public',
      component: PublicLayout,
      children: [
        { path: '/', component: HomeView },
      ]
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView
    },
    {
      path: '/:pathMatch(.*)*', redirect: '/' // redirect à la page home si pas de route
    }
  ]
})

export default router
