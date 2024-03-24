<script setup>
import { useAuthStore } from './../../stores/AuthStore';
import Profile from './../log/Profile.vue';
const authStore = useAuthStore();
</script>

<template>
    <header>

        <div>
            <img src="/images/logotype.svg" alt="abocados logotype">
        </div>
        <div class="navbar">
            <router-link to="/" exact-active-class="active" class="hideOnMobile">Navega</router-link>
            <router-link to="/ingredients" exact-active-class="active" class="hideOnMobile">Ingredientes</router-link>
            <router-link to="/recipes" exact-active-class="active" class="hideOnMobile">Recetas</router-link>
            <router-link to="/collections" exact-active-class="active" class="hideOnMobile">Colecciones</router-link>
            <router-link to="/help" exact-active-class="active" class="hideOnMobile">Ayuda</router-link>
        </div>
        <div class="navbar">
            <router-link to="/login" exact-active-class="active" class="hideOnMobile" v-if="!authStore.isAuthenticated">Iniciar sesión</router-link>
            <Profile v-if="authStore.isAuthenticated"/>
            <li @click="showSidebar" class="showOnMobile">
                <img src="/icons/hamburger-menu.svg" alt="">
			</li>
        </div>
        <div class="sidebar">
				<li @click="hideSidebar">
                    <img src="/icons/cross-icon.svg" alt="close form">
				</li>
                <router-link to="/" exact-active-class="active">Navega</router-link>
                <router-link to="/ingredients" exact-active-class="active">Ingredientes</router-link>
                <router-link to="/recipes" exact-active-class="active">Recetas</router-link>
                <router-link to="/collections" exact-active-class="active">Colecciones</router-link>
                <router-link to="/help" exact-active-class="active">Ayuda</router-link>
                <router-link to="/login" exact-active-class="active">Iniciar sesión</router-link>
		</div>

    </header>
</template>

<style lang="scss" scoped>
header {
    position: relative;
    z-index: 10;
    height: 7rem;
    background-color: $background-color;
    filter: drop-shadow(1px 3px 4px #0000003b);
    display: flex;
    align-items: center;
    justify-content: space-around;
}
div {
    display: flex;
    gap: 2rem;
    align-items: center;
}

a {
    font-size: 1.2rem;
    color: $contrast-font_inactive;
    transition: all 200ms ease-in-out;
}
a:hover, .active{
    color: white;
}

hr {
    transform: rotate(90deg);
    width: 3rem;
    background-color: white;
}

.sidebar {
    position: fixed;
    width: 100vw;
    height: 100vh;
	top: 0;
	right: 0;
	background-color: white;
	box-shadow: -10px 0 10px rgba(0, 0, 0, 0.244);
	display: none;
	flex-direction: column;
	align-items: center;
	padding: 2rem 0;
	gap: 4vh 0;
	display: none;
}
li > img {
    width: 3.5rem;
}
.showOnMobile {
    display: none;
}
@media (max-width: 1220px) {
    .hideOnMobile {
        display: none;
    }
    .showOnMobile {
        display: block;
    }
}
</style>