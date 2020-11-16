<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">主页</div>
    </nav-bar>
    <tab-control :titles="['流行','新款','新型']" 
                  @tabClick="tabClick"
                  class="tab-control2"
                  v-show="isTabFixed"
                  ref="tabControl1"
      ></tab-control>
    <scroll class="content" ref="scroll"
            :probeType="3"
            @scroll="contentscroll" 
            :pull-up-load="true"
            @pullingUp="loadMore">
      <home-swiper :banners="banners"
                   @swiperImageLoad="swiperImageLoad"
                   ref="home-siwper"
      ></home-swiper>
      <home-recommend-view :recommends="recommends"></home-recommend-view>
      <feature-view></feature-view>
      <tab-control :titles="['流行','新款','新型']" 
                  class="tab-control" 
                  @tabClick="tabClick"
                  ref="tabControl2"
                  ></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backTop" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
// 公共组件
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import Scroll from "components/common/scroll/Scroll";

// 主页组件
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommendView from "./childComps/HomeRecommendView";
import FeatureView from "./childComps/FeatureView";
import GoodsList from "components/content/goods/GoodsList";


// 主页数据
import { getHomeMultidata, getHomeGoods } from "network/home";

// 工具库
import { debounce } from 'common/utils.js'
import { itemListenerMixin, backTopMixin} from "common/mixin";


export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,

  },
  mixins: [itemListenerMixin, backTopMixin],
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      tabOffsettop:0,
      isTabFixed: false,
      saveY: 0,
    
    };
  },
  created() {
    // 请求数据
    this.getHomeMultidata(),
      // 请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
    // 接收事件总线传来的事件
  },
  mounted() {
  // // 1. 图片加载完成的事件监听
  //   const refresh = debounce( this.$refs.scroll.refresh, 50);
  // this.itemImgListener = () => {
  //     refresh()
  //   }
  //   this.$bus.$on("itemImageLoad",this.itemImgListener );
  
  // // 2. 获取tabControl的offset
  // // 所有的组件都有一个$el: 用于获取组件中的元素
  //   // console.log(this.$refs.tabControl.$el);

  },
  destroyed() {
   
  },
  activated() {
     // 解决切换过快时，首页位置虽然保存但是还是会回到顶部

    this.$refs.scroll.scrollTo(0, this.saveY, 0)
        this.$refs.scroll.refresh();
   
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY()
   // 2. 利用事件总线的取消方法全局事件监听
    // this.$bus.$off(取消的事件, 取消的函数)
   this.$bus.$off('itemImageLoad', this.itemImgListener)

  }
  ,
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  methods: {
    // 封装请求数据和处理方法
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list),
          (this.goods[type].page += 1);
      });
    },
    // 返回首页
   
    // 加载类型切换
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      // 监听tabControl的点击 并且返回给两个tabControl
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index

    },
    
    // 控制返回首页的显示
    contentscroll(position) {
      this.isShowBackTop = (-position.y) > 2000 ? true : false;
      this.isTabFixed = (-position.y) > this.tabOffsettop ? true : false
    },
    
    // 上拉加载更多
    loadMore() {
      this.getHomeGoods(this.currentType)
      setTimeout(() => {
        this.$refs.scroll.finishPullUp();
      },200)
    },

    // 监听轮播图加载完毕
    swiperImageLoad() {
      this.tabOffsettop = this.$refs.tabControl2.$el.offsetTop;
  
    }
  },
};
</script>

<style scoped>
#home {
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}

.tab-control2 {
  position: relative;
  z-index: 999;

}

.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>