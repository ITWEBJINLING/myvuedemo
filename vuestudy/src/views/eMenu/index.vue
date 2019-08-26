<template>
  <div class="eMenu">
    <div class="home-left">
     <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      router
      active-text-color="#ffd04b">


      <!-- <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>首页</span>
        </template> -->
        <!-- <el-submenu index="1-1">
          <template slot="title">
                  <i class="el-icon-setting"></i>
                  <span slot="title">导航四</span>
          </template>
          <el-menu-item index="1-1-1-1">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-submenu> -->
        <!-- <el-menu-item index="1-2">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
        <el-menu-item index="1-3">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-submenu>   -->
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
      </el-submenu>
    </el-menu>
    </div>
    <div class="home-right">
        <router-view></router-view>
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
  width: 280px;
  height: 100%;
  background-color: rgb(41, 34, 34);
}
.home-right{
  width: calc(100% - 290px);
}
</style>