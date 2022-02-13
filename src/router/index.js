import Vue from 'vue'
import VueRouter from 'vue-router'
import CheckOut from '../views/CheckOut.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/1'
  },
  {
    path: '/1',
    name: 'checkOut',
    component: CheckOut
  },
]

const router = new VueRouter({
  routes
})
export default router
