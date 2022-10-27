import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/Home.vue')
    },
    {
      path: '/todos',
      name: 'todos',
      component: () => import('@/pages/Todos.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/pages/About.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/pages/Contact.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not_found',
      component: () => import('@/pages/NotFound.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
