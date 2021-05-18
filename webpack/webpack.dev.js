const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const CURRENT_WORKING_DIR = process.cwd()

module.exports = {
  mode: 'development',
  output: {
    path: path.join(CURRENT_WORKING_DIR, 'dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(scss|sass|css)$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(CURRENT_WORKING_DIR, 'client/public/index.html')
    }),
  ],
  devServer: {
    port: 3000,
    hot: true,
    open: true,
    inline: true,
    compress: true,
    noInfo: true,
    historyApiFallback: true,
    disableHostCheck: false
  },
  devtool: 'inline-source-map'
}
