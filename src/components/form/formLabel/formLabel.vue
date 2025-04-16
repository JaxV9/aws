<template>
    <label :for="forInput">{{ text }}</label>
</template>

<script>

export default {
    name: "formLabel",
    props: {
        text: {
            type: String,
            required: true
        },
        forInput: {
            type: String,
            required: true
        }
    }
};
</script>

<style>
label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  text-align: start;
}
</style>