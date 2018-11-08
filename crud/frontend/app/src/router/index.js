import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Cliente from '@/pages/Cliente'
import Produto from '@/pages/Produto'

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
      path: '/produto',
      name: 'Produto',
      component: Produto
    },
    {
      path: '*',
      component: Home
    }
  ]
})
