<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar navbar-light">
            <a href="/" class="navbar-brand">PIZZA PLANET</a>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <router-link to="/"><a href="" class="nav-link">home</a></router-link>
                    </li>
                    <li class="nav-item">
                         <router-link to="/menu"><a href="" class="nav-link">menu</a></router-link>
                    </li>
                </ul>
            </div> 
        </nav>
    </header>
</template>
<style>
    header{
        margin-bottom: 20px;
    }
    .navbar-brand{
        font-size: 1.5em;
    }
</style>