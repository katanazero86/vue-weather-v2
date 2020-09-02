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
      findOpenWeatherMapCurrentWeatherAction: `${STORE_NAMESPACE}/findOpenWeatherMapCurrentWeatherAction`,
      findOpenWeatherMap5DayForecastAction: `${STORE_NAMESPACE}/findOpenWeatherMap5DayForecastAction`,
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
