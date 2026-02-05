import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Home', component: () => import('../views/Home.vue') },
  { path: '/page-a', name: 'PageA', component: () => import('../views/PageA.vue') },
  { path: '/page-b', name: 'PageB', component: () => import('../views/PageB.vue') },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router