import { defineStore } from "pinia";

export const useAuthStore = defineStore('authStore', {
    state: () => {
        return {
            user: null,
            token: null,
            errors: {}
        }
    },
    actions: {
        async authenticate(route, formData) {
            const res = await fetch(`/api/${route}`, {
                method: 'POST',
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            
            if (data.errors) {
                this.errors = data.errors;
                console.log(this.errors);
            }else{
                this.user = data.user;
                this.token = data.token;
                localStorage.setItem('token', data.token);
            }
        }
    }
}) 