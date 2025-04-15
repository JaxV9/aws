import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import {routes  } from '../src/routes.js';

// Configuration du routeur
const router = createRouter({
    history: createWebHistory(),
    routes,
});

// Création de l'application Vue
const app = createApp(App);

// Utilisation du routeur
app.use(router);

// Montage de l'application
app.mount('#app');
