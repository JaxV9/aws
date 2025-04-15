import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';  // Import the Login component
import Register from '../components/RegisterForm.vue';  // Import the Login component

const routes = [
  { path: '/', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;