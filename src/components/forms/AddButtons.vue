<script setup>
import AddIngredient from "./AddIngredient.vue";
import AddRecipe from "./AddRecipe.vue";
import { ref } from 'vue';

let showIngredientForm = ref(false);
let showRecipeForm = ref(false);

const openIngredientForm = () => {
    showIngredientForm.value = true;
    showRecipeForm.value = false;
};

const openRecipeForm = () => {
    showRecipeForm.value = true;
    showIngredientForm.value = false;
};

const closeForm = () => {
    showIngredientForm.value = false;
    showRecipeForm.value = false;
};

</script>

<template>
    <div>
        <button @click="openIngredientForm()">
            Añadir nuevo ingrediente
        </button>
    
        <button @click="openRecipeForm()">
            Añadir nueva receta
        </button>
    
        <AddIngredient v-if="showIngredientForm" @close="closeForm"/>
        <AddRecipe v-if="showRecipeForm" @close="closeForm"/>
    </div>

</template>

<style lang="scss" scoped>

    div {
        display: flex;
        gap: 2rem;
    }
    button {
        padding: 1rem;
        height: 4rem;
        background-color: $button-primary-color;
        border-radius: 10px;
        padding: 1rem;
        color: white;
        font-weight: bolder;
        transition: all 200ms ease-in-out;
    }
    button:hover {
        filter: drop-shadow(0px 0px 10px $button-hover-shadow);

    }
</style>