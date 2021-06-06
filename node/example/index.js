const glob = require('glob')
// 阻塞IO
console.time('time')
const result = glob.sync(__dirname, '../')
console.timeEnd('time')
console.log(result)

// 非阻塞IO
console.time('async')
const result2 = glob(__dirname + '/**/*', function (err, result) {
  console.log(result.length)
})
console.timeEnd('async')
// IO完成之前还可以做别的事
console.log('hello geekbang')
