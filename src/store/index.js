import Vue from 'vue';
import Vuex from 'vuex';
import weather from './modules/weather/index';
Vue.use(Vuex);

export default new Vuex.Store({
  strict: false,
  state: {
    rootTestValue: 'root store state value..'
  },

  modules: {
    weather
  }
});
