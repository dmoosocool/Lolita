<template>
  <div id="example">
    <loli-header fixed>
      <router-link :to="{path: '/'}" slot="left">返回</router-link>
      <span slot="title">Radio - 单选按钮</span>
    </loli-header>

    <div class="demo-block-title">
      <span>radio - 基础用法</span>
    </div>
    <div class="container">
      <loli-radio-item v-model="radio" label="默认选中" name="1"></loli-radio-item>
      <loli-radio-item label="value2" name="1"></loli-radio-item>
    </div>

    <div class="demo-block-title">
      <span>radio - 禁用状态</span>
    </div>
    <div class="container">
      <loli-radio-item isdisabled label="禁用1" name="2"></loli-radio-item>
      <loli-radio-item isdisabled label="禁用2" name="3"></loli-radio-item>
    </div>

    <div class="demo-block-title">
      <span>radio - 单选组</span>
    </div>
    <div class="container">
      <loli-radio customizeTitle="单项选择基础用法">
        <template v-for="item in customizeTextArray" slot="radioItems">
          <loli-radio-item name="3" :id="item.index" :label="item.value" v-on:getValue="inputValue" :key="item.index"></loli-radio-item>
        </template>
      </loli-radio>
      <span class="tipColor">选择项为===>{{picked}}</span>
    </div>

  </div>
</template>
<script>
export default {
  name: 'example-radio',
  data(){
    return{
      picked:'',
      isdisabled:true,
      radio:'默认选中',
      customizeTextArray:[
        {
          value:'value1',
          index:1
        },
        {
          value:'value2',
          index:2
        },
        {
          value:'value3',
          index:3
        },
        {
          value:'value4',
          index:4
        }]
    };
  },
  methods:{
    inputValue(e){
      //子组件传过来的值
      this.picked = e;
    }
  }
};
</script>

<style lang="stylus" scoped>
.container
  background-color #fff
  padding 10px 20px
.tipColor
  color red
  font-size 16px
</style>
