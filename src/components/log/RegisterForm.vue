<script setup>
import { ref } from 'vue';
import axios from 'axios';

const uri = import.meta.env.VITE_API_ENDPOINT_GENERAL;

const usernameInput = ref('');
const passwordInput = ref('');
const emailInput = ref('');
const confirmPasswordInput = ref('');

const submitForm = async () => {
    try {
        const response = await axios.post(`${uri}/users/register`, {
            username: usernameInput.value,
            password: passwordInput.value,
            email: emailInput.value,
            confirmPassword: confirmPasswordInput.value
        });

        if (response.status === 200) {
            console.log('El usuario se ha registrado correctamente.');
        } else {
            console.log('Error al registrar el usuario.');
        }
    } catch (error) {
        console.error(error);
    }
};
</script>

<template>
    <form @submit.prevent="submitForm">
        <h1>¿Aún no tienes una cuenta?</h1>
        <div>
            <div class="input_box">
                <label>Correo electrónico:</label>
                <input v-model="emailInput" type="text" placeholder="correo electónico" required class="shadow">
            </div>
            <div class="input_box">
                <label>Tu nombre de usuario:</label>
                <input v-model="usernameInput" type="text" placeholder="nombre de usuario" required class="shadow">
            </div>
            <div class="input_box">
                <label>Contraseña:</label>
                <input v-model="passwordInput" type="password" placeholder="contraseña" required class="shadow">
            </div>
            <div class="input_box">
                <label>Confirmar contraseña:</label>
                <input v-model="confirmPasswordInput" type="password" placeholder="confirmar contraseña" required class="shadow">
            </div>
            <div class="submit_container">
                <button type="submit" >Enviar</button>
            </div>
        </div>
    </form>
</template>

<style lang="scss" scoped>
form {
    background-color: $background-color;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 2rem;
    font-size: 1.3rem;
    padding: 2rem;
    border-radius: 40px 40px 0 0;

    h1 {
        text-align: center;
        font-size: 1.6rem;
        font-weight: 600;
        color: white;
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

        label {
            color: white;
        }

        input {
            width: 20rem;
            padding: 0.5rem;
            border-radius: 10px;
            border: none;
        }
    }
}
</style>