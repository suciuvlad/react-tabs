var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: {
    'react-tabs': __dirname + "/index.js",
    'react-tabs.min': __dirname + "/index.js",
  },

  output: {
    path: __dirname + "/build",
    libraryTarget: 'umd',
    filename: "[name].js"
  },

  externals: [
    'classnames',
    'react',
    'react-dom'
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true,
      compress: {
        warnings: false
      }
    })
  ]
}
