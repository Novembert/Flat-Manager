import { createRouter, createWebHistory } from 'vue-router'
import WelcomeScreen from '@/views/WelcomeScreen/WelcomeScreen.vue'
import DefaultTasksPage from '@/views/DefaultTasksPage/DefaultTasksPage.vue'
import routesData from '@/helpers/_routesData'

const routes = [
  {
    path: '/bills',
    name: 'bills',
    component: DefaultTasksPage,
    meta: {
      title: 'Rachunki',
    },
    props: routesData.bills,
  },
  {
    path: '/cleanings',
    name: 'cleanings',
    component: DefaultTasksPage,
    meta: {
      title: 'Sprzątanie',
    },
    props: routesData.cleanings,
  },
  {
    path: '/visits',
    name: 'visits',
    component: DefaultTasksPage,
    meta: {
      title: 'Wizyty',
    },
    props: routesData.visits,
  },
  {
    path: '/alerts',
    name: 'alerts',
    component: DefaultTasksPage,
    meta: {
      title: 'Przypomnienia',
    },
    props: routesData.alerts,
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
