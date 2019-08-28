export default{
    path:'/example',
    component:()=>import('@/views/eMenu/index'),
    redirect: '/example',
    children:[
        {
          path: 'imgSlice',
          name: 'imgSlice',
          component: () => import('@/views/example/imgSlice'),
          meta: {title: '图片截取', icon: 'imgSlice'}
        }
    ]
}
