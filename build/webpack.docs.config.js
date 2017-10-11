const webpackConfig = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin')
const path = require('path')

module.exports = webpackConfig

module.exports.output = {
  path: path.resolve(__dirname, '../docs'),
  filename: 'sushi.js',
  libraryTarget: 'umd',
}

module.exports.plugins = (module.exports.plugins || []).concat([
  new HtmlWebpackPlugin({
    template: 'index.html',
    inject: 'body',
    excludeAssets: [/sushi.js/]
  }),
  new HtmlWebpackExcludeAssetsPlugin(),
])