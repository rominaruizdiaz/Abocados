<script setup>

</script>

<template>
    <section>
        <img id="avocado-without" src="/images/avocado-without-seed.svg" alt="avocado without seed">
        <div>
            <h1 class="shadow">Abocados</h1>
            <p>¡Disfruta comiendo a bocados!</p>
        </div>
        <img id="avocado-with" src="/images/avocado-with-seed.svg" alt="avocado with seed">
    </section>
</template>

<style lang="scss" scoped>

section {
    height: 30rem;
    background-color: $background-color;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
        text-align: center;
        margin: 0 1rem;
        h1 {
            font-size: 4rem;
            color: white;
            font-weight: 700;
        }

        p {
            font-size: 2rem;
            color: white;
        }
    }
}

img {
    animation: floatAndShake 4s infinite;
    position: relative;
}

#avocado-with {
    top: 5rem;
}

#avocado-without {
    bottom: 5rem;
}
@keyframes floatAndShake {
    0% {
        transform: translateY(0) translateX(0) rotate(0deg); 
    }
    25% {
        transform: translateY(-20px) translateX(0) rotate(-5deg); 
    }
    50% {
        transform: translateY(0) translateX(0) rotate(0deg); 
    }
    75% {
        transform: translateY(-20px) translateX(0) rotate(5deg); 
    }
    100% {
        transform: translateY(0) translateX(0) rotate(0deg); 
    }
}

@media screen and (max-width: 1000px) {
    section {
        flex-direction: column;

    div {
        margin: 0 1rem;
        h1 {
            font-size: 3rem;
            color: white;
            font-weight: 700;
        }

        p {
            font-size: 1.5rem;
            color: white;
        }
    }
}

    img {
        width: 6rem;
        animation: floatAndShake 4s infinite;
    }

    #avocado-with {
        top: 2rem;
        left: 8rem;
    }

    #avocado-without {
        bottom: 2rem;
        right: 8rem;
    
    }
}
</style>