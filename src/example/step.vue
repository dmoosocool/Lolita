<template>
  <div id="example">
    <loli-header fixed>
      <router-link :to="{path: '/'}" slot="left">返回</router-link>
      <span slot="title">Progress - 进度条</span>
    </loli-header>

    <div class="demo-block-title">
      <span>默认steps</span>
    </div>

    <loli-steps :current="current">
        <loli-step title="步骤一" description="这里是描述信息"></loli-step>
        <loli-step title="步骤一" description="这里是描述信息"></loli-step>
        <loli-step title="步骤一" description="这里是描述信息"></loli-step>
    </loli-steps>

    <loli-button @click="current++">下一步</loli-button>

    <div class="demo-block-title">
      <span>带错误提示的steps</span>
    </div>

    <loli-steps current="2" status="error">
      <loli-step title="步骤一"></loli-step>
      <loli-step title="该步骤失败了"></loli-step>
      <loli-step title="待进行"></loli-step>
    </loli-steps>
  </div>
</template>
<script>
export default {
  name:'example-step',
  data(){
    return {
      current: '0'
    };
  }
};
</script>

<style lang="stylus" scoped>
</style>


