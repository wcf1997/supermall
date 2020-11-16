<template>
  <div class="goods">
   <goods-list-item v-for="(item, index) in goods"
    :goodsItem="item" 
    :key="index"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem';

export default {
  name: 'GoodsList',
  components: {
    GoodsListItem
  },
  
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  },

}
</script>

<style scoped>
.goods {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  z-index: 0;
  padding: 2px;
  
}


</style>