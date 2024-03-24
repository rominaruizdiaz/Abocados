<template>
  <div>
    <input type="text" v-model="searchTerm" @input="searchIngredients" placeholder="Buscar ingredientes">
    <ul>
      <li v-for="(ingredient, index) in filteredIngredients.slice(0, 4)" :key="index">
<IngredientId :ingredient="ingredient" />
</li>
    </ul>
  </div>
</template>

<script setup>
import { useIngredientsStore } from './../stores/IngredientsStore';
import { ref, watch } from 'vue';
import IngredientId from './models/IngredientId.vue';

const store = useIngredientsStore();
const searchTerm = ref('');
const filteredIngredients = ref([]);

const searchIngredients = async () => {
  try {
    if (!searchTerm.value.trim()) {
      filteredIngredients.value = [];
    } else {
      filteredIngredients.value = store.ingredients.filter(ingredient =>
        ingredient.name.toLowerCase().includes(searchTerm.value.toLowerCase())
      );
    }
  } catch (error) {
    console.error('Error al buscar ingredientes:', error);
  }
};

watch(searchTerm, () => {
  searchIngredients();
});
</script>../stores/IngredientsStore