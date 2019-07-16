const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports={
    entry: {
        main: './src/index.js',
        // lodash: './src/lodash.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            }
            , {
                test: /\.(jpg|png|gif)$/,
                use: {
                    loader: 'url-loader',
                    // 自定义输出文件文件名
                    options: {
                        // placeholder 占位符
                        name: '[name].[ext]',
                        outputPath: 'images/',
                        limit: 20480
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2
                        }
                    },
                    'sass-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ]
            }]
    },

    output: {

        filename: '[name].js',
        path: path.resolve(__dirname, '../dist') 

    },
    // 代码分割
    optimization:{
        splitChunks: {
            chunks: 'all', // async ,all 
            minSize: 30000,
            maxSize: 0, // 对大于maxsize的文件尝试进行二次拆分
            minChunks: 1, // 被引用超过minChunk次才进行代码分割
            maxAsyncRequests: 5,// 最大同时加载数，分割超过5个，后面的不再加载
            maxInitialRequests: 3, 
            automaticNameDelimiter: '~',
            automaticNameMaxLength: 30,
            name: true,
            cacheGroups: { //缓存组
              vendors: {
                test: /[\\/]node_modules[\\/]/, //引入的库若在此目录下，则进行分割
                priority: -10,
                // filename:'venders.js' // 打包到一起的自定义文件名
              },
              default: {
                priority: -20,
                filename:'common.js',
                reuseExistingChunk: true,//不会重复引用
              }
            }
          }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ template: 'src/index.html' }),

    ]
}