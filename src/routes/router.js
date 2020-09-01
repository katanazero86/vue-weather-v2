import VueRouter from 'vue-router';

import Weather from '../containers/weather/WeatherContainer';

const routes = [
  {path: '/', component: Weather}
];

export default new VueRouter({
  mode: 'history',
  routes
})
