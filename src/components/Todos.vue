
<template lang="pug">
#todos
	//- 為了配合 name:'todos',
	ul.list-group
		li.list-group-item(
			v-for='(todo, index) in todos'
			v-bind:class="{'completed' : todo.completed}")
			router-link(:to="{name:'todo',params:{id:todo.id}}") {{todo.title}}
			button.btn.btn-sm.btn-warning(
				v-on:click='deleteTodo(todo,index)', style='float:right') Delete
			button.btn.btn-sm.pull-right(
				v-on:click='toggleCompletion(todo)'
				v-bind:class="[todo.completed ? 'btn-danger':'btn-success']")
				| {{ todo.completed ? 'Undo':'Completed' }}
			div(style='clear:both;')
	todo-form
</template>

<script>
import TodoForm from './TodoForm'
export default {
  name: 'todos',
  computed: {
    todos() {
      return this.$store.state.todos
    }
  },
  // props: ['todos'],
  methods: {
    deleteTodo(todo, index) { //要修改todo順序
      // this.axios.delete('http://localhost/jugze/public/api/todo/' + todo.id + '/delete').then(response => {
      //   console.log(response.data)
      //   this.todos.splice(index, 1)
      // })
			this.$store.dispatch('removeTodo', todo, index)//main裡面的actions

    },
    toggleCompletion(todo) {
      // this.axios.patch('http://localhost/jugze/public/api/todo/' + todo.id + '/completed').then(response => {
      //   console.log(response.data)
      //   todo.completed = !todo.completed // patch更新一個資源，vuex方法移到main
			// })
      this.$store.dispatch('completeTodo', todo)
    }
  },
  components: {
    TodoForm
  }
}
</script>
<style>
.completed {
  color: #8ed1d4;
  text-decoration: line-through;
}
</style>
