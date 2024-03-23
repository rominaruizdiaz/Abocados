import axios from "axios";

class RecipeRepository {

    uri = import.meta.env.VITE_API_ENDPOINT_RECIPES

        async getAllRecipes() {
            try {
            const response = await axios.get(`${this.uri}`);
            return response.data;
            } catch (error) {
            console.error('Hubo un problema al obtener todas las recetas:', error);
            throw error;
            }
        }
        
        async getRecipeById(id) {
            try {
            const response = await axios.get(`${this.uri}/${id}`);
            return response.data;
            } catch (error) {
            console.error(`Hubo un problema al obtener la receta con id ${id}:`, error);
            throw error;
            }
        }
        
        async getRecipeByName(name) {
            try {
            const response = await axios.get(`${this.uri}/name/${name}`);
            return response.data;
            } catch (error) {
            console.error(`Hubo un problema al obtener la receta con nombre ${name}:`, error);
            throw error;
            }
        }
        
        async addRecipe(recipeDto) {
            try {
            const response = await axios.post(this.uri, recipeDto);
            return response.data;
            } catch (error) {
            console.error('Hubo un problema al agregar la receta:', error);
            throw error;
            }
        }
        
        async deleteRecipe(id) {
            try {
            await axios.delete(`${this.uri}/${id}`);
            } catch (error) {
            console.error(`Hubo un problema al eliminar la receta con id ${id}:`, error);
            throw error;
            }
        }
        
        async updateRecipe(id, recipeDto) {
            try {
            const response = await axios.put(`${this.uri}/${id}`, recipeDto);
            return response.data;
            } catch (error) {
            console.error(`Hubo un problema al actualizar la receta con id ${id}:`, error);
            throw error;
            }
        }
}

export default new RecipeRepository();