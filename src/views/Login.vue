<template>
  <DarkModeLayout>

    <formContainer :title="'login'" :callback="handleLogin">
      <formField :type="'text'" v-model:model="username" :currentPlaceHolder="'Username or email address'" />
      <formField :type="'password'" v-model:model="password" :currentPlaceHolder="'password'" />
      <formSubmitBtn :text="'Sign in'" />
      <div class="divider"></div>

      <div class="signup-box">
        <router-link to="/register">Create an account</router-link>
      </div>
    </formContainer>toto1234

    <!-- <div class="login-box">
      <h1 class="title">Login</h1>
      <form class="login-form">
        <label for="username">Username or email address</label>
        <input id="username" type="text" />

        <div class="password-row">
          <label for="password">Password</label>
        </div>
        <input id="password" type="password" />

        <button class="signin-button">Sign in</button>
      </form>

      <div class="divider"></div>

      <div class="signup-box">
        <router-link to="/register">Create an account</router-link>
      </div>
    </div> -->
  </DarkModeLayout>
</template>

<script>
import DarkModeLayout from '@/layouts/DarkModeLayout.vue';
import { signIn } from 'aws-amplify/auth';
import formContainer from '@/components/form/formContainer.vue';
import formField from '@/components/form/formField/formField.vue';
import formSubmitBtn from '@/components/form/formSubmitBtn/formSubmitBtn.vue';

export default {
  name: 'LoginForm',
  components: { 
    DarkModeLayout,
    formContainer,
    formField,
    formSubmitBtn,
   },
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    async handleLogin() {
      try {
        const { isSignedIn, nextStep } = await signIn({
          username: this.username,
          password: this.password
        });

        console.log("Connexion réussie :", isSignedIn);
        console.log("Étape suivante :", nextStep);

        if(isSignedIn){
          this.$router.push("/dashboard");
        }

      } catch (error) {
        console.error("Erreur de connexion :", error);
        alert("Erreur de connexion : " + error.message);
      }
    }
  }
}
</script>

<style scoped>
.login-box {
  background-color: #ffffff;
  padding: 32px;
  box-shadow: 0 4px 8px rgba(70, 130, 180, 0.3);
  border-radius: 16px;
  width: 340px;
  text-align: left;
  margin-top: 80px;
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

/* Dark mode overrides */
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

body.dark-mode .signup-box a {
  color: #58a6ff;
}
</style>
