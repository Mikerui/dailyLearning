
const path = require('path')
import { Configuration } from 'webpack' // 只能提示webpack，开发时需要注释
/**
 * @type {Configuration}
 */
const config = {
  entry:'./src/main.js',
  output:{
    filename:'bundle.js',
    path:path.join(__dirname,'output')
  }
}
module.exports = config