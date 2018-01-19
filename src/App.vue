<template lang="pug">
#app
	//- img(src="./assets/logo.png")
	//- HelloWorld
	//- Todos(:todos="todos")
	//- todo-form(:todos="todos")

	router-view
</template>

<script>
import HelloWorld from './components/HelloWorld'
// import Todos from './components/Todos'
import TodoForm from './components/TodoForm'

export default {
  name: 'App',
  // data() {
  //   return {
  //     todos: []
  //   }
  // },
  mounted() {
    // this.axios.get('http://localhost/jugze/public/api/todos').then(response => {
    //   this.todos = response.data;
    //   console.log(response.data)
    // }) 已經交給main裡面的store 處理
    this.$store.dispatch('getTodos')

  },
  computed: {
    todoCount() {
      return this.$store.state.todos.length;
    }
  },
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
