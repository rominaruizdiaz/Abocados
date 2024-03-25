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
                    <button @click="openForm">cambia las porciones</button>
                    <button @click="deleteRecipe">eliminar receta</button>
                </div>
            </div>
        </section>
        <section id="recipe_data">
            <div id="recipe_data_container">
                <NutrientTableRecipe :recipe="recipe" />
                <OtherInformation :recipe="recipe" />
                <ChangePortions v-if="isFormOpen" :recipe="recipe" :newPortions="newPortions"  @submit="submitForm" />
            </div>
        </section>
    </main>
</template>

<script setup>
import { useRecipesStore } from "./../stores/RecipeStore";
import { ref, watchEffect } from "vue";
import OtherInformation from "./../components/recipesPage/OtherInformation.vue";
import NutrientTableRecipe from "../components/NutrientTableRecipe.vue";
import ChangePortions from "./../components/ChangePortions.vue";
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps({
    id: String,
});

const recipeStore = useRecipesStore();
const recipe = ref(null);
const isFormOpen = ref(false);
const newPortions = ref(0);

watchEffect(async () => {
    if (props.id) {
        await recipeStore.getRecipeById(Number(props.id));
        const foundRecipe = recipeStore.recipes.find(item => item.id === Number(props.id));
        recipe.value = foundRecipe || null;
    }
});

const openForm = () => {
    isFormOpen.value = true;
};

const submitForm = () => {
    recipeStore.updateRecipe(recipe.value.id, { portions: newPortions.value });
    isFormOpen.value = false;
};

const deleteRecipe = async () => {
    if (recipe.value) {
        await recipeStore.deleteRecipe(recipe.value.id);
        router.push('/');
    }
};
</script>

<style lang="scss" scoped>

#main_recipe_data {
    height: 45rem;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    z-index: 10;
    bottom: -10rem;

    > article {
        background-color: white;
        height: 75%;
        border-radius: 30px;
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

            button {
                border-radius: 10px;
                padding: 1rem;
                transition: all 200ms ease-in-out;
                background-color: $button-primary-color;
                color: white;
                font-weight: 700
            }
            button:hover {
                background-color: $button-hover;
                filter: drop-shadow(0px 0px 10px $button-hover-shadow);
            }
        
        }
    }
}
#data_container {
    border-radius: 30px 0 0 30px;
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
    border-radius: 0 30px 30px 0;
}

#recipe_data {
    background-color: white;
    filter: drop-shadow(0px -8px 16px #d8d8d8);
    margin-top: -10.5rem;

    > #recipe_data_container {
        
        display: flex;
        gap: 3rem;
        justify-content: center;
        padding-top: 20rem;
    }
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