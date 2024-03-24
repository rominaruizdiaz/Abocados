import UserRepository from "./../repositories/UserRepository";

class UserService {

    async getAllUsers() {
        try {
            return await UserRepository.getAllUsers();
        }
        catch(error) {
            console.error('Hubo un problema al obtener todos los usuarios:', error);
            throw error;
        }
    }
}

export default new UserService();