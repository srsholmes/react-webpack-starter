const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { js, postCss } = require('./base.config');

console.log('*'.repeat(80));
console.log('DEV');
console.log('*'.repeat(80));

const config = {
  entry: [
    'react-hot-loader/patch',
    //'webpack-dev-server/client?http://localhost:3000',
    //'webpack/hot/only-dev-server',
    'react-dev-utils/webpackHotDevClient',
    './src/index.js',
  ],
  output: {
    path: path.join(__dirname, '../dist/'),
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      js,
      {
        test: /\.css$/,
        use: [
          'style-loader',
          //'css-loader?modules',
          postCss
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
  devtool: 'inline-source-map',
};

module.exports = config;
