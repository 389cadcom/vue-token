import Vue from 'vue';
import VueRouter from 'vue-router';

import routes from './routes';
import store from '../store'

Vue.use(VueRouter);

const router = new VueRouter({
  base: '/',
  mode: 'history',
  routes
})

//全局路由控制
router.beforeEach((to, from, next)=>{
  //需授权
  if(to.matched.some( record => record.meta.requireAuth)){
    if (store.getters.isLogin) {
      //登陆之后会从后台获取到当前用户的权限数组
      next()
      return
      //没有权限列表先获取
      if(!store.state.permissionList){
        store.dispatch('getPermissionList', next())
      }else{
        var userAllPermission = store.getters.userAllPermission
        var isExist = userAllPermission.includes( item => to.name == item.name )

        //有当前路由的权限才进入，否则404
        if(isExist){
          next()
        }else{
          next('/404')
        }
      }
    }else{
      next({
        path: '/login',
        query: {redirect: to.path}
      })
    }
  }else{
    if(to.path !='/login'){
      next()
    }else{
       /*有token不再进去登录页, 回到之前的页面 */
      if(store.state.user.token){
        next(from.path)
      }else{
        next()
      }
    }
  }
})


export default router
