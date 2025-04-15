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
  
  <style>
  body {
    background-color: #F4F5F7;
    color: #030303;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
  }
  
  #app {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 80px;
  }
  
  /* --- HEADER --- */
  .app-header {
    position: fixed;
    top: 0;
    width: 100%;
    height: 60px;
    padding: 0 20px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: #ffffff;
    border-bottom: 1px solid #ddd;
    z-index: 1000;
  }
  
  .toggle-mode {
    padding: 6px 12px;
    background-color: #ddd;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    margin: 1%;
  }
  
  body.dark-mode .app-header {
    background-color: #161b22;
    border-bottom: 1px solid #30363d;
  }
  
  body.dark-mode .toggle-mode {
    background-color: #30363d;
    color: white;
  }
  
  .login-box {
    background-color: #ffffff;
    padding: 32px;
    box-shadow: 0 4px 8px rgba(70, 130, 180, 0.3);
    border-radius: 16px;
    width: 340px;
    text-align: left;
  }
  
  .title {
    text-align: center;
    font-size: 20px;
    margin-bottom: 20px;
  }
  
  .login-form label {
    display: block;
    margin-bottom: 6px;
    font-weight: 600;
  }
  
  .login-form input {
    width: 95%;
    padding: 8px;
    margin-bottom: 16px;
    background-color: #fefefe;
    border: 1px solid #30363d;
    border-radius: 6px;
    color: #030303;
  }
  
  .password-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .forgot-link {
    font-size: 12px;
    color: #58a6ff;
    text-decoration: none;
  }
  
  .signin-button {
    width: 100%;
    background-color: #238636;
    color: white;
    padding: 8px;
    border: none;
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;
  }
  
  .divider {
    height: 1px;
    background-color: #30363d;
    margin: 20px 0;
  }
  
  .signup-box {
    text-align: center;
    font-size: 14px;
  }
  
  .signup-box a {
    color: #58a6ff;
    text-decoration: none;
    margin-left: 4px;
  }
  
  /*footer {
    margin-top: 50px;
    text-align: center;
    font-size: 12px;
  }
  
  footer a {
    color: #8b949e;
    margin: 0 8px;
    text-decoration: none;
  }*/
  
  /* --- Mode Nuit --- */
  body.dark-mode {
    background-color: #0d1117;
    color: #c9d1d9;
  }
  
  body.dark-mode .login-box {
    background-color: #161b22;
    border-color: #30363d;
    box-shadow: none;
  }
  
  body.dark-mode input {
    background-color: #0d1117;
    color: #c9d1d9;
    border: 1px solid #30363d;
  }
  
  body.dark-mode .signin-button {
    background-color: #2ea043;
  }
  
  body.dark-mode .divider {
    background-color: #21262d;
  }
  
  body.dark-mode .forgot-link,
  body.dark-mode .signup-box a {
    color: #58a6ff;
  }
  </style>
