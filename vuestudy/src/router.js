import Vue from 'vue'
import Router from 'vue-router'
import login from './router/login.routes.js'
import index from './router/index.routes.js'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes:[
    login,
    index
  ]
})



// 用正则匹配的办法
// import Vue from 'vue'
// import Router from 'vue-router'
// Vue.use(Router)

// const routerList=[];
// function importAll(r){
//   r.keys().forEach(
//     (key)=>routerList.push(r(key).default)
//   )
// }
// // 使用正则匹配所有.routes或者.js的文件
// importAll(require.context('.',true,/\.routes\.js/))
// export default new Router({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes: [
//     ...routerList
//   ]
// })
