import Vue from 'vue'
import App from './App'
import router from './router'
import "@/main.scss"

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
