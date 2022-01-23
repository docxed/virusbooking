import { createWebHistory, createRouter } from "vue-router";
import Index from "@/components/index.vue";
import Login from "@/components/login.vue";
import Register from "@/components/register.vue";
import Sellbeds from "@/components/sellbeds.vue";

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
  {
    path: "/sellbeds",
    name: "sellbeds",
    component: Sellbeds,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
