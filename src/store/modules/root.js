const state = {
  root: 'root',
  count: 10,
  goods: localStorage["goods"] ? JSON.parse(localStorage["goods"]): []
}

const getters = {
  isRoot: state => {
    return state.root == 'root';
  },
  isCount: state => state.count < 10
}

//vuex-persistedstate
const mutations = {
  addGoods(state, data){
    state.goods.push(data);

    localStorage.setItem("goods",JSON.stringify(state.goods));
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,

  //嵌套模块
  modules: {
    mypage: {
      state: {
        pageIndex: 1,
        pageSize:  10
      }
    }
  }
}
