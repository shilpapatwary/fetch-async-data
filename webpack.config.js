const path = require('path');

require("@babel/register");
require('@babel/polyfill');

const config = {
  entry: './js/users.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  module: {
    rules : [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      }
    ]
  },
  watch: true,
  devtool: 'source-map',
};
// Exports
module.exports = config;