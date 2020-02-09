import axios from 'axios';

const weatherApiBaseUrl = `https://api.openweathermap.org/data/2.5`;

export default {

  // https://openweathermap.org/current
  // https://api.openweathermap.org/data/2.5/weather
  findOpenWeatherMapCurrentWeather (context, payload) {
    try {
      return axios.get(`${weatherApiBaseUrl}/weather`, { params: payload.params });
    } catch (err) {
      return new Promise((resolve, reject) => {
        console.log('findOpenWeatherMapWeather exception..');
        reject(err);
      });
    }
  },

  // https://openweathermap.org/forecast5
  // https://api.openweathermap.org/data/2.5/forecast
  findOpenWeatherMap5DayForecast (context, payload) {
    try {
      return axios.get(`${weatherApiBaseUrl}/forecast`, { params: payload.params });
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
