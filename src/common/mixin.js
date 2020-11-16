// vue 中的混入 解决组件中代码复用的问题
// 生命周期中函数会与应用中组件中的生命周期函数合并
// 如果是方法则会覆盖
import {
  debounce
} from 'common/utils'
import BackTop from "components/content/backTop/BackTop";
import {POP, NEW, SELL} from './const'
export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null,
      refresh: null,
      
    }
  },
 
  mounted() {
    // 1. 图片加载完成的事件监听
    this.refresh = debounce(this.$refs.scroll.refresh, 100);
    this.itemImgListener = () => {
      this.refresh()
    }
    this.$bus.$on("itemImageLoad", this.itemImgListener);
    // 2. 获取tabControl的offset
    // 所有的组件都有一个$el: 用于获取组件中的元素
    // console.log(this.$refs.tabControl.$el);
  }
}
export const tabControlMixin = {
  data: function () {
    return {
      currentType: POP
    }
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = POP
          break
        case 1:
          this.currentType = NEW
          break
        case 2:
          this.currentType = SELL
          break
      }
      console.log(this.currentType);
    }
  }
}

export const  backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    // 控制返回首页的显示
   backTop() {
     this.$refs.scroll.scrollTo(0,0,300)
   }
  },
}