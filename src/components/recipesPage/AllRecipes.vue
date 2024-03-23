<script setup>
import Card from './../models/Card.vue';
import { useRecipesStore } from './../../stores/RecipeStore';
import { ref, computed } from 'vue';

const recipesStore = useRecipesStore();
const recipes = ref([]);
const currentPage = ref(1);
const recipesPerPage = 12;

const totalPages = computed(() => Math.ceil(recipes.value.length / recipesPerPage));

const getRecipes = async () => {
    try {
        await recipesStore.allRecipes();
        recipes.value = recipesStore.recipes;
    } catch (error) {
        console.error('Hubo un problema al obtener las recetas:', error);
    }
};

getRecipes();

const paginatedRecipes = computed(() => {
  const startIndex = (currentPage.value - 1) * recipesPerPage;
  return recipes.value.slice(startIndex, startIndex + recipesPerPage);
});

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

</script>

<template>
    <section>


        <div id="cards_container" v-if="paginatedRecipes.length">
            <Card :recipe="recipe" v-for="recipe in paginatedRecipes" :key="recipe.id" />
        </div>




        <div id="pagination">
            <button @click="prevPage" :disabled="currentPage === 1">Anterior</button>
            <span>Página {{ currentPage }} de {{ totalPages }}</span>
            <button @click="nextPage" :disabled="currentPage === totalPages">Siguiente</button>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
}
#cards_container {
    width: 100%;
    justify-items: center;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
    gap: 2rem;
}


</style>