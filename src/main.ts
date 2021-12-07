import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
// import Vue from 'vue'

//imposters hand book
import './assets/style.css'
const router = createRouter({
	routes: [
		{ path: '/Home', component: Home},
		{ path: '/About', component: About },
	],
	history: createWebHistory()
});

const app = createApp(App);

// Tell the application to use the router.
app.use(router);

app.mount('#app');