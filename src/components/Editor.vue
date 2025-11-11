<template>
    <div>
        <label for="">{{ label }}</label>
        <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
        <p class="">{{ modelValue }}</p>
    </div>
</template>

<script setup>

defineProps({
    label: String,
    modelValue: String
})

defineEmits(['update:modelValue'])
</script>

<style lang="scss" scoped>

</style>