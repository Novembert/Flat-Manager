import { createRouter, createWebHistory  } from "vue-router";
import WelcomeScreen from '@/views/WelcomeScreen/WelcomeScreen.vue'

const routes = [
  {
    path: "/",
    name: "welcome",
    component: WelcomeScreen,
    meta: {
      title: "Welcome",
    },
  },
  // {
  //   path: "/blogs",
  //   name: "blogs",
  //   component: BlogsView,
  //   meta: {
  //     title: "Blogs",
  //   },
  // },
  // {
  //   path: "/login",
  //   name: "login",
  //   component: LoginView,
  //   meta: {
  //     title: "Login",
  //   },
  // },
  // {
  //   path: "/register",
  //   name: "register",
  //   component: RegisterView,
  //   meta: {
  //     title: "Register",
  //   },
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Mieszkanie`;
  next();
});

export default router;