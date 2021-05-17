const path = require('path')
const config = require('./webpack.config')
const CURRENT_WORKING_DIR = process.cwd()

config.mode = 'development'

config.devServer = {
  port: 5000,
  hot: true,
  open: true,
  inline: true,
  contentBase: path.join(CURRENT_WORKING_DIR, 'dist')
}

config.devtool = 'inline-source-map'

module.exports = config
