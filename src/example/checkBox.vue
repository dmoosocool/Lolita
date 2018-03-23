<template>
   <div id='example'>
      <div class="demo-block-title">
        <span>checkBox - 基础用法</span>
      </div>
      <div class="container">
        <loli-checkbox-item v-model="single" label="复选框基础用法" @on-change="test"></loli-checkbox-item>
        <span class="tipColor">{{checkSatus}}</span>
      </div>

      <div class="demo-block-title">
        <span>checkBox - 默认选中</span>
      </div>
      <div class="container">
        <loli-checkbox-item v-model="defaultChecked" label="复选框默认选中状态"></loli-checkbox-item>
      </div>

      <div class="demo-block-title">
        <span>checkBox - 禁用状态</span>
      </div>
      <div class="container">
        <loli-checkbox-item v-model="disabledSingle" isdisabled label="复选框禁用状态"></loli-checkbox-item>
      </div>
      
      <div class="demo-block-title">
        <span>checkBox - 复选框组</span>
      </div>
      <div class="container">
        <loli-checkbox v-model="checkedResult">
          <loli-checkbox-item  id="1" label="复选框1"></loli-checkbox-item>
          <loli-checkbox-item  id="2" label="复选框2"></loli-checkbox-item>
          <loli-checkbox-item  id="3" label="复选框3"></loli-checkbox-item>
          <loli-checkbox-item  id="4" label="复选框4"></loli-checkbox-item>
        </loli-checkbox>
        <span class="tipColor">选择项为===>{{checkedResult}}</span>
      </div>
    </div>

</template>
  
<script>
  
export default {
  data() {
    return {
      single:false,
      checkSatus:'',
      defaultChecked:true,
      disabledSingle:false,
      checkedResult:[]
    };
  },
  methods: {
    test(data){
      this.checkSatus = data;
    }
  }
};
</script>

<style scoped lang="stylus">
.container
  background-color #fff
  padding 10px 20px
.tipColor
  color red
  font-size 16px
</style>