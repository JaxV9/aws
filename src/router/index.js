import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';  // Import the Login component
import Register from '../components/RegisterForm.vue';
import UserPage from "../components/UserPage.vue";
import App from "../App.vue";

const routes = [
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
  { path: '/user', name: 'UserPage', component: UserPage },
  { path: '/', name: 'App', component: App },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;