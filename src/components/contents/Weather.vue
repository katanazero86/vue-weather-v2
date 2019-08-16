<template>
    <div id="weather-wrap">
      Weather TEST
      {{$store.getters.testValue}}
      {{$store.state.rootTestValue}}
    </div>
</template>

<script>

export default {
  name: 'Weather'
}
</script>

<style lang="scss" scoped>

  @import '@/assets/scss/app.scss';

  #weather-wrap {
    height: 100%;
    padding: 20px;
    background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
  }

</style>
