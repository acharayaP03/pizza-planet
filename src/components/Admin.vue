<template>
<div>
    <div class="row">
        <div class="col-sm-12 col-md-6">
            <pp-add-new></pp-add-new>
        </div>
        <div class="col-sm-12 col-md-6">
            <h3>Menu</h3>
            <table class="table table-hover">
                <thead class="thead-default">
                    <tr>
                        <th>
                            Item
                        </th>
                        <th>
                            Remove from menu
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Margarita</td>
                        <td><button class="btn btn-outline-danger btn-sm">X</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-12">
            <h3>Current Orders:</h3>
            <table class="table table-sm">
                <thead class="thead-default">
                    <tr>
                        <th>Item</th>
                        <th>Size</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <div class="order-number">
                        <strong><em>Order Number: 1</em></strong>
                        <button class="btn btn-outline-danger btn-sm">X</button>
                    </div>
                    <tr>
                        <td>Margarita</td>
                        <td>9"</td>
                        <td>1</td>
                        <td>6.95</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <hr>
    <div class="row">
        <div class="col-sm-12 col-lg-6">
            <pp-login></pp-login>
        </div>
    </div>
</div>
</template>
<script>
import AddNew from './AddNew';
import Login from './Login'
export default {
    components:{
        ppAddNew: AddNew,
        ppLogin : Login
    }
}
</script>