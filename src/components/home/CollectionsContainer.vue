<script setup>
import Collection from '../models/Collection.vue';
import { useCollectionsStore } from './../../stores/CollectionsStore';
import { ref } from 'vue';

const collectionsStore = useCollectionsStore();
const collections = ref([]);

const getCollections = async () => {
    try {
        await collectionsStore.allCollections();
        collections.value = collectionsStore.collections.sort((a, b) => b.creationTime - a.creationTime).slice(0, 5);
    } catch (error) {
        console.error('Hubo un problema al obtener las colecciones:', error);
    }
};
getCollections();

</script>

<template>
    <section>
        <div id="text_container">
            <h2>Últimas colecciones</h2>
            <p>ver más</p>
        </div>
        <div id="collection_container">
            <Collection :collection="collection" v-for="collection in collections" :key="collection.id" />
        </div>
    </section>
</template>

<style lang="scss" scoped>

section {
    padding: 4.5rem 1.5rem 4.5rem 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: hidden;

}
#text_container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        font-weight: 500;
    }
}

#collection_container {
    padding: 1rem;
    overflow-x: auto;
    display: flex;
    gap: 1rem;
}

@media screen and (min-width: 1400px) {
    #collection_container {
        gap: 0 3rem;
        padding: 1rem 0.1rem;
    }
}

</style>