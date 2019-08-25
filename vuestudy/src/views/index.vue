<template>
  <div class="main">
    <eMenu />
    <router-view></router-view>
  </div>
</template>

<script>
import eMenu from './eMenu/index'
export default {
  name: "indexKeepAlive",
  components:{eMenu},
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
   beforeRouteLeave (to, from, next) {
     console.log(from)
    // 如果下一个页面不是详情页（C），则取消列表页（B）的缓存
    if (to.name !== 'home') {
      //  from.name='fff'
        // this.$store.commit('global/noKeepAlive', from.name)
    }
    next()
  },
  methods: {
    onSubmit() {
      this.$router.push("home");
    },
    tiaozhuan(){
      this.$router.push("fanhui");
    }
  }
};
</script>
<style scoped>
.main{
  width:280px;
  height: 100%;
}

</style>
