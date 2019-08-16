import LoadingComponent from './Loading'

const Plugin = {}
let $vm, timer;

Plugin.install = (Vue, pluginOptions = {}) => {
  const Loading = Vue.extend(LoadingComponent)
  if(!$vm){
    $vm = new Loading({
      el: document.createElement('div')
    })
    document.body.appendChild($vm.$el);
  }
  let opts = pluginOptions

  Vue.prototype.$loading = (options = {}) => {
    //属性
    if (typeof options === 'string') {
      opts.text = options;
    }else if(typeof options === 'object'){
      opts = { ...opts, ...options }
    }
    for(let key in opts) {
      $vm[key] = opts[key]
    }

    timer = setTimeout(() => {
      $vm.show = true
    }, opts.delay || 0)
  }
  Vue.prototype.$loading.hide = () => {
    $vm.show = false
    clearTimeout(timer)
    timer = null
  }
}

export default Plugin;
