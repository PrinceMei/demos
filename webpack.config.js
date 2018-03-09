// webpack.config.js

'use strict'
const path = require('path');
const config = require('./config/index.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')

function resolve (dir) {
  return path.join(__dirname, './', dir)
}

module.exports = {
  entry: {
    app: './app/main.js'
  },
  output: {
    publicPath: '/dist/',
    filename: '[name].js',
    path: resolve('dist')
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue': 'vue/dist/vue.js',
      '@': resolve('app')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': 'style-loader!css-loader!sass-loader'
          }
        }      
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  devServer: {
    contentBase: resolve('views'),
    publicPath: "/dist/",
    port: 8000
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: resolve('views/index.html'),
      template: resolve('index.html'),
      hash: true,
      inject: true
    })
  ]


};