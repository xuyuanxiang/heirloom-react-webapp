var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var pkg = require('./package.json');
var util = require('util');

module.exports = {
  entry: './src/index.js',

  output: {
    path: './public',
    filename: util.format('%s-%s.[hash].js', pkg.name, pkg.version),
    publicPath: '/'
  },

  plugins: process.env.NODE_ENV === 'production' ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    }),
    new HtmlWebpackPlugin({
      inject: false,
      title: pkg.name,
      template: __dirname + '/src/index.ejs',
      css: '',
      appMountId: 'heirloom'
    })
  ] : [new HtmlWebpackPlugin({
    title: pkg.name,
    template: __dirname + '/src/index.ejs',
    css: '',
    appMountId: 'heirloom'
  })],

  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react'}
    ]
  }
};
