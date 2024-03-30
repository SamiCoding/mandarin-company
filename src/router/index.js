import { createRouter, createWebHistory } from 'vue-router'
import SideNavLayout from '@/layouts/SideNavLayout.vue'

const routes = [
  {
    path: '',
    name: 'homePage',
    component: () => import('@/views/HomePage.vue'),
  },
  {
    path: '/about/:str',
    name: 'aboutPage',
    component: () => import('@/views/AboutPage.vue'),
    meta: {
      layout: SideNavLayout,
    },
  },
  {
    path: '/service/:str',
    name: 'servicePage',
    component: () => import('@/views/ServicePage.vue'),
    meta: {
      layout: SideNavLayout,
    },
  },
  {
    path: '/contact/:str',
    name: 'contactPage',
    component: () => import('@/views/ContactPage.vue'),
    meta: {
      layout: SideNavLayout,
    },
  },
  {
    path: '/404',
    name: '404Page',
    component: () => import('@/views/NotFound.vue'),
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/404',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router