import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsView
      // component: () => import('../views/ProductsView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/AboutView.vue'),
    },
    {
      path: '/form',
      name: 'formulario',
      component: () => import('@/views/FormView.vue'),
    },
    {
      path: '/form-produtos',
      name: 'formulario-produtos',
      component: () => import('@/views/FormProdutosView.vue'),
    },
    {
      path: '/form-create-produtos',
      name: 'formulario-create-produtos',
      component: () => import('@/views/CreateProdutosView.vue'),
    },
    {
      path: '/slots',
      name: 'slots',
      component: () => import('@/views/SlotsView.vue')
    },
    {
      path: "/livros",
      name: "livros",
      component: () => import('@/views/LivrosView.vue')
    }
  ],
})

export default router
