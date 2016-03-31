var path = require('path'),
    webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
        {
          test: /.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: ['es2015', 'react']
          }
        },
        {
          test: /\.scss$/,
          loader: 'style!css!sass'
        },
        {
          test: /\.(png|jpg)$/,
          loader: 'url-loader?limit=8192'
        }
      ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
