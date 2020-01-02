import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import First from '../components/First.vue'
import My from '../components/My.vue'
import Sky from '../components/Sky.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/home/first',
  },
  {
    path: '/home',
    component: Home,
    children:[
      {
        path:'/home/first',
        component:First
      },
      {
        path:'/home/my',
        component:My
      },
      {
        path:'/home/sky',
        component:Sky
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
