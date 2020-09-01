import axios from 'axios';

const weatherApiBaseUrl = `https://api.openweathermap.org/data/2.5`;

export default {

  // https://openweathermap.org/current
  // https://api.openweathermap.org/data/2.5/weather
  async findOpenWeatherMapCurrentWeather({commit, dispatch, getters, rootGetters, rootState, state}, payload) {
    try {
      const result = await axios.get(`${weatherApiBaseUrl}/weather`, {params: payload.params});
      if (result.status === 200) {
        dispatch(`setCurrentWeatherAction`, {currentWeather: {...result.data}});
      } else {
        throw(`${result.status} : error`);
      }
    } catch (err) {
      return new Promise((resolve, reject) => {
        console.log('findOpenWeatherMapCurrentWeather exception..');
        reject(err);
      });
    }
  },

  // https://openweathermap.org/forecast5
  // https://api.openweathermap.org/data/2.5/forecast
  async findOpenWeatherMap5DayForecast({commit, dispatch, getters, rootGetters, rootState, state}, payload) {
    try {
      const result = await axios.get(`${weatherApiBaseUrl}/forecast`, {params: payload.params});
      if(result.status === 200) {
        dispatch(`setForecastAction`, {forecast: {...result.data}});
      } else {
        throw(`${result.status} : error`);
      }
    } catch (err) {
      return new Promise((resolve, reject) => {
        console.log('findOpenWeatherMap5DayForecast exception..');
        reject(err);
      });
    }
  },

  setCurrentWeatherAction({commit, dispatch, getters, rootGetters, rootState, state}, payload) {
    commit('setCurrentWeather', payload);
  },

  setForecastAction({commit, dispatch, getters, rootGetters, rootState, state}, payload) {
    commit('setForecast', payload);
  },

  initStateAction({commit, dispatch, getters, rootGetters, rootState, state}, payload) {
    commit(`initState`);
  },


};
