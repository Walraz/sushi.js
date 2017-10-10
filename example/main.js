import Vue from 'vue'
import Sushi from '../src/index.js'
import App from './App.vue'

console.dir(Sushi)

Vue.use(Sushi)

new Vue({
    el: '#app',
    render: h => h(App),
})
