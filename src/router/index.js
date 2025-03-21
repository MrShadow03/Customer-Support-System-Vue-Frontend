import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import SignUpView from '../views/SignUpView.vue'
import Dashboard from '@/views/Dashboard.vue'
import Tickets from '@/views/Tickets.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: { layout: 'AuthLayout' },
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpView,
      meta: { layout: 'AuthLayout' },
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: { layout: 'DashboardLayout' },
    },
    {
      path: '/profile',
      name: 'profile',
      component: Tickets,
      meta: { layout: 'DashboardLayout' },
    },
    {
      path: '/settings',
      name: 'settings',
      component: Dashboard,
      meta: { layout: 'DashboardLayout' },
    },


  ],
})

export default router
