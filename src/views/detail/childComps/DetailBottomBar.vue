<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addClick">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBottomBar',
  methods: {
    addClick() {
     this.$emit('addCart')
    }
  }
}
</script>

<style scoped>
.bottom-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 58px;
  background-color: #fff;
  display: flex;
  text-align: center;
  box-shadow: 0 -1px 1px #efefef;
}
.bar-item {
  flex: 1;
  display: flex;
}
.bar-item>div {
  flex:1 ;
}
.bar-left .icon {
  display: block;
  width: 22px;
  height: 22px;
  margin: 10px auto 5px;
  background: url('~assets/img/detail/detail_bottom.png')0 0 / 100%;
}
.bar-left .service {
  background-position: 0 -54px;
}
.bar-left .shop {
  background-position: 0 -98px;
}
.bar-left .select {
  background-position: 0 -150 px;
}
.bar-left .text {
  color: #212121;
  font-size: 16px;
  margin-top: 15px;

}
.bar-right {
  display: flex;
}
.bar-right>div {
  flex: 1;
  text-align: center;
  line-height: 58px;
  color: #000;
  font-size: 16px;
}
.bar-right .cart {
  background-color: rgb(255,222,15);
}
.bar-right .buy {
  background-color: rgb(255,120,152);
  color: #fff;
}
</style>