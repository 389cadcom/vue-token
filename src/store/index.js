import Vue from 'vue';
import Vuex from 'vuex'
import persistedstate from 'vuex-persistedstate';

import user from './modules/user'
import root from './modules/root';

Vue.use(Vuex)

let store = new Vuex.Store({
  modules: {
    user,
    root
  },
  //插件--persistedstate
  plugins: [
    persistedstate({
      storage: window.sessionStorage,
      reducer(val) {
        return {
          user: val.user
        }
      }
    })
  ]
})

export default store;
