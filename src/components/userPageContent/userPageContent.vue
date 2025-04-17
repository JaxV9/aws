<template>
    <section :class="{ isDark: store.appIsDark }">
        <div class="title">
            <h1>{{ title }}</h1>
        </div>
        <div class="content">
            <slot></slot>
        </div>
    </section>
</template>

<script>
import { inject } from 'vue';

export default {
    name: "userPageContent",
    setup() {
        const store = inject('store');
        return {
            store
        };
    },
    props: {
        title: String,
        firstName: String,
        lastName: String
    },
    methods: {
    }
};
</script>

<style scoped>
section {
    /* background-color: red; */
    width: 90%;
    height: 95%;
    margin-top: auto;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-rows: 10% 90%;
    gap: 16px;
    color: black;
}

section.isDark {
    color: #c9d1d9;
}

h1 {
  font-size: 28px;
  text-align: start;
}

</style>