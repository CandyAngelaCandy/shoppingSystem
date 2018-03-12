/**
 * Created by 22935 on 2018/3/11.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  /*entry: './src/index.js', //相对路径*/
  entry:'C:/Users/22935/WebstormProjects/shoppingSystem_react/src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'), //打包文件的输出路径
    filename: 'bundle.js', //打包文件名
  },

  module: {
    loaders: [ //配置加载器
      {
        test: /\.js$/, //配置要处理的文件格式，一般使用正则表达式匹配
        loader: 'babel-loader', //使用的加载器名称
        query: { //babel的配置参数，可以写在.babelrc文件里也可以写在这里
          presets: ['env', 'react']
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({//html-webpack-plugin自动生成模板文件，以及后面用到的分离CSS等。
      template: './public/index.html', //指定模板路径
      filename: 'index.html', //指定文件名
    })
  ]
}


