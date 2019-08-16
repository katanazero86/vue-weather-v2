<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>

import Header from './components/header/Header'
import Footer from "./components/footer/Footer";
export default {
  name: 'app',
  components: {
      Footer,
    Header
  }
}
</script>

<style lang="scss">
  @import '@/assets/scss/app.scss';
</style>
