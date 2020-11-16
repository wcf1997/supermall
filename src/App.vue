<template>
  <div id="app">
      <keep-alive exclude="Detail">
        <router-view></router-view>
      </keep-alive>
    <main-tab-bar class="main-tab-bar"></main-tab-bar>
      <icon></icon>
    <svg-icon></svg-icon>
  </div>
</template>

<script>
import mainTabBar from 'components/content/mainTabBar/MainTabBar'
 import Icon from 'components/content/Icon/Icon.vue'
  import SvgIcon from 'components/content/Icon/svg.vue'
export default {
  name: 'App',
  components: {
    mainTabBar,
    Icon,
    SvgIcon

  }
}
</script>

<style>
@import url('assets/css/base.css');
html {
  width: 100%;
  overflow: hidden;
}

.main-tab-bar {
  height: 49px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;  
}
#app {
  width: 100vw;
  height: 100%;
  overflow-x: hidden;
}

</style>
