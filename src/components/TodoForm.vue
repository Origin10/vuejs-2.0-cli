
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
  // props: ['todos'],
  // data() {
  //   return {
  //     newTodo: {
  //       id: null,
  //       title: '',
  //       completed: false
  //     }
  //   }
  computed: {
    newTodo() {
      return this.$store.state.newTodo //等於在main.js定義的
    }
  },
  methods: {
    addTodo(newTodo) {
      // this.axios.post('http://localhost/jugze/public/api/todo/create', {
      //   title: this.newTodo.title
      // }).then(response => {
      //   console.log(response.data)
      //   this.todos.push(response.data)
      // })
			this.$store.dispatch('saveTodo', newTodo)

      // this.newTodo = {
      //   id: null,
      //   title: '',
      //   completed: false
      // }
    }
  }
}
</script>
<style scoped=""></style>
