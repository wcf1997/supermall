<template>
  <div class="main-tab-bar">
     <tab-bar> 
       <tab-bar-item activeColor="deeppink" path="/home" >
          <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
          <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="">
          <div slot="item-name">首页</div>
       </tab-bar-item>
          <tab-bar-item activeColor="deeppink" path="/category">
          <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
           <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt="">
          <div slot="item-name">菜单</div>
       </tab-bar-item>
       <tab-bar-item activeColor="deeppink" path="/cart">
          <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="">
           <img slot="item-icon-active" src="~assets/img/tabbar/shopcart_active.svg" alt="">
          <div slot="item-name">购物车</div>
       </tab-bar-item>
       <tab-bar-item activeColor="deeppink" path="/profile">
          <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
             <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt="">
          <div slot="item-name">我的</div>
       </tab-bar-item>
       
     </tab-bar>
  </div>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar';
import TabBarItem from 'components/common/tabbar/TabBarItem';
export default {
  name: 'MainTabBar',
  components: {
     TabBar,
     TabBarItem
  }
}
</script>
<style scoped>


</style>