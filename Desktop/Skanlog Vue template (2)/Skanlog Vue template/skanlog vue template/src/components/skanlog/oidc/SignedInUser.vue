<template>
	<div v-if="oidcIsAuthenticated">
		<p>You are signed in as:</p>
		<div
			style="width: 100%; max-width: 640px; height: 200px; margin: 0 auto"
			v-html="userDisplay"
		></div>
		<p>Id token</p>
		<p>expires {{ new Date(oidcIdTokenExp).toISOString() }}</p>
		<textarea
			readonly
			style="width: 100%; max-width: 640px; height: 200px; margin: 0 auto"
			v-model="oidcIdToken"
		></textarea>

		<p>
			<button @click="reauthenticate">Reauthenticate silently</button>
		</p>
	</div>
	<p v-else-if="oidcAuthenticationIsChecked">You are not signed in</p>
	<p v-else>Silent renew is in progress...</p>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters, mapActions } from 'vuex';
import jsonMarkup from 'json-markup';

export default defineComponent({
	name: 'SignedInUser',
	computed: {
		...mapGetters('oidcStore', [
			'oidcIsAuthenticated',
			'oidcAuthenticationIsChecked',
			'oidcUser',
			'oidcIdToken',
			'oidcIdTokenExp',
		]),
		userDisplay: function () {
			return jsonMarkup(this.oidcUser);
		},
	},
	methods: {
		...mapActions('oidcStore', ['authenticateOidcSilent', 'removeOidcUser']),
		reauthenticate() {
			this.authenticateOidcSilent().catch(() => this.removeOidcUser());
		},
	},
});
</script>

<style>
.json-markup {
	color: transparent;
}
.json-markup span {
	color: black;
	float: left;
}
.json-markup .json-markup-key {
	clear: left;
}
</style>
