<script setup>

const props = defineProps({
    collection: Object
})

</script>

<template>
    <div>

        <h1>{{ collection.name }}</h1>

    </div>
</template>

<style lang="scss" scoped>

div {
    background-color: $not-found;
    padding: 1rem;
    width: 17rem;
    border-radius: 10px;
    height: 15rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-shrink: 0;

    h1 {
        font-size: 2rem;
        font-weight: 900;
        text-align: center;
    }
}
</style>