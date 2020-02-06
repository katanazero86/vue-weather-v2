import axios from 'axios';

const currentWeatherApiUrl = `https://api.openweathermap.org/data/2.5/weather`;
const forecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast`;

export default {

  // https://openweathermap.org/current
  findOpenWeatherMapCurrentWeather (context, payload) {
    try {
      return axios.get(currentWeatherApiUrl, { params: payload.params });
    } catch (err) {
      return new Promise((resolve, reject) => {
        console.log('findOpenWeatherMapWeather exception..');
        reject(err);
      });
    }
  },

  // https://openweathermap.org/forecast5
  findOpenWeatherMap5DayForecast (context, payload) {
    try {
      return axios.get(forecastApiUrl, { params: payload.params });
    } catch (err) {
      return new Promise((resolve, reject) => {
        console.log('findOpenWeatherMapWeather exception..');
        reject(err);
      });
    }
  },

  setCurrentWeatherAction (context, payload) {
    context.commit('setCurrentWeather', payload);
  },

  setForecastAction (context, payload) {
    context.commit('setForecast', payload);
  }

}
