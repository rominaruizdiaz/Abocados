<script setup>
import { useIngredientsStore } from "./../stores/IngredientsStore";
import { ref, watchEffect } from "vue";
import NutrientTable from "./../components/NutrientTable.vue"

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
    <main v-if="ingredient">
        <div>
            <div id="image_container"></div>
            <h1>{{ ingredient.name  }}</h1>
            <h2>{{ ingredient.category.name  }}</h2>
        </div>
        <article>
            <p id="title">Tabla nutricional</p>
            <NutrientTable :ingredient="ingredient" />
            <p>*Ingesta de referencia de un adulto medio (2000 kcal)</p>
        </article>
    </main>
</template>

<style lang="scss" scoped>
main {
    padding: 2rem;
    display: flex;
    justify-content: center;
    gap: 3rem;

    > div {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 1rem;

        h1 {
            font-size: 2.3rem;
            font-weight: 600;
            text-align: center;
        }

        h2 {
            font-size: 1.5rem;
            font-weight: 500;
        }
    }

    > article {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
}
#image_container {
    width: 20rem;
    height: 20rem;
    border-radius: 10px;
    background-color: $not_found;
}
#title {
    text-align: left;
    border-bottom: 2px solid #b8b8b8;
    height: 2rem;
}
@media screen and (max-width: 1000px) {
    main {
        flex-direction: column;
        align-items: center;
    }   
}

@media screen and (max-width: 750px) {
    main {
        flex-direction: column;
    }   
}
</style>