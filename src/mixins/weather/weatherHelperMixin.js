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
      findOpenWeatherMapWeather: 'weather/findOpenWeatherMapWeather',
      setCurrentWeatherAction: 'weather/setCurrentWeatherAction'
    }),

    ...mapMutations({
      setCurrentWeather: 'weather/setCurrentWeather',
      setCurrentTime: 'weather/setCurrentTime',
      setInitState: 'weather/setInitState',
      setInitCurrentWeatherState: 'weather/setInitCurrentWeatherState'
    })
  }

};
