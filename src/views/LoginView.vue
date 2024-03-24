<script setup>
import LoginForm from '../components/log/LoginForm.vue';
import RegisterForm from '../components/log/RegisterForm.vue';

</script>

<template>
    <section>
        <div>
            <LoginForm/>
            <RegisterForm/>
        </div>
    </section>
</template>

<style lang="scss" scoped>

@media screen and (min-width: 1000px) {
    section {
        width: 100%;
    }

    div {
        display: flex;
        justify-content: center;
    }

}
</style>