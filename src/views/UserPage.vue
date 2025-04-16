<template>
  <DarkModeLayout>
   <section class="grid-container">
      <div class="user-panel">
        <div class="user-buttons">
          <h3>Menu</h3>
          <button @click="test" class="info-button">👤 Voir mes infos</button>
          <button @click="handleSignOut" class="signout-button">🚪 Déconnexion</button>
        </div>
      </div>

      <div class="user-info">
          <img
            src="https://cdn.futura-sciences.com/cdn-cgi/image/width=1920,quality=50,format=auto/sources/images/dossier/773/01-intro-773.jpg"
            alt="Avatar"
            class="avatar"
          />
          <div>
            <div class="user-name">{{ username }}</div>
            <div class="user-role">ID: {{ userId }}</div>
          </div>
          
          <div class="user-details">
            <div><strong>Username :</strong> {{ username }}</div>
            <div><strong>User ID :</strong> {{ userId }}</div>
          </div>

        </div>
      
    </section>
  </DarkModeLayout>


  
</template>

<script>
import DarkModeLayout from '@/layouts/DarkModeLayout.vue';
//import formContainer from '@/components/form/formContainer.vue';
//import formField from '@/components/form/formField/formField.vue';
//import formSubmitBtn from '@/components/form/formSubmitBtn/formSubmitBtn.vue';
//import formLabel from '@/components/form/formLabel/formLabel.vue';
import { getCurrentUser } from 'aws-amplify/auth';

export default {
  name: 'UserPage',
  components: {
    DarkModeLayout,
    // formContainer,
    // formField,
    // formSubmitBtn,
    // formLabel,
  },
  data() {
    return {
      phone: '',
      adresse: '',
      username: '',
      userId: '',
      signInDetails: null,
    };
  },
  async mounted() {
    await this.loadUser();
  },
  methods: {
    async loadUser() {
      try {
        const { username, userId, signInDetails } = await getCurrentUser();
        this.username = username;
        this.userId = userId;
        this.signInDetails = signInDetails;
      } catch (error) {
        console.error('Erreur récupération user :', error);
      }
    },
    test() {
      console.log(this.username, this.userId, this.signInDetails);
    },
    handleSubmit() {
      console.log('Téléphone :', this.phone);
      console.log('Adresse :', this.adresse);
    },
  },
};
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 220px 1fr;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  margin-top: 0%;
}

.user-panel {
  grid-area: 1 / 1 / 2 / 2;
  background-color: #1f1f1f;
  border-right: 1px solid #2a2a2a;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 2rem;
  box-shadow: 4px 0 10px rgba(0, 0, 0, 0.2);
}

.user-buttons {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: stretch;
}

.user-buttons h3 {
  font-size: 14px;
  color: #aaaaaa;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.user-buttons button {
  padding: 10px 14px;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  font-size: 14px;
  background-color: #292929;
  color: #f4f4f4;
  text-align: left;
  transition: background 0.2s;
  cursor: pointer;
  box-shadow: 4px 4px 10px #141414, -4px -4px 10px #2a2a2a;
}

.user-buttons button:hover {
  background-color: #363636;
}

.info-button {
  background-color: #1e3a8a; 
  color: #fff;
}

.info-button:hover {
  background-color: #2563eb;
}

.signout-button {
  background-color: #7f1d1d; 
  color: #fff;
}

.signout-button:hover {
  background-color: #dc2626;
}

.user-info {
  grid-area: 1 / 2 / 2 / 3;
  padding: 3rem;
  background-color: #1f1f1f;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
}

.avatar {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 2px 6px rgba(255, 255, 255, 0.1);
}

.user-name {
  font-size: 18px;
  font-weight: 600;
  color: #f4f4f4;
}

.user-role {
  font-size: 14px;
  color: #bbbbbb;
}

.user-details {
  margin-top: 1rem;
  font-size: 15px;
  color: #cccccc;
  line-height: 1.6;
  text-align: center;
}

.user-details strong {
  color: #ffffff;
}
</style>