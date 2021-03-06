import App from '../app'
/**
 * auth true登录才能访问，false不需要登录，默认true
 */
export default [
    {
        path: '/',
        component: App,
        children: [
            {
                path: '/login', //登录
                meta: { auth: false },
                component: resolve => require(['../pages/login/'], resolve)
            },
            {
                path: '/signout', //退出
                component: resolve => require(['../pages/signout/'], resolve)
            },
            {
                path: '/home', //个人主页
                component: resolve => require(['../pages/home/'], resolve)
            },
            {
                path: '/', //首页
                meta: { auth: false },
                component: resolve => require(['../pages/index/'], resolve)
            },
            {
                path: '/example', //example
                meta: { auth: false },
                component: resolve => require(['../pages/example/'], resolve)
            },
            {
                path: '/watch', //监控页面
                meta: { auth: false },
                component: resolve => require(['../pages/watch/'], resolve)
            },
            {
                path: '/map', //地图页
                meta: { auth: false },
                component: resolve => require(['../pages/map/'], resolve)
            },
            {
                path: '/tabScroll', //tab页面配合loadmore
                meta: { auth: false },
                component: resolve => require(['../pages/tabScroll/'], resolve)
            },
            {
                path: '/longscroll', //tab页面配合loadmore
                meta: { auth: false },
                component: resolve => require(['../pages/longscroll/'], resolve)
            },
            {
                path: '/bankcard', //tab页面配合loadmore
                meta: { auth: false },
                component: resolve => require(['../pages/bankcard/'], resolve)
            },
            {
                path: '/scroll', //scroll页面
                meta: { auth: false },
                component: resolve => require(['../pages/scroll/'], resolve),
                children: [
                    {
                        path: ':id',
                        component: resolve => require(['../pages/top-list/'], resolve),
                    }
                ]
            },
            {
                path: '*', //其他页面，强制跳转到登录页面
                redirect: '/login'
            }
        ]
    }
]