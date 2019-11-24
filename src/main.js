import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home';
import Menu from './components/Menu';
import Admin from './components/Admin';
import About from './components/About';
import Contact from './components/Contact';
import History from './components/History';
import Delivery from './components/Delivery';
import Ordering from './components/Ordering';

import App from './App.vue';


Vue.use(VueRouter)


const routes =[
  {
    path: '/',
    component: Home
  },
  {
    path: '/menu',
    component: Menu
  },
  {
    path: '/admin',
    component: Admin
  },
  {
    path: '/about',
    component: About, children: [
      {
        path: '/contact',
        component: Contact
      },
      {
        path: '/history',
        component: History
      },
      {
        path: '/delivery',
        component: Delivery
      },
      {
        path: '/ordering',
        component: Ordering
      }
    ]
  },
  //redirect to the root or 404 if url doesnt match
  {
    path: '*',
    redirect: '/'
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
