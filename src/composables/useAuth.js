import { ref } from "vue";

export function useAuth() {
    const user = ref(null);
    const accessToken = ref(null);
    const refreshToken = ref(null);
    const error = ref(null);
    const loading = ref(false);


    async function login(username, password) {
        loading.value = true
        error.value = null

        try {
            const res = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({ username, password }),
            })

            if (!res.ok) throw new Error('Invalid Credentials!!!');

            const data = await res.json();
            console.log(data)
            accessToken.value = data.accessToken
            refreshToken.value = data.refreshToken
            user.value = {
                id: data.id,
                username: data.username,
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                gender: data.gender,
                image: data.image,
            };
            console.log(user.value);
        } catch (error) {
            error.value = error.message;
            console.log(error.message)
        } finally {
            loading.value = false;
        }
    }

    function logout() {
        user.value = null;
        accessToken.value = null;
        refreshToken.value = null;
    }

    return {
        user, accessToken, refreshToken, loading, error, login, logout
    }
}