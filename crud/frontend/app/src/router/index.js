import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Cliente from '@/pages/Cliente'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/cliente',
      name: 'Cliente',
      component: Cliente
    },
    {
      path: '*',
      component: Home
    }
  ]
})
