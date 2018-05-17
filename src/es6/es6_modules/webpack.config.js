const webpack = require('webpack'); 
const nodeENV = process.env.NODE_ENV || 'production';

module.exports = {
  mode: nodeENV,
  devtool: 'source-map',
  entry: {
    filename: './app.js',
  },
  output: {
    filename: './output.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            ['es2015', { module: false }],
          ],
        },
      },
    ],
  },
};
