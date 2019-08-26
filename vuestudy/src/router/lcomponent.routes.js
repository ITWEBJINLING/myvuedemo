export default{
    path:'/lcomponent',
    component:()=>import('@/views/eMenu/index'),
    redirect: '/lcomponent',
    children:[
        {
          path: 'lupload',
          name: 'lupload',
          component: () => import('@/views/lcomponent/lupload/index'),
          meta: {title: '上传', icon: 'home'}
        }
    ]
}
