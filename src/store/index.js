import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
//  安装插件
Vue.use(Vuex)

// 创建一个store对象
const store = new Vuex.Store({
  state: {
    cartList: []
  },
  // mutations 唯一的摸底就是修改state中状态
  // mutations 中每个方法功能尽量单一
  mutations,
  actions,
  getters
})

// 挂载到Vue实例上
export default store;