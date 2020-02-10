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
            {{ parseTimeStampToDate(forecastList[0].dt) }} UTC
          </div>
          <div>
            <table>
              <tbody>
              <tr v-for="forecast in forecastList">
                <td>
                  <div class="flex-layout-nowrap align-item-center">
                    <span>{{ parseTimeStampToDateHour(forecast.dt_txt) }}</span>
                    <img :src="`${openWeatherIconBaseUrl}/${forecast.weather[0].icon}@2x.png`" width="35" height="35"/>
                  </div>
                </td>
                <td>
                  <div class="flex-layout-nowrap column align-item-center">
                    <span class="forecast-temp-badge">{{(forecast.main.temp - 273.15).toFixed(1) }} °C</span>
                    <span style="font-style: italic;">{{forecast.weather[0].description}}</span>
                  </div>
                </td>
                <td>
                  <div class="flex-layout-nowrap align-item-center">
                    <span>wind:{{forecast.wind.speed}} m/s </span>
                  </div>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </template>
    </div>

    <div>
      <TabMenu :nav-tab-menu-items="forecastNavTabMenuItems"
               :active-tab-index="activeTabIndex"
               @change="changeTabMenu"/>

      <LineChart :target-chart-data="forecast.list" :visible-chart="visibleChart"/>

    </div>

  </div>
</template>

<script>

  export default {
    name: 'Forecast',
    components: {
      TabMenu: () => import('../../component/TabMenu'),
      LineChart: () => import('../../component/charts/LineChart'),
    },
    props: {
      forecast: {type: Object, default: null},
      openWeatherIconBaseUrl: {type: String, default: ''}
    },

    data() {
      return {
        renderForecastList: null,
        forecastNavTabMenuItems: [
          {name: '온도', label: 'temperature', index: 0},
          {name: '바람', label: 'wind', index: 1}
        ],
        activeTabIndex: 0,
        visibleChart: {
          temperature: true,
          wind: false
        }
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
          } else {
            this.renderForecastList = null;
          }
        }
      },

      parseTimeStampToDate(timestamp) {
        const utcDate = this.$moment.unix(timestamp).tz('Asia/Seoul').toDate().toUTCString();
        return this.$moment.utc(utcDate).format('YYYY-MM-DD(dddd)');
      },

      parseTimeStampToDateHour(dateTimeString) {
        return this.$moment(dateTimeString).tz('Asia/Seoul').format('HH:mm');
      },

      changeTabMenu(targetItem) {
        this.activeTabIndex = targetItem.index;
        const visibleChartObj = {
          temperature: false,
          wind: false
        };
        visibleChartObj[targetItem.label] = true;
        Object.assign(this.visibleChart, visibleChartObj);
      }

    }

  }
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
          padding: 5px;
        }

        table {
          height: 100%;
          width: 100%;
          font-size: 13px;
          letter-spacing: -0.3px;

          tr {
            width: 100%;
          }

          td {
            padding: 5px;
          }

        }

        .forecast-temp-badge {
          background-color: #4e4d4a;
          border-radius: 10px;
          color: $fontColorWhite;
          padding: 3px 5px;
        }

      }
    }

  }

  @include responsive(mobile) {

  }

</style>
