import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/home',
      name: 'home',
      
      component: () => import( '../views/home.vue')
    },
    {
      path: '/about',
      name: 'abo',
      
      component: () => import( '../views/home.vue')
    },
  {
    path: '/homeLayout',
    name: 'homeLayout',
    component: homeLayout,
    children:[
      {
        
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    
    component: () => import( '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
