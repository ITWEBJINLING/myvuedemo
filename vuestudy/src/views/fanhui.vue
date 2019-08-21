<template>
  <div class="home">
    <h1>This is an about page</h1>
    <el-button type="primary" @click="back()">返回</el-button>
  </div>
</template>
<script>

  export default {
    name:'fanhui',
    data() {
      return {
      }
    },
    methods: {
      back() {
        this.$router.go(-1)
      }
    }
  }
</script>