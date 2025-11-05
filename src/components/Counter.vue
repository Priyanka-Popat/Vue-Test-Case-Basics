<template>
    <div>
        <button @click="handleClick">Increment</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const count = ref(0);
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
</script>

<style lang="scss" scoped></style>