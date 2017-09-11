const path = require('path')

module.exports = {
  entry: './webpack/entry.js',
  output: {
    path: path.resolve(__dirname, '_assets/javascripts/'),
    filename: 'main.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      }
    ]
  }
}
