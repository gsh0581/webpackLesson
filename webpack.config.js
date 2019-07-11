const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports={
    "mode":'development',
    entry:{
        main:'./src/index.js',
    },
    // 创建本地服务器，增加服务器支持
    devServer:{
        // 服务器目录与自动打开浏览器,设置代理
        port:8080,
        contentBase:'./dist',
        open:true,
        proxy:{
            '/api':'http://localhost:8086'
        }
    },
    //线上：devtool: 'cheap-module-source-map'
    devtool:'cheap-module-eval-source-map',
            // cheap,inline-source-map,source-map
            // cheap-module
    module:{
        rules:[{
            test : /\.(jpg|png|gif)$/,
            use:{
                loader:'url-loader',
                // 自定义输出文件文件名
                options:{
                    // placeholder 占位符
                    name:'[name].[ext]',
                    outputPath:'images/',
                    limit:20480
                }
            }
        },
        {
            test : /\.scss$/,
            use:[
                'style-loader',
            {
                loader:'css-loader',
                options:{
                    importLoaders:2
                }
            },
                'sass-loader',
                'postcss-loader'
            ]
        }]
    },
    output:{
        // publicPath:'http://10.9.65.198',
        filename:'[name].js',
        path:path.resolve(__dirname,'dist') // __dirname为配置文件当前的目录，
        // 生成绝对路径的方法，引入path,默认不填，输出到dist
    },
    plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({template:'src/index.html'}),
]
}