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
<<<<<<< HEAD
=======
router.beforeEach(function (transition) {
    console.log("11")
    transition.next()
})
router.redirect({
    '*':"/index"
});
>>>>>>> parent of f8cf86a... zlf
router.start(App, 'body');
