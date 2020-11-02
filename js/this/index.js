// this-用于访问当前方法所属的对象
'use strict'
let obj = {
  a:12,
  fn(){
    console.log(this === obj); // true
  }
}
// obj.fn()
// 函数的this跟定义的是无关的，跟调用有关
function show(){
  console.log('this是',this) // window 使用严格模式 undefined
}

// 1. 直接调用 window|undefined
// show()

// 2.挂载在对象上。然后执行方法- 对象
// let arr = [1,2,3]
// arr.fn = show
// arr.fn()
// 3. window 
// setTimeout(show,100)

// 4. 作为构造函数的时候（new） - 当前构建出来的实例
new show()

// 5.工具函数 - call用来强制this的归属
show.call(12) 
//  6. 
let arr = [1,2,3]
arr.forEach(function(item){
  console.log(this,item);
})

