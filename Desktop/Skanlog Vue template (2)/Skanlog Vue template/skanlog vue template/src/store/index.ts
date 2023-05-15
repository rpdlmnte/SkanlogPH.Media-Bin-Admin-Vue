import api from "@/services/apiService";
import { createStore } from "vuex";
import oidcStore from "./oidc";
import appStoreStore from "./appStore";

const state = () => ({
  loading: false,
  errorLoading: false,
});
const mutations = {};
const actions = {};
const getters = {};

export default createStore({
  strict: process.env.NODE_ENV !== "production",
  state,
  mutations,
  actions,
  getters,
  modules: {
    appStoreStore,
    oidcStore,
  },
});
