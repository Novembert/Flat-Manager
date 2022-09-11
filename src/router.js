import { createRouter, createWebHistory } from 'vue-router'
import WelcomeScreen from '@/views/WelcomeScreen/WelcomeScreen.vue'
import Bills from '@/views/Bills/Bills.vue'

const routes = [
  {
    path: '/bills',
    name: 'bills',
    component: Bills,
    meta: {
      title: 'Rachunki',
    },
  },
  {
    path: '/cleaning',
    name: 'cleaning',
    component: Bills,
    meta: {
      title: 'Sprzątanie',
    },
  },
  {
    path: '/',
    name: 'welcome',
    component: WelcomeScreen,
    meta: {
      title: 'Start',
    },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Mieszkanie`
  next()
})

export default router
