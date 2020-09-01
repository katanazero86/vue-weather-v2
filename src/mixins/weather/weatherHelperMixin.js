import {mapActions, mapGetters, mapMutations, mapState} from 'vuex';

const STORE_NAMESPACE = `weather`;

export default {

  computed: {
    ...mapGetters({

    }),

    ...mapState(STORE_NAMESPACE,
      ['openWeatherIconBaseUrlState', 'currentWeatherState', 'currentTimeState', 'forecastState']
    )

  },

  methods: {
    ...mapActions({
      findOpenWeatherMapCurrentWeather: `${STORE_NAMESPACE}/findOpenWeatherMapCurrentWeather`,
      findOpenWeatherMap5DayForecast: `${STORE_NAMESPACE}/findOpenWeatherMap5DayForecast`,
      setCurrentWeatherAction: `${STORE_NAMESPACE}/setCurrentWeatherAction`,
      setForecastAction: `${STORE_NAMESPACE}/setForecastAction`,
      initStateAction: `${STORE_NAMESPACE}/initStateAction`
    }),

    ...mapMutations({
      setCurrentWeather: `${STORE_NAMESPACE}/setCurrentWeather`,
      setForecast: `${STORE_NAMESPACE}/setForecast`,
      setCurrentTime: `${STORE_NAMESPACE}/setCurrentTime`,
      initState: `${STORE_NAMESPACE}/initState`,
    })
  }

};
