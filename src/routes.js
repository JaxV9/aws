import RegisterForm from "./views/RegisterForm.vue";
import UserPage from "./components/UserPage.vue";
import Login from "./views/Login.vue";
import ConfirmSignUp from "./views/ConfirmSignUp.vue";
import HomePage from "./views/HomePage.vue";

export const routes = [
    { path: "/", component: HomePage },
    { path: "/register", component: RegisterForm },
    { path: "/login", component: Login},
    { path: "/user", component: UserPage },
    { path: '/confirmsignup', component: ConfirmSignUp}
];
