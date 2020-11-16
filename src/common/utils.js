export function debounce(fnc, delay) { 
  let timer = null
  return function(...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fnc.apply(this, args)
     
    }, delay)
  }
}
// 将时间戳转换成时间格式
export function formatDate(date, fmt) {
  // 1. 获取年份
  if (/(y+)/.test(fmt)) {
  // RegExp.$1 是一个全局对象 表示返回/(y+)/.test(fmt)中匹配到的正则表达式/(y+)/的数据
  // 比如fmt = 'yyyy-MM-dd' RegExp.$1 表示 'yyyy'
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  // 2. 获取
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
    }
  }
  return fmt
}

function padLeftZero(str) {
  return ('00' + str).substr(str.length)
}