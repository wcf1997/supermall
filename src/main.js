import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastClick from 'fastclick'
// 1. 导入自定义组件的index.js
import toast from 'components/common/toast'

Vue.config.productionTip = false
// 添加事件总线
Vue.prototype.$bus = new Vue()

// 2. 安装toast完成后 当项目启动或默认执行toast的install方法
Vue.use(toast)
// 解决移动端300毫秒得延迟
fastClick.attach(document.body)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
