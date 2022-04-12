import MainPage from "@/pages/MainPage";
import PostPage from "@/pages/PostPage";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: PostPage,
  },
  {
    path: "/store",
    component: MainPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
