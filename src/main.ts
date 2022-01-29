import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue'
import Home from './pages/Home.vue'
import Doctors from './pages/Doctors.vue'
import Contact from './pages/Contact.vue'
import Login from './pages/Login.vue'
import Doctorform from './pages/Doctorform.vue'
// import Vue from 'vue'

//imposters hand book
import './assets/style.css'
const router = createRouter({
	routes: [
		{ path: '/Home', component: Home},
		{ path: '/Doctors', component: Doctors },
		{ path: '/Contact', component: Contact },
		{ path: '/Login', component: Login },
		{ path: '/Doctorform', component: Doctorform },
	],
	history: createWebHistory()
});

const app = createApp(App);

// Tell the application to use the router.
app.use(router);

app.mount('#app');