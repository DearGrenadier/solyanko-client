const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './app.jsx',
    vendor: 'babel-polyfill'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
    publicPath: '/assets'
  },
  devServer: {
    contentBase: path.resolve(__dirname, './src'),
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [/src/],
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'stage-0', 'react'],
            plugins: ['transform-decorators-legacy']
          }
        }],
      },
      {
        test: /\.json$/,
        include: [/config/],
        use: [{
          loader: 'json-loader',
        }],
      },
    ],
  },
  resolve: {
    modules: ['src', 'node_modules', 'config']
  },
};
