<template>
    <div>
        <p>Hey User: {{ username }}</p>
        <p>Count: {{ count }}</p>
        <button @click="handleClick">Increment</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const count = ref(0);
const username = ref('Loading...');
const emit = defineEmits(['increment'])

const handleClick = () => {
    count.value += 1
    // emit('increment', count.value)
    // have to emit with additional info 
    emit('increment', {
        count: count.value,
        isEven: count.value % 2 === 0,
    })
}

// here it will be apii call
await Promise.resolve();
username.value = 'Priyanka'
</script>

<style lang="scss" scoped></style>