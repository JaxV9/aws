<template>
  <DarkModeLayout>
    <formContainer :title="'confirm Sign up'" :callback="handleConfirmSignUp">
      <formField :type="'email'" v-model:model="email" :currentPlaceHolder="'Email'" />
      <formField :type="'text'" v-model:model="code" :currentPlaceHolder="'Code'" />
      <formSubmitBtn :text="'Register'" />
    </formContainer>
  </DarkModeLayout>
</template>

<script>
import DarkModeLayout from '@/layouts/DarkModeLayout.vue';
import formContainer from '@/components/form/formContainer.vue';
import formField from '@/components/form/formField/formField.vue';
import formSubmitBtn from '@/components/form/formSubmitBtn/formSubmitBtn.vue';
import { confirmSignUp } from 'aws-amplify/auth';


export default {
  name: "ConfirmSignUp",
  components: {
    DarkModeLayout,
    formContainer,
    formField,
    formSubmitBtn,
  },
  data() {
    return {
      isDarkMode: false,
      email: '',
      code: '',
    };
  },
  methods: {
    async handleConfirmSignUp() {
      try {
        const { isSignUpComplete, nextStep } = await confirmSignUp({
          username: this.email,
          confirmationCode: this.code,
          options: {
            autoSignIn: true
          }
        });

        console.log("Sign-up success! User ID:", isSignUpComplete);
        console.log("Next step:", nextStep);
        if(isSignUpComplete){
          this.$router.push({ path: "/dashboard" })
        }
      } catch (error) {
        console.error("Erreur lors de l'inscription:", error);
        alert("Erreur lors de l'inscription : " + error.message);
      }
    }
  }
};
</script>

<style></style>