<template>
  <div>
    <input :type="type" id="lastname" :value="model" @input="$emit('update:model', $event.target.value)"
      :placeholder="currentPlaceHolder" required />
  </div>
</template>

<script>

export default {
  name: "formField",
  props: {
    type: {
      type: String,
      required: true
    },
    model: {
      type: [String, Number],
      required: true
    },
    currentPlaceHolder: {
      type: String,
      required: true
    }
  }
};
</script>

<style></style>