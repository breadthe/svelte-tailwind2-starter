import App from './App.svelte';
import global from "../public/global.css";

const app = new App({
    target: document.body,
    props: {
        title: 'Svelte + Tailwind 2'
    }
});

export default app;
