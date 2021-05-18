const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const CURRENT_WORKING_DIR = process.cwd()

module.exports = {
  entry: [path.join(CURRENT_WORKING_DIR, 'client/app/index.js')],
  output: {
    path: path.join(CURRENT_WORKING_DIR, 'dist'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.json', '.css', '.scss', '.html'],
    alias: {
      app: 'client/app'
    }
  },
  performance: {
    hints: false
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'client/public/assets',
          to:'assets'
        }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: /(node_modules)/
      },
      {
        test: /\.svg$/,
        use: {
          loader: 'svg-url-loader',
          options: {
            encoding: 'base64'
          }
        }
      },
      {
        test: /\.(png|jpg|jpeg|gif|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
              name: '[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts',
              name: '[name].[ext]'
            }
          }
        ]
      }
    ]
  }
}
