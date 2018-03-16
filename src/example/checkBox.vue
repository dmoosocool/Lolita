<template>
   <div id='example'>
    <div class="demo-block-title">
      <span>checkBox - 基础用法</span>
    </div>
    <div class="container">
      <loli-checkbox-item customizeText="复选框1"  customizeValue="value1" ></loli-checkbox-item>
      <loli-checkbox-item customizeText="复选框2"  customizeValue="value2" ></loli-checkbox-item>
    </div>

    <div class="demo-block-title">
      <span>checkBox - 复选框组</span>
    </div>
    <loli-checkbox :customizeTitle="title">
      <template v-for="item in customizeTextArray" slot="checkBoxItems">
        <loli-checkbox-item :customizeText="item.text" :key="item.text" :customizeValue="item.value" @click="chooseValue(item.value)"></loli-checkbox-item>
      </template>
    </loli-checkbox>
   </div>
  
</template>
  
<script>
  
export default {
  data() {
    return {
      title:'复选框基础用法',
      customizeTextArray:[
        {
          text:'复选框1',
          value:'value1'
        },
        {
          text:'复选框2',
          value:'value2'
        },
        {
          text:'复选框3',
          value:'value3'
        },
        {
          text:'复选框4',
          value:'value4'
        }]
    };
  },
  created() {
      
  },
  methods: {
    chooseValue(text){
      console.log(text);
    }
  }
};
</script>

<style scoped lang="stylus">
.container
  background-color #fff
  padding 10px 20px
</style>