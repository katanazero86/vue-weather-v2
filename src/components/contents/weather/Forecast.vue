<template>
  <div class="weather-forecast-wrap">
    <div class="weather-forecast-header">
      <div class="header-content">
        <h3>
          Hourly weather and forecasts in {{'test'}}
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'Forecast',
      props: {
        forecast: { type: Object, default: null },
      }
    }
</script>

<style lang="scss" scoped>

  @import '@/assets/scss/app.scss';

  .weather-forecast-wrap {

    .weather-forecast-header {

      .header-content {

      }

    }

  }

  @include responsive(mobile) {

  }

</style>
