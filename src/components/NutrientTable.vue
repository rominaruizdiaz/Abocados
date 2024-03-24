<script setup>

const props = defineProps({
  ingredient: Object,
});

</script>

<template>
    <section>
            <div class="title">
                <p>Tamaño de porción</p>
                <p>{{ ingredient.weight }} {{ ingredient.unit }}</p>
            </div>
            <div>
                <p class="fact">Calorías</p>
                <p>{{ ingredient.calories }} kcal</p>
            </div>
            <div>
                <p class="fact">Grasa</p>
                <p>{{ ingredient.fats }} g</p>
            </div>
            <div>
                <p class="sub-fact">Grasas saturadas</p>
                <p>{{ ingredient.saturatedFat }} g</p>
            </div>
            <div>
                <p class="sub-fact">Grasas monosaturada</p>
                <p>{{ ingredient.monoinsaturatedFat }} g</p>
            </div>
            <div>
                <p class="sub-fact">Grasas Polisaturada</p>
                <p>{{ ingredient.polinsaturatedFat }} g</p>
            </div>
            <div>
                <p class="fact">Carbohidratos</p>
                <p>{{ ingredient.carbohydrate }} g</p>
            </div>
            <div>
                <p class="sub-fact">Azúcar</p>
                <p>{{ ingredient.sugar }} g</p>
            </div>
            <div>
                <p class="sub-fact">Fibra</p>
                <p>{{ ingredient.fiber }} g</p>
            </div>
            <div>
                <p class="fact">Proteína</p>
                <p>{{ ingredient.protein }} g</p>
            </div>
            <div>
                <p class="fact">Sodio</p>
                <p>{{ ingredient.potasio }} mg</p>
            </div>
            <div>
                <p class="fact">Colesterol</p>
                <p>{{ ingredient.fats }} mg</p>
            </div>
            <div class="last">
                <p class="fact">Potasio</p>
                <p>{{ ingredient.fats }} mg</p>
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