<script setup>
import TryNowBanner from "../components/home/TryNowBanner.vue";
import CardsContainer from "./../components/home/CardsContainer.vue";
import CollectionsContainer from "./../components/home/CollectionsContainer.vue";
import WelcomeBanner from "./../components/home/WelcomeBanner.vue";
</script>

<template>
    <main>
        <WelcomeBanner/>
        <section class="center">
            <CardsContainer/>
        </section>
        <TryNowBanner/>
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