// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'

import Todos from './components/Todos'
import Todo from './components/Todo'
import PugTest from './components/PugTest'

import Vuex from 'vuex'

// import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.css'


Vue.use(VueAxios, axios);
Vue.use(VueRouter);
Vue.use(Vuex);

const routes = [{
    path: '/',
    component: Todos
  },
  {
    path: '/todo/:id',
    component: Todo,
    name: 'todo'
  },
  {
    path: '/pugtest',
    component: PugTest
  }
];

const router = new VueRouter({
  routes
});

const store = new Vuex.Store({
  state: {
    todos: [],
    newTodo: {
      id: null,
      title: '',
      completed: false
    }
  },
  mutations: {
    get_todos_list(state, todos) {
      state.todos = todos
    },
    complete_todo(state, todo) {
      todo.completed = !todo.completed
      //前端動作
    },
    delete_todo(state,index){
      state.todos.splice(index, 1)
    },
    add_todo(state,todo){
      state.todos.push(todo)
    }
  },
  actions: {
    getTodos(store) {
      Vue.axios.get('http://localhost/jugze/public/api/todos').then(response => {
        store.commit('get_todos_list', response.data)
      })
    },
    completeTodo(store, todo) {
      Vue.axios.patch('http://localhost/jugze/public/api/todo/' + todo.id + '/completed').then(response => {
        store.commit('complete_todo',todo)//vuex去觸發mutations
      })
    },
    removeTodo(store,todo,index){
      Vue.axios.delete('http://localhost/jugze/public/api/todo/' + todo.id + '/delete').then(response => {
        console.log(response.data)
        // this.todos.splice(index, 1)
        store.commit('delete_todo',index)//vuex去觸發mutations，寫錯成todo
      })
    },
    saveTodo(store,todo){
      Vue.axios.post('http://localhost/jugze/public/api/todo/create', {
        title: todo.title
      }).then(response => {
        console.log(response.data)
        // this.todos.push(response.data)
        store.commit('add_todo',response.data)
      })

      store.state.newTodo = {
        id: null,
        title: '',
        completed: false
      }
    }
  }
})

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: {
    App
  },
  template: '<App/>',
  router
});
