export default {
  setCurrentWeather (state, payload) {
    state.currentWeather = payload.currentWeather;
  },

  setCurrentTime(state, payload) {
    state.currentTime = payload.currentTime;
  },

  setInitState (state) {
    state.currentWeather = null;
    state.currentTime = null;
  },

  setInitCurrentWeatherState (state) {
    state.currentWeather = null;
  }
};
