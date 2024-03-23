<script setup>
import CardsContainer from "./../components/home/CardsContainer.vue";
import CollectionsContainer from "./../components/home/CollectionsContainer.vue";
import WelcomeBanner from "./../components/home/WelcomeBanner.vue";
</script>

<template>
    <main>
        <section class="center">
            <CardsContainer/>
        </section>
        <WelcomeBanner/>
        <section class="center">
            <CollectionsContainer/>
        </section>
    </main>
</template>

<style lang="scss" scoped>

@media screen and (min-width: 1400px) {
    .center {
        display: flex;
        justify-content: center;
    }
}
</style>