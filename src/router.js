import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Index from './views/Index.vue'

import Set from './views/user/Set.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/category',
      name: 'category',
      component: () =>
        import(/* webpackChunkName: "category" */ './views/Category.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () =>
        import(/* webpackChunkName: "cart" */ './views/Cart.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('./views/user/User.vue')
      // children: [
      //   {
      //     path: 'set',
      //     component: Set
      //   }
      // ]
    },
    {
      path: '/set',
      name: 'set',
      component: Set
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('./views/Search.vue')
    }
    // {
    //   path: '*',
    //   redirect: '/index'
    // }
  ]
})
