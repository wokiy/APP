import Vue from 'vue'
import Router from 'vue-router'
import Index from "components/index/index"
import Category from 'components/category/category'
import Cart from 'components/cart/cart'
import Own from 'components/own/own'
import Brands from 'components/brands/brands'
import Search from 'components/search/search'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: "/index",
      component: Index
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/own',
      component: Own
    },
    {
      path: '/brands',
      component: Brands
    },
    {
      path: '/search',
      component: Search
    }
  ]
})
