<template>
  <DarkModeLayout>
    <section>
        <formContainer :callback="() => console.log('hello')">
          <formLabel :forInput="'phone'" :text="'Phone'" />
          <formField :forId="'phone'" :type="'text'" v-model:model="phone" />

          <formLabel :forInput="'adresse'" :text="'Adresse'" />
          <formField :forId="'adresse'" :type="'text'" v-model:model="adresse" />

          <formSubmitBtn :text="'Register'" />
        </formContainer>

        <div class="all-user-info">
          <div class="user-info">
            <img
              src="https://cdn.futura-sciences.com/cdn-cgi/image/width=1920,quality=50,format=auto/sources/images/dossier/773/01-intro-773.jpg"
              alt="Avatar" class="avatar" />
            <div class="user-text">
              <div class="user-name">Username</div>
              <div class="user-role">LastName Studio</div>
            </div>
          </div>
          <button class="edit-button">✏️ Edit profile</button>
        </div>
    </section>
  </DarkModeLayout>
</template>

<script>
import DarkModeLayout from '@/layouts/DarkModeLayout.vue';
import formContainer from '@/components/form/formContainer.vue';
import formField from '@/components/form/formField/formField.vue';
import formSubmitBtn from '@/components/form/formSubmitBtn/formSubmitBtn.vue';
import formLabel from '@/components/form/formLabel/formLabel.vue';

export default {
  name: "UserPage",
  components: {
    DarkModeLayout,
    formContainer,
    formField,
    formSubmitBtn,
    formLabel
  },
  data() {
    return {
      phone: "",
      adresse: "",
    };
  },
  methods: {
    handleSubmit() {
      console.log("Téléphone :", this.telephone);
      console.log("Adresse :", this.adresse);
    },
  },
};
</script>

<style scoped>
section {
  margin: auto;
  display: flex;
  flex-direction: row;
  gap: 16px;
}

.back-link {
  text-decoration: none;
  color: #555;
  margin-bottom: 10px;
  display: block;
}

.all-user-info {
  height: 226px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 250px;
  border: 1px solid black;
  background-color: #F4F5F7;
}

.user-info {
  display: flex;

  padding: 15px;
  align-items: center;
  gap: 10px;
  justify-content: space-around;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.user-text {
  display: flex;
  flex-direction: column;
}

.user-name {
  font-weight: bold;
  font-size: 16px;
}

.user-role {
  font-size: 14px;
  color: #777;
}

.edit-button {
  background-color: #F4F5F7;
  border: 1px solid #ccc;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 4px;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
}

.edit-button:hover {
  background-color: #F4F5F7;
}

.form {
  display: flex;
  flex-direction: column;
}

.form label {
  margin-top: 10px;
  margin-bottom: 5px;
  font-size: 14px;
}

.form input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.submit-button {
  margin-top: 20px;
  padding: 10px;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #1e40af;
}
</style>