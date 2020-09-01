export default {
  setCurrentWeather(state, payload) {
    state.currentWeatherState = payload.currentWeather;
  },

  setForecast(state, payload) {
    state.forecastState = payload.forecast;
  },

  setCurrentTime(state, payload) {
    state.currentTimeState = payload.currentTime;
  },

  initState(state) {
    state.currentWeatherState = null;
    state.forecastState = null;
    state.currentTimeState = null;
  },

};
