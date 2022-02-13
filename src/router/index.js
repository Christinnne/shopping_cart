import Vue from 'vue'
import VueRouter from 'vue-router'
import StepOne from '../views/StepOne.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/1'
  },
  {
    path: '/1',
    name: 'step-one',
    component: StepOne
  },
]

const router = new VueRouter({
  routes
})
export default router
