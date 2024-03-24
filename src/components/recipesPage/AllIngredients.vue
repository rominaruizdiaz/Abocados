<script setup>
import Ingredient from './../models/Ingredient.vue';
import { useIngredientsStore } from "./../../stores/IngredientsStore"
import { ref, computed } from 'vue';

const ingredientsStore = useIngredientsStore();
const ingredients = ref([]);
const currentPage = ref(1);
const ingredientsPerPage = 25;

const totalPages = computed(() => Math.ceil(ingredientsStore.ingredients.length / ingredientsPerPage));

const getIngredients = async () => {
    try {
        await ingredientsStore.allIngredients();
        ingredients.value = ingredientsStore.ingredients;
    } catch (error) {
        console.error('Hubo un problema al obtener los ingredients:', error);
    }
};
getIngredients();

console.log(ingredients);

const paginatedIngredients = computed(() => {
  const startIndex = (currentPage.value - 1) * ingredientsPerPage;
  return ingredients.value.slice(startIndex, startIndex + ingredientsPerPage);
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

        <div id="ingredients_container" v-if="paginatedIngredients.length">
            <Ingredient :ingredient="ingredient" v-for="ingredient in paginatedIngredients" :key="ingredient.id" />
        </div>

        <div id="pagination">
            <button @click="prevPage" :disabled="currentPage === 1">Anterior</button>
            <p>Página {{ currentPage }} de {{ totalPages }}</p>
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
    gap: 3rem;
}
#ingredients_container {
    width: 100%;
    justify-items: center;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
    gap: 2rem;
}

#pagination {
  display: flex;
  gap: 3rem;
}
</style>