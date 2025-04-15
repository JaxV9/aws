<template>
  <router-view />
</template>

<script>
export default {
  name: 'App',

  mounted() {
    // redirection automatique vers /login
    this.$router.push('/login');
  }
}
</script>

<style>
/* styles globaux si nécessaire */
</style>