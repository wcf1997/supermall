<template>
  <div class="detail">
    <detail-nav-bar
    ref="navbar"
      :navbartitle="navbartitle"
      class="detail-nav"
      @titleClick="titleClick"
    />
    <scroll class="content" ref="scroll" @scroll="contentScroll" :probeType="3">
      <detail-swiper :topImages="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad" />
      <detail-param-info ref="params" :paramInfo="paramInfo" />
      <detail-comment-info ref="comment" :comment-info="commentInfo" />
      <goods-list ref="recommend" :goods="recommends" />
    </scroll>
    <detail-bottom-bar @addCart="addToCart" />
    <back-top class="back-top" v-show="isShowBackTop" @click.native="backTop" />
 
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import DetailBottomBar from './childComps/DetailBottomBar';

import Scroll from "components/common/scroll/Scroll";
import Toast from 'components/common/toast/Toast'
import GoodsList from "components/content/goods/GoodsList";
// 混入
import { itemListenerMixin, backTopMixin} from "common/mixin";
import { debounce } from 'common/utils'
// 网络请求
import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend,
} from "network/detail";
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
    Toast,
 
  },
  mixins: [itemListenerMixin, backTopMixin],
  data() {
    return {
      iid: null,
      navbartitle: ["商品", "参数", "评论", "推荐"],
      topImages: null,
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [],
      getThemeTopY: null,
      currentIndex: 0,



 
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    // 根据iid请求数据
    getDetail(this.iid).then((res) => {
      // 获取数据
      const data = res.result;
      // 获取详情的轮播图
      this.topImages = data.itemInfo.topImages;
      // 获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // 获取店铺信息
      this.shop = new Shop(data.shopInfo);
      // 获取商品详情信息
      this.detailInfo = data.detailInfo;
      // 获取参数信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      // 获取评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
      // 此方法不对
      // this.nextTick(() => {
      //   // 根据最新的数据，对应的DOM已经被渲染出来了
      //   // 但是图片依然没有加载完成，（目前获取到的 offsetTop不包含其中的图片）
      //   this.themeTopYs = [];
      //   this.themeTopYs.push(0);
      //   this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      //   this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      //   this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
      // });
      this.getThemeTopY = debounce( function() {
         this.themeTopYs = [];
        this.themeTopYs.push(0);
        if (this.$refs.params.$el) this.themeTopYs.push(this.$refs.params.$el.offsetTop);
        if (this.$refs.comment.$el) this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
        if (this.$refs.recommend.$el) this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
       if (this.$refs.params.$el && this.$refs.comment.$el && this.$refs.recommend.$el) this.themeTopYs.push(Number.MAX_VALUE)
      },100)

      // this.getThemeTopY = debounce(() => {
      //   this.themeTopYs = [];
      //   this.themeTopYs.push(0);
      //   this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      //   this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      //   this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
      //   console.log('...');
      // }, 100)
    });
    // 请求推荐数据
    getRecommend().then((res) => {
      this.recommends = res.data.list;
    });
  },
  mounted() {
    // let newRefresh = debounce(this.$refs.scroll.refresh, 100)
    // this.itemImgListener = () => { newRefresh()}
    // this.$bus.$on('itemImgLoad', this.itemImgListener)
    this.themeTopYs.push(this.$refs.comm);
  },
  destroyed() {
    this.$bus.$off("itemImgLoad", this.itemImgListener);
  },
  methods: {
    imageLoad() {
     
      this.refresh();
      this.getThemeTopY()
    },
    titleClick(index) {
   
    this.$refs.scroll.scrollTo(0, -this.themeTopYs[index],200)
    },
    // 滚动到指定区域 navbar对应区域激活 以及BackTop的出现
    contentScroll(position) {
     let length = this.themeTopYs.length;
     let positionY = -position.y;  

    // 1. 滚动内容某处navbar对应选项被激活
    //  for (let i in this.themeTopYs) {
    //    i = parseInt(i)
    //    这个方法是 i 小于length - 1的时候 只要滚动到i 和 i+1的距离中间就赋值，
    //    但是i === length-1的时候 i+1会找不到值因此崽i === length -1的时候大于数组最后一个值
    //    if( this.currentIndex !== i && ((i < length -1 && this.themeTopYs[i] <= positionY  
    //    && this.themeTopYs[i + 1] > positionY) || (i === length - 1  && positionY >= this.themeTopYs[i]))){
    //      this.currentIndex = i
    //      this.$refs.navbar.currentIndex = this.currentIndex
    //    }
    //  }
   //  方法二： 先给this.themeTopYs数组push一个最大值 这样就不用判断i === length-1的时候了
   for ( let i = 0 ; i < this.themeTopYs.length - 1; i++) {
     if (this.currentIndex !== i && (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1])) {
       this.currentIndex = i
      this.$refs.navbar.currentIndex = this.currentIndex
    //    }
     }
   }
   // BackTop显示
     this.isShowBackTop = (-position.y) > 2000 ? true : false;
   
    }
    ,
     addToCart() {
    // 1. 获取购物车需要展示的信息
    const product = {}
    product.image = this.topImages[0]
    product.title = this.goods.title
    product.desc = this.goods.desc;
    product.price = this.goods.newPrice
    product.iid = this.iid
    product.realPrice = this.goods.realPrice

    this.$store.dispatch('addCart', product).then(res => {
      this.$toast.show(res)
    })
  }
  },

 

    
};
</script>

<style scoped>
.detail {
  width: 100vw;
  background-color: #fff;
  position: relative;
  z-index: 6;
  overflow: hidden;
}
.content {
  height: calc(100vh - 44px - 49px);
}
.detail-nav {
  position: relative;
  z-index: 9;

  background: #fff;
}
.back-top {
  bottom: 60px;
  right: 15px;
}
</style>