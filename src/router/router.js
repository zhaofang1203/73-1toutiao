import VueRouter from 'vue-router'
import Vue from 'vue'
import ElentUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Login from '../views/login/login.vue'
Vue.use(ElentUI)
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    { name: 'home', path: '/', redirect: '/login' },
    { name: 'login', path: '/login', component: Login }
  ]
})
export default router
