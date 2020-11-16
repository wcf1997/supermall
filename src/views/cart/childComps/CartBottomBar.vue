<template>
  <div class="bottom-bar">
    <div class="check-all">
      <check-button class="check-button" @click.native="checkAll"  :is-checked="isSelectAll"/>
      <span>全选</span>
    </div>
    <div class="total-price">合计: {{ totalPrice }}</div>
    <div class="calculate">计算({{ checkLength }})</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";
import {mapGetters} from 'vuex'

export default {
  name: "CartBottomBar",
  components: {
    CheckButton,
  },
  data() {
    return {
     
    }
  },
  methods: {
    checkAll() {
      this.$store.commit('checkAll',this.isSelectAll)

    }
  }
  ,
  computed: {
    ...mapGetters(['cartList']),
    totalPrice() {
      return '￥ ' + this.cartList.filter((item, index) => {
        return item.checked
      })
      .reduce((preValue, item) => {
        return preValue + item.realPrice * item.count
      },0).toFixed(2)
     
    },
    checkLength() {
      return this.cartList.filter((item, index) => {
        return item.checked;
      })
      .reduce((preValue, item) => {
        return preValue + item.count
      }, 0)

    },
    isSelectAll() {
      // return !(this.cartList.filter((item, index) => {return !item.checked}))
      if (this.cartList.length === 0) return false;
      return !(this.cartList.find((item, index) => {return !item.checked}))
    }
  },

};
</script>

<style scoped>
.bottom-bar {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  left: 0;
  bottom: 49px;
  width: 100vw;
  height: 40px;
  font-size: 15px;
}
.check-all {
  display: flex;
  align-items: center;
  width: 85x;
}
.check-button {
  margin: 0 10px;
}
.calculate {
  width: 100px;
  color: #fff;
  background: rgb(235, 92, 116);
  text-align: center;
  line-height: 40px;
}

</style>