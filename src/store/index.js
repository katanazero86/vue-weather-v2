import Vue from 'vue';
import Vuex from 'vuex';

import test from './modules/test/test.js';
import weatherModule from './modules/weather/index';

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: false,

  state: {
    rootTestValue: 'root store state value..'
  },

  modules: {
    test,
    weatherModule
    // weatherModule : {
    //   namespaced : true,
    //   ...weatherModule
    // }

  }
});

export default store;
