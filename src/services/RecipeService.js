import RecipeRepository from './../repositories/RecipeRepository';

class RecipeService {
    async getAllRecipes() {
        try {
        return await RecipeRepository.getAllRecipes();
        } catch (error) {
        console.error('Hubo un problema al obtener todas las recetas:', error);
        throw error;
        }
    }

    async getRecipeById(id) {
        try {
        return await RecipeRepository.getRecipeById(id);
        } catch (error) {
        console.error(`Hubo un problema al obtener la receta con id ${id}:`, error);
        throw error;
        }
    }

    async getRecipeByName(name) {
        try {
        return await RecipeRepository.getRecipeByName(name);
        } catch (error) {
        console.error(`Hubo un problema al obtener la receta con nombre ${name}:`, error);
        throw error;
        }
    }

    async addRecipe(recipeDto) {
        try {
        return await RecipeRepository.addRecipe(recipeDto);
        } catch (error) {
        console.error('Hubo un problema al agregar la receta:', error);
        throw error;
        }
    }

    async deleteRecipe(id) {
        try {
        await RecipeRepository.deleteRecipe(id);
        } catch (error) {
        console.error(`Hubo un problema al eliminar la receta con id ${id}:`, error);
        throw error;
        }
    }

    async updateRecipe(id, recipeDto) {
        try {
        return await RecipeRepository.updateRecipe(id, recipeDto);
        } catch (error) {
        console.error(`Hubo un problema al actualizar la receta con id ${id}:`, error);
        throw error;
        }
    }
}

export default new RecipeService();