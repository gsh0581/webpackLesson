# 浅析webpack输出内容
Hash 标识
time
chunks 表示js的id
chunks-name 表示 entry里默认省略的 main
- 填入打包的模式
    "mode" : 'production'  打包后会被压缩
             'development' 打包后不会被压缩

# loader是什么
- 打包方案，告诉webpack如何处理引入的其他格式的文件
- module 下 {rules {test:正则扩展名,use:{loader:''}}}
- file-loader,可打包图片、文字、表格等,但可以使用 url-loader 可以代替之
- 使用url-loader，图片文件会被转换成base64，不会生成静态文件
- 缺点：若图片文件很大，则不推荐使用。一般打包小图片到js里
- 添加limit 在options里，限制图片打包大小

# 插件
    plugin 可以在webpack运行到某一时刻时做一些事儿
### html-webpack-plugin
    可以在执行打包命令后自动在输出目录新增index.html文件并将js文件引入
### clean-webpack-plugin
可以在执行打包命令前自动清除输出目录下的文件