export default {
  setCurrentWeather(state, payload) {
    state.currentWeather = payload.currentWeather;
  },

  setForecast(state, payload) {
    state.forecast = payload.forecast;
  },

  setCurrentTime(state, payload) {
    state.currentTime = payload.currentTime;
  },

  initState(state) {
    state.currentWeather = null;
    state.forecast = null;
    state.currentTime = null;
  },

};
