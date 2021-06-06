const d = new Date()
const year = d.getFullYear()
let month = d.getMonth() + 1
// 月份补零
if (month < 10) month = `0${month}`
let day = d.getDay()
if (day < 10) day = `0${day}`
console.log(`${year}-${month}-${day}`)

// 用JavaScript随机选取10到100之间的10个数字，把它们存入一个数组中并排序

// 类数组转换为数组的方法
Array.prototype.slice.call()
Array.prototype.forEach.call(elem, callback)
Array.prototype.forEach.apply(elem, [callback])
