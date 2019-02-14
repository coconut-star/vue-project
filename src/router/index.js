import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import About from '@/pages/About'
import Values from '@/pages/Values'
import Brands from '@/pages/brands'
import Products from '@/pages/products'
import Contact from '@/pages/contact'
import ProductDetail from '@/pages/product_detail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/aboutus',
      name: 'About us',
      component: About
    },
    {
      path: '/ourvalues',
      name: 'Our values',
      component: Values
    },
    {
      path: '/brands',
      name: 'brands',
      component: Brands
    },
    {
      path: '/products',
      name: 'products',
      component: Products
    },
    {
      path: '/contactus',
      name: 'Contact us',
      component: Contact
    },
    {
      path: '/product_detail',
      name: 'Product Detail',
      component: ProductDetail
    }
  ]
})
