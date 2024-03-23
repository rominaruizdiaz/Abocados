import { defineStore } from 'pinia';
import RecipeService from './../services/RecipeService';

export const useRecipesStore = defineStore('recipes', {
  state: () => ({
    recipes: [],
    loading: false,
    error: null
  }),

  actions: {
    async allRecipes() {
      this.loading = true;
      try {
        this.recipes = await RecipeService.getAllRecipes();
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },

    async addRecipe(recipeDto) {
      try {
        await RecipeService.addRecipe(recipeDto);
        await this.allRecipes();
      } catch (error) {
        this.error = error.message;
      }
    },

    async deleteRecipe(id) {
      try {
        await RecipeService.deleteRecipe(id);
        this.recipes = this.recipes.filter(recipe => recipe.id !== id);
      } catch (error) {
        this.error = error.message;
      }
    },

    async updateRecipe(id, recipeDto) {
      try {
        await RecipeService.updateRecipe(id, recipeDto);
        await this.allRecipes();
      } catch (error) {
        this.error = error.message;
      }
    },

    async getRecipeByName(name) {
      try {
        return await RecipeService.getRecipeByName(name);
      } catch (error) {
        this.error = error.message;
        return null;
      }
    },
    async getRecipeById(id) {
      try {
        return await RecipeService.getRecipeById(id);
      } catch (error) {
        this.error = error.message;
        return null;
      }
    }
  }
});