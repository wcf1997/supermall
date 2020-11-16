<template>
  <div id="profile">
    <nav-bar class="nav-bar">
      <div slot="center">个人中心</div>
    </nav-bar>
    <user-info>
    </user-info>
    <section class="account">
      <div class="account-item">
        <div class="number">
          <div class="balance"><span>0.00</span>元</div>
          <div>我的余额</div>
        </div>
      </div>
      <div class="account-item">
        <div class="number">
          <div class="balance"><span>0</span>个</div>
          <div>我的优惠</div>
        </div>
      </div>
      <div class="account-item">
        <div class="number">
          <div class="balance"><span>0</span>分</div>
          <div>我的积分</div>
        </div>
      </div>
    </section>

    <list-view :list="orderList" />
     <list-view :list="serviceList" />
  </div>
</template>

<script>
import UserInfo from './childComps/UserInfo'
import ListView from './childComps/ListView'

import NavBar from "components/common/navbar/NavBar";
export default {
  name: "Profile",
  
  data() {
    return {
       orderList: [
          {icon: '#order', iconColor: '#ff8198', info: '我的消息'},
          {icon: '#point', iconColor: '#fc7b53', info: '积分商城'},
          {icon: '#vip', iconColor: '#ffc636', info: '会员卡'},
        ],
        serviceList: [
          {icon: '#service', iconColor: '#ff8198', info: '我的购物车'},
          {icon: '#download', iconColor: '#ff8198', info: '下载购物APP'},
        ]
    }
  },
  components: {
    NavBar,
    UserInfo,
    ListView
  },
};
</script>

<style scope>
 #profile {

    background-color: #efefef;
  }
.nav-bar {
  background: var(--color-tint);
  color: #fff;
  border: none;
}
.account {
  display: flex;
  width: 100vw;
  height: 100px;
  background-color: #fff;
}
.account> .account-item {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.account> .account-item {
  border-right: 1px solid #efefef;
  box-sizing: border-box;
}
.account> .account-item:last-child {
  border-right: none;
}
.account> .account-item .number .balance {
  margin-bottom: 10px;
}
.account> .account-item .number .balance>span {
  font-size: 20px;
  margin-right: 2px;
  color: #ff5f3e ;
  font-weight: 600;

}
</style>
