import VueRouter from 'vue-router';

import Weather from '../components/pages/Weather';
import Intro from '../components/pages/Intro';

const routes = [
  {path: '/', component: Weather},
  {path: '/intro', component: Intro},
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
