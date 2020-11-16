<template>
  <div id="user-info">
    <a href="#" class="clearfix">
      <slot name="user-avatar">
          <svg t="1605511864541" class="icon privateImage-svg left" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7425" width="200" height="200"><path d="M512 0C228.693 0 0 228.693 0 512s228.693 512 512 512 512-228.693 512-512S795.307 0 512 0z m0 69.973c244.053 0 442.027 197.973 442.027 442.027 0 87.04-25.6 168.96-69.973 237.227-73.387-78.507-170.667-133.12-281.6-151.893 69.973-34.133 119.467-105.813 119.467-187.733 0-116.053-93.867-209.92-209.92-209.92s-209.92 93.867-209.92 209.92c0 83.627 47.787 155.307 119.467 187.733-110.933 20.48-208.213 75.093-281.6 153.6-44.373-68.267-69.973-150.187-69.973-238.933 0-244.053 197.973-442.027 442.027-442.027z" fill="#ffffff" p-id="7426"></path></svg>
      </slot>
      <div class="login-info left">
          <slot name="nickname">
              登陆/注册
          </slot>
          <div class="phone">
            <span>
        <svg t="1605511207829" class="icon icon-mobile" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3231" width="200" height="200"><path d="M351.988168 131.844817c-22.174022 0-45.686529 23.411199-45.686529 45.686529l0 639.606283c0 22.37459 24.00267 45.686529 45.686529 45.686529l319.803653 0c20.455891 0 45.685505-23.433712 45.685505-45.686529L717.477326 177.530322c0-22.397103-23.556509-45.686529-45.685505-45.686529M466.203466 177.530322l114.216321 0c12.625552 0 22.596647 5.097088 22.596647 11.432377 0 6.312776-11.912307 11.409864-22.596647 11.409864L443.360202 200.372563c-11.45489 0-22.508643-5.097088-22.508643-11.409864 0-6.335289 11.165294-11.432377 22.508643-11.432377L466.203466 177.530322zM512.06805 817.260425c-12.224416 0-23.155373-10.151197-23.155373-22.954805 0-12.805654 10.930957-23.010063 23.155373-23.010063 12.893658 0 22.833031 10.205433 22.833031 23.010063C534.901081 807.109228 524.961708 817.260425 512.06805 817.260425L512.06805 817.260425zM671.791821 725.764572l-319.803653 0L351.988168 246.059092l319.803653 0L671.791821 725.764572z" p-id="3232" fill="#ffffff"></path></svg>          </span>
          <slot name="user-phone">
              暂无绑定手机号
          </slot>
          </div>
      </div>

      <svg t="1605512059439" class="icon right more" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8231" width="200" height="200"><path d="M731.7 475.1L370.6 80.8c-19.7-21.5-53-22.9-74.4-3.3-21.5 19.7-22.9 53-3.3 74.4l328.6 358.8-328.3 359.8c-19.6 21.5-18.1 54.8 3.4 74.4 21.5 19.6 54.8 18.1 74.4-3.4l360.5-394.9c0.7-0.8 1.5-1.7 2.1-2.5 16.4-19.9 16.1-49.4-1.9-69z" fill="#ffffff" p-id="8232"></path></svg>
      
    </a>
  </div>
</template>

<script>
export default {
  name: "UserInfo",
};
</script>

<style scoped>
#user-info {
    padding: 20px 10px;
    background: rgb(255, 129, 152);
    box-shadow: 0 -1px 1px rgb(255, 129, 152);
}
#user-info > a {
    padding: 20px 0;display: block;
}
.privateImage-svg {
    width: 60px;
    height: 60px;
    border-radius: 50%;
}
.icon-mobile {
    width: 30px;
    height: 30px;
    color: #fff;
    vertical-align: middle;
}
.left {
    float: left;
}
.right {
    float: right;
}
.clearfix::after {
    content: '';
    clear: both;
    display: block;
    height: 0;
}
.login-info {
    width: 50vw;
    margin-left: 20px;
    font-size: 17px;
    color: #fff;
  
 
}
.phone {
    margin-top: 10px;
    line-height: 1.5;
    font-size: 13px;
    margin-left: -10px;
}
.more {
    height: 20px;
    width: 20px;
    margin-top: 25px;
}
</style>