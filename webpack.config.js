// import path from 'path';
const path = require('path');


module.exports = {
  entry: './app.js',
  output: { path: path.join(__dirname, 'public'), filename: 'bundle.js' },
  watch: true,
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
        test: /\.s?css$/,
        loaders: ['style', 'css', 'sass'],
      },
    ],
  },
};
