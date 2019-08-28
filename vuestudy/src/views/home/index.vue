<template>
  <div class="main">
    <!-- 图片从字符串中截取，正则 -->
    <div id="img-show">
      
    </div>
    <div id="text-show" v-html="textHtml">
      <!-- <div class="img-sclice-html" style="margin-top:50px;">
         <span>可爱的小猫咪</span>
      </div> -->
    </div>
    <!-- <div class="" style="margin-top:50px;">
      <img src="http://img0.imgtn.bdimg.com/it/u=2579044471,4108191309&fm=26&gp=0.jpg" alt="">
      <span>可爱的小猫咪</span>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      textHtml:''
    };
  },
  created(){
    
  },
  mounted(){
    this.imgSclice()
  },
  methods: {
    imgSclice(){
      var str=`<div class="img-sclice-html"><img src="http://img0.imgtn.bdimg.com/it/u=2579044471,4108191309&fm=26&gp=0.jpg" alt=""><span>可爱的小猫咪</span></div>`;
      var reg = /(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|,|&|-)+)/g;
      var imgUrl=str.match(reg)[0];
      // 获取dom元素
      var dom=document.getElementById('img-show');
      dom.style.backgroundImage='url("'+ imgUrl +'")';
      // 截取img
      var textStr='',arr=[],strs='';
      var regs=/<[^<>]+>/g
      textStr=str.match(regs)
      textStr.forEach(value=>{
        if(value.indexOf("<img")!=-1){
          arr=str.split(value);
          arr.forEach(value=>{
            strs+=value;
          })
        }
      })
      this.textHtml=strs;
    }
  }
};
</script>
<style>
.img-sclice-html{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.img-sclice-html span{
  margin-top: 15px;
  font-size: 22px;
  font-weight: bold;
}
</style>
<style scoped>
.main{
  height: 100%;
}

#img-show{
  width: 400px;
  height: 300px;
  background-size: cover;
  /* background-image: url() */
  background-repeat: no-repeat;
}
</style>
