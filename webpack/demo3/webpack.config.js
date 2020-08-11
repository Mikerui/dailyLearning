const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin') // 抽离css
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'); //用于优化或者压缩CSS资源
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); 

// 每次打包前删除dist文件夹
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
	// optimization: {
	// 	minimizer: [
	// 	  new UglifyJsPlugin({
  //       cache: true,
  //       parallel: true,
  //       sourceMap: true
  //     }),   
	// 	],
	// },
	devServer: {
		// 开发服务器配置
		port: 3000,
		progress: true,
		contentBase: './dist',
		compress: true,
	},
	mode: 'development', // 开发模式
	entry: './src/index.js',
	output: {
		filename: 'bundle.[hash:8].js', // 输出文件名
		path: path.resolve(__dirname, 'dist'), // 绝对路径
	},
	plugins: [
		new CleanWebpackPlugin({}),
		// 数组 放着所有的webpack插件
		new htmlWebpackPlugin({
			// html转换
			template: './src/index.html',
			filename: 'index.html',
			minify: {
				removeAttributeQuotes: true, // 删除双引号
				collapseWhitespace: true, // 压缩成一行
			},
			hash: true, //
		}),
		new miniCssExtractPlugin({
			filename:'main.[hash].css',
			chunkFilename: "[id].css"
		},),
		new OptimizeCssAssetsPlugin({
			cssProcessorOptions: {
                map: {
                    // 不生成内联映射,这样配置就会生成一个source-map文件
                    inline: false,
                    // 向css文件添加source-map路径注释
                    // 如果没有此项压缩后的css会去除source-map路径注释
                    annotation: true
                }
            }
		})	
	],
	module: {
		// 模块
		rules: [
			{
				test:/\.js$/,
				use:{
					loader:'babel-loader',
					options:{
						// es6 -> es5
						presets:[
							'@babel/preset-env'
						]
					}
				}
			},
			// css-loader
			// style-loader 把css 插入head中
			// loader  从左到右，从上到下
			{
				test: /\.css$/,
				use: [
					miniCssExtractPlugin.loader,	
					'css-loader',
					'postcss-loader',			
				],
			},{
				test: /\.less$/,
				use:[miniCssExtractPlugin.loader,'css-loader', 'postcss-loader','less-loader']
			}
		],
	},
};
