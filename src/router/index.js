import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

import Admin from '../views/Admin/Admin.vue'
import Gallery from '../views/Admin/Gallery.vue'
import AddImage from '../views/Admin/AddImage.vue'

import PageNotFound from '../views/PageNotFound.vue'

import Product from '../views/Product/Product.vue'
import AddProduct from '../views/Product/AddProduct.vue'
import EditProduct from '../views/Product/EditProduct.vue'
import ShowDetails from '../views/Product/ShowDetails.vue'

import Category from '../views/Category/Category.vue'
import AddCategory from '../views/Category/AddCategory.vue'
import EditCategory from '../views/Category/EditCategory.vue'
import ListProducts from '../views/Category/ListProducts.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  //Admin routes
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path : '/admin/gallery',
    name : 'Gallery',
    component : Gallery
  },
  {
    path : '/admin/gallery/add',
    name : 'AddImage',
    component : AddImage 
  },
  //Product routes
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/admin/product',
    name: 'AdminProduct',
    component: Product
  },
  {
    path: '/admin/product/add',
    name: 'AddProduct',
    component: AddProduct
  },
  {
    path: '/admin/product/:id',
    name: 'EditProduct',
    component: EditProduct,
  },
  {
    path : '/product/show/:id',
    name : 'ShowDetails',
    component: ShowDetails
  },
  //Category routes
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/admin/category',
    name: 'AdminCategory',
    component: Category
  },
  {
    path: '/admin/category/add',
    name: 'AddCategory',
    component: AddCategory
  },
  {
    path: '/admin/category/:id',
    name: 'EditCategory',
    component: EditCategory
  },
  {
    path : '/category/show/:id',
    name : 'ListProducts',
    component: ListProducts
  },
  //Page Not found
  {
    path : '/:catchAll(.*)',
    name : 'PageNotFound',
    component : PageNotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

//scroll to top after every route change
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});

export default router
