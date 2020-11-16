import Toast from './Toast'
const obj = {}

// 当该插件被安装到Vue上的时候，项目启动会默认调用intall方法
obj.install = function(Vue) {
  // 此方法无法将元素添加到页面中，可能是因为install方法在调用的时候该组件还未挂载
  // console.log(document.body.appendChild(Toast.$el));
  // 正确方法：
  // 1. 创建组件构造器
  const toastContrustor = Vue.extend(Toast)
  // 2. new的方式，根据组件构造器，可以创建出来一个组件对象
  const toast = new toastContrustor()
  // 3. 将组件对象，手动挂载到某一元素上
  toast.$mount(document.createElement('div'))
  // 4. toast.$el对应就是div
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast
}

export default obj;