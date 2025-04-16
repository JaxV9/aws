<template>
  <DarkModeLayout>
    <section>
      <formContainer :title="'Confirm sign up'" :callback="handleConfirmSignUp">
        <formLabel :forInput="'email'" :text="'Email'" />
        <formField :forId="'email'" :type="'email'" v-model:model="email" />

        <formLabel :forInput="'Code'" :text="'Confirmation code'" />
        <formField :forId="'Code'" :type="'text'" v-model:model="code"/>

        <formSubmitBtn :text="'Confirm'" />
      </formContainer>
    </section>
  </DarkModeLayout>
</template>

<script>
import DarkModeLayout from '@/layouts/DarkModeLayout.vue';
import formContainer from '@/components/form/formContainer.vue';
import formField from '@/components/form/formField/formField.vue';
import formSubmitBtn from '@/components/form/formSubmitBtn/formSubmitBtn.vue';
import { confirmSignUp } from 'aws-amplify/auth';
import formLabel from '@/components/form/formLabel/formLabel.vue';


export default {
  name: "ConfirmSignUp",
  components: {
    DarkModeLayout,
    formContainer,
    formField,
    formSubmitBtn,
    formLabel,
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
        if (isSignUpComplete) {
          this.$router.push({ path: "/user" })
        }
      } catch (error) {
        console.error("Erreur lors de l'inscription:", error);
        alert("Erreur lors de l'inscription : " + error.message);
      }
    }
  }
};
</script>

<style scoped>
section {
  margin-left: auto;
  margin-right: auto;
  margin-top: 150px;
}
</style>