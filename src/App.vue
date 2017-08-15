<template>
  <div id="app">
    <nav class="nav has-shadow" id="top">
      <div class="container">
        <div class="nav-left">
          <router-link to="/" class="nav-item"> <h2> UVCSITE </h2> </router-link>
        </div>
        <span class="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div class="nav-right nav-menu">
          <router-link to="home" class="navbar-item">Home</router-link>
          <router-link to="dokumente/Unfallanzeige" class="navbar-item">Dokumente</router-link>
        </div>
      </div>
    </nav>
    <section class="section">
      <div class="container content">
        <router-view></router-view>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
}
</script>

<style lang="scss">
@import './node_modules/bulma/bulma.sass';
</style>
