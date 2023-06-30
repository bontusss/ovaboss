import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    component: () => import('../layouts/Default.vue'),
    children: [
      {
        path: '/',
        name: 'Index',
        component: () => import('../views/Index.vue')
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/AboutView.vue')
      },
      {
        path: '/more',
        name: 'More',
        component: () => import('../views/OneMore.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory('/'),
  routes
})

export default router
