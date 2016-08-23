import Vue from 'vue'
import VueRouter from 'vue-router'
import $ from 'n-zepto'
import swiper from 'swiper'
import banner from './components/banner'
import enter from './components/enter'

Vue.config.debug = true;
var App = Vue.extend({
    components:{banner,enter}
});
Vue.use(VueRouter);

var router = new VueRouter();
router.map({
    '/my': {
        component: function (resolve) {
            require(['./components/my.vue'], resolve)
        },
        subRoutes:{
            '/':{
                component: function (resolve) {
                    require(['./components/my/a.vue'], resolve)
                }
            },

        }
    },
    '/article': {
        component: function (resolve) {
            require(['./components/article.vue'], resolve)
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
                    require(['./components/article/message.vue'], resolve)
                }
            }

        }
    },
    '/travel': {
        component: function (resolve) {
            require(['./components/travel.vue'], resolve)
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
                    require(['./components/travel/message.vue'], resolve)
                }
            }

        }
    },
    '/eat': {
        component: function (resolve) {
            require(['./components/eat.vue'], resolve)
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
                    require(['./components/eat/message.vue'], resolve)
                }
            }
        }
    },
    '/':{
        component: function (resolve) {
            require(['./components/my.vue'], resolve)
        }
    }
});
router.start(App, 'body');
