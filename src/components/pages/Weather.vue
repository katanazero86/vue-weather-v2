<template>
  <div id="weather-wrap">

    <Dropdown dropdown-title="원하시는 도시를 선택해주세요." :dropdown-data="cityListKrJson" @select="executeOpenWeatherMapApi"/>

    <transition name="fade">
      <CurrentWeather :current-weather="currentWeather"
                      :current-time="currentTime"
                      :open-weather-icon-base-url="openWeatherIconBaseUrl"
                      @refresh="refreshOpenWeatherMapWeather"/>
    </transition>

    <transition name="fade">
      <Forecast :forecast="forecast"
                :open-weather-icon-base-url="openWeatherIconBaseUrl"
      />
    </transition>

  </div>
</template>

<script>
  import cityListKrJson from '../../../city.list.kr.json';
  import sampleCurrentWeather from '../../../sample.current.weather.json';
  import sampleForecast from '../../../sample.forecast.json';
  import weatherHelperMixin from '../../mixins/weather/weatherHelperMixin';

  const API_KEY = process.env.VUE_APP_API_KEY;

  export default {
    name: 'Weather',
    components: {
      'Dropdown': () => import('../component/Dropdown'),
      'CurrentWeather': () => import('./weather/CurrentWeather'),
      'Forecast': () => import('./weather/Forecast')
    },
    mixins: [weatherHelperMixin],

    data() {
      return {
        cityListKrJson: []
      };
    },

    created() {
      this.cityListKrJson = cityListKrJson;
    },

    methods: {

      executeOpenWeatherMapApi(targetCity) {
        // current weather data
        this.getOpenWeatherMapWeather({...targetCity});

        // 5 day / 3 hour forecast
        this.getOpenWeatherMapForecast({...targetCity});
      },

      getOpenWeatherMapForecast(targetCity) {
        const name = targetCity.name;
        const country = targetCity.country.toLowerCase();

        // q : 'Incheon,kr',
        const params = {
          q: `${name},${country}`,
          appid: API_KEY
        };

        this.setInitForecastState();

        // sample test
        this.setForecastAction({forecast: sampleForecast});

        // this.findOpenWeatherMap5DayForecast({params}).then((result) => {
        // if (result.status === 200) {
        //     console.log(result.data);
        //     this.setForecastAction({forecast: {...result.data}});
        // }
        // }).catch((err) => {
        //   console.log(err);
        //   return false;
        // });
      },

      getOpenWeatherMapWeather(targetCity) {
        const name = targetCity.name;
        const country = targetCity.country.toLowerCase();

        // q : 'Incheon,kr',
        const params = {
          q: `${name},${country}`,
          appid: API_KEY
        };

        this.setInitCurrentWeatherState();
        this.setCurrentTime({currentTime: this.$moment().tz('Asia/Seoul').format('YYYY-MM-DD(dddd) HH:mm:ss')});

        // sample test
        this.setCurrentWeatherAction({currentWeather: sampleCurrentWeather});

        // this.findOpenWeatherMapCurrentWeather({params}).then((result) => {
        //   if (result.status === 200) {
        //     console.log(result.data);
        //     this.setCurrentWeatherAction({currentWeather: {...result.data}});
        //   }
        // }).catch((err) => {
        //   console.log(err);
        //   return false;
        // });
      },

      refreshOpenWeatherMapWeather() {
        const targetCity = this.cityListKrJson.find(city => city.id === this.currentWeather.id);
        const name = targetCity.name;
        const country = targetCity.country.toLowerCase();

        // // q : 'Incheon,kr',
        const params = {
          q: `${name},${country}`,
          appid: API_KEY
        };

        this.setInitCurrentWeatherState();
        this.setCurrentTime({currentTime: this.$moment().tz('Asia/Seoul').format('YYYY-MM-DD(dddd) HH:mm:ss')});

        this.findOpenWeatherMapCurrentWeather({params}).then((result) => {
          if (result.status === 200) {
            this.setCurrentWeatherAction({currentWeather: {...result.data}});
          }
        }).catch((err) => {
          console.log(err);
          return false;
        });
      }

    }

  };
</script>

<style lang="scss" scoped>

  @import '@/assets/scss/app.scss';

  #weather-wrap {
    height: 100%;
    min-height: 81vh;
    padding: 25px 15px;
    background-color: $wrapBackgroundColor;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  @include responsive(mobile) {

  }

</style>
