import Vue from 'vue'
import App from './App.vue'

// vue-router
import VueRouter from 'vue-router'
import router from './router'

// vuex
import store from './store/index'

Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
