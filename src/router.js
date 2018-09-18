import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Index from './views/Index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    {
      path: '/',
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
      component: () =>
        import(/* webpackChunkName: "user" */ './views/User.vue')
    }
  ]
})
