<script setup>
import { useIngredientsStore } from './../../stores/IngredientsStore';

const store = useIngredientsStore();

const props = defineProps({
  onClose: Function
});

const closeForm = () => {
  props.onClose();
}

const newIngredient = {
  name: '',
  weight: null,
  unit: '',
  calories: null,
  fats: null,
  saturatedFat: null,
  monoinsaturatedFat: null,
  polinsaturatedFat: null,
  carbohydrate: null,
  sugar: null,
  fiber: null,
  protein: null,
  sodium: null,
  potasio: null,
  categoryName: ''
};

const addNewIngredient = async () => {
  try {
    await store.addIngredient(newIngredient);
    Object.keys(newIngredient).forEach(key => {
      newIngredient[key] = '';
    });
  } catch (error) {
    console.error('Error al agregar el ingrediente:', error);
  }
};

const categories = [
  'Frutas',
  'Verduras',
  'Cereales y granos',
  'Legumbres y frutos secos',
  'Carnes y aves',
  'Pescados y mariscos',
  'Huevos y productos lácteos',
  'Aceites y grasas',
  'Azúcares y dulces',
  'Bebidas',
  'Productos procesados',
  'Alimentos preparados',
  'Alimentos fermentados',
  'Alimentos funcionales',
  'Alimentos para regímenes específicos'
];

</script>

<template>
  <section class="modal" @click="closeForm">
    <div class="modal_container" @click.stop>

      <div>
        <button>
            <img src="/icons/cross-icon.svg" alt="">
        </button>
      </div>

      <form>

        <h1>Añade una nueva Receta:</h1>

        <div>
          
          <article>
  
            <div class="input-group">
              <label for="name">Nombre:</label>
              <input type="text" id="name" v-model="newIngredient.name" required pattern="[A-Za-z]+" title="Ingrese solo letras">
            </div>
            
            <div class="input-group">
              <label for="category">Categoría:</label>
              <select id="category" v-model="newIngredient.category" required>
                <option value="">Seleccione una categoría</option>
                <option v-for="category in categories" :value="category">{{ category }}</option>
              </select>
            </div>
      
            <div class="input-group">
              <label for="weight">Peso (g):</label>
              <div>
                <input type="number" id="weight" v-model="newIngredient.weight" required>
                <select id="unit" v-model="newIngredient.unit" required>
                  <option value="gr">gr</option>
                  <option value="ml">ml</option>
                </select>
              </div>
            </div>
      
            <div class="input-group">
              <label for="calories">Calorías:</label>
              <input type="number" id="calories" v-model="newIngredient.calories" required>
            </div>
            
            <div class="input-group">
              <label for="fats">Grasas:</label>
              <input type="number" id="fats" v-model="newIngredient.fats" required>
            </div>
            
            <div class="input-group">
              <label for="saturatedFat">Grasas Saturadas:</label>
              <input type="number" id="saturatedFat" v-model="newIngredient.saturatedFat" required>
            </div>
            
            <div class="input-group">
              <label for="monoinsaturatedFat">Grasas Monoinsaturadas:</label>
              <input type="number" id="monoinsaturatedFat" v-model="newIngredient.monoinsaturatedFat" required>
            </div>
  
          </article>
  
          <article>
  
            <div class="input-group">
              <label for="polinsaturatedFat">Grasas Polinsaturadas:</label>
              <input type="number" id="polinsaturatedFat" v-model="newIngredient.polinsaturatedFat" required>
            </div>
            
            <div class="input-group">
              <label for="carbohydrate">Carbohidratos:</label>
              <input type="number" id="carbohydrate" v-model="newIngredient.carbohydrate" required>
            </div>
            
            <div class="input-group">
              <label for="sugar">Azúcar:</label>
              <input type="number" id="sugar" v-model="newIngredient.sugar" required>
            </div>
            
            <div class="input-group">
              <label for="fiber">Fibra:</label>
              <input type="number" id="fiber" v-model="newIngredient.fiber" required>
            </div>
            
            <div class="input-group">
              <label for="protein">Proteína:</label>
              <input type="number" id="protein" v-model="newIngredient.protein" required>
            </div>
            
            <div class="input-group">
              <label for="sodium">Sodio:</label>
              <input type="number" id="sodium" v-model="newIngredient.sodium" required>
            </div>
            
            <div class="input-group">
              <label for="potasio">Potasio:</label>
              <input type="number" id="potasio" v-model="newIngredient.potasio" required>
            </div>
  
          </article>

        </div>

        <button type="submit">Agregar Ingrediente</button>
      </form>

    </div>
  </section>
</template>

<style lang="scss" scoped>
.modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
}

.modal_container {
  height: 100%;
  width: 100%;
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