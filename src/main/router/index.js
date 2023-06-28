import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '../views/NotFound.vue'
const routes = [
  {
    path: '/:catchAll(.*)',
    name: 'notFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
