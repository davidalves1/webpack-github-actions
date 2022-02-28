const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

const distPath = path.join(__dirname, 'dist');

module.exports = {
  mode: 'production',
  devServer: {
    static: {
      directory: distPath,
    },
    port: 5500,
    hot: true,
  },
  entry: './src/main.ts',
  output: {
    filename: 'app.min.js',
    path: distPath,
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'public' }]
    })
  ],
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [{
      test: /\.ts$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    }]
  }
}
