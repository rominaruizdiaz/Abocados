<script setup>
import { RouterView } from "vue-router";
import HeaderVue from "./components/header/Header.vue";
import FooterVue from "./components/footer/Footer.vue";
</script>

<template>
	<main>
		<HeaderVue />
		<div>
			<RouterView />
		</div>
		<FooterVue />
	</main>
</template>

<style scoped lang="scss"></style>