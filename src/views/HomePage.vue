<template>
    <DarkModeLayout>
        <section>
            <h1>Home</h1>
        </section>
    </DarkModeLayout>
</template>

<script>
import DarkModeLayout from '@/layouts/DarkModeLayout.vue';


export default {
    name: "HomePage",
    components: {
        DarkModeLayout,
    },
};
</script>

<style>
section {
  margin-left: auto;
  margin-right: auto;
  margin-top: 150px;
}

h1 {
    color: white;
}
</style>