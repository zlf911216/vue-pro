var express = require('express')
var webpack = require('webpack')
var config = require('./webpack.dev.conf')
var proxyMiddleware = require('http-proxy-middleware')
var app = express()
var compiler = webpack(config)

// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = {
  // '/api': {
  //   target: 'http://jsonplaceholder.typicode.com',
  //   changeOrigin: true,
  //   pathRewrite: {
  //     '^/api': ''
  //   }
  // }
}

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
})

var hotMiddleware = require('webpack-hot-middleware')(compiler)
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
// serve pure static assets
app.use('/static', express.static('./static'))

app.post('/travel', function(req, res) {
    res.json(
      {message:[
        {
          name:'杭州游记',
          time:'2016-7-12',
          top_img:('/top_1.jpg'),
          message:'西湖可以分为北线、西线和南线三条线路，今天先游览北线和西线的一部分，从白娘子与许仙相识的断桥开始，穿过白堤，到达风景如画的孤山，在这里我们可以品茶赏景，出了孤山不远便是...',
          userid:'456'
        },
        {
          name:'杭州游记1',
          time:'2016-8-22',
          top_img:('/top_1.jpg'),
          message:'西湖可以分为北线、西线和南线三条线路，今天先游览北线和西线的一部分，从白娘子与许仙相识的断桥开始，穿过白堤，到达风景如画的孤山，在这里我们可以品茶赏景，出了孤山不远便是...',
          userid:'426'
        },
        {
          name:'杭州游记2',
          time:'2016-8-22',
          top_img:('/top_1.jpg'),
          message:'西湖可以分为北线、西线和南线三条线路，今天先游览北线和西线的一部分，从白娘子与许仙相识的断桥开始，穿过白堤，到达风景如画的孤山，在这里我们可以品茶赏景，出了孤山不远便是...',
          userid:'411'
        }
      ]}
    )
})

module.exports = app.listen(8080, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:8080')
})
