<script setup>

const props = defineProps({
    recipe: Object
})

function upperCaseFirstLetter(title) {
    return title.charAt(0).toUpperCase() + title.slice(1);
}
const recipeName = upperCaseFirstLetter(props.recipe.name);

</script>

<template>
    <div id="card_container" class="shadow">
        <section id="image_container">
        </section>
        <section id="data_container">
            <h1>{{ recipeName }}</h1>
            <p>{{ recipe.description }}</p>
            <div id="data_details">
                <div>
                    <img src="/icons/icon-time.svg" alt="clock icon">
                    <p>{{ recipe.preparationTime }}</p>
                </div>
                <div>
                    <img src="/icons/icon-energy.svg" alt="energy icon">
                    <p>{{ recipe.caloriesPerPortion }}</p>
                </div>
                <div>
                    <img src="/icons/icon-person.svg" alt="person icon">
                    <p>{{ recipe.portions }}</p>     
                </div>
            </div>
        </section>

    </div>
</template>

<style lang="scss" scoped>

#card_container {
    width: 17rem;
    height: 23rem;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
}

#image_container {
    height: 40%;
    border-radius: 10px 10px 0 0;
    background-color: rgb(255, 226, 154);
    display: flex;
    align-items: end;

}

#data_container {
    height: 60%;
    padding: 1rem;
    border-radius: 0 0 10px 10px;
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h1 {
        width: 100%;
        text-align: center;
        font-size: 1.3rem;
        font-weight: 600;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    > p {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }
}

#data_details {
    height: 5rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
    height: 2.5rem;

    > div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;

        > img {
            width: 1.4rem;
            height: 1.4rem;
        }
    }
}
</style>