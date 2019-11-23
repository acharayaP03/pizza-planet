<template>
<div>
    <div class="row">
        <div class="form-group">
            <label for="">Email Address</label>
            <input type="email" id="email" placeholder="Enter your email address" name=" email" class="form-control">
        </div>
    </div>
    <div class="row">
        <div class="form-group">
            <label for="">Password</label>
            <input type="password" id="password" placeholder="Enter your password" name="password" class="form-control">
        </div>
    </div>
    <div class="form-group">
        <button class="btn btn-primary" @click="signIn">Sign In</button>
        <button class="btn btn-warning" @click.prevent="signOut">sign Out</button>
    </div>
</div>

</template>
<script>
import Firebase from "firebase";
export default {
    methods:{
        signIn(){
            var email = document.getElementById('email').value;
            var password = document.getElementById('password').value;

            Firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(function(error){
                var errorCode = error.code;
                var errorMessage = error.message;

                if (errorCode === 'auth/wrong-password'){
                    alert('Wrong password')
                }else{
                    alert(errorMessage);
                }
            })

        },
        signOut(){
            Firebase.auth().signOut().then(function(){
                alert('logged out')
            }).catch(function(error){
                alert('error');
            })
        }
    }
}
</script>