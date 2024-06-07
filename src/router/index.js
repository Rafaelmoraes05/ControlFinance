import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '../pages/home/PageHome.vue'
import PageLogin from '@/pages/login/PageLogin.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PageHome
    },
    {
      path: '/login',
      name: 'login',
      component: PageLogin
    }
  ]
})

export default router
