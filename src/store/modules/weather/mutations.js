export default {
  setCurrentWeather (state, payload) {
    state.currentWeather = payload.currentWeather;
  },

  setInitState (state) {
    state.currentWeather = null;
  }
};
