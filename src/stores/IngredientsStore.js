import { defineStore } from 'pinia';
import IngredientService from './../services/IngredientService';

export const useIngredientsStore = defineStore('ingredients', {
    state: () => ({
        ingredients: [],
        loading: false,
        error: null
    }),

    actions: {
        async allIngredients() {
        this.loading = true;
        try {
            this.ingredients = await IngredientService.getAllIngredients();
        } catch (error) {
            this.error = error.message;
        } finally {
            this.loading = false;
        }
        },

        async addIngredient(ingredientDto) {
        try {
            await IngredientService.addIngredient(ingredientDto);
            await this.allIngredients();
        } catch (error) {
            this.error = error.message;
        }
        },

        async deleteIngredient(id) {
        try {
            await IngredientService.deleteIngredient(id);
            this.ingredients = this.ingredients.filter(ingredient => ingredient.id !== id);
        } catch (error) {
            this.error = error.message;
        }
        },

        async updateIngredient(id, ingredientDto) {
        try {
            await IngredientService.updateIngredient(id, ingredientDto);
            await this.allIngredients();
        } catch (error) {
            this.error = error.message;
        }
        },

        async getIngredientByName(name) {
        try {
            return await IngredientService.getIngredientByName(name);
        } catch (error) {
            this.error = error.message;
            return null;
        }
        },
        async getIngredientById(id) {
        try {
            return await IngredientService.getIngredientById(id);
        } catch (error) {
            this.error = error.message;
            return null;
        }
        }
    }
});