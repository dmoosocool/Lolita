<template>
   <div id='example'>
    <loli-header fixed>
    <router-link :to="{path: '/'}" slot="left">返回</router-link>
    <span slot="title">inputNumber - 计数器</span>
    </loli-header>

    <div class="demo-block-title">
      <span>inputNumber--基础用法</span>
    </div>
    <loli-inputNumber v-model="valueOne" :min="1" :max="10"></loli-inputNumber>
    
    <div class="demo-block-title">
      <span>inputNumber--禁用</span>
    </div>
    <loli-inputNumber v-model="valueTwo" disabled></loli-inputNumber>
   
    <div class="demo-block-title">
      <span>inputNumber--自定义增减步数</span>
    </div>
    <loli-inputNumber v-model="valueThree" :steps="steps" :min="1" :max="10"></loli-inputNumber>
  
   </div>

</template>
  
<style lang="stylus" scoped>
  
</style>
  
<script>
  
export default {
  data() {
    return {
      valueOne:1,
      valueTwo:2,
      valueThree:3,
      steps:2
    };
  },
  created() {
      
  },
  methods: {
      
  }
};
</script>