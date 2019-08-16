import $api from '../../api/axios'

let url = 'https://www.easy-mock.com/mock/5ae9d1dd0a492d2535b91366/hfBeam-tims-api/test'

export default {
  // namespaced: true,
  state: {
    count: 0,
    status: '',
    token: sessionStorage.getItem('token') ,
  },
  getters: {
    isLogin: state => state.token,
    authStatus: state => state.status
  },
  mutations: {
    //成功
    authSuccess(state, args){
      state.status = 'success'
      state.token = args.age
      state.user = args.userName
    },
    //退出
    logout(state){
      console.log(state);
      state.token = null
    }
  },
  actions: {
    login(context, user){
      // console.dir(context);
      let commit = context.commit;

      return $api.get(url, user).then( res => {
        commit('authSuccess', res.data)
        return res.data;
      }).catch(err => {
        // commit('authError')
        return Promise.reject(err)
      })
    },
    //退出
    logout({commit}){
      return new Promise((resolve, reject)=>{
        commit('logout');
        sessionStorage.removeItem('vuex')
        resolve()
      })
    }
  }
}
