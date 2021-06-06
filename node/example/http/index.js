// 使用内置模块，得到node的内置http
const http = require('http')

// 创建服务器
const server = http.createServer((req, res) => {
  // 设置字符集
  //   res.setHeader('content-type', 'application/json;charset=utf-8')
  res.write('<h1>hello word</h1>')
  // 输出
  res.end('你好， 马锐')
})

server.e(3000)
/**
 * res.end  只能输出单行，不能输出非字符串,是可以结合html标签返回的
 * res.write  最后必须要有res.end,不能输出非字符串
 */
