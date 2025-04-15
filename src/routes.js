import App from "./App.vue";
import RegisterForm from "./views/RegisterForm.vue";
import UserPage from "./components/UserPage.vue";
import Login from "./views/Login.vue";
import ConfirmSignUp from "./views/ConfirmSignUp.vue";

export const routes = [
    { path: "/", component: App },
    { path: "/register", component: RegisterForm },
    { path: "/login", component: Login},
    { path: "/user", component: UserPage },
    { path: '/confirmsignup', component: ConfirmSignUp}
];
