import {mapActions, mapGetters, mapMutations, mapState} from 'vuex';

const STORE_NAMESPACE = `weather`;

export default {

  computed: {
    ...mapGetters({

    }),

    ...mapState(STORE_NAMESPACE,
      ['openWeatherIconBaseUrl', 'currentWeather', 'currentTime', 'forecast']
    )

  },

  methods: {
    ...mapActions({
      findOpenWeatherMapCurrentWeather: `${STORE_NAMESPACE}/findOpenWeatherMapCurrentWeather`,
      findOpenWeatherMap5DayForecast: `${STORE_NAMESPACE}/findOpenWeatherMap5DayForecast`,
      setCurrentWeatherAction: `${STORE_NAMESPACE}/setCurrentWeatherAction`,
      setForecastAction: `${STORE_NAMESPACE}/setForecastAction`,
    }),

    ...mapMutations({
      setCurrentWeather: `${STORE_NAMESPACE}/setCurrentWeather`,
      setForecast: `${STORE_NAMESPACE}/setForecast`,
      setCurrentTime: `${STORE_NAMESPACE}/setCurrentTime`,
      setInitState: `${STORE_NAMESPACE}/setInitState`,
      setInitCurrentWeatherState: `${STORE_NAMESPACE}/setInitCurrentWeatherState`,
      setInitForecastState: `${STORE_NAMESPACE}/setInitForecastState`,
    })
  }

};
