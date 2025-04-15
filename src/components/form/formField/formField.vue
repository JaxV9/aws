<template>
  <div>
    <input :type="type" :id="forId" :value="model" @input="$emit('update:model', $event.target.value)"
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
    },
    forId: {
      type: String,
      required: true
    }
  }
};
</script>

<style>
div {
  margin-bottom: 16px;
}
</style>