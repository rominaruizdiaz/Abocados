<template>
    <div>
      <input type="text" v-model="searchTerm" @input="searchIngredients" placeholder="Buscar ingredientes">
      <ul>
        <li v-for="(ingredient, index) in filteredIngredients.slice(0, 4)" :key="index">
  <Ingredient :ingredient="ingredient" />
</li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { useIngredientsStore } from './../stores/IngredientsStore';
  import { ref, watch } from 'vue';
  import Ingredient from './models/Ingredient.vue';
  
  const store = useIngredientsStore();
  const searchTerm = ref('');
  const filteredIngredients = ref([]);
  
  const searchIngredients = async () => {
    try {
      if (!searchTerm.value.trim()) {
        // Si el término de búsqueda está vacío, mostrar todos los ingredientes
        filteredIngredients.value = [];
      } else {
        // Filtrar los ingredientes por el nombre que coincide con el término de búsqueda
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
  </script>