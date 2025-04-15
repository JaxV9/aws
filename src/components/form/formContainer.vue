<template>
  <div class="formContainer">
    <h2>{{ title }}</h2>
    <form @submit.prevent="handleSubmit">
      <slot></slot>
    </form>
  </div>
</template>

<script>
export default {
  name: "formContainer",
  props: {
    title: {
      type: String,
      required: true
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
    }
  }
};
</script>

<style>
.formContainer {
  /* color: #2e8b57; */
  font-family: Arial, sans-serif;
  box-shadow: 0 4px 8px rgba(70, 130, 180, 0.3);
  background-color: #ffffff;
  padding: 32px;

  border-radius: 16px;
  width: 340px;
}

.formContainer h2 {
  color: #030303;
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

.formContainer button {
  background-color: #238636;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 185px;
  margin: 10px auto 30px auto;
}
</style>