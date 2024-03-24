import IngredientRepository from './../repositories/IngredientRepository';

class IngredientService {
    async getAllIngredients() {
        try {
        return await IngredientRepository.getAllIngredients();
        } catch (error) {
        console.error('Hubo un problema al obtener todos los ingredientes:', error);
        throw error;
        }
    }

    async getIngredientById(id) {
        try {
        return await IngredientRepository.getIngredientById(id);
        } catch (error) {
        console.error(`Hubo un problema al obtener el ingrediente con id ${id}:`, error);
        throw error;
        }
    }

    async getIngredientByName(name) {
        try {
        return await IngredientRepository.getIngredientByName(name);
        } catch (error) {
        console.error(`Hubo un problema al obtener el ingrediente con nombre ${name}:`, error);
        throw error;
        }
    }

    async addIngredient(ingredientDto) {
        try {
        return await IngredientRepository.addIngredient(ingredientDto);
        } catch (error) {
        console.error('Hubo un problema al agregar el ingrediente:', error);
        throw error;
        }
    }

    async deleteIngredient(id) {
        try {
        await IngredientRepository.deleteIngredient(id);
        } catch (error) {
        console.error(`Hubo un problema al eliminar el ingrediente con id ${id}:`, error);
        throw error;
        }
    }

    async updateIngredient(id, ingredientDto) {
        try {
        return await IngredientRepository.updateIngredient(id, ingredientDto);
        } catch (error) {
        console.error(`Hubo un problema al actualizar el ingrediente con id ${id}:`, error);
        throw error;
        }
    }
}

export default new IngredientService();