import { createWebHistory, createRouter } from "vue-router";
import Index from "@/components/index.vue";
import Login from "@/components/login.vue";
import Register from "@/components/register.vue";

const routes = [
  {
    path: "/",
    name: "index",
    component: Index,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
