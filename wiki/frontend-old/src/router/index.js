import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Signup from "@/views/Signup.vue";
import Signin from "@/views/Signin.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
