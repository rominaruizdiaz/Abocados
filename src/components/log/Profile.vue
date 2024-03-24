<script setup>
import axios from 'axios';
import { useAuthStore } from '../../stores/AuthStore';

const authStore = useAuthStore();

const userLogout = async () => {
    try {
        await axios.post('http://localhost:8080/api/v1/logout', {}, { withCredentials: true });
        authStore.userRole = '';
        authStore.username = '';
        authStore.isAuthenticated = false;
    } catch (error) {
        console.error('Ha ocurrido un error durante el logout: ', error);
    }
};

</script>

<template>
<div>
    <div>
        <img src="/images/fruits-halloween.jpeg" alt="">
        <router-link to="/profile">{{ authStore.username }}</router-link>
    </div>
    <hr>
    <button @click="userLogout">Cerrar sesión</button>
</div>
</template>

<style lang="scss" scoped>
div {
    display: flex;
    gap: 1rem;
    padding: 1rem;
    border-radius: 10px;

    > div {
        align-items: center;
        gap: 0.5rem;
    }
}
img {
    width: 3rem;
    height: 3rem;
    border-radius: 100%;
    border: 1px solid black;
}
hr {
    width: 3rem;
    transform: rotate(90deg);
}
a {
    font-weight: bolder;
}
</style>