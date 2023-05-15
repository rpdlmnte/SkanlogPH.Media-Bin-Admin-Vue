import api from "@/services/apiService";
import appId from "@/configuration/appStore";

const store = {
  namespaced: true,
  state: {
    userId: "",
    appStatus: {
      isGranted: false,
    },
  },
  actions: {
    appStoreConnectAction({ commit }: any, user: string) {
      const userId = user.sub;

      console.log(`User: `, userId);
      console.log(`App ID: `, appId);
      api
        .post(
          `http://appstore.siweb01.vm.aws.cloud.skanlog.com/api/CheckUserAppStatus/${appId}/${userId}`,
        )
        .then((response) => {
          const data = response.data;

          commit("SET_APP_STATUS", data);
        });
    },
  },
  mutations: {
    SET_APP_STATUS(state: any, payload: any) {
      state.appStatus = payload;
    },
  },
  getters: {
    returnAppStatus(state: any) {
      return state.appStatus;
    },
  },
};

export default store;
