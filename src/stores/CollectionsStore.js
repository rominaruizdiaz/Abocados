import { defineStore } from "pinia";
import CollectionService from './../services/CollectionService'

export const useCollectionsStore = defineStore('collections', {
    state: () => ({
        collections: [],
        loading: false,
        error: null
    }),

    actions: {
        async allCollections() {
            this.loading = true;
            try {
                this.collections = await CollectionService.getAllCollections();
                } catch (error) {
                this.error = error.message;
                } finally {
                this.loading = false;
                }
            },
    }
})