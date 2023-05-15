import { createRouter, createWebHistory } from "vue-router";

import store from "@/store";
import { vuexOidcCreateRouterMiddleware } from "vuex-oidc";
import routes from "./routes";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

router.beforeEach(vuexOidcCreateRouterMiddleware(store, "oidcStore"));

export default router;
