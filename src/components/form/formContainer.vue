<template>
  <div :class="['formContainer', store.appIsDark ? 'dark' : 'white']">

    <h2 v-if="title">{{ title }}</h2>
    <form @submit.prevent="handleSubmit">
      <slot></slot>
    </form>
  </div>
</template>

<script>
import { inject } from 'vue';

export default {
  name: "formContainer",
  setup() {
    const store = inject('store');
    return {
      store
    };
  },
  props: {
    title: {
      type: String,
    },
    callback: {
      type: Function,
      required: true
    }
  },
  methods: {
    handleSubmit(event) {
      if (this.preventSubmit) {
        event.preventDefault();
      }
      this.callback();
    },
  }
};
</script>

<style>
.dark {
  background-color: #212830;
  color: #ffffff;
}

.white {
  background-color: #ffffff;
  color: #0d1117;
}

.formContainer {
  font-family: Arial, sans-serif;
  box-shadow: 0 4px 8px rgba(70, 130, 180, 0.3);
  padding: 32px;
  border-radius: 16px;
  width: 340px;
  border: 1px solid #767c84;
}

.formContainer h2 {
  text-align: center;
  margin-bottom: 20px;
}

.formContainer form {
  display: flex;
  flex-direction: column;
}

.formContainer input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  width: 95%;
}
</style>