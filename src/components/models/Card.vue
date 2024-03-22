<script setup>

const props = defineProps({
   recipe: Object
})

</script>

<template>
    <div>

        <h2>{{ recipe.name }}</h2>
        <h2>{{ recipe.description }}</h2>
        <h2>{{ recipe.preparationTime }}</h2>
        <h2>{{ recipe.caloriesPerPortion }}</h2>
        <h2>{{ recipe.portions }}</h2>

    </div>
</template>

<style lang="scss" scoped>

</style>