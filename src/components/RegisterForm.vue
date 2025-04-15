<template>
    <div class="register">
        <h1>Register</h1>
        <!-- Add your content here  -->

        <form @submit.prevent="handleSubmit">
            <div>
            <input type="text" id="lastname" v-model="lastname" placeholder="lastname" required />
            </div>
            <div>
            <input type="text" id="firstname" v-model="firstname" placeholder="firstname" required />
            </div>
            <!-- <div>
            <input type="tel" id="telephone" v-model="telephone" placeholder="Numéro de téléphone" required />
            </div>
            <div>
            <input type="text" id="adresse" v-model="adresse" placeholder="adresse" required />
            </div> -->
            <div>
            <input type="email" id="email" v-model="email" placeholder="Email" required />
            </div>
            
            <div>
            <input type="password" id="password" v-model="password" placeholder="password" required />
            </div>
          
            <button type="submit">Register</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "RegisterForm", // Nouveau nom du composant
    data() {
        return {
            // Define your component's data here
        };
    },
    methods: {
        // Add your methods here
    },
};
</script>

<style scoped>
.register {
    background-color: white; /* White background */
    color: #2e8b57; /* Light green text */
    font-family: Arial, sans-serif;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(70, 130, 180, 0.3); /* Blue shadow evenly distributed */
    width: 30%;
    margin-left: auto;
    margin-right: auto;
   
}

.register h1 {
    color: #4682b4; /* Light blue text */
    text-align: center;
    margin-bottom: 20px;
}

.register form {
    display: flex;
    flex-direction: column;
    
    gap: 15px;
}

.register label {
    font-weight: bold;
    color: #4682b4; /* Light blue text */
}

.register input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
}

.register button {
    background-color: #2e8b57; /* Light green background */
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    width: 185px;
    margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  margin-bottom: 30px;
}

.register button:hover {
    background-color: #3cb371; /* Slightly darker green on hover */
}
</style>