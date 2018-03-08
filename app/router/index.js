import Vue from 'vue'
import Router from 'vue-router'
//主页
import home from '@/components/home/index'

//图片懒加载
import lazyLoad from '@/components/lazy-load/index'

// 移动端适配
import adapter from '@/components/adapter/index'

//css垂直居中
import verticalCenter from '@/components/vertical-center/index'

//第三方登录github
import oauthApp from '@/components/oauth-app/index'

// cssimage-bus
import busImage from '@/components/bus-image/index'

// css carousels

import cssCarousels from '@/components/css-carousels/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/lazyLoad',
      name: 'lazyLoad',
      component: lazyLoad
    },
    {
      path: '/adapter',
      name: 'adapter',
      component: adapter
    },
    {
      path: '/verticalCenter',
      name: 'verticalCenter',
      component: verticalCenter
    },
    {
      path: '/oauth',
      name: 'oauthApp',
      component: oauthApp
    },
    {
      path: '/busImage',
      name: 'busImage',
      component: busImage
    },
    {
      path: '/cssCarousels',
      name: 'cssCarousels',
      component: cssCarousels
    }
 ]
})
