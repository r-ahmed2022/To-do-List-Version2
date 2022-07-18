const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  
   devServer: {
    static: './dist',
  },

  optimization: {
    runtimeChunk: 'single',
  },
  
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};