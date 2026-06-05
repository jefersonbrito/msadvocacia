import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/HomePage.vue'),
      meta: { title: 'Início' },
    },
    {
      path: '/sobre',
      name: 'sobre',
      component: () => import('@/pages/SobrePage.vue'),
      meta: { title: 'Sobre' },
    },
    {
      path: '/areas',
      name: 'areas',
      component: () => import('@/pages/AreasPage.vue'),
      meta: { title: 'Áreas de Atuação' },
    },
    {
      path: '/parceiros',
      name: 'parceiros',
      component: () => import('@/pages/ParceirosPage.vue'),
      meta: { title: 'Parceiros' },
    },
    {
      path: '/contato',
      name: 'contato',
      component: () => import('@/pages/ContatoPage.vue'),
      meta: { title: 'Contato' },
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
})

router.afterEach((to) => {
  const base = 'MS Advocacia e Consultoria'
  document.title = to.meta.title ? `${to.meta.title} | ${base}` : base
})

export default router
