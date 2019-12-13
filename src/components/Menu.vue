<template>
    <div class="row">
        <div class="col-sm-12 col-md-6">
            <table class="table table-hover">
                <thead class="thead-default">
                    <tr>
                        <th>Size</th>
                        <th>Price</th>
                        <th>Add to Basket</th>
                    </tr>
                </thead>
                <tbody v-for="item in getMenuItems">
                    <tr>
                        <td><strong>{{item.name}}</strong></td>
                    </tr>
                    <tr v-for="option in item.options">
                        <td>{{ option.size}}</td>
                        <td>{{ option.price }}</td>
                        <td><button class="btn btn-sm btn-outline-success" @click="addToBasket(item, option)">+</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div v-if="basket.length > 0" class="col-sm-12 col-md-6">
            <table class="table table-hover">
                <thead class="thead-default">
                    <tr>
                        <th>Quantity</th>
                        <th>Item</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody v-for="item in basket">
                    <tr>
                    <td>
                        <button class="btn btn-sm btn-outline-danger"
                                @click="decreaseQuantity(item)">-</button>
                            <span>{{item.quantity}}</span>
                            <button class="btn btn-sm btn-outline-primary"
                                @click="increseQuantity(item)">+</button>
                        </td>
                        <td>{{ item.name}} {{ item.size}}</td>
                        <td>{{ item.price * item.quantity }}</td>
                    </tr>
                </tbody>
            </table>
            <p>Order Total</p>
            <button class="btn btn-success btn-block" @click="addNewOrder">Place Order</button>
        </div>
        <div v-else>
            <p>{{ basketText }}</p>
            {{ this.$store.state.orders}}
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            //to add items, we set it as a empty array.
            basket:[],
            basketText: 'No item selecdted',
        }
    },
    computed:{
        getMenuItems(){
            return this.$store.getters.getMenuItems
        }
    }
    ,
    methods:{
        addToBasket(item, option){
            this.basket.push({
                name: item.name,
                price: option.price,
                size: option.size,
                quantity: 1
            })
        },
        removeFromBasket(item){
            this.basket.splice(this.basket.indexOf(item), 1);
        },
        increseQuantity(item){
            item.quantity++;
        },
        decreaseQuantity(item){
            item.quantity--;
            if(item.quantity === 0){
                this.removeFromBasket(item);
            }
        },
        addNewOrder(){
            this.$store.commit('addOrder', this.basket);
            this.basket = [];
            this.basketText = 'Thank you, your order has been placed.'
        }
    }
}
</script>