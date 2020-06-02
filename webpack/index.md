## 配置全局的变量 ProvidePlugin

像lodash、moment这样的库，可能在多个文件中使用，但是懒得每次都引入。
所有我们用：
```
const webpack = require('webpack')
model.exports = {
  plugins:[
    new webpack.ProvidePlugin({
      _:'lodash',
      d:'moment'
    })
  ]
}
```
这样配置之后我们就可以在项目里面使用_、d了，不需要在每个文件里面引入了


