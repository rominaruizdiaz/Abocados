<script setup>
</script>

<template>
    <section>
        <div id="new_content_container">
            <h1 id="highlight" class="shadow">NUEVO: ¡Adapta tus porciones!</h1>
            <p> ¡Ajusta las porciones de tus recetas según tus necesidades! ¿Quieres más o menos ingredientes? ¡No hay problema! Abocados te da el control total para adaptar tus recetas a tu gusto.</p>
            <a class="shadow" href="">Probar ahora</a>
        </div>
        <div id="image_container"></div>
    </section>
</template>

<style lang="scss" scoped>
section {
    background-color: $background-color;
    height: 30rem;
    display: flex;
}

#new_content_container {
    width: 50%;
    padding: 7%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    text-align: center;
    gap: 1rem;

    h1 {
        font-family: "Oswald", sans-serif;
        font-size: 2rem;
        font-weight: 900;
        color: white;
    }

    p {
        font-size: 1.4rem;
        color: white;
    }

    a {
        padding: 1rem 2rem;
        background-color: $button-primary-color;
        border-radius: 10px;
        color: white;
        font-size: 1.2rem;
        font-weight: 900;
        transition: all 200ms ease-in-out;
    }

    a:hover {
        background-color: $button-hover;
        filter: drop-shadow(0px 0px 10px $button-hover-shadow);
    }
}

#image_container {
    width: 50%;
    height: 100%;
    background-image: url("/images/fruits-halloween.jpeg");
    background-position: bottom;
}

@media screen and (max-width: 1000px) {

    section {
    height: 40rem;
    display: flex;
    flex-direction: column;

    #new_content_container {
        width: 100%;
    }

    #image_container {
        width: 100%;
        background-position: 25% 75%;
        background-size: cover;
    }
}
}
</style>