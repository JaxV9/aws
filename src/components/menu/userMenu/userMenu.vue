<template>
    <div class="user-panel">
        <h3>Menu</h3>
        <div class="menu-nav-list">
            <router-link to="/user">
                <div v-if="!store.appIsDark" class="menu-nav-element" :class="{ active: isUserRoute }">
                    <div class="icon overview-icon" :class="{ active: isUserRoute }"></div><span>Overview</span>
                </div>
                <div v-if="store.appIsDark" class="menu-nav-element-dark" :class="{ active: isUserRoute }">
                    <div class="icon overview-icon-dark" :class="{ active: isUserRoute }"></div><span>Overview</span>
                </div>
            </router-link>
            <div @click="signOutUser()" v-if="!store.appIsDark" class="menu-nav-element">
                <div class="icon logout-icon"></div><span>Log-out</span>
            </div>
            <div @click="signOutUser()" v-if="store.appIsDark" class="menu-nav-element-dark">
                <div class="icon logout-icon-dark"></div><span>Log-out</span>
            </div>
        </div>
    </div>
</template>

<script>
import { inject } from 'vue';
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import { signOut } from 'aws-amplify/auth';

export default {
    name: "userMenu",
    setup() {
        const route = useRoute();
        const isUserRoute = computed(() => route.path === '/user');

        const store = inject('store');
        return {
            store,
            isUserRoute
        };
    },
    props: {
    },
    methods: {
        async signOutUser() {
            try {
                await signOut();
                window.location.href = '/login';
            } catch (error) {
                console.error('Erreur de déconnexion:', error);
            }
        },
    }
};
</script>

<style scoped>
.user-panel {
    grid-area: 1 / 1 / 2 / 2;
    border-right: 1px solid #e1e1e1;
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 2rem;
}

.menu-nav-list {
    display: grid;
    grid-template-rows: auto;
    gap: 16px;
}

.menu-nav-element,
.menu-nav-element-dark {
    cursor: pointer;
    font-size: 18px;
    color: #969696;
    font-weight: 500;
    display: grid;
    grid-template-columns: 20% 80%;
    width: fit-content;
    margin-left: 28px;
    gap: 8px;
    transition: all ease 0.2s;
}

.menu-nav-element:hover {
    color: black;
    transition: all ease 0.2s;
}

.menu-nav-element:hover .overview-icon {
    background-image: url('@/assets/overviewIcon.svg');
    transition: all ease 0.2s;
}

.menu-nav-element-dark:hover .overview-icon-dark {
    background-image: url('@/assets/overviewIconDark.svg');
    transition: all ease 0.2s;
}

.menu-nav-element:hover .logout-icon {
    background-image: url('@/assets/logoutIcon.svg');
    transition: all ease 0.2s;
}

.menu-nav-element-dark:hover .logout-icon-dark {
    background-image: url('@/assets/logoutIconDark.svg');
    transition: all ease 0.2s;
}

.menu-nav-element.active {
    color: black;
}

.menu-nav-element-dark:hover {
    color: white;
}

.menu-nav-element-dark.active {
    color: white;
}

.icon {
    width: 22px;
    height: 22px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    margin: auto;
    transition: all ease 0.2s;
}


.overview-icon {
    background-image: url('@/assets/overviewIconGrey.svg');
}

.overview-icon.active {
    background-image: url('@/assets/overviewIcon.svg');
}

.overview-icon-dark {
    background-image: url('@/assets/overviewIconGrey.svg');
}

.overview-icon-dark.active {
    background-image: url('@/assets/overviewIconDark.svg');
}

.logout-icon {
    background-image: url('@/assets/logoutIconGrey.svg');
}

.logout-icon-dark {
    background-image: url('@/assets/logoutIconGrey.svg');
}

.logout-icon-dark.active {
    background-image: url('@/assets/logoutIconDark.svg');
}
</style>