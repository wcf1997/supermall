<template>
  <div class="check-button" :class="{check: isChecked}" >
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
     isChecked: {
       type: Boolean,
       default: false
     }
  },

}
</script>

<style scoped>
.check-button {
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #efefef;
  width: 25px;
  height: 25px;
font-size: 0;
}
.check-button img {
  width: 100%;
  height: 100%;
}
.check {
  background-color: deeppink;
    border: 2px solid deeppink;
}
</style>