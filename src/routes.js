import App from "./App.vue";
import RegisterForm from "./components/RegisterForm.vue";
import UserPage from "./components/UserPage.vue";

export const routes = [
    { path: "/register", component: RegisterForm },
    { path: "/", component: App },
    { path: "/user", component: UserPage }
];
