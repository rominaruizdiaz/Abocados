<template>
    <router-link @click="handleAddIngredient" class="shadow">
      <div id="image_container"></div>
      <h1>{{ ingredient.name }}</h1>
    </router-link>
  </template>
  
  <script setup>
  const props = defineProps({
    ingredient: Object
  });
  
  const handleAddIngredient = () => {
    // Aquí puedes emitir un evento para agregar el ingrediente a `recipeIngredients`
    emit('addIngredient', props.ingredient);
  };
  </script>
  
  <style lang="scss" scoped>
  a {
    width: 100%;
    border-radius: 10px;
    background-color: white;
    display: flex;
    align-items: center;
    padding: 1rem;
    gap: 1rem;
    transition: all 200ms ease-in-out;
  }
  a:hover {
    transform: scale(1.05);
  }
  #image_container {
    background-color: $not_found;
    height: 4rem;
    width: 4rem;
  }
  </style>