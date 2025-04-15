<template>
  <div id="app">
    <router-view />
    <div v-if="user">
      <h2>Welcome, {{ user.username }}</h2>
      <p>Email: {{ user.attributes.email }}</p>
      <p>First Name: {{ user.attributes.given_name }}</p>
      <p>Last Name: {{ user.attributes.family_name }}</p>
    </div>
  </div>
</template>

<script>
import { getCurrentUser } from 'aws-amplify/auth';

export default {
  name: 'App',
  data() {
    return {
      user: null
    };
  },
  async created() {
    try {
      const user = await getCurrentUser();
      this.user = user;
    } catch (error) {
      console.error("Erreur lors de la récupération de l'utilisateur :", error);
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
