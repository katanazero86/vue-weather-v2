import axios from 'axios';

export default {
  findOpenWeatherMapWeather (context, payload) {
    try {
      return axios.get(`http://api.openweathermap.org/data/2.5/weather`, { params: payload.params });
    } catch (err) {
      return new Promise((resolve, reject) => {
        console.log('findOpenWeatherMapWeather exception..');
        reject(err);
      });
    }
  },

  setCurrentWeatherAction (context, payload) {
    context.commit('setCurrentWeather', payload);
  }

};
