import { RouteRecordRaw } from "vue-router";
import OidcCallbackError from "@/views/Oidc/OidcCallbackError.vue";

const oidcAuthRoutes: Array<RouteRecordRaw> = [
  {
    path: "/_oidc-callback",
    name: "OidcCallback",
    component: () =>
      import(
        /* webpackChunkName: "bundle.oidc" */ "@/views/Oidc/OidcCallback.vue"
      ),
  },
  {
    path: "/protected",
    name: "Protected",
    component: () =>
      import(/* webpackChunkName: "protected" */ "@/views/Oidc/Protected.vue"),
  },
  {
    path: "/_oidc-callback-error", // Needs to match redirect_uri in you oidcSettings
    name: "OidcCallbackError",
    component: OidcCallbackError,
    meta: {
      isPublic: true,
    },
  },
];

const generalRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "File",
    component: () =>
      import(/* webpackChunkName: "bundle.test" */ "@/views/Admin/File.vue"),
    // meta: {
    //   isPublic: true
    // }
  },
  {
    path: "/",
    name: "App",
    component: () =>
      import(/* webpackChunkName: "bundle.initial" */ "@/views/Admin/App.vue"),
  },
  {
    path: "/",
    name: "AdminUserManagement",
    component: () =>
      import(
        /* webpackChunkName: "bundle.initial" */ "@/views/Admin/AdminUserManagement.vue",
      ),
  },
  {
    path: "/File",
    name: "File.vue",
    component: () =>
      import(/* webpackChunkName: "bundle.test" */ "@/views/Admin/File.vue"),
    // meta: {
    //   isPublic: true
    // }
  },
  {
    path: "/App",
    name: "App.vue",
    component: () =>
      import(/* webpackChunkName: "bundle.initial" */ "@/views/Admin/App.vue"),
  },
  {
    path: "/AdminUserManagement",
    name: "AdminUserManagement.vue",
    component: () =>
      import(
        /* webpackChunkName: "bundle.initial" */ "@/views/Admin/AdminUserManagement.vue",
      ),
  },
  // Catch All 404 page
  { path: "/:pathMatch(.*)*", redirect: "/" },
];
const routes: Array<RouteRecordRaw> = [...oidcAuthRoutes, ...generalRoutes];

export default routes;
