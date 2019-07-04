import App from './App.svelte';

const app = new App({
	target: document.body,
	hydrate: true,
	props: {
		name: 'Zaid Shaikh',
		baseUrl: 'https://zbck.herokuapp.com/'
	}
});

export default app;