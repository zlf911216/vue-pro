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
    '/a': {
        component: function (resolve) {
            require(['./components/a.vue'], resolve)
        }
    },
    '/b': {
        component: function (resolve) {
            require(['./components/b.vue'], resolve)
        }
    },
    '/c': {
        component: function (resolve) {
            require(['./components/c.vue'], resolve)
        }
    },
    '/d': {
        component: function (resolve) {
            require(['./components/d.vue'], resolve)
        }
    },
    '/':{
        component: function (resolve) {
            require(['./components/a.vue'], resolve)
        }
    }
});
router.start(App, 'body');
