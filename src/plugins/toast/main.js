import ToastComponent from './Toast';

const Plugin = {};
let $vm, timer = null;

//对象方式
Plugin.install = (Vue, pluginOptions = {}) => {
  const Toast = Vue.extend(ToastComponent)
  if(!$vm){
    $vm = new Toast({
      el: document.createElement('div')
    })
    document.body.appendChild($vm.$el)
  }
  var defaults = { }
  for(let key in $vm.$options.props){
    defaults[key] = $vm.$options.props[key].default
  }
  //合并插件全局属性
  defaults = {...defaults, ...pluginOptions}

  // 添加实例方法
  Vue.prototype.$toast = (options = {}) => {
    if (typeof options === 'string') {
      defaults.text = options;
    }else if(typeof options === 'object'){
      defaults = { ...defaults, ...options }
    }
    //重置实例props属性
    for(let key in defaults) {
      $vm[key] = defaults[key]
    }

    $vm.show = true
    timer = setTimeout(() => {
      $vm.show = false
      clearTimeout(timer)
      timer = null
    }, defaults.time)
  }

  //扩展方法
  Vue.prototype.$toast.text = (text, position = 'default') => {
    Vue.prototype.$toast({text, position})
  }
}

export default Plugin;


