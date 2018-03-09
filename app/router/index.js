import Vue from 'vue'
import Router from 'vue-router'
//主页
const home = resolve => {require(["@/components/home/index"], resolve)}

//图片懒加载
const lazyLoad = resolve => {require(["@/components/lazy-load/index"], resolve)}

// 移动端适配
const adapter = resolve => {require(["@/components/adapter/index"], resolve)}

//css垂直居中
const verticalCenter = resolve => {require(["@/components/vertical-center/index"], resolve)}

//第三方登录github
const oauthApp = resolve => {require(["@/components/oauth-app/index"], resolve)}

// cssimage-bus
const busImage = resolve => {require(["@/components/bus-image/index"], resolve)}

// css carousels
const cssCarousels = resolve => {require(["@/components/css-carousels/index"], resolve)}

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
