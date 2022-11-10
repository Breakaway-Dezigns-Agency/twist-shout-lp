const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require("webpack");

module.exports = {
 entry: './src/js/main.js',
 output: {
  filename: '[name].bundle.js',
  path: path.resolve(__dirname, 'dist')
 },
 plugins: [
  new MiniCssExtractPlugin({
   filename: '[name].min.css'
  }),
  new webpack.ProvidePlugin({
   $: 'jquery',
   jQuery: 'jquery',
  })
 ],
 module: {
  rules: [
   {
    test: /\.s?css$/,
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
      // options: {
      //  indent: 'postcss',
      //  plugins: [
      //   require('tailwindcss'),
      //   require('autoprefixer'),
      //  ]
      // }
     },
     {
      loader: 'sass-loader',
      options: {
       implementation: require('sass')
      }
     },
    ]
   },
   {
    test: /\.(ttc|otf|woff|woff2|eot|ttf)$/,
    use: [
      {
        loader: 'url-loader',
        options: {
          name: '[hash].[ext]',
          outputPath: './fonts/'
        }
      }
    ]
  },
  ]
 },

}