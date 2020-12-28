/**
 * compose 的参数是函数数组，返回的也是一个函数
 * compose 的参数是任意长度的，所有的参数都是函数，执行方向是自右向左的，因此初始函数一定放到参数的最右面
 * compose 执行后返回的函数可以接收参数，这个参数将作为初始函数的参数，所以初始函数的参数是多元的，初始函数的返回结果将作为下一个函数的参数，以此类推。因此除了初始函数之外，其他函数的接收值是一元的。
 * compose 和 pipe 的区别在于调用顺序的不同
 */
function reduceFunc(prev, curr) {
  return (...args) => {
    curr.call(this, prev.apply(this, args))
  }
}

function compose(...args) {
  return args.reverse().reduce(reduceFunc, args.shift())
}
