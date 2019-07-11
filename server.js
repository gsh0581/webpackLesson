const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.config')
// 编译webpack,需要手动刷新
const complier = webpack(config)
const app = express();
app.use(webpackDevMiddleware(complier,{}))

app.listen(3000, () => {
    console.log(`Server started on 3000`);
});
