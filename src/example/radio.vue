<template>
  <div id="example">
   <div class="demo-block-title">
      <span>radio - 基础用法</span>
    </div>
    <loli-radio :customizeTitle="title">
      <template v-for="item in customizeTextArray" >
        <loli-radio-item :customizeText="item.text" :customizeValue="item.value" :customizeName="item.name" :key="item.text"></loli-radio-item>
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
      customizeTextArray:[
        {
          text:'单项选择1',
          value:'value1',
          name:'1'
        },
        {
          text:'单项选择2',
          value:'value2',
          name:'1'
        },
        {
          text:'单项选择3',
          value:'value3',
          name:'1'
        },
        {
          text:'单项选择4',
          value:'value4',
          name:'1'
        }]
    };
  }
};
</script>

<style lang="stylus" scoped>

</style>