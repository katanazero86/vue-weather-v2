<template>
  <div id="weather-wrap">

    <div class="weather-dropdown-wrap">
      <div class="dropdown-select" @click="toggleDropdown = !toggleDropdown">
        <p>원하시는 도시를 선택해주세요.</p>
        <font-awesome-icon icon="angle-up" class="dropdown-arrow-up" v-if="toggleDropdown"/>
        <font-awesome-icon icon="angle-down" class="dropdown-arrow-down" v-else/>
      </div>
      <div class="dropdown-content" v-if="toggleDropdown">
        <ul>
          <li>서울</li>
          <li>인천</li>
          <li>ㅇㅇ</li>
        </ul>
      </div>
    </div>

    <div class="weather-current-wrap">
      <div class="weather-current-header">
        <h3>
          Weather in
        </h3>
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
                <td>{{currentWeather.wind}}</td>
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

<!--    {{currentWeather}}-->
  </div>
</template>

<script>

    import * as moment from 'moment-timezone';

    const API_KEY = process.env.VUE_APP_API_KEY;

    export default {
        name: 'Weather',

        data() {
            return {
              currentWeather : null,
                toggleDropdown : false,
            }
        },

        mounted() {
            // console.log(API_KEY);
            this.getWeatherInfo();

            // console.log(moment);
        },

        methods: {
          getWeatherInfo() {

              const param = {
                  q : 'Incheon,kr',
                  appid : API_KEY
              }

              this.$axios.get(`http://api.openweathermap.org/data/2.5/weather`, {params : param})
                  .then((result) => {
                      this.currentWeather = result.data;
                  }).catch((err) => {
                    console.log(err);

              });
          },

            changeTimeStampToDate(timestamp) {
              // console.log(moment(timestamp*1000).tz('Asia/Seoul').format('YYYY-MM-DD HH:mm:ss'));
              return moment(timestamp*1000).tz('Asia/Seoul').format('YYYY-MM-DD HH:mm:ss');
            }

        },

    }
</script>

<style lang="scss" scoped>

  @import '@/assets/scss/app.scss';

  #weather-wrap {
    height: 100%;
    padding: 20px;
    background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .weather-dropdown-wrap {

    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
    width: 100%;
    padding: 5px;

    .dropdown-select {

      cursor: pointer;
      border: solid 1px #e7e7e7;
      background-color: #ffffff;
      padding: 0 10px;
      height: 42px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      p {
        margin: 0;
      }

      .dropdown-arrow-down {
          /*margin-left: 10px;*/
      }
      .dropdown-arrow-up {
        /*margin-left: 10px;*/
      }
    }


    .dropdown-content {
      position: absolute;
      top: 48px;
      left: 5px;
      right: 5px;
      border: solid 1px #e7e7e7;
      background-color: #ffffff;
      padding: 10px;
      margin: 0;

      ul {
        margin: 0;
        padding: 0;

        li {
          margin: 0;
          padding: 5px 0;
          list-style: none;
          cursor: pointer;
        }

        li:hover {
          background: #f8f8f8;
        }

      }


    }

  }


  .weather-current-wrap {
    padding: 10px;

    .weather-current-content {
      font-size: 13px;
      letter-spacing: -0.5px;
    }

  }


  @include responsive(mobile) {
    /*
    .weather-current-wrap {

      padding: 10px;

      .weather-current-content {
        font-size: 12px;
        letter-spacing: -0.5px;
        text-overflow: ellipsis;
      }

    }

     */
  }

</style>
