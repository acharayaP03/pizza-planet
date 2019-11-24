<template>
    <div>
        <p class="text-muted">Please click on the following links..</p>
        <nav class="navbar navbar-expand-lg navbar navbar-light">
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav mr-auto">
                    <router-link to="/history" tag="li"><a href="" class="nav-link">Our History</a></router-link>
                    <router-link to="/contact" tag="li"><a href="" class="nav-link">Contact</a></router-link>
                    <router-link to="/delivery" tag="li"><a href="" class="nav-link">Deivery</a></router-link>
                    <router-link to="/ordering" tag="li"><a href="" class="nav-link">How to Order</a></router-link>
                </ul>
            </div> 
        </nav>
        <router-view></router-view>
    </div>
    
</template>
