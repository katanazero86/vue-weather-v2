import VueRouter from 'vue-router';

const routes = [
  {path: '/', component: () => import('../containers/weather/WeatherContainer')}
];

export default new VueRouter({
  mode: 'history',
  routes
})
