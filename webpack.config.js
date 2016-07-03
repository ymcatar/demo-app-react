/* global process, __dirname */

var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var webpack = require('webpack');
var _ = require('lodash');

var isProduction = process.env.NODE_ENV === 'production';

var basePlugins = [
  new HtmlWebpackPlugin({
    template: './src/index.ejs'
  }),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.optimize.DedupePlugin()
];

module.exports = [{
  cache: true,
  entry: './src/app.jsx',
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extendsions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react']
      }
    }]
  },
  devtool: 'source-map',
  plugins: isProduction
    ? _.concat(basePlugins, [
      new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        sourceMap: false,
        mangle: false,
        removeRedundantAttributes: false,
        output: { comments: false },
        compress: { warnings: false }
      }),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }
      })
    ])
    : basePlugins
}];