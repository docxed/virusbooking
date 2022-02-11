import { createWebHistory, createRouter } from "vue-router";
import Index from "@/components/index.vue";
import Login from "@/components/login.vue";
import Register from "@/components/register.vue";
import Addbedsforsell from "@/components/addbedsforsell.vue";
import Profile from "@/components/profile.vue";

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
    path: "/addbedsforsell",
    name: "addbedsforsell",
    component: Addbedsforsell,
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
