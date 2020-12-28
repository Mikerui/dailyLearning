class scheduler {
  constructor(num) {
    this.num = num // 允许同时运行的异步函数的最大个数
    this.list = [] // 存放还未执行的异步
    this.count = 0 // 计数器
  }
  async add(fn) {
    if (this.count >= this.num) {
      // 通过 await 阻塞 Promise 但是又不执行 resolve ,
      // 而是将 resolve 保存到数组当中去,
      // 这样就达到了当异步任务超过 max 个时线程就会阻塞在第一行.
      await new Promise((resole) => this.list.push(resole))
    }
    this.count++
    const result = await fn()
    this.count--
    if (this.list.length > 0) {
      // 每执行完一个异步任务就会去数组中查看一下有没有还处于阻塞当中的异步任务,
      // 如果有的话就执行最前面的那个异步任务.
      this.list.shift()()
    }
    return result
  }
}

const schedule = new Scheduler(2) // 最多同一时间让它执行3个异步函数
const timeout = (time) => new Promise((resolve) => setTimeout(resolve, time))
const addTask = (time, order) => {
  schedule.add(() => timeout(time)).then(() => console.log(order))
}
addTask(1000, 1)
addTask(500, 2)
addTask(300, 3)
addTask(400, 4)
console.dir(schedule, 3)
// output: 2,3,1,4
// 一开始1、2 两个任务进入队列
// 500ms 时，2完成，输出2，任务3进队
// 800ms 时，3完成，输出3，任务4进队
// 1000ms 时， 1完成
// 1200ms 时，4完成
