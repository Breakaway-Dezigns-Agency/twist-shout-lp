const {merge} = require('webpack-merge')
const common = require('./webpack.config.js')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
 mode: 'production',
 module: {
  rules: [
   {
    test: /.s?css$/,
    use: [
     MiniCssExtractPlugin.loader,
     {
      loader: 'css-loader',
      options: {
       importLoaders: 2
      }
     },
     {
      loader: 'postcss-loader',
     },
     {
      loader: 'sass-loader',
      options: {
       implementation: require('sass')
      }
     }
    ]
   }
  ]
 },
 optimization: {
  minimize: true,
  minimizer: [
   new CssMinimizerPlugin()
  ]
 },
 plugins: [
  new MiniCssExtractPlugin()
 ]
})