
<template lang="pug">
form(v-on:submit.prevent='addTodo(newTodo)')
	.form-group
		input.form-control(
			v-model='newTodo.title', type='text', placeholder='Add a new todo')
	.form-group
		button.btn.btn-success(type='submit') Add Todo
</template>
<script>
export default {
  props: ['todos'],
  data() {
    return {
      newTodo: {
        id: null,
        title: '',
        completed: false
      }
    }
  },
  methods: {
    addTodo(newTodo) {
      this.todos.push(newTodo)
      this.newTodo = {
        id: null,
        title: ''
      }
    }
  }
}
</script>
<style scoped=""></style>
