import { createRouter, createWebHashHistory } from 'vue-router'
// import Index from 
const routes = [
  {
    path: '/',
    component: () => import('../layouts/Default.vue'),
    children: [
      {
        path: '/',
        name: 'Index',
        component: () => import('../views/IndexView.vue')
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/AboutView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
