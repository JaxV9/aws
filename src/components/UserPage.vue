<template>
    <div class="user-page">
      <!-- Header -->
      <div class="header">
      
      
  
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
      <div class="all-user-info">
          <div class="user-info">
              <img src="https://cdn.futura-sciences.com/cdn-cgi/image/width=1920,quality=50,format=auto/sources/images/dossier/773/01-intro-773.jpg" alt="Avatar" class="avatar" />
              <div class="user-text">
                <div class="user-name">Username</div>
                <div class="user-role">LastName Studio</div>
              </div>
            </div>
            <button class="edit-button">✏️ Edit profile</button>
          </div>

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
.all-user-info{
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
      gap:10px;
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
  
  .content {
    background-color: #F4F5F7;
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
  