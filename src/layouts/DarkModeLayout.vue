<template>
    <div id="layout">
        <header>
            <div class="nav-left">
                <router-link to="/">Accueil</router-link>
            </div>

            <div class="nav-right">
                <router-link to="/">Login</router-link>
                <router-link to="/register">Register</router-link>
            </div>
        </header>
  
      <main class="main-content">
        <slot></slot>
      </main>
  
      <button @click="toggleDarkMode" class="toggle-mode">
        {{ isDarkMode ? '☀️' : '🌙' }}
      </button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DarkModeLayout',
    data() {
      return {
        isDarkMode: false
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
      }
    }
  };
  </script>
  
  <style>
  body {
    background-color: #fefefe;
    color: #030303;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
  }
  
  header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  border-bottom: 1px solid #ddd;
  z-index: 1000;
}

.nav-left,
.nav-right {
  display: flex;
  gap: 28px;
}

.nav-left {
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  padding-left: 28px;
}

.nav-right {
  margin-left: auto;
  margin-top: auto;
  margin-bottom: auto;
  padding-right: 28px;
}

.nav-left a,
.nav-right a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  font-size: 16px;
  transition: color 0.3s ease;
}

.nav-left a:hover,
.nav-right a:hover {
  color: #238636;
}
  
  .toggle-mode {
    position: fixed;
  bottom: 20px;
  right: 20px;
  width: 48px;
  height: 48px;
  font-size: 20px;
  background-color: #ddd;
  color: #000;
  border: none;
  border-radius: 100%;
  cursor: pointer;
  z-index: 1001;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  transition: background-color 0.3s ease, transform 0.2s ease;
}
  
  body.dark-mode header {
    background-color: #161b22;
    border-bottom: 1px solid #30363d;
  }
  
  body.dark-mode .toggle-mode {
    background-color: #30363d;
    color: white;
  }

  body.dark-mode header {
  background-color: #161b22;
  border-bottom: 1px solid #30363d;
}

body.dark-mode .nav-left a,
body.dark-mode .nav-right a {
  color: #c9d1d9;
}

body.dark-mode .nav-left a:hover,
body.dark-mode .nav-right a:hover {
  color: #58a6ff;
}
  
  .main-content {
    margin-top: 80px;
    height: 100vh;
    display: flex;
  }
  </style>