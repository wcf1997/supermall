<template>
  <div class="wrapper" ref="wrapper" >
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
  name: 'Scroll',
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    },
    data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click:true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })
      // 监听滚动位置
     if (this.probeType === 2 || this.probeType === 3) {
       this.scroll.on('scroll', (position) => {
        this.$emit('scroll', position)
      })
      }
      // 监听滚动到底部
     if (this.pullUpLoad) {
        this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
      })
     }
    },

  methods: {
    scrollTo(x, y, time=300) {
      // 严谨的写法
      this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time)
    },
    // 解决上拉加载事件只执行一次的问题
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp && this.scroll.finishPullUp();
    },
    // 解决可滚动距离小于实际可滚动距离的bug
    refresh() {
      this.scroll && this.scroll.refresh && this.scroll.refresh()
    },
    getScrollY() {
      return this.scroll ? this.scroll.y : 0
    }

   
    
  }

}
</script>

<style scoped>

</style>