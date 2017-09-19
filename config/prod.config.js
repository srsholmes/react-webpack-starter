const webpack = require('webpack');
const path = require('path');
const { js, postCss } = require('./base.config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
console.log('*'.repeat(80));
console.log('PROD');
console.log('*'.repeat(80));


const config = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '../dist/'),
    filename: '[name]-[hash].min.js',
    publicPath: '/',
  },
  module: {
    rules: [
      js,
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [ 'css-loader', postCss ],
        }),
      },
    ],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true,
      },
      compress: {
        screw_ie8: true,
      },
      comments: false,
    }),
    new ExtractTextPlugin({
      filename: '[name].[hash].min.css',
      disable: false,
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'body',
      filename: 'index.html',
    }),
  ],
  devtool: 'source-map',
};

module.exports = config;
