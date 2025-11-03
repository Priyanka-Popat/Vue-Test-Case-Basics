<template>
  <div>
    <input
      v-model="newTodo"
      placeholder="Add task"
      data-testid="new-todo"
    />

    <button @click="addTodo" data-testid="add-btn">
      Add
    </button>

    <ul>
      <li
        v-for="(todo, index) in todos"
        :key="index"
        :data-testid="'todo-item-' + index"
        :style="{ textDecoration: todo.done ? 'line-through' : 'none' }"
      >
        <input
          type="checkbox"
          v-model="todo.done"
          data-testid="todo-checkbox"
        />
        
        {{ todo.text }}

        <button
          @click="removeTodo(index)"
          data-testid="delete-btn"
        >
          X
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue"

const newTodo = ref('')
const todos = ref([])

const addTodo = () => {
  if (newTodo.value.trim()) {
    todos.value.push({ text: newTodo.value, done: false })
    newTodo.value = ''
  }
}

const removeTodo = (index) => {
  todos.value.splice(index, 1)
}
</script>
