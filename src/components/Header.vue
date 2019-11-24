<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar navbar-light">
            <a href="/" class="navbar-brand">PIZZA PLANET</a>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav mr-auto">
                    <router-link :to="homeLink" tag="li"><a href="" class="nav-link">home</a></router-link>
                    <router-link :to="menuLink" tag="li"><a href="" class="nav-link">menu</a></router-link>
                </ul>
            </div> 
        </nav>
    </header>
</template>
<script>
export default {
    data(){
        return{
            homeLink: '/',
            menuLink: '/menu'
        }
    }
}
</script>
<style>
    header{
        margin-bottom: 20px;
    }
    .navbar-brand{
        font-size: 1.5em;
    }
</style>