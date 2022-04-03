import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/index/index.vue'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/javascript/About.vue'),
    children: [
      {
        path: '/about/Test',
        name: 'Test',
        component: () => import('../views/javascript/Test.vue')
      }
    ]
  },
  {
    path: '/Test',
    name: 'test',
    component: () => import(/* webpackChunkName: "about" */ '../views/javascript/Test.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router