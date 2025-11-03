import { mount } from "@vue/test-utils";
import Todo from "@/components/Todo.vue";
import { describe, it, expect, test } from "vitest";

describe('Todo App', () => {
  
  test('adds new todo', async () => {
    const wrapper = mount(Todo)

    const input = wrapper.get('[data-testid="new-todo"]')
    await input.setValue('task1')
    await wrapper.get('[data-testid="add-btn"]').trigger('click')

    expect(wrapper.text()).toContain('task1')
  })

  test('mark todo completed', async () => {
    const wrapper = mount(Todo)

    const input = wrapper.get('[data-testid="new-todo"]')
    await input.setValue('task1')
    await wrapper.get('[data-testid="add-btn"]').trigger('click')

    const checkbox = wrapper.get('[data-testid="todo-checkbox"]')
    await checkbox.setValue(true)

    const todoItem = wrapper.get('[data-testid="todo-item-0"]')
    expect(todoItem.element.style.textDecoration).toBe('line-through')
  })

  test('removes todo', async () => {
    const wrapper = mount(Todo)

    const input = wrapper.get('[data-testid="new-todo"]')
    await input.setValue('task1')
    await wrapper.get('[data-testid="add-btn"]').trigger('click')

    await wrapper.get('[data-testid="delete-btn"]').trigger('click')

    expect(wrapper.text()).not.toContain('task1')
  })
})


// test('completes a todo', async () => {
//   const wrapper = mount(Todo);

//   const input = wrapper.get('[data-testid="new-todo"]')
//   await input.setValue('task1')
//   await wrapper.get('[data-testid="add-btn"]').trigger('click')

//   const checkbox = wrapper.get('[data-testid="todo-checkbox"]')
//   await checkbox.setValue(true)

//   const li = wrapper.get('[data-testid="todo-item-0"]')
//   expect(li.element.style.textDecoration).toBe('line-through')
// })
