const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {VueLoaderPlugin} = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development', /* or production */
  entry: {
    app: './src/main.js'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js', /* compiles to app.bundle.js */
    clean: true
  },

  optimization: {
    minimize: false, /* enables or disables minified js output */
    splitChunks: {
      chunks: 'all', /* use different output file for app and runtime */
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors' /* compiles to vendors.bundle */
        }
      }
    }
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      title: 'Vue2 application', /* sets document title */
      inject: 'body', /* puts script tag inside document's body */
      publicPath: '', /* base path of assets url */
      scriptLoading: 'blocking',
      minify: false /* minifies html output */
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].bundle.css' /* compiles style tags from vue templates */
    })
  ],

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [ /* must be in the correct order */
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
}
