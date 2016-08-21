var webpack = require('webpack'),
    path    = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public'),
    APP_DIR   = path.resolve(__dirname, 'app');

var config = {
  context: process.cwd(),
  entry: {
    app: [APP_DIR + '/client.js']
  },
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
    publicPath: '/public/',
    filename: 'client.min.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false, compress: {warnings: false} })
  ]
};

module.exports = config;
