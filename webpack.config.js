const path = require('path');
const Dotenv = require('dotenv-webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: { path: path.join(__dirname, 'public'), filename: 'bundle.js' },
  watch: false,
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
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
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
          //loaders: 'style-loader!css-loader!sass-loader',
        }),
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
    }),
    new ExtractTextPlugin('styles.css'),
  ]
};
