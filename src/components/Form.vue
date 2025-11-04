<template>
    <div class="htmlClass">
        <h1 class="">{{ title }}</h1>
        <form action="">
            <input type="text" id="firstName" v-model="firstName" />
            <input type="text" id="secondName" v-model="secondName">
            <button class="submitForm" @click="submitForm" type="button">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "HtmlFormComponent",
    data() {
        return {
            title: "Hello World",
            firstName: "",
            secondName: ""
        }
    },
    methods: {
        submitForm() {
            this.$emit('Submit Form')
        }
    }
}
</script>

<style lang="scss" scoped>

</style>