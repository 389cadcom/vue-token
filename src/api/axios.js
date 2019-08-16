import axios from 'axios';
import qs from 'qs';
import store from '@/store'


//默认值  > 1.5.3不支付自定义值
axios.defaults = {
  baseURL: '',
  timeout: 15000,
  responseType: 'json',
  headers: {
    post: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      'X-Requested-With': 'XMLHttpRequest'
    }
  }
}

//创建实例
let instance = axios.create({
  withCredentials: false,
  retry: 2,
  retryDelay: 3000
})

//设置拦截请求头部
instance.interceptors.request.use( config => {
  if(store.state.token){
    config.headers.Authorization = `toekn ${store.state.token}`
  }
  return config
}, error => {
  console.log('请求错误处理');

  return Promise.reject(error)
})

//设置拦截响应头部
instance.interceptors.response.use( data => {

    return data;
  }, error => {
    var conf = error.config;
    if(!conf || !conf.retry) return Promise.reject(error);
  }
)

//处理响应结果
function getAxios(config){
  var promise = instance(config)

  return promise.then( res => {
    if(res && res.status == 200){
      let result = res.data;
      // console.log(res)
      if(!result.msg){
        console.log('失败处理')
      }
      return Promise.resolve(result)
    }else{
      return Promise.reject(res)
    }
  }).catch( err => {
    console.log('请求错误-->URL: ' + config.url)
    return Promise.reject(err)
  });
}

//返回接口方法
export default {
  get(url, params= {}){
    return getAxios({
      url: url,
      params: params,
    })
  },
  post(url, data= {}){
    return getAxios({
      method: 'post',
      url: url,
      data: qs.stringify(data)
    })
  }
}
