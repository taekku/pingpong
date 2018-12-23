'use strict';
const path = require('path');

module.exports = {
  mode: 'none',
  entry: ['./src/pingpong.ts'],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'ping_bundle.js',
    library: 'ping',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, '../resources/static/assets/js')
  }
};