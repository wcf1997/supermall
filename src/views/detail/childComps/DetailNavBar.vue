<template>
  <div class="detail-nav-bar">
    <nav-bar>
      <div slot="left" class="back" @click="back">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="center">
        <div v-for="(item, index) in navbartitle" 
        @click="itemClick(index)"
        :class="{active: currentIndex === index}">{{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
// 公共组件
import NavBar from 'components/common/navbar/NavBar'

export default {
  name: 'DetailNavBar',
  components: {
    NavBar
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  props: {
    navbartitle: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('titleClick', index)
    },
    back() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.center {
  display: flex;
  justify-content: space-around;
}
.center {
  color: #212121;
}
.active {
  color: var(--color-highlight);
}
.back img{
  margin-top: 10px;
}
</style>