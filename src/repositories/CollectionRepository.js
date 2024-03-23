import axios from "axios";

class CollectionRepository {

    uri = import.meta.env.VITE_API_ENDPOINT_COLLECTIONS

    async getAllCollections() {
        try {
            const response = await axios.get(`${this.uri}`);
            return response.data;
        }
        catch(error) {
            console.error('Hubo un problema al obtener todas las colecciones:', error);
            throw error;
        }
    }
}

export default new CollectionRepository();