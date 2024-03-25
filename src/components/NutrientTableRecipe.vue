<script setup>

const props = defineProps({
  recipe: Object,
});

</script>

<template>
    <section>
            <div class="title">
                <p>Tamaño de porción</p>
                <p>{{ recipe.weight }} {{ recipe.unit }}</p>
            </div>
            <div>
                <p class="fact">Calorías por porción</p>
                <p>{{ recipe.caloriesPerPortion }} kcal</p>
            </div>
            <div>
                <p class="fact">Calorías totales</p>
                <p>{{ recipe.totalCalories }} kcal</p>
            </div>
            <div>
                <p class="fact">Grasa</p>
                <p>{{ recipe.fats }} g</p>
            </div>
            <div>
                <p class="sub-fact">Grasas saturadas</p>
                <p>{{ recipe.saturatedFat }} g</p>
            </div>
            <div>
                <p class="sub-fact">Grasas monosaturada</p>
                <p>{{ recipe.monoinsaturatedFat }} g</p>
            </div>
            <div>
                <p class="sub-fact">Grasas Polisaturada</p>
                <p>{{ recipe.polinsaturatedFat }} g</p>
            </div>
            <div>
                <p class="fact">Carbohidratos</p>
                <p>{{ recipe.carbohydrate }} g</p>
            </div>
            <div>
                <p class="sub-fact">Azúcar</p>
                <p>{{ recipe.sugar }} g</p>
            </div>
            <div>
                <p class="sub-fact">Fibra</p>
                <p>{{ recipe.fiber }} g</p>
            </div>
            <div>
                <p class="fact">Proteína</p>
                <p>{{ recipe.protein }} g</p>
            </div>
            <div>
                <p class="fact">Sodio</p>
                <p>{{ recipe.potasio }} mg</p>
            </div>
            <div>
                <p class="fact">Colesterol</p>
                <p>{{ recipe.fats }} mg</p>
            </div>
            <div class="last">
                <p class="fact">Potasio</p>
                <p>{{ recipe.fats }} mg</p>
            </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    width: 35rem;
    height: 50rem;
    display: grid;
    grid-template-rows: repeat(13, 1fr);
    background-color: #f9f9f9;
    border-radius: 10px;

    > div {
        justify-self: center;
        display: flex;
        justify-content: space-between;
        padding: 1rem;
        width: 95%;
        border-bottom: 0.1rem solid #afafaf;
        font-weight: 500;
    }
}

.title {
    border-bottom: 0.8rem solid #afafaf;
}
.fact {
    font-weight: bolder;
}
.sub-fact {
    margin-left: 2rem;
}
.last {
    border: none;
}
@media screen and (max-width: 750px) {
    section {
        width: 100%;
    }
}
</style>