import Vue from 'vue';
import VueRouter from 'vue-router';
import { routes } from './routes';
import App from './App.vue';


Vue.use(VueRouter)

const router = new VueRouter({
  //history mode takes advantage of html5 history api.
  //this allows us to load url without refreshing page. 
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition){
    // if(savedPosition){
    //   return savedPosition
    // }else{
    //   return {
    //     x: 0,
    //     y: 0
    //   }
    // }o
    if(to.hash){
      return{
        selector: to.hash
      }
    }
  }
})
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
