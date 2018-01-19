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
    todos: []
  },
  mutations: {
    get_todos_list(state, todos) {
      state.todos = todos
    }
  },
  actions: {
    getTodos(store) {
      Vue.axios.get('http://localhost/jugze/public/api/todos').then(response => {
        store.commit('get_todos_list',response.data)
      })
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
