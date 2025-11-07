<template>
    <div class="htmlClass">
        <nav>
            <a id="profile" href="/profile" class="">My Profile</a>
            <a v-if="admin" id="admin" href="/admin">Admin</a>
        </nav>
        <h1 class="">{{ title }}</h1>
        <form action="">
            <input type="text" id="firstName" v-model="firstName" />
            <input type="text" id="secondName" v-model="secondName">
            <input v-model="password">
            <div class="" v-if="error">{{ error }}</div>
            <button class="submitForm" @click="submitForm" type="button">Submit</button>
        </form>
        <ul v-show="shouldShowDropdown" id="user-dropdown">
            <li class="">Option1</li>
            <li class="">Option2</li>
            <li class="">Option3</li>
        </ul>
        <div class="" v-if="show">{{ greeting }}</div>
    </div>
</template>

<script>
export default {
    name: "HtmlFormComponent",
    props: {
        minLength: {
            type: Number,
            required: true
        },
        maxLength: {
            type: Number,
            required: true
        },
        show: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            title: "World",
            firstName: "",
            secondName: "",
            admin: false,
            shouldShowDropdown: false,
            password: "",
            greeting: "",
        }
    },
    computed: {
        error() {
            if (this.password.length < this.minLength) {
                return `Password must be at least ${this.minLength} and max ${this.maxLength} characters.`;
            }
            return;
        }
    },
    methods: {
        submitForm() {
            this.$emit('Submit Form')
        }
    }
}
</script>

<style lang="scss" scoped></style>