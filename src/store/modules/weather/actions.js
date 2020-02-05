export default {
  findOpenWeatherMapWeather (context, payload) {
    try {
      return this.$axios.get();
    } catch (err) {

    }

    // return this.$axios.get(`http://api.openweathermap.org/data/2.5/weather`, { params: payload })
  },

  setCurrentWeatherAction (context, payload) {
    context.commit('setCurrentWeather', payload);
  }

};
