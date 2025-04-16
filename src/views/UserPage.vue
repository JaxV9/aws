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
  padding-top: 2%;
}

.user-panel {
  grid-area: 1 / 1 / 2 / 2;
  border-right: 1px solid #e1e1e1;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 2rem;
}

.user-buttons {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: stretch;
}

.user-buttons h3 {
  font-size: 14px;
  color: #030303;
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
  margin: 0%;
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
}

.user-name {
  font-size: 18px;
  font-weight: 600;
  color: #030303;
}

.user-role {
  font-size: 14px;
  color: #030303;
}

.user-details {
  margin-top: 1rem;
  font-size: 15px;
  color: #030303;
  line-height: 1.6;
  text-align: center;
}

.user-details strong {
  color: #030303;
}


body.dark-mode .grid-container {
  background-color: #0d1117;
  color: #c9d1d9;
}

body.dark-mode .user-panel {
  background-color: #161b22;
  border-right: 1px solid #30363d;
}

body.dark-mode .user-buttons h3 {
  color: #8b949e;
}

body.dark-mode .user-buttons button {
  background-color: #21262d;
  color: #c9d1d9;
}

body.dark-mode .user-buttons button:hover {
  background-color: #30363d;
}

body.dark-mode .info-button {
  background-color: #1e40af;
  color: white;
}

body.dark-mode .info-button:hover {
  background-color: #2563eb;
}

body.dark-mode .signout-button {
  background-color: #7f1d1d;
  color: white;
}

body.dark-mode .signout-button:hover {
  background-color: #dc2626;
}

body.dark-mode .user-info {
  background-color: #161b22;
}

body.dark-mode .user-name,
body.dark-mode .user-role,
body.dark-mode .user-details {
  color: #c9d1d9;
}

body.dark-mode .user-details strong {
  color: #ffffff;
}
</style>