import CollectionRepository from "./../repositories/CollectionRepository";

class CollectionService {

    async getAllCollections() {
        try {
            return await CollectionRepository.getAllCollections();
        }
        catch(error) {
            console.error('Hubo un problema al obtener todas las colecciones:', error);
            throw error;
        }
    }
}

export default new CollectionService();