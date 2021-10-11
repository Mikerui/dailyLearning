// 防抖
function debounce(delay, fn) {
  let timeOut = null
  return function(e) {
    // 如果有定时器就清除
    if (timeOut) clearTimeout(timeOut)
    const context = this
    const args = arguments
    // 创建定时器
    timeOut = setTimeout(function() {
      fn.apply(context, args)
    }, delay)
  }
}

// 节流  状态位实现
function throttle(delay, func) {
  let flag = true // 是否触发过
  return function() {
    const context = this
    const args = arguments
    // 触发过
    if (!flag) {
      return false // 不做处理
    }
    // 工作时间，执行函数并且在间隔期内把状态位设为无效
    valid = false
    setTimeout(function() {
      func.apply(context, arguments)
      flag = true // 设置状态
    }, delay)
  }
}

// 节流  时间差实现
function throttle2(delay, func) {
  const timer = null
  let startDate = new Date()
  const threshold = delay || 160 // 如果没传,就给个默认值
  return function() {
    const ctx = this
    const args = arguments
    const curr = new Date() - 0
    clearTimeout(timer) // 清除事件回调
    if (curr - startDate >= threshold) {
      // 注意这里相减的结果，都差不多是160左右
      func.apply(ctx, args) // 只执行一部分方法，这些方法是在某个时间段内执行一次
      startDate = curr
    } else {
      //让方法在脱离事件后也能执行一次
      timer = setTimeout(function() {
        func.apply(ctx, args)
      }, threshold)
    }
  }
}
