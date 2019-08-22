import ToastComponent from './Toast';

const Plugin = {};
let $vm, timer = null;

//对象方式
Plugin.install = (Vue, pluginOptions) => {
  let Toast = Vue.extend(ToastComponent)
  //初始化
  if(!$vm){
    $vm = new Toast({
      el: document.createElement('div'),
      data() {
        return {
          show: true
        }
      },
    })
    document.body.appendChild($vm.$el)
  }

  //默认属性值
  let defaultOpts = {}
  for (const key in $vm.$options.props) {
    defaultOpts[key] = $vm.$options.props[key].default;
  }

  //挂载方法
  Vue.prototype.$toast = (text, duration = 2000) => {
    $vm.show = true
    if(text)
      $vm.text = text;

    timer = setTimeout(() => {
      $vm.show = false
      clearTimeout(timer)
      timer = false
    }, duration - 250)
  }

  //扩展方法-传递参数执行方法
  Vue.prototype.$toast.text = (text) => {
    Vue.prototype.$toast(text)
  }
  ['top', 'center', 'bottom'].forEach( type => {
    Vue.prototype.$toast[type] = (text) => {
      Vue.prototype.$toast(text, type)
    }
  })
}

//函数方式
/* const Plugin = (Vue, options) =>{
  const Toast = Vue.extend(ToastComponent)
  const $vm = new Toast()
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


