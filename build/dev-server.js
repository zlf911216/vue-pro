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
app.use('/outimg', express.static('./outimg'))

app.post('/travel', function(req, res) {
    res.json(
      {message:[
        {
          name:'杭州游记',
          time:'2016-7-12',
          top_img:('./outimg/top_1.jpg'),
          message:'西湖可以分为北线、西线和南线三条线路，今天先游览北线和西线的一部分，从白娘子与许仙相识的断桥开始，穿过白堤，到达风景如画的孤山，在这里我们可以品茶赏景，出了孤山不远便是...',
          userid:'456'
        },
        {
          name:'杭州游记1',
          time:'2016-8-22',
          top_img:('./outimg/top_1.jpg'),
          message:'西湖可以分为北线、西线和南线三条线路，今天先游览北线和西线的一部分，从白娘子与许仙相识的断桥开始，穿过白堤，到达风景如画的孤山，在这里我们可以品茶赏景，出了孤山不远便是...',
          userid:'426'
        },
        {
          name:'杭州游记2',
          time:'2016-8-22',
          top_img:('./outimg/top_1.jpg'),
          message:'西湖可以分为北线、西线和南线三条线路，今天先游览北线和西线的一部分，从白娘子与许仙相识的断桥开始，穿过白堤，到达风景如画的孤山，在这里我们可以品茶赏景，出了孤山不远便是...',
          userid:'411'
        }
      ]}
    )
})
app.post('/eat', function(req, res) {
    res.json(
      {message:[
        {
          name:'糖醋鲤鱼',
          time:'2016-8-12',
          top_img:('./outimg/fish.jpg'),
          message:'“糖醋鲤鱼”也是山东济南的传统名菜。济南北临黄河，黄河鲤鱼不仅肥嫩鲜美，而且金鳞赤尾，形态可爱，是宴会上的佳肴。据说“糖醋鲤鱼”最早始于黄河重镇——洛口镇。当...',
          userid:"11889"
        },
        {
          name:'蓝莓山药',
          time:'2016-8-15',
          top_img:('./outimg/fish.jpg'),
          message:'“糖醋鲤鱼”也是山东济南的传统名菜。济南北临黄河，黄河鲤鱼不仅肥嫩鲜美，而且金鳞赤尾，形态可爱，是宴会上的佳肴。据说“糖醋鲤鱼”最早始于黄河重镇——洛口镇。当...',
          userid:"15445646"
        },
        {
          name:'西湖醋鱼',
          time:'2016-8-17',
          top_img:('./outimg/fish.jpg'),
          message:'“糖醋鲤鱼”也是山东济南的传统名菜。济南北临黄河，黄河鲤鱼不仅肥嫩鲜美，而且金鳞赤尾，形态可爱，是宴会上的佳肴。据说“糖醋鲤鱼”最早始于黄河重镇——洛口镇。当...',
          userid:"457"
        }
      ]}
    )
})
app.post('/article', function(req, res) {
    res.json(
      {message:[
        {
          name:'vue',
          time:'2016-8-22',
          top_img:('./outimg/vue.jpg'),
          message:'Vue.js 提供一个官方命令行工具，可用于快速搭建大型单页应用。该工具提供开箱即用的构建工具配置，带来现代化的前端开发流程。只需一分钟即可启动带热重载、保存时静态检查以...',
          userid:"113"
        },
        {
          name:'angular',
          time:'2016-8-25',
          top_img:('./outimg/vue.jpg'),
          message:'Vue.js 提供一个官方命令行工具，可用于快速搭建大型单页应用。该工具提供开箱即用的构建工具配置，带来现代化的前端开发流程。只需一分钟即可启动带热重载、保存时静态检查以...',
          userid:"1444"
        },
        {
          name:'react',
          time:'2016-8-27',
          top_img:('./outimg/vue.jpg'),
          message:'Vue.js 提供一个官方命令行工具，可用于快速搭建大型单页应用。该工具提供开箱即用的构建工具配置，带来现代化的前端开发流程。只需一分钟即可启动带热重载、保存时静态检查以...',
          userid:"1888"
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
