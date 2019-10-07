import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 10,
  },
  getters: {
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
  },
  actions: {
    increment: ({commit}) => {
      setTimeout(() => {
        commit('increment');
      }, 5000);
    },
    decrement: ({commit}) => {
      setTimeout(() => {
        commit('decrement');
      }, 1000);
    },
  },
});
