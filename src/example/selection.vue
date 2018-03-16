<template>
  <div id="example">
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