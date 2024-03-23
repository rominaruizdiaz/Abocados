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
    background-color: rgb(0, 104, 208);
    padding: 1rem;
    width: 17rem;
    border-radius: 10px;
    height: 23rem;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
}
</style>