import Vue from 'vue'
import App from './App.vue'
import {routes} from './Router'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Vuelidate from 'vuelidate'
import VueAxios from 'vue-axios'
import axios from 'axios'
import VueAuth from '@websanova/vue-auth'
//import AuthBearer from '@websanova/vue-auth/drivers/auth/bearer.js'
import AuthBearer from './lib/bearer.js'
import config from './lib/config'

const configs = {
  API_URL: 'http://karl.novareto.de:8080/jwt/++services++json/'
}

Vue.router=routes
Vue.use(VueRouter)
Vue.use(Vuelidate)
Vue.use(VueAxios, axios)
Vue.use(config, configs)

Vue.axios.defaults.baseURL = configs.API_URL 
Vue.use(VueAuth,
  {
    auth: AuthBearer,
    http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
    router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
    loginData: {url: '/auth', method: 'POST', redirect: '/', fetchUser: true},
    fetchData: {url: '/user', method: 'GET', enabled: true},
    refreshData: {enabled: false},
    rolesVar: 'roles',
  }
)


var store = {}
new Vue({
  store,
  el: '#app',
  router: routes,
  template: '<App/>',
  components: { App }
})