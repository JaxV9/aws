<template>
  <div id="app">
    <div class="login-box">
      <h1 class="title">Login</h1>
      <form class="login-form">
        <label for="username">Username or email address</label>
        <input id="username" type="text" />

        <div class="password-row">
          <label for="password">Password</label>
          <a href="#" class="forgot-link">Forgot password?</a>
        </div>
        <input id="password" type="password" />

        <button class="signin-button">Sign in</button>
      </form>

      <div class="divider"></div>

      <div class="signup-box">
        <a href="#">Create an account</a>
      </div>
    </div>
    <footer>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  background-color: #fefefe;
  color: #030303;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
}

.login-box {
  background-color: #f5f5f5;
  padding: 32px;
  border: 1px solid #30363d;
  border-radius: 18px;
  width: 340px;
  text-align: left;
}

.cards {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  margin: auto;
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
  color: #c9d1d9;
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

.passkey-link {
  display: block;
  text-align: center;
  color: #58a6ff;
  text-decoration: none;
  margin-bottom: 12px;
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

footer {
  margin-top: 50px;
  text-align: center;
  font-size: 12px;
}

footer a {
  color: #8b949e;
  margin: 0 8px;
  text-decoration: none;
}
</style>
