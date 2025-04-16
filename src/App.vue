<template>
  <router-view />
</template>

<script>
import { useStore } from './store/storeProvider.ts';

export default {
  name: 'App',
  setup() {
    useStore();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body.dark-mode {
  background-color: #000;
  color: #c9d1d9;
}
</style>
