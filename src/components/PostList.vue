<template>
    <div>
        <button :disabled="loading" @click="getPosts">Get Posts</button>
        <p v-if="loading" role="alert" class="">Loading.......</p>
        <ul v-else>
            <li v-for="post in posts" :key="post.id" data-test="post">
                <h4 class="">{{ post.title }}</h4>
                <p class="">{{ post.body }}</p>
            </li>
        </ul>
    </div>
    <div class="">
        <button id="toggleBtn" @click="show = !show">Toggle Transition</button>
        <transition name="fade">
            <p v-if="show" id="transitionText">Hello Transition</p>
        </transition>
    </div>
</template>

<script>
// import axios from 'axios';

export default {
    data() {
        return {
            posts: null,
            loading: false,
            show: false
        }
    },
    methods: {
        async getPosts() {

            // try {
            //     this.loading = true;
            //     axious.get waits for dom update fetch doesnt 
            //     const res = await axios.get('https://dummyjson.com/posts');
            //     this.posts = res.data.posts;
            // } 
            // catch (error) {
            //     console.log(error);
            // } 
            // finally {
            //     this.loading = false;
            // }


            try {
                this.loading = true;
                await this.$nextTick();
                const res = await fetch('https://dummyjson.com/posts');
                const data = await res.json();
                this.posts = data.posts;
                console.log(this.posts);
            }
            catch (error) {
                console.log(error);
            }
            finally {
                this.loading = false
            }

        }
    }
}
</script>

<style scoped>
h4 {
    margin: 0px;
}

p {
    margin-top: 3px;
    margin-bottom: 5px;
}
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from, .fade-leave-to {
    opacity: 0;
}
</style>