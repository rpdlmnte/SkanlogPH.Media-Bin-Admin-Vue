<template>
  <div></div>
</template>

<script>
import { mapActions } from "vuex";
import { defineComponent } from "vue";

export default defineComponent({
  name: "OidcCallback",
  methods: {
    ...mapActions("oidcStore", ["oidcSignInCallback"]),
  },
  created() {
    this.oidcSignInCallback()
      .then((redirectPath) => {
        console.log("Redirect: ", redirectPath);

        this.$router.push(redirectPath);
      })
      .catch((err) => {
        console.error(err);
        this.$router.push("/signin-oidc-error"); // Handle errors any way you want
      });
  },
});
</script>
