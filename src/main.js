// main.js
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import { routes } from './routes';

// Nouveaux imports Amplify v6
import { Amplify } from '@aws-amplify/core';
import awsconfig from './aws-exports';

import { Storage } from '@aws-amplify/storage';


// Configuration avec enregistrement des modules
Amplify.configure(awsconfig, {
  Storage,
});

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app');




