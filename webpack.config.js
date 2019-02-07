const path = require ('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const webpack = require('webpack')

module.exports = (env) => {
  const isProduction = env === 'production'
  console.log("Production environment:", isProduction)
  return {
    entry: ['babel-polyfill', './src/assets/js/index.js'],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'assets/js/bundle.js'
    },
    module: {
      rules: [
        {
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'assets/img/'
              }  
            }
          ]
        },
        {
          test: /\.s?css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }              
            }
          ]
        }
      ]
    },
    devServer: {
      contentBase: './dist',
      historyApiFallback: true
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.html'
      }),
      new MiniCssExtractPlugin({
        filename: 'assets/css/styles.css',
        chunkFilename: 'assets/css/styles.css'
      }),
      new BundleAnalyzerPlugin(),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/) // Don't bundle locale files in moment. Saves almost 200kB
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map'
  }
}