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
        },
        {
          path:'tree',
          name:'tree',
          component:()=>import('@/views/lcomponent/tree/index')
        },
        {
          path:'echarts',
          name:'echarts',
          component:()=>import('@/views/lcomponent/echarts/index')
        },
        {
          path:'date',
          name:'date',
          component:()=>import('@/views/lcomponent/date/index')
        },
        {
          path:'banner',
          name:'banner',
          component:()=>import('@/views/lcomponent/banner/index')
        },
        {
          path:'timeLine',
          name:'timeLine',
          component:()=>import('@/views/lcomponent/timeLine/index')
        }
    ]
}
