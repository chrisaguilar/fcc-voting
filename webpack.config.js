var webpack = require('webpack'),
    path    = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public'),
    APP_DIR   = path.resolve(__dirname, 'app');

var config = {
  context: process.cwd(),
  entry: APP_DIR + '/client.js',
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include : APP_DIR,
        loader: 'babel'
      }
    ]
  },
  output: {
    path: BUILD_DIR,
    filename: 'client.min.js'
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
  ]
};

module.exports = config;
