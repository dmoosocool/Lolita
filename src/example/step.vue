<template>
    <div class="step">
      <div class="title">默认steps</div>
      <loli-steps current="1">
          <loli-step title="步骤一" description="这里是描述信息"></loli-step>
          <loli-step title="步骤一" description="这里是描述信息"></loli-step>
          <loli-step title="步骤一" description="这里是描述信息"></loli-step>
      </loli-steps>
      <div class="title">带错误提示的steps</div>
      <loli-steps current="1" status="error">
        <loli-step title="步骤一"></loli-step>
        <loli-step title="该步骤失败了"></loli-step>
        <loli-step title="待进行"></loli-step>
      </loli-steps>
    </div>
</template>
<script>
export default {
  name:'example-step',
};
</script>
<style lang="stylus" scoped> 
.step
  padding 20px
  .title
    margin 10px 0
    font-size 16px
</style>


