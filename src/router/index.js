import { createRouter, createWebHistory } from 'vue-router';
import 'preline';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/register',
      name: 'register',
      meta: { hideHeaderFooter: true },
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/login',
      name: 'login',
      meta: { hideHeaderFooter: true },
      component: () => import('../views/LoginView.vue')
    }
  ]
});

router.afterEach((to, from, failure) => {
  if (!failure) {
    setTimeout(() => {
      window.HSStaticMethods?.autoInit?.();
    }, 100);
  }
});

export default router;
