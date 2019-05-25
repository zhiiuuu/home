'use strict'

import Vue from 'vue'
import App from './app.vue'
import NavBar from './src/pages/navbar.vue'
import store from './store'
import VueLazyLoad from 'vue-lazyload'
//import {install as Axios} from './api/install'
import './src/scss/animate.min.css'

Vue.use(VueLazyLoad)

//Vue.use(Axios)

export default class {
  constructor (components = {}, el = "#app") {
    this.el = el,
    this.components = {
      App,
      NavBar,
      ...components
    }
    this.mount()
  }
  mount () {
    new Vue({
      el: this.el,
      components: this.components,
      store: store
    })
  }
}
