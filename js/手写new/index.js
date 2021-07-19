function myNew(func, ...args) {
  // 1. 判断方法体
  if (typeof func !== 'function') {
    throw '第一个参数必须是方法体';
  }
  // 2. 创建对象
  const obj = {}
  // 3. 将obj的 __proto__  指向func的原型对象 实例可以访问构造函数原型所在原型链上的属性
  obj.__proto__  = Object.create(func.prototype)
  // 兼容ie  const obj = Object.create(function)
  // 4. 通过apply绑定this执行且获取运行后的数据
  let result = func.apply(obj,args)
  // 5.返回的结果是应用类型，则返回运行后的结果
  const isObject =  typeof result === 'object' && typeof result !== null
  const isFunction = typeof result === 'function'
  return isObject || isFunction ? result : obj
}

// test
function Person (name,age){
  this.name = name
  this.age = age
  return function(){
     console.log('返回引用数据类型');
  }
}
Person.prototype.sayName = function () {
  console.log(`我的名字是${this.name}`)
}

const me = myNew(Person, 'mike')
// me.sayName()
console.log(me);




function newFunc(...args) {
  // 取出 args 数组第一个参数，即目标构造函数
  const constructor = args.shift()
  // 创建一个空对象，且这个空对象继承构造函数的 prototype 属性
  // 即实现 obj.__proto__ === constructor.prototype
  const obj = Object.create(constructor.prototype)
  // 执行构造函数，得到构造函数返回结果
  // 注意这里我们使用 apply，将构造函数内的 this 指向为 obj
  const result = constructor.apply(obj, args)
  // 如果构造函数执行后，返回结果是对象类型，就直接返回，否则返回 obj 对象
  return (typeof result === 'object' && result != null) ? result : obj
}
