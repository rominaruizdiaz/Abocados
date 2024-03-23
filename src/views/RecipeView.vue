<script setup>
import { useRecipesStore } from "./../stores/RecipeStore";
import { ref, watchEffect } from "vue";

const props = defineProps({
    id: String,
});

const recipeStore = useRecipesStore();
const recipe = ref(null);

watchEffect(async () => {
    if (props.id) {
        await recipeStore.getRecipeById(Number(props.id));
        const foundRecipe = recipeStore.recipes.find(item => item.id === Number(props.id));
        recipe.value = foundRecipe || null;
    }
});
</script>

<template>
    <div id="image_container">
    </div>
    <div id="data_recipe">
        <h1> {{ recipe.name }} </h1>
        <p> {{ recipe.description }} </p>
    </div>
</template>

<style lang="scss" scoped>

#image_container {
    height: 30rem;
    background-color: $not_found;
}
#data_recipe {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    h1 {
        text-align: center;
        font-size: 4rem
    }
}
</style>