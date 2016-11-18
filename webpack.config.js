const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000',
    'webpack/hot/only-dev-server',
    './src/main',
  ],
  output: {
    filename: 'app.bundle.js',
    // Development
    path: path.join(__dirname, 'bin'),
    publicPath: '/static/',
    // Production
    // path: path.join(__dirname, 'js'),
    // publicPath: '/react-accordeon/js/',
  },
  // context: resolve(__dirname, 'src'),
  // devtool: env.prod ? 'source-map' : 'eval',
  // bail: env.prod,
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/,
      }, {
        test: /\.scss$/,
        loaders: [
          'style',
          'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'sass',
        ],
      }, {
        test: /\.png?$/,
        loaders: ['file'],
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // Production
    /*
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true
    })
    */
  ],
};
