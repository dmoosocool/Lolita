<template>
  <div>
    <div class="header">
        <img class="logo" src="../assets/lolita-logo.jpeg"/>
        <br/>
        <p class="words">{{ msg }}</p>
    </div>
    <loli-button type="default" tag="button">按钮</loli-button>
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
