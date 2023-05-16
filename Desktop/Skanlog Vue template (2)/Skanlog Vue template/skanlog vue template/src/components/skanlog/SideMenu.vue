<template>
  <!-- <div>
      <el-icon v-if="isCollapse" @click="isCollapse = false">
        <More />
      </el-icon>
      <el-icon v-else @click="isCollapse = true">
        <ArrowLeftBold />
      </el-icon>
    </div> -->
  <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button :label="false">expand</el-radio-button>
      <el-radio-button :label="true">collapse</el-radio-button>
    </el-radio-group> -->
  <el-menu
    class="sideMenu"
    :collapse="isCollapse"
    active-text-color="#409EFF"
    :default-active="activeLink"
    text-color="#909399"
    background-color="#FFFFFF"
    :router="true"
  >
    <!-- <el-image
			style="height: 20px"
			src="@/assets/Images/logo.png"
			:fit="fitType"
			v-if="!isCollapse"
		/> -->
    <img
      alt="Skanlog logo"
      id="skanlogLogo"
      src="@/assets/Images/SkanlogLogoHD.png"
    />

    <router-link to="/File">
      <el-menu-item index="/File">
        <el-icon><Files /></el-icon>
        <span>Files</span>
      </el-menu-item>
    </router-link>

    <router-link to="/App">
      <el-menu-item index="/App">
        <el-icon><Menu /></el-icon>
        <span>App</span>
      </el-menu-item>
    </router-link>

    <router-link to="/AdminUserManagement">
      <el-menu-item index="/AdminUserManagement">
        <el-icon><User /></el-icon>
        <span>User</span>
      </el-menu-item>
    </router-link>
  </el-menu>
</template>

<script>
import { defineComponent, ref } from "vue";
import { Menu, Files, User } from "@element-plus/icons";

export default defineComponent({
  name: "SideMenu",
  components: {
    Menu,
    Files,
    User,
  },
  mounted() {
    this.activeLink = this.$route.path;
    this.baseUrl = window.location.origin;
  },
  watch: {
    $route(newVal) {
      this.activeLink = newVal.path;
    },
  },
  data() {
    return {
      activeLink: "",
      baseUrl: "",
      // logoUrl: 'https://i.ibb.co/4Y8FLqB/Skanlog-Logo-HD.png',
      logoUrl: "@/assets/Images/logo.png",
      fitType: "scale-down",
    };
  },
  setup() {
    const isCollapse = ref(false);

    return { isCollapse };
  },
});
</script>
<style lang="scss" scoped>
.sideMenu {
  height: 98vh;
  background-color: #ffffff;
  border-width: 0 0 0 0;
  border-style: solid;
  box-shadow: 0 0 2rem 0 rgb(136 152 170 / 15%);
}
#skanlogLogo {
  max-height: 20px;
  margin-top: 1em;
}

.sideBarHeader {
  align-items: center;
  justify-content: space-around;
  min-width: 4em;
}

a {
  color: inherit;
  text-decoration: none !important;
}
// .el-menu-vertical-demo:not(.el-menu--collapse) {
//   width: 200px;
// }
</style>
