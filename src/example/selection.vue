<template>
  <div id="example">
    <loli-header fixed>
      <router-link :to="{path: '/'}" slot="left">返回</router-link>
      <span slot="title">selection - 自定义选择</span>
    </loli-header>

    <div class="demo-block-title">
      <span>selection</span>
    </div>
    <loli-selection type="selection" :text="txt"></loli-selection>
  </div>
</template>
<script>
export default {
  name: 'example-selection',
  data(){
    return{
      txt: '文本信息'
    };
  }
};
</script>

<style lang="stylus" scoped>
</style>
