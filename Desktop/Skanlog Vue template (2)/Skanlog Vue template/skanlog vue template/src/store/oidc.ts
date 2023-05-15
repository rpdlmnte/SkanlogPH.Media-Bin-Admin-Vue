import { vuexOidcCreateStoreModule } from 'vuex-oidc';
import { oidcSettings } from '@/configuration/oidc';

const store = vuexOidcCreateStoreModule(
	oidcSettings,
	// NOTE: If you do not want to use localStorage for tokens, in stead of just passing oidcSettings, you can
	// spread your oidcSettings and define a userStore of your choice
	// {
	//   ...oidcSettings,
	//   userStore: new WebStorageStateStore({ store: window.sessionStorage })
	// },
	// Optional OIDC store settings
	{
		namespaced: true,
		dispatchEventsOnWindow: true,
	},
	// Optional OIDC event listeners
	{
		// userLoaded: user => console.log("OIDC user is loaded:", user),
		userLoaded: (user) => {
			console.log('OIDC user is loaded:', user);
		},
		userUnloaded: () => {
			console.log('OIDC user is unloaded');
		},
		accessTokenExpiring: () => console.log('Access token will expire'),
		accessTokenExpired: () => {
			console.log('Access token did expire');
		},
		silentRenewError: () => console.log('OIDC user is unloaded'),
		userSignedOut: () => {
			console.log('User has been signed out');
		},
		oidcError: (payload) => {
			console.log('OIDC error', payload);
			// localStorage.setItem("accessToken", null);
		},
		automaticSilentRenewError: (payload) =>
			console.log('OIDC automaticSilentRenewError', payload),
	}
);

export default store;
