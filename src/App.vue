<template>
  <div id="app">
    <Header/>
      <router-view/>
    <Footer/>
  </div>
</template>

<script>

import Header from './components/pages/header/Header';
import Footer from './components/pages/footer/Footer';

export default {
  name: 'app',
  components: {
    Footer,
    Header
  }
};
</script>

<style lang="scss">
  @import '@/assets/scss/app.scss';

  #app {
    height: 100%;
    overflow: auto;
  }

</style>
