<template>
  <scroll id="aside-menu" :probeType="3">
    <div class="menu-list">
     <div class="menu-list-item" 
     v-for="(item, index) in asideItem"
     @click="itemClick(index)" :key="index"
     :class="{active: currentIndex === index}  ">
        {{item.title}}
      </div> 
     
    </div>
  </scroll>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'

export default {
  name: "AsideMenu",
  components: {
    Scroll
  },
  data(){
    return {
      currentIndex: 0
    }
  },
  props: {
    asideItem: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    itemClick(index) {
        this.currentIndex = index
        this.$emit('asideItemClick', this.currentIndex)

    }
  }
};
</script>

<style scoped>

 #aside-menu {
    background-color: #f6f6f6;
    height: calc(100vh - 44px - 49px);
    width: 100px;
    box-sizing: border-box;
  }

  .menu-list-item {
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 14px;
  }

  .menu-list-item.active {
    font-weight: 700;
    color: var(--color-highlight);
    background-color: #fff;
    border-left: 3px solid var(--color-highlight);
  }
</style>