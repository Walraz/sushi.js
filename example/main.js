import Vue from 'vue'
import VueRouter from 'vue-router'

import Sushi from '../src/index.js'
import App from './App.vue'

import Intro from './Intro.vue';
import Button from './components/Button.vue'
import Icon from './components/Icon.vue'

Vue.use(VueRouter)
Vue.use(Sushi)

const routes = [
    { path: '/button', component: Button },
    { path: '/icon', component: Icon },
    { path: '*', component: Intro },
]

const router = new VueRouter({
    routes
})

new Vue({
    el: '#app',
    router,
    render: h => h(App),
})
