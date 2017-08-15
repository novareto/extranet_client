<template>
 <form @submit.prevent="login()">

    <div class="field">
        <label class="label">Benutzername</label>
        <p class="control">
            <input v-model=credentials.login class="input" type="text" placeholder="Benutzername">
        </p>
    </div>
    <div class="field">
        <label class="label">Passwort</label>
        <p class="control">
            <input v-model=credentials.password class="input" type="text" placeholder="Passwort">
        </p>
    </div>


    <p class="control">
        <button class="button is-primary">Login</button>
    </p>


 </form>
  
</template>

<script>
export default {
    name: 'Login',
    data: function () {
        return {
            context: "LOGIN CONTEXT",
            credentials: {login: '', password: ''}
            }
    },
    methods: {
       login: function () {
           var redirect = this.$auth.redirect();
           this.$auth.login({
               data: this.credentials,
               rememberMe: true,
               success() {
                   console.log('success ' + this.context);
               },
               error(res) {
                   console.log('error ' + this.context);
                   this.error = res.data;
                    }
           })
       }
    }

}
</script>

style>
  
</style>

