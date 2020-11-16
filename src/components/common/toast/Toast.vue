<template>
  <div class="toast" v-show="isShow">
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data() {
    return {
      message: '',
      isShow: false
    }
  },
  methods:{
    show(message="默认信息", duration=2000 ) {
      this.message = message
      this.isShow = true
      setTimeout(() => {
        this.isShow = false
      }, duration)
    }
  }
}
</script>

<style scoped>
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  font-size: 19px;
  padding: 8px 10px;
  border-radius: 10px;
  z-index: 999;

}
</style>