import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './router/router'
import store from './store/'
import components from './components/' //加载公共组件
import axios from 'axios'
import VueAxios from 'vue-axios'
//import Mint from 'mint-ui';
//import 'mint-ui/lib/style.css';

import './css/common.css'
import './less/common.less'

Object.keys(components).forEach((key) => {
    var name = key.replace(/(\w)/, (v) => v.toUpperCase()) //首字母大写
    Vue.component(`v${name}`, components[key])
})

Vue.use(VueAxios, axios)
Vue.use(VueRouter)
//Vue.use(Mint)
require('./appCofing.js')
//require('./zepto.js')
const router = new VueRouter({
    routes
})
router.beforeEach(({meta, path}, from, next) => {
    var { auth = true } = meta
    var isLogin = Boolean(store.state.user.id) //true用户已登录， false用户未登录

    if (auth && !isLogin && path !== '/login') {
        return next({ path: '/login' })
    }
    next()
})

new Vue({ store, router }).$mount('#app')