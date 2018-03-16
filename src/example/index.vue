<template>
  <div id="example">
    <div class="header">
        <img class="logo" src="../assets/lolita-logo.jpeg"/>
        <br/>
        <p class="words">{{ msg }}</p>
    </div>
    <div class="demo-block-title">
      <span>基础组件</span>
    </div>
    <router-link :to="{ path: 'button'} ">
      <loli-button type="default" tag="button" size="large">按钮</loli-button>
    </router-link>

    <router-link :to="{ path: 'seletor'} ">
      <loli-button type="default" tag="button" size="large">单项下拉选择</loli-button>
    </router-link>
  </div>
</template>

<script>
import Button from '@/components/button';

export default {
  name: 'UIExample',
  data () {
    return {
      msg: 'Lolita 移动端 Vue 组件库'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .header
    text-align center
    margin: 20px 0
    .logo
      width 50%
      margin 0 auto
    .words
      margin: 8px 0;
      font-size 14px
      color #456a64

</style>
