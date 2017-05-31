const path = require('path');
// const webpack = require('webpack');


module.exports = {
  entry: './app.js',
  output: { path: path.join(__dirname, 'public'), filename: 'bundle.js' },
  watch: true,
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
};
