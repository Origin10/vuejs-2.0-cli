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

// import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.css'


Vue.use(VueAxios, axios);
Vue.use(VueRouter);

const routes=[
  {path:'/', component:Todos},
  {path:'/todo/:id', component:Todo, name:'todo'},
  {path:'/pugtest', component:PugTest}
];

const router = new VueRouter({routes});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
});
