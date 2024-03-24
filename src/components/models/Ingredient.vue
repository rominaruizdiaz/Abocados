<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    ingredient: Object
});

console.log(props.ingredient);

</script>

<template>
    <router-link to="" class="shadow">
        <div id="image_container"></div>
        <h1>{{ props.ingredient.name }}</h1>
    </router-link>
</template>

<style lang="scss" scoped>
a {
    width: 100%;
    border-radius: 10px;
    background-color: white;
    display: flex;
    align-items: center;
    padding: 1rem;
    gap: 1rem;
    transition: all 200ms ease-in-out;
}
a:hover {
    transform: scale(1.05);
}
#image_container {
    background-color: $not_found;
    height: 4rem;
    width: 4rem;
}
</style>