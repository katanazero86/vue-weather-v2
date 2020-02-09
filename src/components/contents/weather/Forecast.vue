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
      <template v-for='(forecastList) in renderForecastList'>
        <div class="col-6 forecast-card">
          <div class="forecast-card-header">
          {{ parseTimeStampToDate(forecastList[0].dt) }} Asia/Seoul
          </div>
          <div v-for="forecast in forecastList">
            {{forecast.dt_txt}}
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Forecast',
    props: {
      forecast: {type: Object, default: null},
      openWeatherIconBaseUrl: {type: String, default: ''}
    },

    data() {
      return {
        renderForecastList: null
      };
    },

    beforeUpdate() {
      if (this.forecast) {
        this.processForecastList();
      }
    },

    methods: {
      processForecastList() {
        if (this.forecast) {
          const resultForecastList = [];
          const targetForecast = {...this.forecast};

          const dtTxt = targetForecast.list.map(forecast => forecast.dt_txt.split(' ')[0]);
          const dtTxtSet = new Set(dtTxt);

          dtTxtSet.forEach(dtTxt => {
            const resultForecastFilter = targetForecast.list.filter(forecast => forecast.dt_txt.split(' ')[0] === dtTxt);
            resultForecastList.push(resultForecastFilter);
          });

          if (resultForecastList.length > 0) {
            this.renderForecastList = resultForecastList;
            console.log(this.renderForecastList)
          } else {
            this.renderForecastList = null;
          }
        }
      },

      parseTimeStampToDate(timestamp) {
        return this.$moment(timestamp * 1000).tz('Asia/Seoul').format('YYYY-MM-DD(dddd)');
      }

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
        box-shadow: 0 1px 1px rgba(3, 3, 3, .175);
        margin: 10px 0;
        padding: 8px;
        width: 480px;

        .forecast-card-header {
          background-color: #f5f5f5;
          border: 1px solid #ddd;
          font-size: 14px;
          font-weight: 600;
        }

      }
    }

  }

  @include responsive(mobile) {

  }

</style>
