const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './app.js',
  output: { path: path.join(__dirname, 'public'), filename: 'bundle.js' },
  watch: false,
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
      test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.scss$/,
        loaders: 'style-loader!css-loader!sass-loader',
      },
    ],
  },
  node: {
    fs: 'empty',
    tls: 'empty'
  },
  plugins: [
    new Dotenv({
      path: '.env',
      safe: false,
    })
  ]
};
