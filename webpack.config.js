/**
 * Created by 22935 on 2018/3/11.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry:[
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
     path.join(__dirname, 'src/index.js'),//相对路径
  ],
  output: {
    path: path.resolve(__dirname, 'build'), //打包文件的输出路径,__dirname是node.js中的一个全局变量，
    // 它指向当前执行脚本所在的目录
    filename: 'bundle.js', //打包文件名
  },

  module: {
    loaders: [ //配置加载器
      {
        test: /\.js$/, //配置要处理的文件格式，一般使用正则表达式匹配
        exclude:/node_modules/,
        loader: 'babel-loader', //使用的加载器名称
        query: { //babel的配置参数，可以写在.babelrc文件里也可以写在这里
          presets: ['env', 'react'],
        }
      },
      {
        test: /\.css/,
        loader: 'style-loader!css-loader'
      },
      {
        test: [/\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: 'url-loader',
        options: {
          limit: 10000, //1w字节以下大小的图片会自动转成base64
        },
      },
      {
        test:/\.styl$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "stylus-loader" // compiles Less to CSS
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({//html-webpack-plugin自动生成模板文件，以及后面用到的分离CSS等。
      template: './public/index.html', //指定模板路径
      filename: 'index.html', //指定文件名
    }),
   new webpack.HotModuleReplacementPlugin()//热模块替换插件
  ],
  /*devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 8080
  },*/
}


