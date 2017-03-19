var path = require('path');

module.exports = {
  entry: ['babel-polyfill', './src'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/, // include .js files
        enforce: 'pre', // preload the jshint loader
        exclude: /node_modules/, // exclude any and all files in the node_modules folder
        use: [
            {
                loader: 'jshint-loader',
                options: {
                  asi: true,
                  esversion: 6,
                  quotmark: 'single'
                }
            }
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        query: {
          presets: ['es2015', 'stage-0']
        }
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader',
        include: [
          path.resolve(__dirname, 'src')
        ]
      }
    ]
  }
};
