const webpackConfig = require('./webpack.config')
const path = require('path')

module.exports = webpackConfig

module.exports.output.path = path.resolve(__dirname, '../dist')
module.exports.entry = './src/index.js'