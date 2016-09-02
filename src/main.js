import Vue from 'vue'
import 'n-zepto'
import 'swiper'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Resource from 'vue-resource'

const debug = process.env.NODE_ENV !== 'production'
Vue.config.debug = true;
var App = Vue.extend({});
Vue.use(VueRouter);
Vue.use(Resource);
Vue.use(Vuex);


var router = new VueRouter({});
router.map({
    '/index': {
        component: function (resolve) {
            require(['./components/App.vue'], resolve)
        },
        auth: true,
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
    },
    '/login':{
        component: function (resolve) {
            require(['./components/login/login.vue'], resolve)
        },
        auth: false
    }
});
router.beforeEach(function (transition) {
    if (transition.to.auth) {
        if(localStorage.getItem('userid')!="admin"||localStorage.getItem('password')!="admin"){
            transition.abort()
        }
    }else{
        if(localStorage.getItem('userid')=="admin"&&localStorage.getItem('password')=="admin"){
            transition.redirect('/index')
        }
    }
    transition.next()
    $('body').scrollTop(0) 
})
router.redirect({
    '*':"/login"
});
router.start(App, 'body');
