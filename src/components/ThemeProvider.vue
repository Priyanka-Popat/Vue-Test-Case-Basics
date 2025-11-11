<template>
    <div>
        <slot />
    </div>
</template>

<script setup>
import { provide, ref } from 'vue';

const theme = ref('Light');

function toggleTheme() {
    theme.value = theme.value === 'Light' ? 'Dark' : 'Light'
}
// makes data availabee for all child , grandchild compoenents 
provide('theme', theme);
provide('toggleTheme', toggleTheme);

</script>

<style scoped>
</style>