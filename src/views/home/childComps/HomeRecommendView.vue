<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a  :href="item.link">
        <img alt="" :src="item.image">
        <div>{{ item.title }}</div>
      </a>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HomeRecommendView',
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.recommend {
  display: flex;
  width: 100%;
  text-align: center;
  padding: 15px 0 30px;
  border-bottom: 10px solid #efefef;
}
.recommend-item {
  flex: 1;
}
.recommend-item img {
  width: 80%;
  margin-bottom: 10px;
}
</style>