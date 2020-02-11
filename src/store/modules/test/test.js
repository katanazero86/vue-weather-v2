
const state = {
  testValue: 'test store value..'
};

const getters = {
  testValue(state, getters, rootState) {
    return state.testValue;
  }
};

const mutations = {
  setTestValue(state, payload) {
    state.testValue = payload;
  }
};

const actions = {
  setTestValue(context, payload) {
    // {state, commit, rootState}
    console.log('TEST action');

    context.commit('setTestValue', '변신!!');
  }
};

export default {state, getters, mutations, actions};
