<template>
  <div id="weather-wrap">

    <Dropdown dropdown-title="원하시는 도시를 선택해주세요." :dropdown-data="cityListKrJson" @select="selectCity"/>

    <transition name="fade">
      <CurrentWeather :currentWeatherState="currentWeatherState"
                      :currentTimeState="currentTimeState"
                      :openWeatherIconBaseUrlState="openWeatherIconBaseUrlState"
                      @refresh="refreshWeather"/>
    </transition>

    <transition name="fade">
      <Forecast :forecastState="forecastState"
                :openWeatherIconBaseUrlState="openWeatherIconBaseUrlState"/>
    </transition>

  </div>
</template>

<script>
  import cityListKrJson from '../../../city.list.kr.json';
  import weatherHelperMixin from '../../mixins/weather/weatherHelperMixin';

  const API_KEY = process.env.VUE_APP_API_KEY;

  export default {
    name: 'Weather',

    components: {
      'Dropdown': () => import('../../components/dropdown/Dropdown'),
      'CurrentWeather': () => import('../../components/pages/weather/CurrentWeather'),
      'Forecast': () => import('../../components/pages/weather/Forecast')
    },

    mixins: [weatherHelperMixin],

    data() {
      return {
        cityListKrJson: [],
        selectedCity: null,
      };
    },

    created() {
      this.cityListKrJson = cityListKrJson;
    },

    mounted() {
      document.getElementById('app').scrollTop = 0;
    },

    beforeDestroyed() {
      this.initStateAction();
    },

    methods: {

      selectCity(targetCity) {

        this.selectedCity = {...targetCity};
        this.initStateAction();
        // current weather data
        this.getOpenWeatherMapWeather({...targetCity});
        // 5 day / 3 hour forecast
        this.getOpenWeatherMapForecast({...targetCity});
      },

      makeOpenWeatherMapParams(targetCity) {
        // q : 'Incheon,kr',
        return {
          q: `${targetCity.name},${targetCity.country.toLowerCase()}`,
          appid: API_KEY,
        }
      },

      getOpenWeatherMapWeather(targetCity) {
        const params = this.makeOpenWeatherMapParams(targetCity);
        this.setCurrentTime({currentTime: this.$moment().tz('Asia/Seoul').format('YYYY-MM-DD(dddd) HH:mm:ss')});
        this.findOpenWeatherMapCurrentWeather({params}).catch(err => console.log(err));
      },

      getOpenWeatherMapForecast(targetCity) {
        const params = this.makeOpenWeatherMapParams(targetCity);
        this.findOpenWeatherMap5DayForecast({params}).catch(err => console.log(err));
      },

      refreshWeather() {
        this.getOpenWeatherMapWeather({...this.selectedCity});
        this.getOpenWeatherMapForecast({...this.selectedCity});
      },

    },

  }
</script>

<style lang="scss" scoped>

  @import '@/assets/scss/app.scss';

  #weather-wrap {
    min-height: 100%;
    padding: 12px;
    background-color: $bgBodyColor;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

</style>
