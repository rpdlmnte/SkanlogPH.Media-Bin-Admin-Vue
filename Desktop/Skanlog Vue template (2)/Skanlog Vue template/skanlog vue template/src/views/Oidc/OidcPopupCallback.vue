<template>
	<div></div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';

export default defineComponent({
	name: 'OidcPopupCallback',
	methods: {
		...mapActions('oidcStore', ['oidcSignInPopupCallback']),
	},
	created() {
		this.oidcSignInPopupCallback().catch((err) => {
			console.error(err); // Handle errors any way you want
		});
	},
});
</script>
