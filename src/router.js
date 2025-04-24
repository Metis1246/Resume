import { createRouter, createWebHistory } from "vue-router";
import Index from "./views/index.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Index,
  },
  // สามารถเพิ่ม routes อื่นๆ ตรงนี้
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
