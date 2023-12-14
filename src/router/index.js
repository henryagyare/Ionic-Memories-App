import { createRouter, createWebHistory } from '@ionic/vue-router';
import memoriesPage from "../pages/memoriesPage.vue";


const routes = [
  {
    path: '/',
    redirect: '/memories'
  },
  {
    path: "/memories",
    component: memoriesPage
  }, 
  {
    path: "/memories/add",
    component: () => import("../pages/addMemoryPage.vue")
  },
  {
    path: "/memories/:id",
    component: () => import("../pages/memoryDetailPage.vue")
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
