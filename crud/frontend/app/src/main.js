import Vue from 'vue'
import Vuetify from 'vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App'
import router from './router'

import 'vuetify/dist/vuetify.min.css'
import 'babel-polyfill'

Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.use(VueAxios, axios)

axios.defaults.baseURL = 'http://localhost:3000/api/'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
