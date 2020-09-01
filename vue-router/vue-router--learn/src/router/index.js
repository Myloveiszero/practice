import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Hi from '../components/Hi.vue'
import Hi1 from '../components/Hi1.vue'
import Hi2 from '../components/Hi2.vue'
import Hello from '../components/HelloWorld.vue'
import Params from '../components/Params.vue'
import Error from '../components/Error.vue'

Vue.use(VueRouter)
  
  const routes = [
  {
    path: '/',
    name: 'Home',
    components:{
      defalut: Hello,
      left: Hi1,
      right: Hi2
    }
  },
  {
    path: '/hi',
    component: Hi,
    children: [
      {path: "/",name: 'Hi',component: Hi},
      {path: "hi1",name: 'Hi1', component: Hi1},
      {path: "hi2",name: 'Hi2', component: Hi2}
    ]
  },
  {
    path: '/params/:newsId(\\d+)/:newsTitle',
    name: 'Params',
    component: Params,
    // beforeEnter: (to, from, next) => {
    //   console.log(to)
    //   console.log(from)
    //   next()
    // }
  },{
    path: '/goHome',
    redirect: '/'
  },{
    path: '/goParams/:newsId(\\d+)/:newsTitle',
    redirect: '/params/:newsId(\\d+)/:newsTitle'
  },{
    path: '/hi1',
    alias: '/goHi1',
    component: Hi1
  },{
    path: '*',
    component: Error
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
