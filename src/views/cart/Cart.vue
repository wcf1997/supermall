<template>
  <div class="cart">
    <nav-bar class="nar-bar">
      <div slot="center">购物车({{ length || 0 }})</div>
    </nav-bar>
    <cart-list  />
    <cart-bottom-bar />
    
  </div>
</template>

<script>

import CartList from './childComps/CartList'
import CartBottomBar from './childComps/CartBottomBar'


import NavBar from 'components/common/navbar/NavBar'
import {mapGetters} from 'vuex'


export default {
  name: 'Cart',
  components: {
    NavBar,
    CartList,
    CartBottomBar,
 

  },
  computed: {
    // 写法一: 调用的时候只需要写cartLength
    // ...mapGetters(['cartLength'])
    // 写法二：自定义名字调用
    ...mapGetters({
      length: 'cartLength'
    })
  }
}
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  
}

</style>