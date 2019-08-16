import Vue from 'vue';
import Vuex from 'vuex';
import * as types from './type'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    loading: false
  },
  getters: {
    showLoading: state => state.loading
  },
  mutations: {
    [types.SHOWLOADING](state, payload) {
      state.loading = true;
    },
    [types.HIDELOADING](state, arg){
      state.loading = false
    }
  },
  actions: {
    showloader({commit}, payload) {
      commit(types.SHOWLOADING);
    },
    hideloader({commit}, payload) {

    }
  }
});
