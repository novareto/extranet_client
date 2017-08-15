<template>
    <div class="card">
        <header class="card-header">
            <p class="card-header-title">
                {{document.linkname}}
            </p>
        </header>
        <div class="card-content">
            <div class="content">
                <p> Hier können sie Ihr Adressbuch verwalten</p>
                <small>11:09 PM - 1 Jan 2016</small>
            </div>
        </div>
        <footer class="card-footer">
            <router-link to="add" class="card-footer-item">Hinzufügen</router-link>
            <router-link to="dokumente/Adressbook" class="card-footer-item">Dokumente</router-link>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'card-item',
    props: ['document'],
}
</script>

<style>
  
</style>
