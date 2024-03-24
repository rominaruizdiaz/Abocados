import axios from "axios";

class UserRepository {

    uri = import.meta.env.VITE_API_ENDPOINT_USERS

    async getAllUsers() {
        try {
            const response = await axios.get(`${this.uri}`);
            return response.data;
        }
        catch(error) {
            console.error('Hubo un problema al obtener todos los usuarios:', error);
            throw error;
        }
    }
}

export default new UserRepository();