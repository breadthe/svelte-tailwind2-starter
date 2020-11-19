import App from './App.svelte';
import global from "../public/global.css";

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;