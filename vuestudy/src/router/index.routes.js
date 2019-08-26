export default{
    path:'/',
    component:()=>import('@/views/eMenu/index'),
    redirect: '/',
    children:[
        {
          path: 'home',
          name: 'home',
          component: () => import('@/views/home/index'),
          meta: {title: '首页', icon: 'home'}
        }
    ]
}
