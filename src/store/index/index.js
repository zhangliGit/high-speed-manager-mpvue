import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations.js'
Vue.use(Vuex)
export default new Vuex.Store({
  // 用来存储数据
  state: {
    name: 'zhangli'
  },
  // 用来对数据做处理, 类似vue实例中的computed
  getters: {
  },
  // 用来处理异步事件
  actions: {
  },
  // 用来设置state的值
  mutations
})
