<template>
    <div>
        <button :class="themeClass" @click="toggleTheme">
            {{ theme }}
        </button>
    </div>
</template>

<script setup>
import { computed, inject } from 'vue';

// inject gets dark from parent who called provide , light is the fall back theme
const theme = inject('theme');
const toggleTheme = inject('toggleTheme')

const themeClass = computed(() => 
    theme.value === "Dark" ? 'darkTheme' : 'lightTheme'
)
</script>

<style scoped>
.darkTheme {
    background-color: black;
    color: white;
    padding: 2px;
    border-radius: 5px;
    width: 50px;
    margin-top: 20px;
    cursor: pointer;
}

.lightTheme {
    background-color: white;
    border: 1px solid black;
    border-radius: 5px;
    padding: 2px;
    width: 50px;
    color: black;
    margin-top: 20px;
    cursor: pointer;
}
</style>