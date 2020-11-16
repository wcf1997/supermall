<template>
  <div>
    <nav-bar class="navbar">
       
      <span slot="center">分类导航</span>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  name: 'CategoryNavBar',
  components: {
    NavBar
  },
  methods: {
    backClick() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.navbar {
  background-color: var(--color-tint);
  color: #fff;
}

</style>