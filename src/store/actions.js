import {
  ADD_COUNT,
  ADD_TO_CART
} from './mutations-type'
export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
        // 遍历 商品列表如果商品已存在则赋值给oldProduct
    let oldProduct = context.state.cartList.find(function (item) {
      return item.iid === payload.iid
    })
    // 如果商品已经存在 让已存在的商品数量加一 否则添加新商品
    if (oldProduct) {
      context.commit(ADD_COUNT, oldProduct)
      resolve('当前商品数量+1')
    } else {
      // 添加商品
      payload.count = 1
      context.commit(ADD_TO_CART, payload)
      resolve('当前商品添加成功!')
    }
    })
  }
}