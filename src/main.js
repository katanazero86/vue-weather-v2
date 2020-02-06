import Vue from 'vue';
import App from './App.vue';

// font-awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// vue-router
import VueRouter from 'vue-router';
import router from './router';

// vuex
import store from './store/index';

// axios plugin
import axiosPlugin from './plugins/axiosPlugin';

// moment plugin
import momentPlugin from './plugins/momentPlugin'

Vue.use(axiosPlugin);
Vue.use(momentPlugin);
Vue.use(VueRouter);

library.add(fas);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');
