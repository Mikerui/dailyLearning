const mount = require('koa-mount')
const koa = require('koa')
const url = require('url')

const app = new koa()

app.use(async (ctx, next)=>{
    console.log(ctx)
    await next()
})

app.listen(3000, ()=>{
    console.log('listen 3000')
})