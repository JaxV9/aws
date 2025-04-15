<template>
    <div id="app">
      <header class="app-header">
        <button @click="toggleDarkMode" class="toggle-mode">
          {{ isDarkMode ? '☀️ Mode Jour' : '🌙 Mode Nuit' }}
        </button>
      </header>
  
      <div class="register">
        <h1>Register</h1>
  
        <form @submit.prevent="handleSubmit">
          <div>
            <input type="text" id="lastname" v-model="lastname" placeholder="Lastname" required />
          </div>
          <div>
            <input type="text" id="firstname" v-model="firstname" placeholder="Firstname" required />
          </div>
          <div>
            <input type="email" id="email" v-model="email" placeholder="Email" required />
          </div>
          <div>
            <input type="password" id="password" v-model="password" placeholder="Password" required />
          </div>
  
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { signUp } from 'aws-amplify/auth';

  export default {
    name: "RegisterForm",
    data() {
      return {
        isDarkMode: false,
        lastname: '',
        firstname: '',
        email: '',
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
      async handleSubmit() {
  try {
    const { userId, nextStep } = await signUp({
      username: this.email,
      password: this.password,
      options: {
        userAttributes: {
          email: this.email,
          name: this.firstname,
          family_name: this.lastname
        },
        autoSignIn: true
      }
    });

    console.log("Sign-up success! User ID:", userId);
    console.log("Next step:", nextStep);
  } catch (error) {
    console.error("Erreur lors de l'inscription:", error);
    alert("Erreur lors de l'inscription : " + error.message);
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
  
  /* --- REGISTER STYLE --- */
  .register {
    color: #2e8b57;
    font-family: Arial, sans-serif;
    box-shadow: 0 4px 8px rgba(70, 130, 180, 0.3);
    background-color: #ffffff;
    padding: 32px;
    
    border-radius: 16px;
    width: 340px;
  }
  
  .register h1 {
    color: #030303;
    text-align: center;
    margin-bottom: 20px;
  }
  
  .register form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  .register input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
    width: 95%;
  }
  
  .register button {
    background-color: #238636;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    width: 185px;
    margin: 10px auto 30px auto;
  }
  
  /* --- DARK MODE --- */
  body.dark-mode {
    background-color: #0d1117;
    color: #c9d1d9;
  }
  
  body.dark-mode .register {
    background-color: #161b22;
    color: #c9d1d9;
    box-shadow: none;
  }
  
  body.dark-mode .register h1 {
    color: #58a6ff;
  }
  
  body.dark-mode .register input {
    background-color: #0d1117;
    color: #c9d1d9;
    border: 1px solid #30363d;
  }
  
  body.dark-mode .register button {
    background-color: #2ea043;
  }
  
  body.dark-mode .register button:hover {
    background-color: #3cb371;
  }
  </style>