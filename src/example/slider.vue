<template>
   <div id='example'>
      <loli-header fixed>
        <router-link :to="{path: '/'}" slot="left">返回</router-link>
        <span slot="title">Slider - 滑块</span>
      </loli-header>

      <div class="demo-block-title">
        <span>滑块 - 基础用法</span>
      </div>
      <loli-slider v-model="value1"></loli-slider>
      {{value1}}

      <div class="demo-block-title">
        <span>滑块 - 隐藏进度提示</span>
      </div>
      <loli-slider v-model="value2" :messageIsShow="messageIsShow" :value="value2"></loli-slider>
      {{value2}}
      <div class="demo-block-title">
        <span>滑块 - 自定义进度</span>
      </div>
      <loli-slider v-model="value3" :value="value3"></loli-slider>
      {{value3}}
   </div>
</template>
  
<style lang="stylus" scoped>
#example
  .demo-block-title
    margin-bottom 15px
</style>
  
<script>
  
export default {
  data() {
    return {
      messageIsShow:false,
      value1:'',
      value2:30,
      value3:60
    };
  },
  created() {
      
  },
  methods: {
      
  }
};
</script>