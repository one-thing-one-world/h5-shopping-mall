import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '../views/layout.vue'
import home from '../views/home.vue'


Vue.use(VueRouter)

const routes = [


  {
    path: '/',
    name: 'layout',
    component: layout,
    children: [

      {
        path: '',
        name: 'home',
        component: home
      },
      {
        path: 'cata',
        name: 'cata',
        component: () => import('../views/cata.vue')
      },
      {
        path: 'mine',
        name: 'mine',
        component: () => import('../views/mine.vue')
      },
      {
        path: 'shop',
        name: 'shop',
        component: () => import('../views/shop.vue')
      },
    ]

  },
  {
    path:'/login',
    name:"login",
    component: () => import('../views/login.vue')
  },
  {
    path:'/city',
    name:'city',
    component: () => import('../views/city.vue')
  },
  {

    path:'/detail',
    name:'detail',
    component: () => import('../views/detail.vue')
  
  },
  {
    path:'/settlement',
    name:'settlement',
    component:()=> i{}
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
