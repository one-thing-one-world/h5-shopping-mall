import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '../views/layout.vue'
import home from '../views/home.vue'


Vue.use(VueRouter)
// const originalPush = Router.prototype.push
// Router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}


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
    component:() => import('../views/settlement.vue')
  },
  {
    path:'/adress',
    name:'adress',
    component:() => import('../views/adress.vue')
  },
  {
    path:'/adressEdit',
    name:'adressEdit',
    component:() => import('../views/adressEdit.vue')
  },
  {
    path:'/comments',
    name:'comments',
    component:() => import('../views/comments.vue')
  },
  {
    path:'/comment',
    name:'comment',
    component:() => import('../views/comment.vue')
  },
  {
    path:'/comment2',
    name:'comment2',
    component:() => import('../views/comment2.vue')
  },
  {
    path:'/myOrder',
    name:'myOrder',
    component:() => import('../views/myOrder.vue')
  },
  {
    path:'/myCollect',
    name:'myCollect',
    component:() => import('../views/myCollect.vue')
  },
  {
    path:'/lookThrough',
    name:'lookThrough',
    component:() => import('../views/lookThrough.vue')
  },
  
  {
    path:'/personalDatas',
    name:'lookThrough',
    component:() => import('../views/lookThrough.vue')
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
