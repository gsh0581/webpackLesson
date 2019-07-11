entry 是一个对象，可添加多个文件，但需要对输出进行配置
对output的filename改为占位符形式: ['name'].js
  publicPath:'/',  设置文件添加路径前缀

SourceMap

热部署webpack
1.webpack --watch 静态打包
2.webpackDevServer 启动一个服务器，并带自动刷新
3.在node中webpack使用middleware 增加中间件，监听和编译webpack

热模块更新(HMR) Hot Module Replacement
devServer中 hot:true,hotOnly:true hotOnly表示仅改变时才刷新
引入webpack ，添加插件     new webpack.HotModuleReplacementPlugin()



业务代码 使用 "@babel/preset-env"

 // 库项目使用以下插件，使用了闭包
"@babel/plugin-transform-runtime",