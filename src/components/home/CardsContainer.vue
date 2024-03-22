<script setup>
import Card from './../models/Card.vue';
import { useRecipesStore } from './../../stores/RecipeStore';
import { ref } from 'vue'

const recipesStore = useRecipesStore();
const recipes = ref([]);

const getRecipes = async () => {
    try {
        await recipesStore.allRecipes();
        recipes.value = recipesStore.recipes;
    } catch (error) {
        console.error('Hubo un problema al obtener las recetas:', error);
    }
};
getRecipes();

</script>

<template>
    <div>
        <Card :recipe="recipe" v-for="recipe in recipes" :key="recipe.id" />
    </div>
</template>

<style lang="scss" scoped>

</style>