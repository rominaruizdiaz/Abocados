<script setup>
import AddIngredientButton from "./../components/forms/AddIngredientButton.vue";

</script>

<template>
    <div>
        <section>
            <AddIngredientButton/>
        </section>
    </div>
</template>

<style lang="scss" scoped>
div {
    height: 100vh;
}
section {
    padding: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>