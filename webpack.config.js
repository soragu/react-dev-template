var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, './dist');
var APP_DIR = path.resolve(__dirname, './app');

var config = {
  entry: APP_DIR + '/main.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders : [
      {
        test : /\.jsx?$/,
        include : APP_DIR,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
};

module.exports = config;