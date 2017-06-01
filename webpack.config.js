var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: path.resolve(__dirname, './src/app/app.js')
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: './',
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015'] }
        }]
      }
    ]
  }
};
