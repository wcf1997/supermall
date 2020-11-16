import {
  ADD_COUNT,
  ADD_TO_CART
} from './mutations-type'

export default {
  [ADD_COUNT](state, payload) {
    payload.count ++;
  },
  [ADD_TO_CART](state, payload) {
    payload.checked = true
    state.cartList.push(payload)
  },
  checkAll(state, payload) {
    if (payload) {
      state.cartList.map((item, index) => {
        return item.checked = false
      })
    }else {
      state.cartList.map((item, index) => {
        return item.checked = true
      })
    }
  } 
}