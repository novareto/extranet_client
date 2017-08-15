<template>

    <div>
        <h1> Add Buddy </h1>
        <form @submit="handle_save">
    
            <div class="field">
                <label class="label">Titel</label>
                <p class="control">
                    <input v-model=user.title class="input" type="text" placeholder="Titel">
                </p>
            </div>
    
            <div class="field">
                <label class="label">Name</label>
                <p class="control">
                    <input 
                        type="text" 
                        class="input" 
                        v-bind:class="{'is-danger': $v.user.name.$error, 'is-success': $v.user.name.$dirty && !$v.user.name.$invalid}" 
                        @input="$v.user.name.$touch()" 
                        v-model="user.name" 
                        placeholder="Name">
                    <span class="form-group__message" v-if="!$v.user.name.required">Field is required</span>
                </p>
            </div>
    
            <div class="field">
                <label class="label">Alter</label>
                <p class="control">
                    <input v-model.number=user.alter class="input" type="text" placeholder="Alter">
                </p>
            </div>
    
            <p class="control">
                <button :disabled="$v.$invalid" class="button is-primary">Absenden</button>
            </p>
    
        </form>
    </div>

</template>
<script>
import { required, minLength, between } from 'vuelidate/lib/validators'

export default {
   name: 'AddBuddy',
   data: function () {
       return {
           user: {
               title: '',
               name: '',
               alter: ''
           }
       }
   },
   methods: {
       handle_save() {
           if (this.$v.$error == false) {
               var url = this.$config.API_URL + '/members/' + this.$auth.user().pid + 'Addressbook' 
               this.$http.put(url, {title: this.user.title, name: this.user.name, alter: this.user.alter}
                   ).then(response => {
                       this.items = response.data.items
                       this.$router.push('/')
                   }).catch(e => {
                       console.log("ERRROR")
                       console.log(e)
                   })               
           }
       }
   },
   
   validations: {
       user: {
           name: {
               required,
               minLength: minLength(4)
           },
       },
   }
}
</script>
