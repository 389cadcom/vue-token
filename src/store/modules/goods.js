export default {
  state: {
    goodsList: localStorage["goodsList"] ? JSON.parse(localStorage["goodsList"]) : []
  },
  getters: {
    sum: state => {
      var total = 0;
      state.goodsList.forEach((item) => {
        if (item.select) {
          total += item.price * item.number
        }
      })
      return total
    },
    goddsNumber: state => {
      return state.goodsList.length
    }
  },
  mutations: {
    //添加
    addGoods: (state, data) => {
      state.goodsList.push(data);
      localStorage.setItem("goodsList", JSON.stringify(state.goodsList));
    },
    //删除
    deleteGoods(state, index) {
      state.goodsList.splice(index, 1);
      localStorage.setItem("goodsList", JSON.stringify(state.goodsList));
    },
    //更新
    updateGoods(state, data) {
      const { index, key, value } = data;
      state.goodsList[index][key] = value;
      localStorage.setItem("goodsList", JSON.stringify(state.goodsList));
    }
  }
}
