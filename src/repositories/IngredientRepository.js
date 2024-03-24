import axios from "axios";

class IngredientRepository {

    uri = import.meta.env.VITE_API_ENDPOINT_INGREDIENTS

        async getAllIngredients() {
            try {
            const response = await axios.get(`${this.uri}`);
            return response.data;
            } catch (error) {
            console.error('Hubo un problema al obtener todos los ingredientes:', error);
            throw error;
            }
        }
        
        async getIngredientById(id) {
            try {
            const response = await axios.get(`${this.uri}/${id}`);
            return response.data;
            } catch (error) {
            console.error(`Hubo un problema al obtener el ingrediente con id ${id}:`, error);
            throw error;
            }
        }
        
        async getIngredientByName(name) {
            try {
            const response = await axios.get(`${this.uri}/name/${name}`);
            return response.data;
            } catch (error) {
            console.error(`Hubo un problema al obtener el ingrediente con nombre ${name}:`, error);
            throw error;
            }
        }
        
        async addIngredient(ingredientDto) {
            try {
            const response = await axios.post(this.uri, ingredientDto);
            return response.data;
            } catch (error) {
            console.error('Hubo un problema al agregar el ingrediente:', error);
            throw error;
            }
        }
        
        async deleteIngredient(id) {
            try {
            await axios.delete(`${this.uri}/${id}`);
            } catch (error) {
            console.error(`Hubo un problema al eliminar el ingrediente con id ${id}:`, error);
            throw error;
            }
        }
        
        async updateIngredient(id, recipeDto) {
            try {
            const response = await axios.put(`${this.uri}/${id}`, recipeDto);
            return response.data;
            } catch (error) {
            console.error(`Hubo un problema al actualizar el ingrediente con id ${id}:`, error);
            throw error;
            }
        }
}

export default new IngredientRepository();