//
// main.js
// Vue bootstrap file
//

import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'

import 'vuetify/dist/vuetify.min.css'

// Disables warnings in console's log
Vue.config.productionTip = false

// Enables vue plugins
Vue.use(VueRouter)
Vue.use(Vuetify)

// App components for routing
import App from './App.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'

// Defines app routes
const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
  ]
})

// Runs app
new Vue({
  router,
  vuetify: new Vuetify({}),
  render: handler => handler(App)
}).$mount('#app')
