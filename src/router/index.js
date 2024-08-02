import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import MainLayouts from "@/layouts/MainLayouts.vue";
import Categories from "@/pages/Categories.vue";
import Message from "@/pages/Message.vue";
import AuthLayout from "@/authLayout/AuthLayout.vue";
import SignIn from "@/pages/SignIn.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: MainLayouts,
      children: [
        {
          path: "",
          name: "home",
          component: Home,
        },
        {
          path: "/categories",
          name: "categories",
          component: Categories,
        },
        {
          path: "/chats",
          name: "chats",
          component: Message,
        },
      ],
    },
    {
      path: "/signIn",
      name: "signIn",
      component: AuthLayout,
      children: [
        {
          path: "",
          name: "singIn",
          component: SignIn,
        },
      ],
    },
  ],
});

export default router;
