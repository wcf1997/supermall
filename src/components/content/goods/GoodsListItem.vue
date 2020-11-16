<template>
  <div class="goods-item" @click="itemClick">
    <img :src="showImages" alt="" @load="imageLoad">
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    showImages() {
 
      return this.goodsItem.img || this.goodsItem.show.img 
    }
  }
  ,
  methods: {
    imageLoad() {
        this.$bus.$emit('itemImageLoad')
    // 解决首页与详情页i面公用一个GoodsList的时候会触发首页的imgload事件
    // 1. 利用路由监听路径
    //  if (this.$route.path.indexOf('/home') !== -1) {
    //     this.$bus.$emit('homeItemImageLoad')
    //  } else if (this.$route.path.indexOf('/detail') !== -1){
    //    this.$bus.$emit('detailItemImageLoad')
    //  }


    },
    itemClick() {
      this.$router.push('/detail/' + this.goodsItem.iid)
    }
  }
}
</script>
<style scoped>
.goods-item {
  padding-bottom: 40px;
  position: relative;
  width: 47%;
 

}
.goods-item img {
  width: 100%;
  border-radius: 5px;
}
.goods-info {
  
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-info .price {
  color: var(--color-highlight);
  margin-right: 20px;
}
.goods-info .collect {
 
  position: relative;
}
.goods-info .collect::before {
  content: '';
  position: absolute;
  left: -15px;
  top:-1px;
  width: 14px;
  height: 14px;
  background: url('~assets/img/common/collect.svg')no-repeat 0 0/ 14px 14px;
}
</style>