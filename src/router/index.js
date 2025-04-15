import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';  // Import the Login component

const routes = [
  { path: '/login', name: 'Login', component: Login },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;