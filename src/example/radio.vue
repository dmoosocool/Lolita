<template>
  <div id="example">
    <div class="demo-block-title">
      <span>radio - 基础用法</span>
    </div>
    <div class="container">
      <loli-radio-item customizeValue="value1" customizeText="单选基础用法1" customizeName="1"></loli-radio-item>
      <loli-radio-item customizeValue="value2" customizeText="单选基础用法2" customizeName="1"></loli-radio-item>
    </div>
    
    <div class="demo-block-title">
      <span>radio - 单选组</span>
    </div>
    <loli-radio :customizeTitle="title" v-model="radio">
      <template v-for="item in customizeTextArray" slot="radioItems">
        <loli-radio-item customizeName="2" :customizeText="item.text" :customizeValue="item.value"  @click="inputValue(item.value)" :key="item.text"></loli-radio-item>
      </template>
    </loli-radio>
  </div>
</template>
<script>
export default {
  name: 'example-radio',
  data(){
    return{
      title:'单项选择基础用法',
      radio:'333',
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
    inputValue(text){
      console.log(text);
    }
  }
};
</script>

<style lang="stylus" scoped>
.container
  background-color #fff
  padding 10px 20px
</style>