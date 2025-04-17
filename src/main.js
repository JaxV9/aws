import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes';
import App from './App.vue';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

Amplify.configure(awsconfig);

createApp(App).use(router).mount('#app');




