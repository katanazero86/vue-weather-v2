<template>
  <div class="wrap weather-forecast-wrap" v-if="forecast">
    <div class="weather-forecast-header">
      <div class="header-content">
        <h2>
          Hourly weather and forecasts in {{ forecast.city.name }}
        </h2>
      </div>
    </div>
    <div class="flex-layout-wrap row align-center justify-between weather-forecast-content">
      <template v-for='listObj in forecast.list'>
        <div class="col forecast-card">11</div>
      </template>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'Forecast',
      props: {
        forecast: { type: Object, default: null }
      }
    };
</script>

<style lang="scss" scoped>

  @import '@/assets/scss/app.scss';

  .weather-forecast-wrap {

    width: 100%;

    .weather-forecast-header {

      .header-content {

      }

    }

    .weather-forecast-content {

      .forecast-card {
        background: #fff;
        border-top: 2px solid transparent;
        box-shadow: 0 1px 1px rgba(3,3,3,.175);
        margin: 10px 0;
        padding: 8px;
      }
    }

  }

  @include responsive(mobile) {

  }

</style>
