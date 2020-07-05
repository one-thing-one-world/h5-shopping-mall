import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/home',
      name: 'home',
      
      component: home
    },
    {
      path: '/about',
      name: 'about',
      
      component: () => import( '../views/about.vue')
    },
  
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
