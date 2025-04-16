<template>
  <button type="submit">{{ text }}</button>
</template>

<script>

export default {
  name: "formSubmitBtn",
  props: {
    text: {
      type: String,
      required: true
    },
  }
};
</script>

<style>
button {
  background-color: #238636;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 185px;
  margin: 28px auto;
}

</style>