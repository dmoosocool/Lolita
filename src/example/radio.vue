<template>
  <div id="example">
    <div class="demo-block-title">
      <span>radio - 基础用法</span>
    </div>
    <div class="container">
      <loli-radio-item label="value1" customizeValue="value1" customizeText="单选基础用法1" customizeName="1"></loli-radio-item>
      <loli-radio-item label="value2" customizeValue="value2" customizeText="单选基础用法2" customizeName="1"></loli-radio-item>
    </div>
    
    <div class="demo-block-title">
      <span>radio - 禁用状态</span>
    </div>
    <div class="container">
      <loli-radio-item isdisabled label="value1" customizeValue="value1" customizeText="单选基础用法1" customizeName="1"></loli-radio-item>
      <loli-radio-item isdisabled label="value2" customizeValue="value2" customizeText="单选基础用法2" customizeName="1"></loli-radio-item>
    </div>
    
    <div class="demo-block-title">
      <span>radio - 单选组</span>
    </div>
    <div class="container">
      <loli-radio :customizeTitle="title">
        <template v-for="item in customizeTextArray" slot="radioItems">
          <loli-radio-item customizeName="2" :customizeText="item.text" :customizeValue="item.value"  v-on:getValue="inputValue" :key="item.text"></loli-radio-item>
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
      title:'单项选择基础用法',
      picked:'',
      isdisabled:true,
      customizeTextArray:[
        {
          text:'单项选择1',
          value:'value1'
        },
        {
          text:'单项选择2',
          value:'value2'
        },
        {
          text:'单项选择3',
          value:'value3'
        },
        {
          text:'单项选择4',
          value:'value4'
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