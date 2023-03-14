import { createRouter, createWebHistory } from 'vue-router'

import * as Public from './importsEachLayer/publicImports.js'
import * as Auth from './importsEachLayer/authImports.js'
import * as Admin from './importsEachLayer/adminImports.js'
import * as Login from '@/views/auth/Login.vue'
import * as Signin from '@/views/auth/CreateAccount.vue'


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
      ]
    },
    {
      path: '/user',
      name: 'user',
      component: Auth.AuthLayout,
      children: [
        { path: 'dashboard', name: 'userDashboard' , component: Auth.DashboardView }, //  meta: { requiresAuth: true } pour protéger la route
        { path: 'reservations', name: 'reservations' , component: Auth.ResaView },
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
    {
      path: '/signin',
      name: 'signin',
      component: Signin,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      // redirect à la page NotFound si pas de route
      path: '/:pathMatch(.*)*', name: 'notFound', component: NotFoundPage
    }
  ]
})

export default router
