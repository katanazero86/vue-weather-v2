<template>
  <div class="wrap weather-forecast-wrap" v-if="forecast">
    <div class="weather-forecast-header">
      <div class="header-content">
        <h2>
          Hourly weather and forecasts in {{ forecast.city.name }}
        </h2>
      </div>
    </div>
    <div class="flex-layout-wrap row align-item-start justify-content-between weather-forecast-content">
      <template v-for='(forecastList, index) in renderForecastList'>
        <div class="col-6 col-xs-12 forecast-card-wrap">
          <div class="forecast-card-body">
            <div class="forecast-card-header">
              {{ parseTimeStampToDate(forecastList[0].dt) }}
            </div>
            <table>
              <tbody>
              <tr v-for="(forecast, index) in forecastList">
                <td>
                  <div class="flex-layout-nowrap align-item-center">
                    <div class="col-6">
                      <span>{{ parseTimeStampToDateHour(forecast.dt_txt) }}</span><br/>
                      <span> {{forecast.weather[0].description}}</span>
                    </div>
                    <div class="flex-layout-nowrap align-item-center col-6">
                      <img :src="`${openWeatherIconBaseUrl}/${forecast.weather[0].icon}@2x.png`" width="50" height="50"/>
                      <span>{{(forecast.main.temp - 273.15).toFixed(1) }} °C</span>
                    </div>
                  </div>
                </td>
                <td>
                    <p style="text-align: center">풍속 : {{forecast.wind.speed}} m/s </p>
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
      TabMenu: () => import('../../tabmenu/TabMenu'),
      LineChart: () => import('../../charts/LineChart')
    },
    props: {
      forecast: {type: Object, default: null},
      openWeatherIconBaseUrl: {type: String, default: ''}
    },

    computed: {
      renderForecastList() {
        if (this.forecast) {
          const resultForecastList = [];
          const targetForecast = {...this.forecast};

          const dtTxt = targetForecast.list.map(forecast => forecast.dt_txt.split(' ')[0]);
          const dtTxtSet = new Set(dtTxt);

          dtTxtSet.forEach(dtTxt => {
            const resultForecastFilter = targetForecast.list.filter(forecast => forecast.dt_txt.split(' ')[0] === dtTxt);
            resultForecastList.push(resultForecastFilter);
          });

          return resultForecastList;

        }

        return [];
      },
    },

    data() {
      return {
        // renderForecastList: null,
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

    methods: {

      parseTimeStampToDate(timestamp) {
        const utcDate = this.$moment.unix(timestamp).tz('Asia/Seoul').toDate().toUTCString();
        return this.$moment.utc(utcDate).format('YYYY-MM-DD dddd');
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

  };
</script>

<style lang="scss" scoped>

  @import '@/assets/scss/app.scss';

  .weather-forecast-wrap {

    width: 100%;

    .weather-forecast-header {

      .header-content {
          color : $fontColorWhite;
      }

    }

    .weather-forecast-content {

      .forecast-card-wrap {
        padding: 8px 0;
        width: 100%;
        max-width: 485px;

        @media all and (max-width: 1024px) {
          max-width: none;
        }

        .forecast-card-body {

          .forecast-card-header {
            background-color: rgba(179, 209, 255, 0.45);
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
            font-size: $fontSize13;
            font-weight: 600;
            padding: 4px;
            color: $fontColorWhite;
          }

          .forecast-temp-badge {
            background-color: #4e4d4a;
            border-radius: 12px;
            color: $fontColorWhite;
            padding: 2px 4px;
          }
        }

        table {
          background: rgba(242, 245, 255, 0.85);
          height: 100%;
          width: 100%;
          font-size: $fontSize13;
          letter-spacing: -0.2px;
          border-collapse: collapse;
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
          color : #303030;
          padding: 4px;

          tr {
            width: 100%;
            border-bottom: 1px solid #c8d0de;
          }

          tr:last-child {
            border-bottom: none;
          }

          td {
            padding: 4px;
            border-right: 1px solid #c8d0de;
          }

          td:last-child {
            border-right: none;
          }

        }

      }
    }

  }
</style>
