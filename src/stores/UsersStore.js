import { defineStore } from "pinia";
import UserService from "./../services/UserService";

export const useUsersStore = defineStore('users', {
    state: () => ({
        users: [],
        loading: false,
        error: null
    }),

    actions: {
        async allUsers() {
            this.loading = true;
            try {
                this.users = await UserService.getAllUsers();
                } catch (error) {
                this.error = error.message;
                } finally {
                this.loading = false;
                }
            },
    }
})