<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useAuthStore } from "./../../stores/AuthStore"
import { useRoute, useRouter } from "vue-router";

const route = useRoute()
const router = useRouter()

const uri = import.meta.env.VITE_API_ENDPOINT_GENERAL;

const usernameInput = ref('');
const passwordInput = ref('');

const authStore = useAuthStore();

const submitForm = async () => {

try {
    const response = await axios.get(`${uri}/login`, {
        auth: {
                username: usernameInput.value,
                password: passwordInput.value
            },
                withCredentials: true
        },
        );
        const data = response.data;
        const userRole = data.roles;

        authStore.userRole = userRole;

        authStore.isAuthenticated = true;
        
        console.log(authStore.isAuthenticated)

        console.log(authStore.userRole)

        redirectToHome()

        } catch (error) {
            console.error(error);
        }
};

function redirectToHome() {
  const redirectPath = route.query.redirect || '/'
  router.push(redirectPath)
}

</script>

<template>
    <section>
        <form @submit.prevent="submitForm">
            <h1>¡Bienvenido a Abocados!</h1>
            <div>
                <div class="input_box">
                <label>Nombre de usuario:</label>
                <input v-model="usernameInput" type="text" placeholder="nombre de usuario" required class="shadow">
            </div>
            <div class="input_box">
                <label>Contraseña:</label>
                <input v-model="passwordInput" type="password" placeholder="contraseña" required class="shadow">
            </div>
            <div class="submit_container">
                <button type="submit" >Enviar</button>
            </div>
            </div>
        </form>
    </section>
</template>

<style lang="scss" scoped>
form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 2rem;
    font-size: 1.3rem;
    padding: 2rem;

    h1 {
        text-align: center;
        font-size: 1.6rem;
        font-weight: 600;
    }

    div {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        gap: 1rem;

        button {
            padding: 1rem 4rem;
            background-color: $button-primary-color;
            border-radius: 10px;
            color: white;
            font-weight: bolder;
            transition: all 200ms ease-in-out;
        }
        button:hover {
            background-color: $button-hover;
        }

        >div {
            align-items: first baseline;
        }


        input {
            width: 20rem;
            padding: 0.5rem;
            border-radius: 10px;
            border: none;
        }
    }
}

@media screen and (min-width: 1000px) {
    section {
        display: flex;
        justify-content: center;
        width: 50%;
        
    }

    form {
        justify-content: center;
    }
}
</style>