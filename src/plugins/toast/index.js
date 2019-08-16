import ToastComponent from './Toast';

const Plugin = {};
let $vm, timer = null;

//对象方式
Plugin.install = (Vue, pluginOptions) => {
  const Toast = Vue.extend(ToastComponent)
  if(!$vm){
    $vm = new Toast({
      el: document.createElement('div')
    })
    document.body.appendChild($vm.$el)
  }
  // console.log($vm.$options.props);

  var defaults = {}
  for(let key in $vm.$options.props) {
    defaults[key] = $vm.$options.props[key].default
  }
  defaults = {...defaults, ...pluginOptions}

  // 添加实例方法
  Vue.prototype.$toast = (text, duration = 2000) => {
    $vm.text = text || defaults.text
    $vm.show = true

    timer = setTimeout(() => {
      $vm.show = false
      clearTimeout(timer)
      timer = null
    }, duration)
  }

  //护展方法
  ['top', 'center', 'bottom'].forEach( type => {
    Vue.prototype.$toast[type] = (tips) => {
      Vue.prototype.$toast(tips, type)
    }
  })
}

//函数方式
/* const Plugin = (Vue, options) =>{
  const Instance = Vue.extend(ToastComponent)
  const $vm = new Instance()
  document.body.appendChild($vm.$mount().$el)

  $vm.show = true;
  timer = setTimeout(() => {
    $vm.show = false
    clearTimeout(timer)
    timer = null
  }, 2000)

}
Plugin.install = (Vue, options) =>{
  Vue.prototype.$toast = Plugin.bind(this, Vue, options)
} */


export default Plugin;


