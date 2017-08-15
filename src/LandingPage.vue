<template>


    <div>
        <h1> Herzlich Willkommen im Extranet </h1>
        <p class="lead"> Hier haben Sie die Möglichkeit unterschiedliche Dinge zu sehen </p>

        <div class="card">
            <header class="card-header">
                <p class="card-header-title">
                    Adressbuch
                </p>
            </header>
            <div class="card-content">
                <div class="content">
                    <p> Hier können sie Ihr Adressbuch verwalten</p>
                    <small>11:09 PM - 1 Jan 2016</small>
                </div>
            </div>
            <footer class="card-footer">
                <router-link to="addBuddy" class="card-footer-item">Hinzufügen</router-link>
                <router-link to="dokumente/Adressbook" class="card-footer-item">Dokumente</router-link>
            </footer>
        </div>
        {{this.$auth.user()}}   
        {{this.$auth.user().name}}   
        <ul v-for="pr in this.$auth.user().pr">
            <card-item document="pr"> </card-item>
            <li> {{pr.linkname}} </li>
            </ul>   

    </div>

</template>
<script>
import CardItem from './components/CardItem.vue'
export default {
    name: 'LandingPage',
    data: {
        products: []
    },
    components: {CardItem}
  
}
</script>
