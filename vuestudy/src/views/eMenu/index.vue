<template>
  <div class="eMenu">
    <div class="home-left">
     <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#003260"
      text-color="#bfcbd9"
      router
      active-text-color="#ffffff">
      <el-menu-item index="/home">
          <i class="el-icon-setting"></i>
          <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="/lcomponent">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>组件库</span>
          </template>
          <el-menu-item index="/lcomponent/lupload">
            <i class="el-icon-setting"></i>
            <span slot="title">上传组件</span>
          </el-menu-item>
          <el-menu-item index="/lcomponent/tree">
            <i class="el-icon-setting"></i>
            <span slot="title">树形结构</span>
          </el-menu-item>
          <el-menu-item index="/lcomponent/echarts">
            <i class="el-icon-setting"></i>
            <span slot="title">echarts图表</span>
          </el-menu-item>
          <el-menu-item index="/lcomponent/date">
            <i class="el-icon-setting"></i>
            <span slot="title">日历组件</span>
          </el-menu-item>
          <el-menu-item index="/lcomponent/banner">
            <i class="el-icon-setting"></i>
            <span slot="title">轮播</span>
          </el-menu-item>
          <el-menu-item index="/lcomponent/timeLine">
            <i class="el-icon-setting"></i>
            <span slot="title">时间轴</span>
          </el-menu-item>
      </el-submenu>
      <el-submenu index="/example">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>案例</span>
          </template>
          <el-menu-item index="/example/imgSlice">
            <i class="el-icon-setting"></i>
            <span slot="title">截取图片</span>
          </el-menu-item>
      </el-submenu>
    </el-menu>
    </div>
    <div class="home-right">
      <transition name="el-fade-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>
<script>
  export default {
    name:'eMenu',
    data() {
      return {
        data:[
           {id:1,label:"导航一",value:'/',
             children:[
               {id:2,label:'首页',value:'/home'}
             ]
           }
        ]
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style scoped>
.eMenu{
  width: 100%;
  height: 100%;
  display: flex;
}
.home-left{
  width: 275px;
  height: 100%;
  background-color: #003260;
  overflow-x: hidden;
  overflow-y: auto;
}
.el-menu-vertical-demo{
  width: 280px;
}
.home-right{
  width: calc(100% - 290px);
}
</style>