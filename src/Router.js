import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductFolder from './ProductFolder.vue'
import LandingPage from './LandingPage.vue'
import AddBuddy from './AddBuddy.vue'
import Login from './Login.vue'


const routes = new VueRouter({
    history: false,
    root: '/',
    routes: [
        { path: '/', component: LandingPage, meta: {auth: true} },
        { path: '/login', component: Login, meta: { auth: false } },
        { path: '/addBuddy', component: AddBuddy },
        { path: '/dokumente/:object_type', component: ProductFolder },
    ]
})

export {routes}
