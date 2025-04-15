<template>
  <DarkModeLayout>
    <section>
      <formContainer :title="'Register'" :callback="handleSubmit">
        <formLabel :forInput="'lastname'" :text="'Last name'" />
        <formField :forId="'lastname'" :type="'text'" v-model:model="lastname" />

        <formLabel :forInput="'firstname'" :text="'First name'" />
        <formField :forId="'firstname'" :type="'text'" v-model:model="firstname" />

        <formLabel :forInput="'email'" :text="'Email'" />
        <formField :forId="'email'" :type="'email'" v-model:model="email" />

        <formLabel :forInput="'password'" :text="'Password'" />
        <formField :forId="'password'" :type="'password'" v-model:model="password" />

        <formSubmitBtn :text="'Register'" />
      </formContainer>
    </section>
  </DarkModeLayout>
</template>

<script>
import { signUp } from 'aws-amplify/auth';
import formContainer from '@/components/form/formContainer.vue';
import formField from '@/components/form/formField/formField.vue';
import formSubmitBtn from '@/components/form/formSubmitBtn/formSubmitBtn.vue';
import DarkModeLayout from '@/layouts/DarkModeLayout.vue';
import formLabel from '@/components/form/formLabel/formLabel.vue';

export default {
  name: "RegisterForm",
  components: {
    formContainer,
    formField,
    formSubmitBtn,
    DarkModeLayout,
    formLabel
  },
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
        this.$router.push({ path: "confirmsignup" })
      } catch (error) {
        console.error("Erreur lors de l'inscription:", error);
        alert("Erreur lors de l'inscription : " + error.message);
      }
    }
  }
};
</script>

<style>
section {
  margin-left: auto;
  margin-right: auto;
  margin-top: 150px;
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