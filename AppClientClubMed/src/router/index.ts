import { createRouter, createWebHistory } from 'vue-router'
import { authStore } from '../stores/authStore.js';

import * as Public from './importsEachLayer/publicImports.js'
import * as Auth from './importsEachLayer/authImports.js'
import * as Admin from './importsEachLayer/adminImports.js'
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes

import NotFoundPage from '@/views/errors/404NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/club',
      name: 'club' ,
      component: Public.ClubShow,
    },
    {
      path: '/',
      name: 'public',
      component: Public.PublicLayout,
      children: [
        { path: '/', name: 'home' , component: Public.HomeView },
        { path: '/club/:id', name: 'club' , component: Public.ClubShow },
        { path: '/privacy-policy', name: 'privacy_policy', component: Public.PrivacyPolicy },
        { path: '/terms', name: 'terms_of_use', component: Public.TermsOfUseView },
        { path: '/cookie-policy', name: 'cookie_policy', component: Public.CookiePolicyView },
        { path: '/reserver', name: 'reserver', component: Public.ResaView },
      ]
    },
    {
      path: '/user',
      name: 'user',
      component: Auth.AuthLayout,
      children: [
        { path: 'dashboard', name: 'userDashboard' , component: Auth.DashboardView, meta: { requiresAuth: true }}, //  meta: { requiresAuth: true } pour protéger la route
        { path: 'reservations', name: 'reservations' , component: Auth.ResaView, meta: { requiresAuth: true } },
        { path: 'profile', name: 'profile', component: Auth.ProfileView, meta: { requiresAuth: true } },
        { path: 'messages', name: 'messages', component: Auth.MessagesView, meta: { requiresAuth: true } },
        { path: 'notifications', name: 'notifications', component: Auth.NotifsView, meta: { requiresAuth: true } },
        { path: 'settings', name: 'settings', component: Auth.SettingsView, meta: { requiresAuth: true } },

      ]
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin.AdminLayout,
      children: [
        { path: 'dashboard', name: 'adminDashboard' , component: Admin.DashboardView}, //  meta: { requiresAuth: true } pour protéger la route
      ]
    },
<<<<<<< Updated upstream
=======
    { path: '/login', name: 'login', component: Auth.LoginView },
    { path: '/register', name: 'register', component: Auth.CreateAccountView },
>>>>>>> Stashed changes
    {
      // redirect à la page NotFound si pas de route
      path: '/:pathMatch(.*)*', name: 'notFound', component: NotFoundPage
    }
  ]
})
router.beforeEach((to) => {
  // ✅ This will work because the router starts its navigation after
  // the router is installed and pinia will be installed too
  const auth = authStore();

  if (to.meta.requiresAuth && !auth.user.logged) return '/login'
})

export default router
