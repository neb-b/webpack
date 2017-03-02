var path = require('path');

module.exports = {
  entry: ['babel-polyfill', './src'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    loaders: [
      {
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, 'src')
        ],
        query: {
          presets: ['es2015', 'stage-0', 'react']
        }
      }
    ]
  }
};
