<template>
    <div>
        <h2 class="">Login</h2>
        <form action="">
            <div class="">
                <label for="">Username:</label>
                <input v-model="username" type="text">
            </div>
            <div class="">
                <label for="">Password:</label>
                <input v-model="password" type="password">
            </div>

            <button @click="handleLogin" :disabled="loading">
                {{ loading ? "Logging in..." : "Login" }}
            </button>
        </form>

        <p v-if="error" class="">{{ error }}</p>

        <div class="" v-if="user">
            <p class="">Welcome, {{ user.firstName }} {{ user.lastName }}</p>
            <button @click="logout">Logout</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuth } from '@/composables/useAuth';

const { user, accessToken, refreshToken, error, loading, login, logout } = useAuth();

const username = ref('');
const password = ref('');

async function handleLogin() {
    console.log(password.value)
    await login(username.value, password.value)
}

</script>

<style lang="scss" scoped></style>