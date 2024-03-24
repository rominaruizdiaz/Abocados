<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRoute, useRouter } from "vue-router";

const route = useRoute()
const router = useRouter()

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
      <h1>¿Aún no tienes una cuenta?</h1>
      <form @submit.prevent="submitForm">
        <div class="input_box">
          <label>Correo electrónico:</label>
          <input v-model="emailInput" type="text" placeholder="correo electrónico" required class="shadow">
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
          <button type="submit">Enviar</button>
        </div>
      </form>
    </section>
  </template>
  

<style lang="scss" scoped>

section {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: $background-color;
  border-radius: 40px 40px 0 0;
  gap: 2rem;

}

h1 {
    text-align: center;
    font-size: 1.6rem;
    font-weight: 600;
    color: white;
    
}

form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 2rem;
    font-size: 1.3rem;

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

@media screen and (min-width: 1000px) {
  section {
    width: 50%;
    border-radius: 0 0 0 0;

}
    
form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 2rem;
    font-size: 1.3rem;

    div {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }
}

}
</style>