<template>
  <div>
    <grid-view :cols="2" v-if="Object.keys(detailItem).length != 0">

        <goods-item v-for="(item, index) in detailItem" :key="index" 
        :goods-item="item" >
        </goods-item>
    
    </grid-view>
  </div>
</template>

<script>
import GridView from "components/common/gridView/GridView";
import GoodsItem from "components/content/goods/GoodsListItem";
export default {
  name: "CategoryDetail",
  components: {
    GridView,
    GoodsItem,
  },
  props: {
    detailItem: {
      type: Array,
      default() {
        return []
      },
    },
  },
};
</script>

<style scoped>
</style>