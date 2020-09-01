<template>
  <div class="wrap weather-current-wrap" v-if="currentWeather">
    <div class="weather-current-header">
      <div class="header-content">
        <h2>
          Weather in {{currentWeather.name}}
        </h2>
        <Refresh @click="refresh" color="white"/>
      </div>
      <div class="header-time">
        조회시간: {{currentTime}}
      </div>
      <div class="weather-current-header-info">
        <div>
          <img :src="`${openWeatherIconBaseUrl}/${currentWeather.weather[0].icon}@2x.png`" width="85" height="85"/>
          <span class="weather-current-temperature">{{(currentWeather.main.temp - 273.15).toFixed(1)}} °C</span>
        </div>
        <p>{{currentWeather.weather[0].main}}</p>
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
        <tr v-if="currentWeather != null">
          <td>{{currentWeather.wind.speed}} m/s | {{currentWeather.wind.deg}} deg</td>
          <td>{{currentWeather.clouds.all}} %</td>
          <td>{{currentWeather.main.pressure}} hpa</td>
          <td>{{currentWeather.main.humidity}} %</td>
          <td>{{parseTimeStampToDate(currentWeather.sys.sunrise) }}</td>
          <td>{{parseTimeStampToDate(currentWeather.sys.sunset) }}</td>
          <td>{{`[${currentWeather.coord.lat}, ${currentWeather.coord.lon}]`}}</td>
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
      'Refresh': () => import('../../icons/Refresh')
    },
    props: {
      currentWeather: {type: Object, default: null},
      currentTime: {type: String, default: ''},
      openWeatherIconBaseUrl: {type: String, default: ''}
    },

    methods: {
      refresh() {
        this.$emit('refresh');
      },

      parseTimeStampToDate(timestamp) {
        return this.$moment.unix(timestamp).tz('Asia/Seoul').format('YYYY-MM-DD HH:mm:ss');
      }
    }

  };
</script>

<style lang="scss" scoped>

  @import '@/assets/scss/app.scss';

  .weather-current-wrap {

    width: 100%;
    color : $fontColorWhite;

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
