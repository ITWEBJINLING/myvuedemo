import Vue from 'vue'
import Router from 'vue-router'
import login from './views/login/index'
import index from './views/index'
import home from './views/home'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      // meta:{
      //   indexKeepAlive:true,
      // }
    },
    {
      path:'/home',
      name:'home',
      component:home
    }
  ]
})
