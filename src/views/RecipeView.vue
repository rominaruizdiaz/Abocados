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
    <main v-if="recipe">
        <section id="main_recipe_data">
            <article>
                <div id="data_container">
                    <h1> {{ recipe.name }}</h1>
                    <p> {{ recipe.description }}</p>
                    <div>
                        <p> username del creador: {{ recipe.user }}</p>
                    </div>
                </div>
                <div id="imagen_container">
                </div>
            </article>
            <div>
                <div>
                    <img src="/icons/icon-time.svg" alt="">
                    <p> {{ recipe.preparationTime }} min</p>
                </div>
                <div>
                    <img src="/icons/icon-energy.svg" alt="">
                    <p> {{ recipe.caloriesPerPortion }} kcal</p>
                </div>
                <div>
                    <img src="/icons/icon-person.svg" alt="">
                    <p> {{ recipe.portions }} portions</p>
                </div>
                <div>
                    <router-link to="">cambia las porciones</router-link>
                </div>
            </div>
        </section>
        <section id="recipe_data">
            <IngredientsFacts/>
        </section>
    </main>
</template>

<style lang="scss" scoped>

// main data of the recipe section
#main_recipe_data {
    height: 45rem;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
    bottom: -10rem;

    > article {
        background-color: white;
        height: 75%;
        filter: drop-shadow(0px 0px 20px #80808072);
        display: flex;
    }

    > div {
        display: flex;
        margin-top: 2rem;
        justify-content: space-around;

        > div {
            padding: 1rem;
            display: flex;
            align-items: center;
            gap: 1rem;

            > img {
                height: 2rem;
            }

            p {
                font-size: 1.1rem;
                font-weight: 900;
            }

            a {
                border-radius: 10px;
                padding: 1rem;
                transition: all 200ms ease-in-out;
                background-color: $button-primary-color;
                color: white;
                font-weight: 700
            }
            a:hover {
                background-color: $button-hover;
                filter: drop-shadow(0px 0px 10px $button-hover-shadow);
            }
        
        }
    }
}
#data_container {
    width: 50%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 2rem;

    > h1 {
        font-size: 2.5rem;
        font-weight: 800;
        text-align: center
    }

    > p {
        font-size: 1.5rem;
    }

    > div {
        background-color: rgb(239, 239, 239);
        padding: 1rem;
        border: 1px ;
        border-radius: 10px;
    }
}
#imagen_container {
    background-color: $not_found;
    width: 50%;
}

// ingredients and nutrient facts
#recipe_data {
    background-color: white;
    filter: drop-shadow(0px -8px 16px #d8d8d8);
    height: 45rem;
    margin-top: -10.5rem;
}

@media screen and (max-width: 900px) {

#main_recipe_data {
    height: auto;
    width: 100%;
    bottom: 0;
    margin: 0 0;

        > article {
            filter: drop-shadow(0px 0px 10px #80808072);
            flex-direction: column-reverse;
        }

        > div {
            flex-direction: column;
            align-items: center;
            gap: 1rem;


            > div {
                display: flex;
                text-align: center;
                gap: 1rem;
                width: 100%;

                a {
                    border-radius: 0;
                    width: 100%;
                }
            }
        }
}
#data_container {
    width: 100%;

    > h1 {
        font-size: 1.5rem;
    }

    > p {
        font-size: 1rem;
    }
}
#imagen_container {
    width: 100%;
    height: 30rem;
}

// ingredients and nutrient facts

#recipe_data {
    filter: none;
    height: auto;
    margin-top: 0;
}
}

</style>