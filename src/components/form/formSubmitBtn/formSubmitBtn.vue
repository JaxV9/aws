<template>
<button type="submit">{{ text }}</button>
</template>
  
  <script>
  
  export default {
    name: "formSubmitBtn",
    props: {
      text : {
        type: String,
        required: true
      },
    }
  };
  </script>
  
  <style></style>