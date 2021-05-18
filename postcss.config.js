const postcsspresetenv = require('postcss-preset-env')
const postcssnormalize = require('postcss-normalize')
const autoprefixer = require('autoprefixer')

module.exports = () => {
  return {
    plugins: [
      postcsspresetenv({}),
      postcssnormalize({}),
      autoprefixer({})
    ]
  }
}
