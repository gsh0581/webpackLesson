const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports={
    entry: {
        main: './src/index.js',
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
        path: path.resolve(__dirname, 'dist') 

    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ template: 'src/index.html' }),

    ]
}