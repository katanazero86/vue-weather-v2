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
        <ForecastCard :forecastList="forecastList" :openWeatherIconBaseUrl="openWeatherIconBaseUrl"/>
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
      ForecastCard : () => import('../../cards/ForecastCard'),
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

    }

  }
</style>
