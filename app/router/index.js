import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/index'
import lazyLoad from '@/components/lazy-load/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: home
    // },
    {
      path: '/',
      name: 'lazyLoad',
      component: lazyLoad
    }

  ]
})
