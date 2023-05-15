<template>
  <div v-if="oidcIsAuthenticated" class="protected">
    <h1>This route requires authentication</h1>
    <SignedInUser />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import jsonMarkup from "json-markup";
import SignedInUser from "@/components/skanlog/oidc/SignedInUser";

export default defineComponent({
  name: "Protected",
  components: { SignedInUser },
  computed: {
    ...mapGetters("oidcStore", ["oidcIsAuthenticated", "oidcUser"]),
    userDisplay: function () {
      return jsonMarkup(this.oidcUser);
    }
  }
});
</script>
