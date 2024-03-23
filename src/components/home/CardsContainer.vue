<script setup>
import Card from './../models/Card.vue';
import { useRecipesStore } from './../../stores/RecipeStore';
import { ref } from 'vue';

const recipesStore = useRecipesStore();
const recipes = ref([]);

const getRecipes = async () => {
    try {
        await recipesStore.allRecipes();
        
        recipes.value = recipesStore.recipes
            .map(recipe => ({
                ...recipe,
                creationDate: new Date(recipe.creationTime)
            }))
            .sort((a, b) => b.creationDate - a.creationDate)
            .slice(0, 5);

    } catch (error) {
        console.error('Hubo un problema al obtener las recetas:', error);
    }
};
getRecipes();
</script>

<template>
    <section>
        <div id="text_container">
            <h2>Últimas recetas</h2>
            <router-link to="/recipes">ver más</router-link>
        </div>
        <div id="card_container">
            <Card :recipe="recipe" v-for="recipe in recipes" :key="recipe.id" />
        </div>
    </section>
</template>

<style lang="scss" scoped>

section {
    padding: 4.5rem 1.5rem 4.5rem 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: hidden;
}
#text_container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
        font-weight: 800;
        transition: all 200ms ease-in-out;
    }
    a:hover {
        color: $button-hover;
        font-weight: 800;
    }
}

#card_container {
    padding: 1rem;
    overflow-x: auto;
    display: flex;
}

@media screen and (min-width: 1400px) {
    #card_container {
        gap: 0 3rem;
        padding: 1rem 0.1rem;
    }
}

</style>