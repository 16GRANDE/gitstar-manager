const { merge } = require('webpack-merge')
const webpack = require('webpack')
const { SERVER_HOST, SERVER_PORT } = require('../constants')
const common = require('./webpack.common')
const proxySetting = require('../../src/setProxy')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    host: SERVER_HOST,
    port: SERVER_PORT,
    stats: 'errors-only',
    clientLogLevel: 'silent',
    compress: true,
    open: true,
    hot: true,
    proxy: { ...proxySetting },
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
})
