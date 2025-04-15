<template>
    <DarkModeLayout>
        <section :class="store.appIsDark ? 'dark' : 'white'">
            <h1>Home</h1>
        </section>
    </DarkModeLayout>
</template>

<script>
import DarkModeLayout from '@/layouts/DarkModeLayout.vue';
import { inject } from 'vue';

export default {
    name: "HomePage",
    components: {
        DarkModeLayout,
    },
    setup() {
    const store = inject('store');
    return {
      store
    };
  },
};
</script>

<style>
section {
  margin-left: auto;
  margin-right: auto;
  margin-top: 150px;
}

.dark {
  color: #ffffff;
}

.white {
  color: #0d1117;
}
</style>