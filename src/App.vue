<script setup>
import Counter from './components/Counter.vue';
import Todo from './components/Todo.vue';
import Form from './components/Form.vue';
import Async from './components/Async.vue';
import PostList from './components/PostList.vue';
import LoginForm from './components/LoginForm.vue';
import ThemeProvider from './components/ThemeProvider.vue';
import ThemeButton from './components/ThemeButton.vue';
import Editor from './components/Editor.vue';
import { ref } from 'vue';

const text = ref("test");
</script>

<template>
  <Todo />
  <Counter />
  <Form />
  <Async />
  <PostList />
  <LoginForm />
  <ThemeProvider>
    <ThemeButton />
  </ThemeProvider>
  <Editor v-model="text" label="text" />  
</template>

<style scoped>
</style>
