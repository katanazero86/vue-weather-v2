export default {
  setCurrentWeather (state, payload) {
    state.currentWeather = payload.currentWeather;
  },

  setForecast (state, payload) {
    state.forecast = payload.forecast;
  },

  setCurrentTime (state, payload) {
    state.currentTime = payload.currentTime;
  },

  setInitState (state) {
    state.currentWeather = null;
    state.forecast = null;
    state.currentTime = null;
  },

  setInitCurrentWeatherState (state) {
    state.currentWeather = null;
  },

  setInitForecastState (state) {
    state.forecast = null;
  }
};
