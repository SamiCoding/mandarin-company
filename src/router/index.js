import { createRouter, createWebHistory } from 'vue-router'

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
  },
  {
    path: '/service/:str',
    name: 'servicePage',
    component: () => import('@/views/ServicePage.vue'),
  },
  {
    path: '/contact/:str',
    name: 'contactPage',
    component: () => import('@/views/ContactPage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router