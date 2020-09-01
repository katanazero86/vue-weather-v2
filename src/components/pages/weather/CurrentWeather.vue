<template>
  <div class="wrap weather-current-wrap" v-if="currentWeatherState">
    <div class="weather-current-header">
      <div class="header-content">
        <h2>
          Weather in {{currentWeatherState.name}}
        </h2>
        <RefreshIcon @click="refresh" color="white"/>
      </div>
      <div class="header-time">
        조회시간: {{currentTimeState}}
      </div>
      <div class="weather-current-header-info">
        <div>
          <img :src="`${openWeatherIconBaseUrlState}/${currentWeatherState.weather[0].icon}@2x.png`" width="85"
               height="85"/>
          <span class="weather-current-temperature">{{(currentWeatherState.main.temp - 273.15).toFixed(1)}} °C</span>
        </div>
        <p>{{currentWeatherState.weather[0].main}}</p>
      </div>
    </div>
    <div class="weather-current-content">
      <table>
        <thead>
        <tr>
          <th>풍향(Wind)</th>
          <th>구름량(Cloudiness)</th>
          <th>압력(Pressure)</th>
          <th>습기(Humidity)</th>
          <th>일출(Sunrise)</th>
          <th>일몰(Sunset)</th>
          <th>지리 좌표(Geo coords)</th>
        </tr>
        </thead>
        <tbody>
        <tr v-if="currentWeatherState != null">
          <td>{{currentWeatherState.wind.speed}} m/s | {{currentWeatherState.wind.deg}} deg</td>
          <td>{{currentWeatherState.clouds.all}} %</td>
          <td>{{currentWeatherState.main.pressure}} hpa</td>
          <td>{{currentWeatherState.main.humidity}} %</td>
          <td>{{currentWeatherState.sys.sunrise | parseTimeStampToDateString }}</td>
          <td>{{currentWeatherState.sys.sunset | parseTimeStampToDateString }}</td>
          <td>{{`[${currentWeatherState.coord.lat}, ${currentWeatherState.coord.lon}]`}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CurrentWeather',

    components: {
      'RefreshIcon': () => import('../../icons/RefreshIcon')
    },

    props: {
      currentWeatherState: {type: Object, default: null},
      currentTimeState: {type: String, default: ''},
      openWeatherIconBaseUrlState: {type: String, default: ''}
    },

    methods: {
      refresh() {
        this.$emit('refresh');
      },
    }

  };
</script>

<style lang="scss" scoped>

  @import '@/assets/scss/app.scss';

  .weather-current-wrap {

    width: 100%;
    color: $fontColorWhite;

    .weather-current-header {

      .header-content {
        display: inline-flex;
        align-items: center;
      }

      svg {
        padding: 10px;
        width: 25px;
        height: 25px;
        cursor: pointer;
      }

      .weather-current-header-info {
        font-family: 'Roboto', sans-serif;
        font-weight: 600;

        > div {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .weather-current-temperature {
          font-size: 48px;
        }

        p {
          text-align: center;
          font-size: $fontSize30;
        }

      }

    }

    .weather-current-content {
      font-size: 13px;
      letter-spacing: -0.5px;
      overflow-x: auto;
      margin: 16px 0;

      table {
        width: 100%;
        background-color: rgba(179, 209, 255, 0.45);
        border-radius: 8px;
        border-spacing: 0;
        border-collapse: collapse;
        color: $fontColorWhite;

        thead {
          th {
            font-size: 13px;
            letter-spacing: -0.5px;
            text-align: center;
            white-space: nowrap;
            padding: 8px;
            font-weight: 500;
          }
        }

        tbody {
          tr {
            td {
              padding: 8px;
              text-align: center;
              white-space: nowrap;
            }
          }
        }

      }

    }

  }

  @include responsive(mobile) {

  }

</style>
