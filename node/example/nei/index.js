const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res) => {
  fs.readFile('./public/index.html', (err, data) => {
    console.log(err)
    res.end(data)
  })
})

server.listen(3000)
