import Vue from 'vue'
import App from './App'
import router from './router'
import $axios from './api/axios'
import store from './store'

import Toast from './plugins/toast'
// import Toast from './plugins/toast/main'
// import Toast from './plugins/loading'

const requireComponent = require.context('./store/modules/', false, /\.js$/)
requireComponent.keys().forEach( fileName => {
  var componentName = fileName.replace(/^\.\/|\.js/g, '')
  var moduleDefault = requireComponent(fileName)
  // console.log(moduleDefault.default);

  // Vue.component(componentName, componentConfig.default || componentConfig)
})


Vue.use(Toast)
Vue.prototype.$api = $axios;
Vue.prototype.$bus = new Vue({})


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
