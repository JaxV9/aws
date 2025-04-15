import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Register from '../views/RegisterForm.vue';
import ConfirmSignUp from '../views/ConfirmSignUp.vue';
import App from '../views/App.vue'


const routes = [
  { path: '/', name: 'App', component: App },
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
  { path: '/confirmsignup', name: 'ConfirmSignUp', component: ConfirmSignUp }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;