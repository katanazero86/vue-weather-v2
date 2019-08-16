<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <p class="scss-test">scss test</p>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">

  $testColor : #2c3e50;
  $fontSize : 10;
  $bgColor : #2c3e50;

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $testColor;
  margin-top: 60px;
}

  .scss-test {
    font-size: $fontSize;
    background-color: $bgColor;
  }

</style>
