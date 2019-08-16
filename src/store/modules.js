//自动注册Vuex模块

const requireModules = require.context('./modules', false, /\.js$/)
const modules = {}

requireModules.keys().forEach( fileName => {
  var name = fileName.replace(/^\.\/|\.js$/g, '')
  modules[name] = {
    namespaced: true,
    ... requireModules[fileName].default
  }
})

export default modules
