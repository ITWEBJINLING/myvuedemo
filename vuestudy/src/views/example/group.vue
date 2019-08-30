<template>
  <div class="main">
    <div class="list" v-for="(item,index) in data" :key="index">
      <el-checkbox
        :indeterminate="!item.checkAll"
        v-model="item.checkAll"
        @change="handleCheckAllChange($event, index)"
      >{{item.label}}</el-checkbox>
      <el-checkbox-group v-model="item.checkedName" @change="handleCheckedCitiesChange($event, index)">
        <el-checkbox
          v-for="(item1,index1) in item.children"
          :label="item1.name"
          :key="index1"
        >{{item1.name}}</el-checkbox>
      </el-checkbox-group>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [
        {
          checkAll:false,
          label: "A",
          checkedName:[],
          children: [
            { id: "1", name: "郭金玲1" },
            { id: "2", name: "郭金玲2" },
            { id: "3", name: "郭金玲3" },
            { id: "4", name: "郭金玲4" }
          ]
        },
        {
          checkAll:false,
          label: "B",
          checkedName:[],
          children: [
            { id: "5", name: "秦文猛1" },
            { id: "6", name: "秦文猛2" },
            { id: "7", name: "秦文猛3" },
            { id: "8", name: "秦文猛4" }
          ]
        }
      ]
    };
  },
  methods: {
    handleCheckAllChange(val, index) {
      var Arr=[];
      this.data[index].children.forEach(value=>{
          Arr.push(value.name)
      })
      this.data[index].checkedName=val?Arr:[]
    },
    handleCheckedCitiesChange(val, index) {
        console.log(val,index)
      // eslint-disable-next-line
    //   console.log(val);
    //   let checkedCount = val.length;
    //   const item = this.data[index];
    //   const flag = checkedCount === item.children.length;
    //   this.$set(item, "checkAll", flag);
    //   const styleFlag = checkedCount > 0 && checkedCount < item.children.length;
    //   this.$set(item, "isIndeterminate", styleFlag);
    //   console.log(value);
      //   let checkedCount = value.length;
      //   this.checkAll = checkedCount === this.cities.length;
      //   this.isIndeterminate =
      // checkedCount > 0 && checkedCount < this.cities.length;
    }
  }
};
</script>