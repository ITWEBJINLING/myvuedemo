import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const routerList=[];
function importAll(r){
  r.keys().forEach(
    (key)=>routerList.push(r(key).default)
  )
}
// 使用正则匹配所有.routes或者.js的文件
importAll(require.context('.',true,/\.routes\.js/))
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...routerList
  ]
})
