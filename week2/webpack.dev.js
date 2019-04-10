const merge = require('webpack-merge');
const common = require('./webpack.common');
module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ],
    loaders: [
      { exclude: ['node_modules'], loader: 'babel', test: /\.jsx?$/ }
    ],
  }
});