<script setup>
import AllRecipes from '../components/recipesPage/AllRecipes.vue';


</script>

<template>
    <main>
        <h1>Todas las recetas</h1>
        <AllRecipes/>
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