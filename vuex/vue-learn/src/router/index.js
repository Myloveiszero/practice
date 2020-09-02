import Vue from 'vue'
import VueRouter from 'vue-router'
import Count from '../components/Count.vue'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/count',
    name: 'Count',
    component: Count
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
