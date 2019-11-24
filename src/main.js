import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import Home from './components/Home';
import Menu from './components/Menu';

Vue.use(VueRouter)


const routes =[
  {
    path: '/',
    component: Home
  },
  {
    path: '/menu',
    component: Menu
  }
]
const router = new VueRouter({
  //history mode takes advantage of html5 history api.
  //this allows us to load url without refreshing page. 
  routes,
  mode: 'history'
})
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
