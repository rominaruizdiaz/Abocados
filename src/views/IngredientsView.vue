<script setup>
import AllIngredients from '../components/recipesPage/AllIngredients.vue';
import SearchIngredients from '../components/SearchIngredients.vue';


</script>

<template>
    <main >
        <h1>Todos los ingredientes</h1>
        <SearchIngredients/>
        <AllIngredients/>
    </main>
</template>

<style lang="scss" scoped>
main {
    margin: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;

    h1 {
        display: block;
        font-size: 1.5rem;
        font-weight: 700;
    }
}

@media screen and (min-width: 1400px) {
    main {
        margin: 3rem 13rem;
    }
}
</style>