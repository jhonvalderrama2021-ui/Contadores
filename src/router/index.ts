import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DetallesServicio from '../components/detalles_servicio.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/servicios', name: 'servicios', component: DetallesServicio },
  { path: '/servicio/:slug', name: 'detalle', component: DetallesServicio, props: true },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
