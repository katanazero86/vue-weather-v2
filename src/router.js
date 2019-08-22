import VueRouter from 'vue-router'

import Weather from './components/contents/Weather'

const routes = [
  { path: '/', component: Weather }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router