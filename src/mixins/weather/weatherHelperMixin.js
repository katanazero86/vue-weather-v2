import { mapActions, mapGetters, mapMutations, mapState } from 'vuex';

export default {

  computed: {
    ...mapGetters({

    }),

    ...mapState('weather',
      ['currentWeather']
    )

  },

  methods: {
    ...mapActions({
      findOpenWeatherMapWeather: 'weather/findOpenWeatherMapWeather',
      setCurrentWeatherAction: 'weather/setCurrentWeatherAction'
    }),

    ...mapMutations({
      setCurrentWeather: 'weather/setCurrentWeather',
      setInitState: 'weather/setInitState'
    })
  }

};
