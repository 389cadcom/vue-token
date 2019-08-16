import Hello from '@/views/Home'
import List from '@/views/List'
import Detail from '@/views/Detail'
import Edit from '@/views/Edit'
import About from '@/views/About'
import Login from '@/views/Login'

const routes = [
  {
    path: '/',
    name: 'Hello',
    component: Hello,
    meta:{
      title: '首页',
      keepAlive: true
    }
  },
  {
    path: '/list',
    name: 'List',
    component: List,
    meta: {
      title: '列表',
      keepAlive: true         //默认不缓存, 设置则不再缓存--执行beforeDestroy生命周期
    }
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail,
    meta: {
      title: '详情',
      // keepAlive: true
    }
  },
  {
    path: '/edit',
    name: 'edit',
    component: Edit,
    meta: {
      title: '编辑',
      requireAuth: true,
      keepAlive: true
    }
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      title: '无数据',
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      title: '登录',
      keepAlive: 'none'
    }
  },
]

export default routes
