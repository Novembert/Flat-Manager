import { createRouter, createWebHistory } from 'vue-router'
import WelcomeScreen from '@/views/WelcomeScreen/WelcomeScreen.vue'
import DefaultTasksPage from '@/views/DefaultTasksPage/DefaultTasksPage.vue'
import routesData from '@/helpers/_routesData'
import FixesPage from '@/views/FixesPage/FixesPage.vue'
import Login from '@/views/Login/Login.vue'
import { auth } from '@/firebaseInit'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      title: 'Login',
    },
  },
  {
    path: '/bills',
    name: 'bills',
    component: DefaultTasksPage,
    meta: {
      title: 'Bills',
      requiresAuth: true,
    },
    props: routesData.bills,
  },
  {
    path: '/cleanings',
    name: 'cleanings',
    component: DefaultTasksPage,
    meta: {
      title: 'Cleaning',
      requiresAuth: true,
    },
    props: routesData.cleanings,
  },
  {
    path: '/visits',
    name: 'visits',
    component: DefaultTasksPage,
    meta: {
      title: 'Visits',
      requiresAuth: true,
    },
    props: routesData.visits,
  },
  {
    path: '/alerts',
    name: 'alerts',
    component: DefaultTasksPage,
    meta: {
      title: 'Reminders',
      requiresAuth: true,
    },
    props: routesData.alerts,
  },
  {
    path: '/fixes',
    name: 'fixes',
    component: FixesPage,
    meta: {
      title: 'Fixes',
      requiresAuth: true,
    },
    props: routesData.fixes,
  },
  {
    path: '/',
    name: 'welcome',
    component: WelcomeScreen,
    meta: {
      title: 'Start',
      requiresAuth: true,
    },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Flat-management`

  if (to.path === '/login' && auth.currentUser) {
    next('/')
    return
  }

  if (to.matched.some((record) => record.meta.requiresAuth) && !auth.currentUser) {
    next('/login')
    return
  }

  next()
})

export default router
