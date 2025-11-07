<template>
  <div>{{ message }}</div>
</template>

<script setup>
import { ref } from 'vue'

const message = ref('Loading...')

await Promise.resolve();
message.value = 'Data Loaded'
</script>

