<template>
  <el-container>
    <SideMenu class="sideMenu" />
    <el-container>
      <el-header>
        <el-menu
          mode="horizontal"
          text-color="#303133"
          active-text-color="#000000"
          background-color="Transparent"
        >
          <template v-if="oidcIsAuthenticated">
            <el-sub-menu index="1">
              <template #title>
                <el-icon><User /></el-icon>
                Hi! {{ this.oidcUser.name }}
              </template>
              <el-menu-item index="2">
                <el-icon><Key /></el-icon>
                <p>Change Password</p>
              </el-menu-item>
              <el-menu-item index="3" @click="signOutOidc">
                <el-icon><SwitchButton /></el-icon>
                Logout
              </el-menu-item>
            </el-sub-menu>
          </template>
          <template v-else>
            <el-menu-item
              index="1"
              @click="this.$router.push({ path: '/protected' })"
            >
              <el-icon><SwitchButton /></el-icon>
              Log In
            </el-menu-item>
          </template>
          <!-- <img
            id="skanlogLogo"
            alt="Skanlog logo"
            src="@/assets/Images/SkanlogLogoHD.png"
            v-if="!appStatus.isGranted"
          /> -->
        </el-menu>
      </el-header>
      <el-main class="main">
        <router-view />
      </el-main>
      <!-- <div id="notGranted" v-else>
        {{ appStatus.message }}
      </div> -->
    </el-container>
  </el-container>
</template>

<script>
import SideMenu from "@/components/skanlog/SideMenu.vue";
import { Key, SwitchButton, User } from "@element-plus/icons";
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";

export default defineComponent({
  components: { SideMenu, User, SwitchButton, Key },
  data() {
    return {
      logoUrl: "https://i.ibb.co/4Y8FLqB/Skanlog-Logo-HD.png",
      fitType: "scale-down",
    };
  },
  methods: {
    ...mapActions("oidcStore", ["signOutOidc"]),
    userLoaded() {
      // this.$store.dispatch(
      //   "appStoreStore/appStoreConnectAction",
      //   this.oidcUser,
      // );
    },
  },
  computed: {
    ...mapGetters("oidcStore", [
      "oidcIsAuthenticated",
      "oidcAuthenticationIsChecked",
      "oidcUser",
      "oidcIdToken",
      "oidcIdTokenExp",
    ]),
    ...mapGetters({ appStatus: "appStoreStore/returnAppStatus" }),
  },
  mounted() {
    window.addEventListener("vuexoidc:userLoaded", this.userLoaded);
  },
});
</script>

<style lang="scss">
@font-face {
  font-family: "OpenSans";
  font-style: normal;
  font-weight: 400;
  src: url("./assets/Fonts/open-sans-v27-latin-regular.eot"); /* IE9 Compat Modes */
  src: local(""),
    url("./assets/Fonts/open-sans-v27-latin-regular.eot?#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */ url("./assets/Fonts/open-sans-v27-latin-regular.woff2")
      format("woff2"),
    /* Super Modern Browsers */
      url("./assets/Fonts/open-sans-v27-latin-regular.woff") format("woff"),
    /* Modern Browsers */ url("./assets/Fonts/open-sans-v27-latin-regular.ttf")
      format("truetype"),
    /* Safari, Android, iOS */
      url("./assets/Fonts/open-sans-v27-latin-regular.svg#OpenSans")
      format("svg"); /* Legacy iOS */
}

#app {
  font-family: OpenSans;
  text-align: center;
  background-color: #fdf9f8 !important;
  height: calc(100vh - 16px);
  font-size: inherit;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: antialiased;
}
#skanlogLogo {
  max-height: 20px;
  margin: 1em;
}

#notGranted {
  font-size: 1rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
}

button,
input,
select,
textarea,
text,
li,
p {
  font-family: OpenSans;
  font-size: inherit;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: antialiased;
}

.el-menu {
  justify-content: flex-end;
  align-content: flex-start;
  align-items: center;
}

.el-menu--horizontal {
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
}
.sideMenu {
  height: auto;
}

.main {
  overflow: hidden;
}
</style>
