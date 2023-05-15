import store from '@/store';
import axios from 'axios';
import apiConfig from '@/configuration/api';

const api = axios.create({
	baseURL: apiConfig.baseUrl,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
});

api.interceptors.request.use(
	function (config: any) {
		config.headers.common = {
			Authorization: `Bearer ${store.getters['oidcStore/oidcAccessToken']}`,
		};
		return config;
	},
	function (err) {
		return Promise.reject(err);
	}
);

export default api;
