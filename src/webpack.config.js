const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@fortawesome/fontawesome-svg-core$': '@fortawesome/fontawesome-svg-core/index.js',
      '@fortawesome/free-solid-svg-icons$': '@fortawesome/free-solid-svg-icons/index.js',
      '@fortawesome/vue-fontawesome$': '@fortawesome/vue-fontawesome/index.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.svg$/,
        loader: 'vue-svg-loader'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'fonts/'
        }
      }
    ]
  }
};