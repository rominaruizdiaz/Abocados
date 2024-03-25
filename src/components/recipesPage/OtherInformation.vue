<script setup>
    const props = defineProps({
        recipe: Object
    });
</script>

<template>
    <div>
        <h1>Pasos:</h1>
        <p> {{ recipe.steps }}</p>
        <h1>Pertenece a la colección:</h1>
        <p>{{ recipe.collection.name }}</p>
    </div>
</template>


<style lang="scss" scoped>

div {
    width: 40rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
h1 {
    font-size: 1.4rem;
    font-weight: 500;
}
</style>