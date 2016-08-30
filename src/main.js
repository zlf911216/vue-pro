import Vue from 'vue'
import 'n-zepto'
import 'swiper'
import VueRouter from 'vue-router'
import Resource from 'vue-resource'


Vue.config.debug = true;
var App = Vue.extend({});
Vue.use(VueRouter);
Vue.use(Resource);

var router = new VueRouter({});
router.map({
    '/index': {
        component: function (resolve) {
            require(['./components/App.vue'], resolve)
        },
        subRoutes:{
            '/my': {
                component: function (resolve) {
                    require(['./components/my/a.vue'], resolve)
                }
            },
            '/article': {
                component: function (resolve) {
                    require(['./components/article/article.vue'], resolve)
                },
                subRoutes:{
                    '/':{
                        component: function (resolve) {
                            require(['./components/article/b.vue'], resolve)
                        }
                    },
                    '/:userId':{
                        name:'article_message',
                        component: function (resolve) {
                            require(['./components/article/details-message.vue'], resolve)
                        }
                    }

                }
            },
            '/travel': {
                component: function (resolve) {
                    require(['./components/travel/travel.vue'], resolve)
                },
                subRoutes:{
                    '/':{
                        component: function (resolve) {
                            require(['./components/travel/c.vue'], resolve)
                        }
                    },
                    '/:userId':{
                        name:'travel_message',
                        component: function (resolve) {
                            require(['./components/travel/details-message.vue'], resolve)
                        }
                    }

                }
            },
            '/eat': {
                component: function (resolve) {
                    require(['./components/eat/eat.vue'], resolve)
                },
                subRoutes:{
                    '/':{
                        component: function (resolve) {
                            require(['./components/eat/d.vue'], resolve)
                        }
                    },
                    '/:userId':{
                        name:'eat_message',
                        component: function (resolve) {
                            require(['./components/eat/details-message.vue'], resolve)
                        }
                    }
                }
            },
        }
    }
});
router.beforeEach(function (transition) {
    console.log("11")
    transition.next()
    $('body').scrollTop(0)
})
router.redirect({
    '*':"/index"
});
router.start(App, 'body');
