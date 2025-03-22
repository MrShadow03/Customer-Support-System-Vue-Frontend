import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import SignUpView from '../views/SignUpView.vue'
import TicketsView from '@/views/TicketsView.vue'
import ChatsView from '@/views/ChatsView.vue'
import TicketView from '@/views/TicketView.vue'

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
      path: '/tickets',
      name: 'tickets',
      component: TicketsView,
      meta: { layout: 'DashboardLayout' },
    },
    {
      path: '/tickets/:id',
      name: 'ticket.show',
      component: TicketView,
      meta: { layout: 'DashboardLayout' },
    },
    {
      path: '/chats',
      name: 'chats',
      component: ChatsView,
      meta: { layout: 'DashboardLayout' },
    },


  ],
})

export default router
