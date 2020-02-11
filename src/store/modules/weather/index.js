import actions from './actions';
import mutations from './mutations';
import getters from './getters';
import state from './state';

// $store.dispatch('weather/xxx')
// $store.commit('weather/xxx')
// $store.getters('weather/xxx')
// $store.state.weather.xxx
export default {
  namespaced: true,
  actions,
  mutations,
  getters,
  state
};
