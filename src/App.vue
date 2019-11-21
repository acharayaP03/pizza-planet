<template>
  <div id="app">
    <div class="container">
      <pp-header ></pp-header>
    </div>
    <div class="container">
      <pp-menu></pp-menu>
    </div>
    <div class="container">
      <pp-footer></pp-footer>
    </div>
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from "./components/Footer";
import Home from "./components/Home";
import Menu from "./components/Menu";
export default {
    name: 'app', 
    data(){
        return{

        }
    },
    components:{
        ppHeader: Header,
        ppFooter: Footer,
        ppHome: Home,
        ppMenu: Menu
    }
}
</script>

<style>

</style>
