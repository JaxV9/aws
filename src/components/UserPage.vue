<template>
    <div class="user-page">
      <!-- Header -->
      <div class="header">
      
        <div class="user-info">
          <img src="https://cdn.futura-sciences.com/cdn-cgi/image/width=1920,quality=50,format=auto/sources/images/dossier/773/01-intro-773.jpg" alt="Avatar" class="avatar" />
          <div class="user-text">
            <div class="user-name">Username</div>
            <div class="user-role">LastName Studio</div>
          </div>
        </div>
        <button class="edit-button">✏️ Edit profile</button>
      </div>
  
      <!-- Formulaire -->
      <div class="content">
        <form @submit.prevent="handleSubmit" class="form">
          <label for="telephone">Téléphone</label>
          <input
            type="tel"
            id="telephone"
            v-model="telephone"
            placeholder="Numéro de téléphone"
            required
          />
  
          <label for="adresse">Adresse</label>
          <input
            type="text"
            id="adresse"
            v-model="adresse"
            placeholder="Adresse"
            required
          />
  
          <button type="submit" class="submit-button">Enregistrer</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "UserPage",
    data() {
      return {
        telephone: "",
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
  .user-page {
    font-family: Arial, sans-serif;
    background-color: #f9fafb;
    min-height: 100vh;
    padding: 20px;
  }
  
  .header {
    background-color: white;
    padding: 20px;
    border: 1px solid #ddd;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 30px;
  }
  
  .back-link {
    text-decoration: none;
    color: #555;
    margin-bottom: 10px;
    display: block;
  }
  
  .user-info {
    display: flex;
    align-items: center;
    gap: 10px;
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
    background-color: white;
    border: 1px solid #ccc;
    padding: 8px 12px;
    cursor: pointer;
    border-radius: 4px;
  }
  
  .edit-button:hover {
    background-color: #f0f0f0;
  }
  
  .content {
    background-color: white;
    padding: 20px;
    border: 1px solid #ddd;
    max-width: 500px;
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
  