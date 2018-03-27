<template>
  <div id="example" class="progress">
    <loli-header fixed>
      <router-link :to="{path: '/'}" slot="left">返回</router-link>
      <span slot="title">Progress - 进度条</span>
    </loli-header>

    <div class="demo-block-title">
      <span>进度条</span>
    </div>

    <ul v-for="(item,idx) in 10" :key="idx">
      <div class="progress-title">{{(idx+1)*10}}</div>
      <loli-progress :dynamic="(idx+1)*10"></loli-progress>
    </ul>

  </div>
</template>
<script>
export default {
  name:'example-progress',
  data(){
    return{

    };
  }
};
</script>
<style lang="stylus" scoped>
.progress
  padding 0 40px
  &-title
    font-size 16px
    height 50px
    line-height 60px
</style>


