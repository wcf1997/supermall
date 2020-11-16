<template>
  <div class="tab-bar-item" @click="itemClick">
    <div  v-if="!isActive"> <slot name="item-icon"></slot></div>
   <div v-else> <slot name="item-icon-active"></slot></div>
    <div  :style="activeStyle">
     <slot name="item-name"></slot>
    </div>
   
    
    <!-- <img src="../../assets/img/tabbar/home.svg" alt="">
    <div>首页</div> -->
  </div>
</template>

<script>

export default {
  name: "TabBarItem",
  data() {
    return {
      // isActive: false,
      
    }
   
  },
  props: {
     path: String,
     activeColor: {
       type: String,
       default: ' rgb(243, 47, 80)'
     }
    },

  methods: {
    itemClick() {
      if (this.$route.path != this.path)  this.$router.push(this.path);
   
    
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  }

}
</script>

<style>

.tab-bar-item{
  flex: 1;
  text-align: center;
  font-size: 14px;
}
.tab-bar-item img{
  width: 23px;
  height: 23px;
  margin-top: 3px;
  font-size: 0;
  /* 取出图片下面的默认的三像素 */
  vertical-align: middle;
  margin-bottom: 2px;
}
</style>