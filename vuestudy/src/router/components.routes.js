export default{
    path:'/components',
    component:()=>import('@/views/eMenu/index'),
    redirect: '/components',
    children:[
        {
          path: 'lupload',
          name: 'lupload',
          component: () => import('@/views/components/lupload/index'),
          meta: {title: '上传', icon: 'home'}
        },
        {
          path:'tree',
          name:'tree',
          component:()=>import('@/views/components/tree/index')
        },
        {
          path:'echarts',
          name:'echarts',
          component:()=>import('@/views/components/echarts/index')
        },
        {
          path:'date',
          name:'date',
          component:()=>import('@/views/components/date/index')
        },
        {
          path:'banner',
          name:'banner',
          component:()=>import('@/views/components/banner/index')
        },
        {
          path:'timeLine',
          name:'timeLine',
          component:()=>import('@/views/components/timeLine/index')
        }
    ]
}
