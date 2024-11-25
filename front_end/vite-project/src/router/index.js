import { createWebHistory, createRouter } from "vue-router";
export const router = createRouter({
  routes: [
    {
      name: "home",
      path: "/",
      component: () => import("../views/Home.vue"),
    },
    {
      name: "login",
      path: "/login",
      component: () => import("../components/Login.vue"),
    },
    {
      name: "register",
      path: "/register",
      component: () => import("../components/register.vue"),
    },
  ],
  history: createWebHistory(),
});
