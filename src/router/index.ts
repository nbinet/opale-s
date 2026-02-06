import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Home', component: () => import('../views/Home.vue') },
  { path: '/pro', name: 'Pro', component: () => import('../views/Contact.vue') },
  { path: '/contact', name: 'Contact', component: () => import('../views/Contact.vue') },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router