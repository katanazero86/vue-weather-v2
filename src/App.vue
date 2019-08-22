<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>

import Header from './components/header/Header'
import Footer from './components/footer/Footer'

import cityListJson from './city.list.json';

export default {
  name: 'app',
  components: {
    Footer,
    Header
  },

    mounted() {

      // console.log(cityListJson.filter(city => city.country.toLowerCase() == 'kr'));

    }

}
</script>

<style lang="scss">
  @import '@/assets/scss/app.scss';

  #app {
    height: 100%;
  }

</style>
