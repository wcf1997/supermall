<template>
  <div class="category">
    <tab-control class="tb2" v-show="tb2Show"
              ref="tabC2"
             :titles="['综合', '新品', '销量']"
             @tabClick="tabClick"></tab-control>
    <category-nav-bar />
    <div class="content">
      <aside-menu :aside-item="categories"  
                  @asideItemClick="asideItemClick" />
      <scroll id="tab-content"  
              ref="scroll" @scroll="contentShow" 
              :probe-type="3" :pull-up-load="true" 
               > 
        <div>
          <tab-content-category :categories="showSubcategory" /> 
           <tab-control ref="tabC1"
             :titles="['综合', '新品', '销量']"
             @tabClick="tabClick"></tab-control>
          <tab-content-detail :detail-item="showCategoryDetail" />


        </div>
      </scroll>

      <back-top v-show="isShowBackTop" />
    </div>
  </div>
</template>

<script>
import CategoryNavBar from "./childComps/CategoryNavBar";
import AsideMenu from "./childComps/AsideMenu";
import GridView from 'components/common/gridView/GridView'
import Scroll from 'components/common/scroll/Scroll'
import TabContentCategory from './childComps/TabContentCategory';
import TabControl from 'components/content/tabControl/TabControl'
import TabContentDetail from './childComps/Categorydetail'
import BackTop from 'components/content/backTop/BackTop'

import { getCategory, getSubcategory, getCategoryDetail } from "network/category";
import {POP, SELL, NEW} from 'common/const';
import {itemListenerMixin, tabControlMixin, backTopMixin} from 'common/mixin'
import {debounce} from 'common/utils'
export default {
  name: "Category",
  components: {
    CategoryNavBar,
    AsideMenu,
    GridView,
    Scroll,
    TabContentCategory,
    TabControl,
    TabContentDetail
  },
  mixins: [itemListenerMixin, tabControlMixin, backTopMixin],
  data() {
    return {
        categories: [],
        categoryData: {
        },
        currentIndex: -1,
        tb2Show: false
      }
  },
  created() {
    // 初始化数据
    this._getcategory();


  },
  computed: {
    showSubcategory() {
      if (this.currentIndex === -1 ) return {}
      return  this.categoryData[this.currentIndex].subcategories
    },
    showCategoryDetail () {
      if (this.currentIndex === -1 ) return {}
      return this.categoryData[this.currentIndex].categoryDetail[this.currentType]
    },
    getTabContentTop() {
      return this.$refs.tabC1.$el.offsetTop
    }
  },
  methods: {
  backTopShow(position) {
     let positionY = -position.y
     this.isShowBackTop = (positionY) > 2000 ? true : false; 
  
  },
  tb2ShowFn(position) {
    let positionY = -position.y
     this.tb2Show = (positionY) >= this.getTabContentTop ? true : false
    

  },
  contentShow(position) {
    // 防抖
     debounce(this.backTopShow(position), 500)
     debounce(this.tb2ShowFn(position), 500)
   
  },
    _getcategory() {
       // 获取分类数据
    getCategory().then(res => {
		      // 1.获取分类数据
		      this.categories = res.data.category.list
          // 2.初始化每个类别的子数据
          for (let i = 0; i < this.categories.length; i++) {
            this.categoryData[i] = {
              subcategories: {},
              categoryDetail: {
                'pop': [],
                'new': [],
                'sell': []
              }
            }
          }
          // 3.请求第一个分类的数据
          this._getSubcategories(0)
        })
   
    },
  
    // 获取getSubcategory的分类数据
    _getSubcategories(index) {
     this.currentIndex = index;
		    const mailKey = this.categories[index].maitKey;
        getSubcategory(mailKey).then(res => {
          this.categoryData[index].subcategories = res.data
          this.categoryData = {...this.categoryData}
          this._getcategoryDetail(POP)
           this._getcategoryDetail(SELL)
           this._getcategoryDetail(NEW)
        })
    },
    _getcategoryDetail(type) {
     // 1.获取请求的miniWallkey
        const miniWallkey = this.categories[this.currentIndex].miniWallkey;
        // 2.发送请求,传入miniWallkey和type
		    getCategoryDetail(miniWallkey, type).then(res => {
		      // 3.将获取的数据保存下来
          this.categoryData[this.currentIndex].categoryDetail[type] = res
          this.categoryData = {...this.categoryData}
         
        })
    },
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
           
           this.$refs.tabC1.currentIndex = index
           this.$refs.tabC2.currentIndex = index
    }
    ,
    asideItemClick(index) {
      this._getSubcategories(index)
    },
    
    

  
  },

  
  

};
</script>

<style scoped>

.content {
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
  display: flex;
}
.wrapper {
  height: 300px;
  background: #efefef;
  overflow: hidden;
}
#tab-content {
  height: calc(100vh - 44px - 49px);
  flex: 1;
  width: calc(100vw - 100px);
  background: #fff;
}
.tb2 {
  position: fixed;
  top: 44px;
  right: 0;
  width: calc(100vw - 100px);
}
</style>