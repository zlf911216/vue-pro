var webpack = require('webpack')
var merge = require('webpack-merge')
var baseConfig = require('./webpack.base.conf')
var cssLoaders = require('./css-loaders')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

//是否生成map
var SOURCE_MAP = false

module.exports = merge(baseConfig, {
  devtool: SOURCE_MAP ? '#source-map' : false,
  output: {
    //在name/id后载入[chunkhash]载入哈希值
    filename: 'js/[name].js',
    chunkFilename: 'js/[id].js'
  },
  vue: {
    loaders: cssLoaders({
      sourceMap: SOURCE_MAP,
      extract: false
    })
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    // extract css into its own file
    new ExtractTextPlugin('[name].[contenthash].css'),
    // generate dist index.html with correct asset hash for caching.
    // see https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: '../index.html',
      template: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    })
  ]
})
