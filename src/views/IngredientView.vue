<script setup>
import { useIngredientsStore } from "./../stores/IngredientsStore";
import { ref, watchEffect } from "vue";

const props = defineProps({
    id: String,
});

const ingredientStore = useIngredientsStore();
const ingredient = ref(null);

watchEffect(async () => {
    if (props.id) {
        await ingredientStore.getIngredientById(Number(props.id));
        const foundIngredient = ingredientStore.ingredients.find(item => item.id === Number(props.id));
        ingredient.value = foundIngredient || null;
        
        console.log("Ingredient:", ingredient.value);
    }
});

console.log("store:", ingredientStore);
</script>

<template>
    <div v-if="ingredient">
        <div id="image_container"></div>
        <h1> {{ ingredient.id  }} </h1>
    </div>
</template>

<style lang="scss" scoped>
#image_container {
    height: 30rem;
    width: 100%;
    background-color: $not_found;
}
</style>