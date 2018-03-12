<template>
  <div id="example">
    <div class="demo-block-title">
      <span>基础布局</span>
    </div>
    <loli-row>
      <loli-col :span=8>span:8</loli-col>
      <loli-col :span=8>span:8</loli-col>
      <loli-col :span=8>span:8</loli-col>
    </loli-row>

    <loli-row>
      <loli-col :span=10 :offset=2>span:10, offset:2</loli-col>
      <loli-col :span=10 :offset=2>span:10, offset:2</loli-col>
    </loli-row>


    <loli-row>
      <loli-col :span=12 :offset=12>span:12, offset:12</loli-col>
    </loli-row>

    <div class="demo-block-title">
      <span>在列元素之间增加间距</span>
    </div>
    <loli-row gutter="20">
      <loli-col :span=8>span:8</loli-col>
      <loli-col :span=8>span:8</loli-col>
      <loli-col :span=8>span:8</loli-col>
    </loli-row>
  </div>
</template>
<script>
export default {
  name: 'example-layout',
  methods: {
  }
};
</script>

<style lang="stylus" scoped>
  #example .loli-row
    margin-bottom 13px
  #example .loli-col
    color #fff
    font-size 13px
    text-align center
    line-height 30px
    background-clip content-box
    &:nth-child(odd)
      background-color #69c0ff
    &:nth-child(even)
      background-color #40a9ff

</style>
