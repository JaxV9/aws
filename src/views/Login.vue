<template>
  <div id="app">
    <header class="app-header">
      <button @click="toggleDarkMode" class="toggle-mode">
        {{ isDarkMode ? '☀️ Mode Jour' : '🌙 Mode Nuit' }}
      </button>
    </header>

    <div class="login-box">
      <h1 class="title">Login</h1>
      <form class="login-form" @submit.prevent="handleLogin">
        <label for="username">Username or email address</label>
        <input id="username" type="text" v-model="username" required />

        <div class="password-row">
          <label for="password">Password</label>
        </div>
        <input id="password" type="password" v-model="password" required />

        <button type="submit" class="signin-button">Sign in</button>
      </form>

      <div class="divider"></div>

      <div class="signup-box">
        <router-link to="/register">Create an account</router-link>
      </div>
    </div>
    <footer></footer>
  </div>
</template>

<script>
import { signIn } from 'aws-amplify/auth';

export default {
  name: 'LoginForm',
  data() {
    return {
      isDarkMode: false,
      username: '',
      password: ''
    };
  },
  mounted() {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
      this.isDarkMode = true;
      document.body.classList.add('dark-mode');
    }
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      document.body.classList.toggle('dark-mode', this.isDarkMode);
      localStorage.setItem('darkMode', this.isDarkMode);
    },
    async handleLogin() {
      try {
        const { isSignedIn, nextStep } = await signIn({
          username: this.username,
          password: this.password
        });

        console.log("Connexion réussie :", isSignedIn);
        console.log("Étape suivante :", nextStep);

        this.$router.push("/dashboard");

      } catch (error) {
        console.error("Erreur de connexion :", error);
        alert("Erreur de connexion : " + error.message);
      }
    }
  }
};
</script>
