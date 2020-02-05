<template>
  <div id="weather-wrap">

    <Dropdown dropdown-title="원하시는 도시를 선택해주세요." :dropdown-data="cityListKrJson" @select="getOpenWeatherMapWeather"/>

    <div class="weather-current-wrap">
      <div class="weather-current-header">
        <div class="header-content">
          <h3>
            Weather in {{selectedName}}
          </h3>
          <template v-if="selectedName">
            <Refresh @click="refreshWeatherInfo"/>
          </template>
        </div>
        <div v-if="currentWeather != null">
          <h4>
            {{currentWeather.weather[0].main}}
            <img :src="`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`" width="55" height="55"/>
            <span>{{(currentWeather.main.temp - 273.15).toFixed(1)}} °C</span>
          </h4>
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
                <td>{{currentWeather.clouds}}</td>
                <td>{{currentWeather.main.pressure}} hpa</td>
                <td>{{currentWeather.main.humidity}} %</td>
                <td>{{changeTimeStampToDate(currentWeather.sys.sunrise) }}</td>
                <td>{{changeTimeStampToDate(currentWeather.sys.sunset) }}</td>
                <td>{{`[${currentWeather.coord.lat}, ${currentWeather.coord.lon}]`}}</td>
              </tr>
            </tbody>
          </table>
      </div>
    </div>

    <!--{{currentWeather}}-->

  </div>
</template>

<script>
    import cityListKrJson from '../../../city.list.kr.json';
    import * as moment from 'moment-timezone';
    import weatherHelperMixin from '../../mixins/weather/weatherHelperMixin';

    const API_KEY = process.env.VUE_APP_API_KEY;

    export default {
      name: 'Weather',
      components: {
         'Dropdown': () => import('../component/Dropdown'),
         'Refresh': () => import('../component/icon/Refresh')
        },
      mixins: [weatherHelperMixin],

        data () {
            return {
              cityListKrJson: []
            };
        },

        created () {
            this.cityListKrJson = cityListKrJson;
        },

        methods: {

          getOpenWeatherMapWeather (targetCity) {

            const name = targetCity.name;
            const country = targetCity.country.toLowerCase();

            // // q : 'Incheon,kr',
            const params = {
              q: `${name},${country}`,
              appid: API_KEY
            };

            this.findOpenWeatherMapWeather({ params }).then((result) => {
              console.log(result);
            }).catch((err) => {
              console.log(err);
              return false;
            });
          },

          // refreshWeatherInfo () {
          //   const param = {
          //     // q : 'Incheon,kr',
          //     q: `${this.selectedName},${this.selectedCountry}`,
          //     appid: API_KEY
          //   };
          //
          //   this.$axios.get(`http://api.openweathermap.org/data/2.5/weather`, { params: param })
          //     .then((result) => {
          //       this.currentWeather = result.data;
          //     }).catch((err) => {
          //     console.log(err);
          //   });
          // },

            changeTimeStampToDate (timestamp) {
              return moment(timestamp * 1000).tz('Asia/Seoul').format('YYYY-MM-DD HH:mm:ss');
            }

        }

    };
</script>

<style lang="scss" scoped>

  @import '@/assets/scss/app.scss';

  #weather-wrap {
    height: 100%;
    padding: 25px 15px;
    background-color: $bgColor1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  .weather-current-wrap {
    padding: 10px;
    width: 100%;
    max-width: 1024px;

    .weather-current-header {

      .header-content {
        display: inline-flex;
        align-items: center;
      }

      h3 {
        font-size: 22px;
        font-weight: 600;
      }

      svg {
        padding: 10px;
        width: 25px;
        height: 25px;
        cursor: pointer;
      }

    }

    .weather-current-content {
      font-size: 13px;
      letter-spacing: -0.5px;
      overflow-x: auto;

      table {
        width: 100%;
        border-spacing: 0;
        border-collapse: collapse;
        thead {
          th {
            font-size: 13px;
            letter-spacing: -0.5px;
            text-align: center;
            font-family: "Sunflower";
            background-color: $bgColor2;
            white-space: nowrap;
            padding: 8px;
            color: white;
          }
        }

        tbody {
          tr {
            td {
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
