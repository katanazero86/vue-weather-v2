import Vue from 'vue'
import Vuex from 'vuex'

import test from './modules/test.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: false,
  state: {
    rootTestValue: 'root store state value..'
  },

  modules: {
    test
  }
})

export default store
