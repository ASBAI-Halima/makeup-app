import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue';
import Products from '../views/Products.vue';
import ProductDetails from '../views/ProductDetails.vue';
import Contact from '../views/Contact.vue';
import Cart from '../views/Cart.vue';
import Checkout from '../views/Checkout.vue';
import Category from '../views/Category.vue';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/category/:cat',
    name: 'category',
    component: Category,
    props: true,
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/details',
    name: 'details',
    component: ProductDetails
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: Checkout
  },
  {
    path: '/products',
    name: 'products',
    component: Products
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router