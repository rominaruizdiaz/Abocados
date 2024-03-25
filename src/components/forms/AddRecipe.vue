<script setup>
  import { useRecipesStore } from './../../stores/RecipeStore';
  import { useIngredientsStore } from './../../stores/IngredientsStore'; 
  import { ref } from 'vue';
        
  const recipeStore = useRecipesStore();
  const ingredientStore = useIngredientsStore();
        
  const props = defineProps({
      onClose: Function
  });
        
  const closeForm = () => {
      props.onClose();
  }
        
  const recipe = {
    name: '',
    description: '',
    steps: '',
    preparationTime: null,
    portions: null,
    collectionName: '',
  };
        
        const recipeIngredients = ref([
          { name: '', weight: null, unit: '' }
        ]);
        
        const addNewIngredient = () => {
          recipeIngredients.value.push({ name: '', weight: null, unit: '' });
        };
        
        const addNewRecipe = async () => {
          try {
            const recipeIngredientsData = await Promise.all(recipeIngredients.value.map(async (ingredient) => {
        
              const foundIngredient = await ingredientStore.getIngredientByName(ingredient.name);
        
              const ingredientId = foundIngredient ? foundIngredient.id : null;
              return {
                ingredientId: ingredientId,
                weight: ingredient.weight,
                unit: ingredient.unit
              };
            }));
        
            const newRecipe = {
              name: recipe.name,
              description: recipe.description,
              steps: recipe.steps,
              preparationTime: recipe.preparationTime,
              portions: recipe.portions,
              collectionName: recipe.collectionName,
              recipeIngredients: recipeIngredientsData
            };
        
            await recipeStore.addRecipe(newRecipe);
            closeForm();
            clearForm();
          } catch (error) {
            console.error('Error al agregar la receta:', error);
          }
        };
        
        const clearForm = () => {
          recipe.name = '';
          recipe.description = '';
          recipe.steps = '';
          recipe.preparationTime = null;
          recipe.portions = null;
          recipe.collectionName = '';
          recipeIngredients.value = [{ name: '', weight: null, unit: '' }];
        };
        
</script>

<template>
  <section class="modal">
    <div class="modal_container" @click.stop>

      <div>
        <button @click="closeForm">
            <img src="/icons/cross-icon.svg" alt="">
        </button>
      </div>

      <form @submit.prevent="addNewRecipe">

        <h1>Añade una nueva receta:</h1>

        <div>
          <article>

            <div class="input-group">
              <label for="name">Nombre:</label>
              <input type="text" id="name" v-model="recipe.name" required>
            </div>
  
            <div class="input-group">
              <label for="description">Descripción:</label>
              <textarea id="description" v-model="recipe.description" required></textarea>
            </div>
  
            <div class="input-group">
              <label for="steps">Pasos:</label>
              <textarea id="steps" v-model="recipe.steps" required></textarea>
            </div>
  
            <div class="input-group">
              <label for="preparationTime">Tiempo de preparación (min):</label>
              <input type="number" id="preparationTime" v-model="recipe.preparationTime" required>
            </div>
  
            <div class="input-group">
              <label for="portions">Porciones:</label>
              <input type="number" id="portions" v-model="recipe.portions" required>
            </div>
  
            <div class="input-group">
              <label for="collectionName">Nombre de la colección:</label>
              <input type="text" id="collectionName" v-model="recipe.collectionName" required>
            </div>
          </article>

          <article>
            <h2>Ingredientes:</h2>
            <div class="ingredient-columns">
              <div class="column">
                <div v-for="(ingredient, index) in recipeIngredients.slice(0, Math.ceil(recipeIngredients.length / 2))" :key="index" class="input-group">
                  <label :for="'ingredientName_' + index">Nombre del ingrediente:</label>
                  <input :id="'ingredientName_' + index" v-model="ingredient.name" required>
                  <label :for="'ingredientWeight_' + index">Peso (g):</label>
                  <input :id="'ingredientWeight_' + index" type="number" v-model="ingredient.weight" required>
                  <label :for="'ingredientUnit_' + index">Unidad:</label>
                  <select :id="'ingredientUnit_' + index" v-model="ingredient.unit" required>
                    <option value="gramos">gramos</option>
                    <option value="ml">ml</option>
                  </select>
                </div>
              </div>
              <div class="column">
                <div v-for="(ingredient, index) in recipeIngredients.slice(Math.ceil(recipeIngredients.length / 2))" :key="index" class="input-group">
                  <label :for="'ingredientName_' + index">Nombre del ingrediente:</label>
                  <input :id="'ingredientName_' + index" v-model="ingredient.name" required>
                  <label :for="'ingredientWeight_' + index">Peso (g):</label>
                  <input :id="'ingredientWeight_' + index" type="number" v-model="ingredient.weight" required>
                  <label :for="'ingredientUnit_' + index">Unidad:</label>
                  <select :id="'ingredientUnit_' + index" v-model="ingredient.unit" required>
                    <option value="gramos">gramos</option>
                    <option value="ml">ml</option>
                  </select>
                </div>
              </div>
            </div>
          </article>
          <button @click.prevent="addNewIngredient">Agregar Ingrediente</button>
        </div>

        <button id="submit" type="submit">Agregar Receta</button>
      </form>

    </div>
  </section>
</template>


<style lang="scss" scoped>
.modal {
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100vw;
    z-index: 1000;
}

.modal_container {
  display: flex;
  background-color: white;
  border-radius: 10px;
  flex-direction: column;
  padding: 2rem;

  > div {
    width: 100%;
    display: flex;
    justify-content: end;
      > button > img {
        width: 2rem;
        height: 2rem;
      }
  }
}
.ingredient-columns, .column {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: auto;
}
form {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 2rem;
  }

  button {
    padding: 1rem;
    color: white;
    font-weight: bolder;
    border-radius: 10px;
    background-color: $button-primary-color;
    transition: all 200ms ease-in-out;
  }

  button:hover {
    filter: drop-shadow(0px 0px 10px $button-hover-shadow);
    background-color: $button-primary-color;
  }

  > div {
    display: flex;
    justify-content: center;
    gap: 5rem;
    width: 100%;

    > article {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }

}
#submit {
  margin-top: 4rem;
}
.input-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 1rem;

  > select {
    width: 50%;
    padding: 0.1rem;
  }

  div {
    background-color: black;
    width: auto;
    width: 50%;

    input {
      width: 70%;
    }
    
    select {
      width: 30%;
      background-color: white;
      height: 100%;
    }
  }

  label {
    font-weight: 500;
    width: 50%;
  }

  input {
    padding: 0.2rem;
    width: 50%;
    text-align: end;
  }
}

@media screen and (min-width: 1130px) {

  .modal_container {
    height: 40rem;
    width: 70rem;
    border-radius: none;
  }
}

</style>