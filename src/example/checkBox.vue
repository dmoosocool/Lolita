<template>
   <div id='example'>
    <div class="demo-block-title">
      <span>checkBox - 基础用法</span>
    </div>
    <loli-checkbox :customizeTitle="title">
      <template v-for="item in customizeTextArray">
        <loli-checkbox-item :customizeText="item.text" :key="item.text" :customizeValue="item.value" :customizeName="item.name"></loli-checkbox-item>
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
          value:'value1',
          name:'1'
        },
        {
          text:'复选框2',
          value:'value2',
          name:'1'
        },
        {
          text:'复选框3',
          value:'value3',
          name:'1'
        },
        {
          text:'复选框4',
          value:'value4',
          name:'1'
        }]
    };
  },
  created() {
      
  },
  methods: {
      
  }
};
</script>

<style scoped lang="stylus">
</style>