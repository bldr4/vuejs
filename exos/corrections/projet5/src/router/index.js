import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/homePage.vue'
import Basket from '../views/shoppingBasket.vue'
import Product from '../views/product.vue'
import ProductDetails from '../views/productDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/basket',
    name: 'Basket',
    component: Basket
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  }, 
  {
    path: '/product/:id',
    name: 'ProductDetails',
    component: ProductDetails,
    props: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
