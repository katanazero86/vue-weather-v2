import { mapActions, mapGetters, mapMutations, mapState } from 'vuex';

export default {

  computed: {
    ...mapGetters({

    }),

    ...mapState('weather',
      ['currentWeather', 'currentTime']
    )

  },

  methods: {
    ...mapActions({
      findOpenWeatherMapCurrentWeather: 'weather/findOpenWeatherMapCurrentWeather',
      findOpenWeatherMap5DayForecast: 'weather/findOpenWeatherMap5DayForecast',
      setCurrentWeatherAction: 'weather/setCurrentWeatherAction',
      setForecastAction: 'weather/setForecastAction'
    }),

    ...mapMutations({
      setCurrentWeather: 'weather/setCurrentWeather',
      setForecast: 'weather/setForecast',
      setCurrentTime: 'weather/setCurrentTime',
      setInitState: 'weather/setInitState',
      setInitCurrentWeatherState: 'weather/setInitCurrentWeatherState',
      setInitForecastState: 'weather/setInitForecastState'
    })
  }

};
