import Vue from 'vue'
import VueRouter from 'vue-router'
import $ from 'n-zepto'

Vue.config.debug = true;
var App = Vue.extend({});
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
    }
});
router.start(App, 'body');
