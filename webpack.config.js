const path = require('path');

const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   mode: 'development',
  // 入口文件
   entry: './src/index.js',
  // 出口文件
  output:{
    filename: '[name].js'
  },
  // 用来处理css，img等模块
  module:{

  },
  // 一些第三方插件
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ],
  // 配置webpack开发服务功能
  devServer:{
    clientLogLevel: 'warning',
    hot: true,
    inline: true,
    open: true,
    //在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html (解决histroy mode 404)
    historyApiFallback: true,
    host: 'localhost',
    port: '6789',
    compress: true
  }
}